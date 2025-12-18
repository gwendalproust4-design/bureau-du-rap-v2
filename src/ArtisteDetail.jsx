import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useAuth } from './useAuth';
import { useRappers } from './RappersContext';

export default function ArtisteDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [expandedAlbumIndex, setExpandedAlbumIndex] = useState(null);

  // Local state for review form
  const [reviewForm, setReviewForm] = useState({ albumTitle: '', rating: 5, comment: '' });

  const { allRappers, loading } = useRappers();
  const rappeur = allRappers.find(r => r.id === id);
  const { user, toggleFavorite, listened = [], reviews = [], toggleListened, addReview } = useAuth() || {};
  const isFavorite = user?.favorites?.includes(id);

  if (loading) return <div className="text-white text-center mt-20">Chargement...</div>;

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

  const handleReviewSubmit = async (e, albumTitle) => {
    e.preventDefault();
    await addReview(albumTitle, rappeur.id, reviewForm.rating, reviewForm.comment);
    setReviewForm({ albumTitle: '', rating: 5, comment: '' }); // Reset form
  };

  const renderTrack = (track) => {
    const match = track.match(/^(.*?)\s*\(feat\.\s*(.*?)\)$/i);
    if (match) {
      const title = match[1];
      const featName = match[2];
      const normalize = (str) => str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      const featArtist = allRappers.find(r =>
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

  // Categorize albums
  const projects = rappeur.albums?.filter(a => !a.category || a.category === 'project').sort((a, b) => parseInt(b.annee) - parseInt(a.annee)) || [];
  const singles = rappeur.albums?.filter(a => a.category === 'single').sort((a, b) => parseInt(b.annee) - parseInt(a.annee)) || [];
  const appearances = rappeur.albums?.filter(a => a.category === 'feat').sort((a, b) => parseInt(b.annee) - parseInt(a.annee)) || [];

  const renderAlbumCard = (album, index, globalIndex) => {
    const isListened = listened?.includes(album.titre);
    const userReview = reviews?.find(r => r.album_title === album.titre);

    return (
      <div key={globalIndex} className="album-card-container" style={{ background: 'var(--bg-card)', borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--glass-border)' }}>
        <div
          onClick={() => toggleAlbum(globalIndex)}
          className="album-card"
          style={{ padding: '15px' }}
        >
          {album.cover && <img src={album.cover} alt={album.titre} className="album-cover" onError={handleImageError} />}
          <div className="album-info">
            <h3>{album.titre}</h3>
            <span>{album.annee}</span>
          </div>
        </div>

        {/* ACTIONS UTILISATEUR */}
        {user && (
          <div style={{ padding: '0 15px 15px', borderTop: '1px solid var(--glass-border)' }} onClick={(e) => e.stopPropagation()}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '10px', cursor: 'pointer', fontSize: '0.9rem', color: 'var(--text-gray)' }}>
              <input
                type="checkbox"
                checked={!!isListened}
                onChange={(e) => {
                  e.stopPropagation();
                  toggleListened(album.titre, rappeur.id);
                }}
                style={{ accentColor: 'var(--accent)' }}
              />
              Déjà écouté
            </label>

            {/* AVIS */}
            {userReview ? (
              <div style={{ marginTop: '10px', background: 'rgba(138, 43, 226, 0.1)', padding: '10px', borderRadius: '8px' }}>
                <div style={{ color: '#FFD700' }}>{"★".repeat(userReview.rating)}{"☆".repeat(5 - userReview.rating)}</div>
                <p style={{ margin: '5px 0 0', fontSize: '0.85rem', color: 'var(--text-white)' }}>"{userReview.comment}"</p>
              </div>
            ) : (
              <div style={{ marginTop: '10px' }}>
                <button
                  onClick={() => setReviewForm(prev => ({ ...prev, albumTitle: album.titre }))}
                  style={{ background: 'transparent', border: '1px solid var(--accent)', color: 'var(--accent)', borderRadius: '4px', padding: '5px 10px', fontSize: '0.8rem', cursor: 'pointer' }}
                >
                  Noter l'album
                </button>
              </div>
            )}

            {/* FORMULAIRE AVIS */}
            {reviewForm.albumTitle === album.titre && !userReview && (
              <form onSubmit={(e) => handleReviewSubmit(e, album.titre)} style={{ marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '5px' }}>
                <select
                  value={reviewForm.rating}
                  onChange={e => setReviewForm({ ...reviewForm, rating: parseInt(e.target.value) })}
                  style={{ background: 'var(--bg-dark)', color: 'var(--text-white)', border: '1px solid var(--glass-border)', padding: '5px', borderRadius: '4px' }}
                >
                  <option value="5">⭐⭐⭐⭐⭐ (5)</option>
                  <option value="4">⭐⭐⭐⭐ (4)</option>
                  <option value="3">⭐⭐⭐ (3)</option>
                  <option value="2">⭐⭐ (2)</option>
                  <option value="1">⭐ (1)</option>
                </select>
                <textarea
                  placeholder="Votre avis..."
                  value={reviewForm.comment}
                  onChange={e => setReviewForm({ ...reviewForm, comment: e.target.value })}
                  style={{ background: 'var(--bg-dark)', color: 'var(--text-white)', border: '1px solid var(--glass-border)', padding: '5px', borderRadius: '4px', minHeight: '60px' }}
                  required
                />
                <div style={{ display: 'flex', gap: '5px' }}>
                  <button type="submit" style={{ flex: 1, background: 'var(--accent)', color: 'white', border: 'none', padding: '5px', borderRadius: '4px', cursor: 'pointer' }}>Envoyer</button>
                  <button type="button" onClick={() => setReviewForm({ albumTitle: '', rating: 5, comment: '' })} style={{ background: 'transparent', color: 'var(--text-gray)', border: '1px solid var(--glass-border)', padding: '5px', borderRadius: '4px', cursor: 'pointer' }}>Annuler</button>
                </div>
              </form>
            )}
          </div>
        )}

        {/* Tracklist */}
        {expandedAlbumIndex === globalIndex && album.tracks && (
          <div style={{ padding: '0 15px 15px', borderTop: '1px solid var(--glass-border)' }}>
            <h5 style={{ color: 'var(--accent)', marginTop: '10px', marginBottom: '10px' }}>Tracklist</h5>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '0.9rem', color: 'var(--text-gray)' }}>
              {album.tracks.map((track, i) => (
                <li key={i} style={{ padding: '5px 0', borderBottom: '1px solid var(--glass-border)' }}>
                  {i + 1}. {renderTrack(track)}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  };

  return (
    <div style={{ minHeight: '100vh', paddingBottom: '50px' }}>
      {/* Bouton Retour */}
      <button
        onClick={() => navigate('/')}
        className="back-btn">
        ← Retour
      </button>

      {/* En-tête */}
      <div className="artist-header" style={{ backgroundImage: `url(${rappeur.image})` }}>
        <div className="artist-info">
          <h1 className="artist-name">{rappeur.nom}</h1>
          <div className="artist-meta">
            <span className="tag-style">{rappeur.style}</span>
            {user && (
              <button
                onClick={() => toggleFavorite(rappeur.id)}
                style={{
                  background: 'transparent', border: 'none', cursor: 'pointer', fontSize: '2rem',
                  filter: 'drop-shadow(0 0 10px rgba(0,0,0,0.5))'
                }}
                title={isFavorite ? "Retirer des favoris" : "Ajouter aux favoris"}
              >
                {isFavorite ? '❤️' : '🤍'}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Bio & Albums */}
      <div className="bio-section">
        <p>{rappeur.bioLongue || rappeur.bio}</p>
      </div>

      <div className="disco-section">
        {projects.length > 0 && (
          <>
            <h2 className="section-title">Projets</h2>
            <div className="albums-grid">
              {projects.map((album, index) => renderAlbumCard(album, index, rappeur.albums.indexOf(album)))}
            </div>
          </>
        )}

        {singles.length > 0 && (
          <>
            <h2 className="section-title" style={{ marginTop: '40px' }}>Singles</h2>
            <div className="albums-grid">
              {singles.map((album, index) => renderAlbumCard(album, index, rappeur.albums.indexOf(album)))}
            </div>
          </>
        )}

        {appearances.length > 0 && (
          <>
            <h2 className="section-title" style={{ marginTop: '40px' }}>Apparitions</h2>
            <div className="albums-grid">
              {appearances.map((album, index) => renderAlbumCard(album, index, rappeur.albums.indexOf(album)))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}