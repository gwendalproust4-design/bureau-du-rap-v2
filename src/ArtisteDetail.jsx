import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { dataRappeurs } from './data'; // On importe la base de données

export default function ArtisteDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [expandedAlbumIndex, setExpandedAlbumIndex] = useState(null);

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

  const toggleAlbum = (index) => {
    setExpandedAlbumIndex(expandedAlbumIndex === index ? null : index);
  };

  const renderTrack = (track) => {
    // Regex pour capturer "Titre (feat. Artiste)"
    const match = track.match(/^(.*?)\s*\(feat\.\s*(.*?)\)$/i);

    if (match) {
      const title = match[1];
      const featName = match[2];

      // Chercher l'artiste en featuring dans la base de données (par nom exact ou id approximatif)
      // On normalise pour la recherche (minuscule, sans accents)
      const normalize = (str) => str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

      const featArtist = dataRappeurs.find(r =>
        normalize(r.nom) === normalize(featName) ||
        r.id === normalize(featName).replace(/\s+/g, '_')
      );

      if (featArtist) {
        if (featArtist.externalLink) {
          return (
            <span>
              {title} (feat. <a href={featArtist.externalLink} target="_blank" rel="noopener noreferrer" style={{ color: '#8A2BE2', textDecoration: 'none' }}>{featName}</a>)
            </span>
          );
        }
        return (
          <span>
            {title} (feat. <Link to={`/artiste/${featArtist.id}`} style={{ color: '#8A2BE2', textDecoration: 'none' }}>{featName}</Link>)
          </span>
        );
      } else {
        return <span>{title} (feat. {featName})</span>;
      }
    }
    return track;
  };

  if (!rappeur) return <div style={{ color: 'white', padding: '20px' }}>Artiste introuvable. <button onClick={() => navigate('/')}>Retour</button></div>;

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
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '30px', marginTop: '20px' }}>
          {rappeur.albums?.map((album, index) => (
            <div key={index} style={{ background: '#111', borderRadius: '10px', overflow: 'hidden', transition: 'transform 0.2s' }}>
              <div
                onClick={() => toggleAlbum(index)}
                style={{ cursor: 'pointer', position: 'relative' }}
              >
                {album.cover && <img src={album.cover} alt={album.titre} style={{ width: '100%', display: 'block' }} onError={handleImageError} />}
                <div style={{ padding: '15px' }}>
                  <h4 style={{ margin: '0 0 5px', fontSize: '1.1rem' }}>{album.titre}</h4>
                  <span style={{ color: '#666', fontSize: '0.9rem' }}>{album.annee}</span>
                </div>
              </div>

              {/* Tracklist */}
              {expandedAlbumIndex === index && album.tracks && (
                <div style={{ padding: '0 15px 15px', borderTop: '1px solid #222' }}>
                  <h5 style={{ color: '#8A2BE2', marginTop: '10px', marginBottom: '10px' }}>Tracklist</h5>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '0.9rem', color: '#ddd' }}>
                    {album.tracks.map((track, i) => (
                      <li key={i} style={{ padding: '5px 0', borderBottom: '1px solid #222' }}>
                        {i + 1}. {renderTrack(track)}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}