import React, { createContext, useState, useContext, useEffect } from 'react';
import { supabase } from './supabaseClient';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [friendsFavs, setFriendsFavs] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    const loadData = async (session) => {
      if (session?.user) {
        setUser(session.user);
        await fetchAllData(session.user.id);
      } else {
        setUser(null);
        setProfile(null);
        setFavorites([]);
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
      if (loading && mounted) {
        console.warn("Délai dépassé.");
        setLoading(false);
      }
    }, 3000);

    return () => {
      mounted = false;
      clearTimeout(timer);
      authListener.subscription.unsubscribe();
    };
  }, []);

  const fetchAllData = async (userId) => {
    try {
      const { data: profileData } = await supabase.from('profiles').select('*').eq('id', userId).single();
      if (profileData) setProfile(profileData);

      const { data: favData } = await supabase.from('favorites').select('artist_id').eq('user_id', userId);
      if (favData) setFavorites(favData.map(f => f.artist_id));

      await fetchFriendsFavorites(userId);
    } catch (e) { console.error(e); }
  };

  const fetchFriendsFavorites = async (userId) => {
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
    } catch (e) { setFriendsFavs({}); }
  };

  // --- ACTIONS ---
  const login = async (email, password) => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) return { success: false, message: "Erreur identifiants" };
    return { success: true };
  };

  const register = async (username, email, password) => {
    const { data: existing } = await supabase.from('profiles').select('username').eq('username', username).single();
    if (existing) return { success: false, message: "Pseudo déjà pris" };

    const { data, error } = await supabase.auth.signUp({ 
      email, 
      password,
      options: { data: { username: username } } 
    });
    
    if (error) return { success: false, message: error.message };

    if (data.user) {
        await supabase.from('profiles').insert([{ 
            id: data.user.id, 
            username, 
            email,
            avatar_url: "https://cdn-icons-png.flaticon.com/512/847/847969.png"
        }]);
    }
    return { success: true };
  };

  const logout = async () => { await supabase.auth.signOut(); };

  // --- MISE À JOUR PROFIL CORRIGÉE ---
  const updateUser = async (updates) => {
    if (!user) return;

    // 1. Tenter la mise à jour dans Supabase
    const { error } = await supabase
      .from('profiles')
      .update(updates)
      .eq('id', user.id);
    
    if (error) {
      // SI ERREUR : On affiche l'alerte
      console.error("ERREUR UPDATE PROFIL :", error.message);
      alert("Erreur de sauvegarde : " + error.message);
    } else {
      // SI SUCCÈS : On met à jour l'affichage local
      setProfile(prev => ({ ...prev, ...updates }));
      // On met aussi à jour l'objet user pour la navbar
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

  const addFriend = async (friendUsername) => {
    if (!user) return { success: false, message: "Non connecté" };
    const { data: friend } = await supabase.from('profiles').select('id, username').ilike('username', friendUsername).single();
    if (!friend) return { success: false, message: "Introuvable" };
    if (friend.id === user.id) return { success: false, message: "Impossible" };
    
    const { data: existing } = await supabase.from('friends').select('*').eq('user_id', user.id).eq('friend_id', friend.id).single();
    if (existing) return { success: false, message: "Déjà ami" };

    await supabase.from('friends').insert([{ user_id: user.id, friend_id: friend.id }]);
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

  const fullUser = user ? { ...user, ...profile, favorites } : null;

  return (
    <AuthContext.Provider value={{ user: fullUser, login, register, logout, toggleFavorite, updateUser, addFriend, getFriendsDetails, friendsFavs, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);