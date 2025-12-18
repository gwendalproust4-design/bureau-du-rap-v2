import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './useAuth';
import { useRappers } from './RappersContext';
import GlareHover from './components/GlareHover';

export default function Profile() {
  const { user, logout, updateUser, addFriend, getFriendsDetails, getPendingRequests } = useAuth();
  const { allRappers } = useRappers();
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const [friendInput, setFriendInput] = useState("");
  const [friendMessage, setFriendMessage] = useState("");
  const [myFriendsList, setMyFriendsList] = useState([]);
  const [pendingRequests, setPendingRequests] = useState([]);
  const [uploadError, setUploadError] = useState("");

  useEffect(() => {
    const loadFriends = async () => {
      if (user) {
        const friends = await getFriendsDetails();
        setMyFriendsList(friends);
        const pending = await getPendingRequests();
        setPendingRequests(pending);
      }
    };
    loadFriends();
  }, [user, getFriendsDetails, getPendingRequests]);

  if (!user) { navigate('/login'); return null; }

  const favoriteArtists = allRappers.filter(r => user.favorites?.includes(r.id));

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setUploadError("");
    if (file) {
      if (file.size > 500 * 1024) { setUploadError("L'image est trop lourde (Max 500ko)."); return; }
      const reader = new FileReader();
      reader.onloadend = () => { updateUser({ avatar_url: reader.result }); };
      reader.readAsDataURL(file);
    }
  };

  const handleAddFriend = async (e) => {
    e.preventDefault();
    const res = await addFriend(friendInput);
    setFriendMessage(res.message);
    if (res.success) {
      setFriendInput("");
      const friends = await getFriendsDetails();
      setMyFriendsList(friends);
      const pending = await getPendingRequests();
      setPendingRequests(pending);
    }
    setTimeout(() => setFriendMessage(""), 3000);
  };

  const handleAccept = async (username) => {
    const res = await addFriend(username);
    if (res.success) {
      const friends = await getFriendsDetails();
      setMyFriendsList(friends);
      const pending = await getPendingRequests();
      setPendingRequests(pending);
    }
  };

  return (
    <div className="container" style={{ paddingTop: '50px', minHeight: '100vh', paddingBottom: '50px' }}>
      <button onClick={() => navigate('/')} style={{ position: 'absolute', top: 20, left: 20, padding: '10px 20px', borderRadius: '30px', border: 'none', cursor: 'pointer', background: 'rgba(255,255,255,0.1)', color: 'white', backdropFilter: 'blur(10px)', fontWeight: 'bold' }}>← Retour Accueil</button>

      <div className="profile-card" style={{ margin: '0 auto', marginBottom: '50px', position: 'relative' }}>
        <div className="profile-avatar-container" style={{ position: 'relative', width: '140px', margin: '0 auto' }}>
          <img src={user.avatar_url || user.avatar || "https://cdn-icons-png.flaticon.com/512/847/847969.png"} alt="Avatar" className="profile-avatar" style={{ width: '140px', height: '140px', objectFit: 'cover', borderRadius: '50%', border: '4px solid #8A2BE2' }} />
          <button onClick={() => fileInputRef.current.click()} style={{ position: 'absolute', bottom: 0, right: 0, background: '#fff', border: 'none', borderRadius: '50%', width: '35px', height: '35px', cursor: 'pointer', boxShadow: '0 2px 10px rgba(0,0,0,0.3)', fontSize: '1.2rem' }} title="Changer la photo">📷</button>
          <input type="file" ref={fileInputRef} onChange={handleFileChange} accept="image/*" style={{ display: 'none' }} />
        </div>
        {uploadError && <p style={{ color: '#ff3b3b', fontSize: '0.9rem', marginTop: '10px' }}>{uploadError}</p>}

        <h1 style={{ fontSize: '2.5rem', margin: '10px 0' }}>MON <span className="text-gradient">PROFIL</span></h1>
        <h2 style={{ color: 'white', fontSize: '1.5rem' }}>Salut, <span style={{ color: '#8A2BE2' }}>{user.user_metadata?.username || user.username || "Utilisateur"}</span> 👋</h2>
        <p style={{ color: '#888' }}>{user.email}</p>
        <button onClick={() => { logout(); navigate('/'); }} className="action-btn" style={{ marginTop: '20px', background: 'rgba(255, 59, 59, 0.2)', border: '1px solid #ff3b3b', color: '#ff3b3b' }}>Se déconnecter</button>
      </div>

      <div style={{ marginBottom: '60px' }}>
        <div style={{ marginBottom: '40px', background: 'rgba(138, 43, 226, 0.1)', padding: '20px', borderRadius: '15px', border: '1px solid #8A2BE2' }}>
          <h2 style={{ color: '#8A2BE2', borderBottom: '1px solid #8A2BE2', paddingBottom: '10px', marginTop: 0 }}>DEMANDES D'AMIS <span style={{ color: 'white' }}>({pendingRequests.length})</span></h2>
          {pendingRequests.length > 0 ? (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px', marginTop: '20px' }}>
              {pendingRequests.map(req => (
                <div key={req.id} style={{ background: '#1a1a1a', borderRadius: '10px', padding: '15px', textAlign: 'center', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <img src={req.avatar_url} alt={req.username} style={{ width: '60px', height: '60px', borderRadius: '50%', objectFit: 'cover', marginBottom: '10px' }} />
                  <h3 style={{ color: 'white', margin: '0 0 10px', fontSize: '1rem' }}>{req.username}</h3>
                  <button onClick={() => handleAccept(req.username)} style={{ background: '#4caf50', color: 'white', border: 'none', borderRadius: '20px', padding: '5px 15px', cursor: 'pointer', fontWeight: 'bold' }}>ACCEPTER</button>
                </div>
              ))}
            </div>
          ) : (
            <p style={{ color: '#ccc', fontStyle: 'italic', marginTop: '10px' }}>Aucune demande d'ami en attente.</p>
          )}
        </div>

        <h2 style={{ color: 'white', borderBottom: '1px solid #333', paddingBottom: '10px' }}>MES AMIS <span style={{ color: '#8A2BE2' }}>({myFriendsList.length})</span></h2>
        <form onSubmit={handleAddFriend} style={{ marginTop: '20px', display: 'flex', gap: '10px', maxWidth: '500px' }}>
          <input type="text" placeholder="Pseudo de l'ami..." value={friendInput} onChange={(e) => setFriendInput(e.target.value)} className="login-input" style={{ padding: '12px 20px', borderRadius: '30px', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: 'white', flex: 1 }} />
          <button type="submit" style={{ background: '#8A2BE2', color: 'white', border: 'none', borderRadius: '30px', padding: '0 25px', fontWeight: 'bold', cursor: 'pointer' }}>AJOUTER</button>
        </form>
        {friendMessage && <p style={{ color: friendMessage.includes('ajouté') ? '#4caf50' : '#ff3b3b', marginTop: '10px' }}>{friendMessage}</p>}
        {myFriendsList.length > 0 ? (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '20px', marginTop: '30px' }}>
            {myFriendsList.map(friend => (
              <div
                key={friend.id}
                onClick={() => navigate(`/profile/${friend.id}`)}
                style={{ background: '#1a1a1a', borderRadius: '15px', padding: '20px', textAlign: 'center', border: '1px solid rgba(255,255,255,0.05)', cursor: 'pointer', transition: '0.3s' }}
                onMouseOver={e => e.currentTarget.style.borderColor = '#8A2BE2'}
                onMouseOut={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'}
              >
                <img src={friend.avatar_url} alt={friend.username} style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover', marginBottom: '10px', border: '2px solid #8A2BE2' }} />
                <h3 style={{ color: 'white', margin: 0, fontSize: '1.1rem' }}>{friend.username}</h3>
              </div>
            ))}
          </div>
        ) : <p style={{ color: '#666', marginTop: '20px' }}>Pas encore d'amis.</p>}
      </div>

      <div style={{ marginBottom: '60px' }}>
        <h2 style={{ color: 'white', borderBottom: '1px solid #333', paddingBottom: '10px' }}>MES ALBUMS ÉCOUTÉS <span style={{ color: '#8A2BE2' }}>({user.listened?.length || 0})</span></h2>
        {user.listened && user.listened.length > 0 ? (
          <ul style={{ listStyle: 'none', padding: 0, marginTop: '20px', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '10px' }}>
            {user.listened.map((album, i) => (
              <li key={i} style={{ background: 'rgba(255,255,255,0.05)', padding: '10px 15px', borderRadius: '8px', color: '#ccc', border: '1px solid rgba(255,255,255,0.05)' }}>
                💿 {album}
              </li>
            ))}
          </ul>
        ) : <p style={{ color: '#666', marginTop: '20px' }}>Aucun album marqué comme écouté.</p>}
      </div>

      <div style={{ marginBottom: '60px' }}>
        <h2 style={{ color: 'white', borderBottom: '1px solid #333', paddingBottom: '10px' }}>MES AVIS <span style={{ color: '#8A2BE2' }}>({user.reviews?.length || 0})</span></h2>
        {user.reviews && user.reviews.length > 0 ? (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px', marginTop: '30px' }}>
            {user.reviews.map((review, i) => (
              <div key={i} style={{ background: '#1a1a1a', borderRadius: '15px', padding: '20px', border: '1px solid rgba(255,255,255,0.05)' }}>
                <h3 style={{ color: 'white', margin: '0 0 10px', fontSize: '1.1rem' }}>{review.album_title}</h3>
                <div style={{ color: '#FFD700', marginBottom: '10px' }}>{"★".repeat(review.rating)}{"☆".repeat(5 - review.rating)}</div>
                <p style={{ color: '#ccc', fontStyle: 'italic', fontSize: '0.9rem' }}>"{review.comment}"</p>
              </div>
            ))}
          </div>
        ) : <p style={{ color: '#666', marginTop: '20px' }}>Aucun avis donné pour le moment.</p>}
      </div>

      <h2 style={{ color: 'white', borderBottom: '1px solid #333', paddingBottom: '10px' }}>MES ARTISTES <span style={{ color: '#8A2BE2' }}>({favoriteArtists.length})</span></h2>
      <div className="grid" style={{ marginTop: '30px' }}>
        {favoriteArtists.map((rappeur) => (
          <GlareHover key={rappeur.id} className={`card ${rappeur.statut}`} onClick={() => navigate(`/artiste/${rappeur.id}`)} glareColor="rgba(255, 255, 255, 0.4)" glareSize={400} borderRadius="20px">
            <div className="card-image-wrapper"><img src={rappeur.image} alt={rappeur.nom} className="card-image" /></div>
            <div className="card-content"><h3 className="card-name" style={{ fontSize: '1.5rem' }}>{rappeur.nom}</h3></div>
          </GlareHover>
        ))}
      </div>
    </div>
  );
}