import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../useAuth';

export default function Navbar({ searchTerm, setSearchTerm }) {
  const navigate = useNavigate();
  const { user } = useAuth() || {};
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo-container" onClick={() => navigate('/')}>
        <span className="logo-text">BUREAU DU <span className="logo-accent">RAP</span></span>
      </div>

      <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      <div className={`nav-content ${isMenuOpen ? 'open' : ''}`}>
        <input
          type="text"
          className="search-bar"
          placeholder="Rechercher..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <div className="nav-right">
          {user ? (
            <button
              onClick={() => navigate('/profil')}
              className="user-btn"
            >
              <img
                src={user.avatar_url || user.avatar || "https://cdn-icons-png.flaticon.com/512/847/847969.png"}
                alt="avatar"
                className="nav-avatar-small"
              />
              <span className="user-name">{user.user_metadata?.username || user.username || "Mon Profil"}</span>
            </button>
          ) : (
            <button onClick={() => navigate('/login')} className="filter-btn active login-nav-btn">
              Connexion
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}