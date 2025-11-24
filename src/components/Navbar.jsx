import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';

export default function Navbar({ searchTerm, setSearchTerm }) {
  const navigate = useNavigate();
  const { user } = useAuth() || {};

  return (
    <nav className="navbar">
      <div className="logo-container" onClick={() => navigate('/')} style={{cursor: 'pointer'}}>
        <span className="logo-text">BUREAU DU <span className="logo-accent">RAP</span></span>
      </div>
      
      <input 
        type="text" 
        className="search-bar" 
        placeholder="Rechercher..." 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
      />

      <div className="nav-right" style={{display: 'flex', alignItems: 'center', gap: '15px'}}>
        {user ? (
          <button 
            onClick={() => navigate('/profil')} 
            style={{
              background: 'rgba(138, 43, 226, 0.2)', border: '1px solid #8A2BE2', color: '#fff', 
              padding: '8px 20px', borderRadius: '20px', cursor: 'pointer', fontWeight: 'bold',
              display: 'flex', alignItems: 'center', gap: '10px'
            }}
          >
            <img 
              src={user.avatar_url || user.avatar || "https://cdn-icons-png.flaticon.com/512/847/847969.png"} 
              alt="avatar" 
              style={{width: '25px', height: '25px', borderRadius: '50%', objectFit: 'cover'}}
            />
            {user.user_metadata?.username || user.username || "Mon Profil"}
          </button>
        ) : (
          <button onClick={() => navigate('/login')} className="filter-btn active" style={{ border: 'none', background: '#8A2BE2', color: 'white' }}>
            Connexion
          </button>
        )}
      </div>
    </nav>
  );
}