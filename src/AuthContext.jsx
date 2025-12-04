import React, { useState, useEffect, useCallback } from 'react';
import { supabase } from './supabaseClient';
import { AuthContext } from './AuthContextRef';

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [listened, setListened] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [friendsFavs, setFriendsFavs] = useState({});
  const [loading, setLoading] = useState(true);

  // Fetch friends' favorites to display on home page or elsewhere
  const fetchFriendsFavorites = useCallback(async (userId) => {
    try {
      const { data: links } = await supabase.from('friends').select('friend_id').eq('user_id', userId);
      if (!links?.length) { setFriendsFavs({}); return; }

      const friendIds = links.map(f => f.friend_id);
      const { data: profs } = await supabase.from('profiles').select('id, username').in('id', friendIds);
      const names = {};
      profs?.forEach(p => names[p.id] = p.username);

      const { data: favs } = await supabase.from('favorites').select('artist_id, user_id').in('user_id', friendIds);
      const map = {};
      favs?.forEach(f => {
        const n = names[f.user_id];
        if (n) {
          if (!map[f.artist_id]) map[f.artist_id] = [];
          map[f.artist_id].push(n);
        }
      });
      setFriendsFavs(map);
    } catch (err) { console.error("Error fetching friends favorites:", err); }
  }, []);

  // Fetch all user data
  const fetchAllData = useCallback(async (userId) => {
    try {
      // 1. Profile
      const { data: profileData } = await supabase.from('profiles').select('*').eq('id', userId).maybeSingle();
      if (profileData) setProfile(profileData);

      // 2. Favorites
      const { data: favs } = await supabase.from('favorites').select('artist_id').eq('user_id', userId);
      if (favs) setFavorites(favs.map(f => f.artist_id));

      // 3. Listened Albums
      const { data: listenedData } = await supabase.from('listened_albums').select('album_title').eq('user_id', userId);
      if (listenedData) setListened(listenedData.map(l => l.album_title));

      // 4. Reviews
      const { data: reviewsData } = await supabase.from('reviews').select('*').eq('user_id', userId);
      if (reviewsData) setReviews(reviewsData);

      // 5. Friends Data
      await fetchFriendsFavorites(userId);
    } catch (err) { console.error("Error fetching all data:", err); }
  }, [fetchFriendsFavorites]);

  useEffect(() => {
    let mounted = true;

    const loadData = async (session) => {
      if (session?.user) {
        console.log("%c*** LOGIN SUCCESS - USER ID: " + session.user.id + " ***", "color: green; font-weight: bold; font-size: 16px;");
        setUser(session.user);
        await fetchAllData(session.user.id);
      } else {
        setUser(null);
        setProfile(null);
        setFavorites([]);
        setListened([]);
        setReviews([]);
        setFriendsFavs({});
      }
      if (mounted) setLoading(false);
    };

    supabase.auth.getSession().then(({ data: { session } }) => {
      loadData(session);
    }).catch(() => { if (mounted) setLoading(false); });

    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
      loadData(session);
    });

    const timer = setTimeout(() => {
      if (mounted) {
        // console.warn("Délai dépassé."); // Optional warning
        setLoading(false);
      }
    }, 3000);

    return () => {
      mounted = false;
      clearTimeout(timer);
      authListener?.subscription?.unsubscribe();
    };
  }, [fetchAllData]);

  // --- ACTIONS ---
  const login = async (email, password) => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) return { success: false, message: "Erreur identifiants" };
    return { success: true };
  };

  const register = async (username, email, password) => {
    try {
      // 1. Vérifier si le pseudo existe déjà
      const { data: existing, error: checkError } = await supabase
        .from('profiles')
        .select('username')
        .eq('username', username)
        .maybeSingle();

      if (checkError) {
        console.error("Erreur vérification pseudo:", checkError);
      }

      if (existing) return { success: false, message: "Pseudo déjà pris" };

      // 2. Créer le compte Auth
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: { data: { username: username } }
      });

      if (error) {
        console.error("Erreur SignUp:", error);
        return { success: false, message: error.message };
      }

      // 3. Créer le profil public
      if (data.user) {
        const { error: insertError } = await supabase.from('profiles').insert([{
          id: data.user.id,
          username,
          email,
          avatar_url: "https://cdn-icons-png.flaticon.com/512/847/847969.png"
        }]);

        if (insertError) {
          console.error("Erreur création profil:", insertError);
          return { success: false, message: "Compte créé mais erreur profil: " + insertError.message };
        }
      }
      return { success: true };
    } catch (err) {
      console.error("Exception Inscription:", err);
      return { success: false, message: "Erreur inattendue: " + err.message };
    }
  };

  const logout = async () => { await supabase.auth.signOut(); };

  const updateUser = async (updates) => {
    if (!user) return;

    const { error } = await supabase
      .from('profiles')
      .update(updates)
      .eq('id', user.id);

    if (error) {
      console.error("ERREUR UPDATE PROFIL :", error.message);
      alert("Erreur de sauvegarde : " + error.message);
    } else {
      setProfile(prev => ({ ...prev, ...updates }));
      setUser(prev => ({ ...prev, ...updates }));
    }
  };

  const toggleFavorite = async (artistId) => {
    if (!user) return;
    const previousFavorites = [...favorites];
    const isFav = favorites.includes(artistId);
    setFavorites(prev => isFav ? prev.filter(id => id !== artistId) : [...prev, artistId]);

    let error = null;
    try {
      if (isFav) {
        const res = await supabase.from('favorites').delete().eq('user_id', user.id).eq('artist_id', artistId);
        error = res.error;
      } else {
        const res = await supabase.from('favorites').insert([{ user_id: user.id, artist_id: artistId }]);
        error = res.error;
      }
    } catch (err) { error = err; }

    if (error) {
      console.error("ERREUR FAVORIS :", error);
      setFavorites(previousFavorites);
    }
  };

  const toggleListened = async (albumTitle, artistId) => {
    console.log("toggleListened called for:", albumTitle);
    if (!user) return;
    const isListened = listened.includes(albumTitle);

    setListened(prev => isListened ? prev.filter(t => t !== albumTitle) : [...prev, albumTitle]);

    try {
      if (isListened) {
        await supabase.from('listened_albums').delete().eq('user_id', user.id).eq('album_title', albumTitle);
      } else {
        await supabase.from('listened_albums').insert([{ user_id: user.id, album_title: albumTitle, artist_id: artistId }]);
      }
    } catch (err) { console.error("Error in toggleListened:", err); }
  };

  const addReview = async (albumTitle, artistId, rating, comment) => {
    if (!user) return;
    const newReview = { user_id: user.id, album_title: albumTitle, artist_id: artistId, rating, comment };

    // Optimistic update
    setReviews(prev => {
      const filtered = prev.filter(r => r.album_title !== albumTitle);
      return [...filtered, newReview];
    });

    try {
      const { error } = await supabase.from('reviews').upsert(newReview, { onConflict: 'user_id, album_title' });
      if (error) console.error(error);
    } catch (err) { console.error(err); }
  };

  const addFriend = async (friendUsername) => {
    if (!user) return { success: false, message: "Non connecté" };
    const cleanUsername = friendUsername.trim();

    // --- DEBUG: Voir qui est visible ---
    const { data: debugProfiles } = await supabase.from('profiles').select('username');
    console.log("DEBUG - Profils visibles dans Supabase:", debugProfiles);
    // -----------------------------------

    // Utiliser maybeSingle pour éviter l'erreur 406 si introuvable
    const { data: friend, error } = await supabase
      .from('profiles')
      .select('id, username')
      .ilike('username', cleanUsername)
      .maybeSingle();

    if (error) {
      console.error("Erreur recherche ami:", error);
      return { success: false, message: "Erreur technique" };
    }
    if (!friend) return { success: false, message: "Introuvable" };
    if (friend.id === user.id) return { success: false, message: "Impossible" };

    const { data: existing } = await supabase.from('friends').select('*').eq('user_id', user.id).eq('friend_id', friend.id).maybeSingle();
    if (existing) return { success: false, message: "Déjà ami" };

    const { error: insertError } = await supabase.from('friends').insert([{ user_id: user.id, friend_id: friend.id }]);

    if (insertError) {
      console.error("Erreur ajout ami (DETAILS):", insertError);
      console.error("Message:", insertError.message);
      console.error("Details:", insertError.details);
      console.error("Hint:", insertError.hint);
      return { success: false, message: "Erreur technique: " + insertError.message };
    }
    await fetchFriendsFavorites(user.id);
    return { success: true, message: `Ami ajouté: ${friend.username}` };
  };

  const getFriendsDetails = async () => {
    if (!user) return [];
    const { data: links } = await supabase.from('friends').select('friend_id').eq('user_id', user.id);
    if (!links?.length) return [];
    const { data: profiles } = await supabase.from('profiles').select('*').in('id', links.map(l => l.friend_id));
    return profiles || [];
  };

  const getFriendProfile = async (friendId) => {
    const { data: profile } = await supabase.from('profiles').select('*').eq('id', friendId).single();
    const { data: favs } = await supabase.from('favorites').select('artist_id').eq('user_id', friendId);
    const { data: listened } = await supabase.from('listened_albums').select('album_title').eq('user_id', friendId);
    const { data: reviews } = await supabase.from('reviews').select('*').eq('user_id', friendId);

    return {
      ...profile,
      favorites: favs?.map(f => f.artist_id) || [],
      listened: listened?.map(l => l.album_title) || [],
      reviews: reviews || []
    };
  };

  const getPendingRequests = async () => {
    if (!user) return [];
    console.log("DEBUG - getPendingRequests start for user:", user.id);

    // 1. Who added me? (I am the friend)
    const { data: requests, error } = await supabase.from('friends').select('user_id').eq('friend_id', user.id);
    console.log("DEBUG - Requests found (Who added me):", requests, "Error:", error);

    if (!requests?.length) return [];

    // 2. Who did I add? (I am the user)
    const { data: myFriends } = await supabase.from('friends').select('friend_id').eq('user_id', user.id);
    const myFriendIds = myFriends?.map(f => f.friend_id) || [];
    console.log("DEBUG - My friends (Who I added):", myFriendIds);

    // 3. Filter: Keep only those I haven't added back
    const pendingUserIds = requests.map(r => r.user_id).filter(id => !myFriendIds.includes(id));
    console.log("DEBUG - Pending User IDs after filter:", pendingUserIds);

    if (!pendingUserIds.length) return [];

    // 4. Get their profiles
    const { data: profiles } = await supabase.from('profiles').select('*').in('id', pendingUserIds);
    console.log("DEBUG - Pending Profiles:", profiles);
    return profiles || [];
  };

  const fullUser = user ? { ...user, ...profile, favorites, listened, reviews } : null;

  return (
    <AuthContext.Provider value={{ user: fullUser, login, register, logout, toggleFavorite, updateUser, addFriend, getFriendsDetails, friendsFavs, loading, toggleListened, addReview, getFriendProfile, getPendingRequests }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};