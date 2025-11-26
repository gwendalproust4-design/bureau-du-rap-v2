import React from 'react';
import { useNavigate } from 'react-router-dom';
import GlareHover from './GlareHover';

export default function ArtistCard({ rappeur, user, toggleFavorite, friendsFavs }) {
  const navigate = useNavigate();
  const isFav = user && user.favorites?.includes(rappeur.id);
  
  // Logique Amis
  const friendFans = (friendsFavs && friendsFavs[rappeur.id]) || [];
  let friendLabel = null;
  if (friendFans.length === 1) friendLabel = `Favori de : ${friendFans[0]}`;
  else if (friendFans.length > 1) friendLabel = `Favori de plusieurs amis`;

  const handleImageError = (e) => {
    e.target.src = `data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(`
      <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="200" fill="#1a1a1a"/>
        <circle cx="100" cy="80" r="30" fill="#333"/>
        <path d="M70 120 Q100 100 130 120 L130 160 L70 160 Z" fill="#333"/>
        <text x="100" y="185" text-anchor="middle" fill="#666" font-size="12" font-family="Arial">🎤</text>
      </svg>
    `)))}`;
  };

  return (
    <GlareHover
      className={`card ${rappeur.statut}`}
      onClick={() => navigate(`/artiste/${rappeur.id}`)}
      glareColor="rgba(255, 255, 255, 0.4)"
      glareSize={400}
      borderRadius="20px"
    >
      {friendLabel && (
        <div style={{
            position: 'absolute', top: '15px', left: '15px', zIndex: 30,
            background: 'rgba(0,0,0,0.8)', padding: '5px 10px', borderRadius: '15px',
            display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.75rem', 
            color: '#ddd', border: '1px solid rgba(255,255,255,0.2)', backdropFilter: 'blur(5px)'
        }}>
            <span style={{fontSize: '0.9rem'}}>👥</span> {friendLabel}
        </div>
      )}
      
      {user && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleFavorite(rappeur.id);
          }}
          style={{
            position: 'absolute', top: '15px', right: '15px', zIndex: 30,
            background: isFav ? '#ff3b3b' : 'rgba(0,0,0,0.6)',
            border: 'none', borderRadius: '50%', width: '40px', height: '40px',
            fontSize: '1.2rem', cursor: 'pointer', transition: '0.3s',
            display: 'flex', justifyContent: 'center', alignItems: 'center'
          }}
        >
          {isFav ? '❤️' : '🤍'}
        </button>
      )}
      
      <div className="card-image-wrapper">
        <img src={rappeur.image} alt={rappeur.nom} className="card-image" onError={handleImageError} />
      </div>
      <div className="card-content">
        <div className="card-header">
          <h2 className="card-name">{rappeur.nom}</h2>
          <span className="card-style">{rappeur.style}</span>
        </div>
        <p className="card-bio">{rappeur.bio}</p>
      </div>
    </GlareHover>
  );
}