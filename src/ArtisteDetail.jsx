import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { dataRappeurs } from './data'; // On importe la base de données

export default function ArtisteDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // On cherche le bon rappeur
  const rappeur = dataRappeurs.find(r => r.id === id);

  const handleImageError = (e) => {
    e.target.src = `data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(`
      <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="400" fill="#1a1a1a"/>
        <circle cx="200" cy="160" r="60" fill="#333"/>
        <path d="M140 240 Q200 200 260 240 L260 320 L140 320 Z" fill="#333"/>
        <text x="200" y="370" text-anchor="middle" fill="#666" font-size="24" font-family="Arial">🎤</text>
      </svg>
    `)))}`;
  };

  if (!rappeur) return <div style={{color:'white', padding:'20px'}}>Artiste introuvable. <button onClick={() => navigate('/')}>Retour</button></div>;

  return (
    <div style={{ minHeight: '100vh', background: '#050505', color: 'white', paddingBottom: '50px' }}>
      {/* Bouton Retour */}
      <button 
        onClick={() => navigate('/')}
        style={{ position: 'fixed', top: 20, left: 20, zIndex: 100, padding: '10px 20px', borderRadius: '30px', border: 'none', cursor: 'pointer', background: 'rgba(255,255,255,0.1)', color: 'white', backdropFilter: 'blur(10px)' }}>
        ← Retour
      </button>

      {/* En-tête */}
      <div style={{ height: '60vh', position: 'relative' }}>
        <img src={rappeur.image} alt={rappeur.nom} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.5 }} onError={handleImageError} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, padding: '40px' }}>
          <h1 style={{ fontSize: '4rem', margin: 0 }}>{rappeur.nom}</h1>
          <span style={{ background: '#8A2BE2', padding: '5px 15px', borderRadius: '5px', fontWeight: 'bold' }}>{rappeur.style}</span>
        </div>
      </div>

      {/* Bio & Albums */}
      <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '20px' }}>
        <p style={{ fontSize: '1.2rem', lineHeight: '1.6', color: '#ccc' }}>{rappeur.bioLongue || rappeur.bio}</p>
        
        <h2 style={{ borderLeft: '4px solid #8A2BE2', paddingLeft: '15px', marginTop: '50px' }}>Discographie</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '20px', marginTop: '20px' }}>
          {rappeur.albums?.map((album, index) => (
            <div key={index} style={{ background: '#111', padding: '10px', borderRadius: '10px' }}>
              {album.cover && <img src={album.cover} alt={album.titre} style={{ width: '100%', borderRadius: '5px' }} onError={handleImageError} />}
              <h4 style={{ margin: '10px 0 5px' }}>{album.titre}</h4>
              <span style={{ color: '#666', fontSize: '0.8rem' }}>{album.annee}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}