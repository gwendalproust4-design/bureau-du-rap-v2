import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../useAuth';
import { useRappers } from '../RappersContext';

export default function FriendProfile() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { getFriendProfile } = useAuth() || {};
    const { allRappers } = useRappers();
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const load = async () => {
            if (getFriendProfile) {
                const data = await getFriendProfile(id);
                setProfile(data);
                setLoading(false);
            }
        };
        load();
    }, [id, getFriendProfile]);

    if (loading) return <div style={{ color: 'white', padding: '20px' }}>Chargement du profil...</div>;
    if (!profile) return <div style={{ color: 'white', padding: '20px' }}>Profil introuvable.</div>;

    // Enrichir les favoris avec les données de dataRappeurs
    const favoriteArtists = profile.favorites.map(favId => allRappers.find(r => r.id === favId)).filter(Boolean);

    return (
        <div className="container" style={{ paddingTop: '100px', minHeight: '100vh' }}>
            <button onClick={() => navigate(-1)} className="back-btn" style={{ position: 'relative', top: 0, left: 0, marginBottom: '20px' }}>
                ← Retour
            </button>

            <div className="profile-card" style={{ maxWidth: '800px', margin: '0 auto' }}>
                <div className="profile-avatar-container" style={{ cursor: 'default' }}>
                    <img
                        src={profile.avatar_url || "https://cdn-icons-png.flaticon.com/512/847/847969.png"}
                        alt="avatar"
                        className="profile-avatar"
                    />
                </div>
                <h2 style={{ fontSize: '2.5rem', margin: '10px 0', color: 'var(--text-white)' }}>{profile.username}</h2>
                <p style={{ color: 'var(--text-gray)' }}>Membre de la communauté</p>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '40px', textAlign: 'left' }}>

                    {/* FAVORIS */}
                    <div style={{ background: 'rgba(255,255,255,0.05)', padding: '20px', borderRadius: '15px' }}>
                        <h3 style={{ borderBottom: '2px solid var(--accent)', paddingBottom: '10px', color: 'var(--text-white)' }}>❤️ Artistes Favoris ({favoriteArtists.length})</h3>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '15px' }}>
                            {favoriteArtists.length > 0 ? favoriteArtists.map(artist => (
                                <Link key={artist.id} to={`/artiste/${artist.id}`} title={artist.nom}>
                                    <img
                                        src={artist.image}
                                        alt={artist.nom}
                                        style={{ width: '50px', height: '50px', borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--accent)' }}
                                    />
                                </Link>
                            )) : <p style={{ color: 'var(--text-gray)' }}>Aucun favori.</p>}
                        </div>
                    </div>

                    {/* ALBUMS ÉCOUTÉS */}
                    <div style={{ background: 'rgba(255,255,255,0.05)', padding: '20px', borderRadius: '15px' }}>
                        <h3 style={{ borderBottom: '2px solid #00ffff', paddingBottom: '10px', color: 'var(--text-white)' }}>🎧 Albums Écoutés ({profile.listened.length})</h3>
                        <ul style={{ listStyle: 'none', padding: 0, marginTop: '15px', maxHeight: '200px', overflowY: 'auto' }}>
                            {profile.listened.length > 0 ? profile.listened.map((album, i) => (
                                <li key={i} style={{ padding: '5px 0', borderBottom: '1px solid rgba(255,255,255,0.1)', color: 'var(--text-gray)' }}>
                                    {album}
                                </li>
                            )) : <p style={{ color: 'var(--text-gray)' }}>Aucun album marqué.</p>}
                        </ul>
                    </div>

                </div>

                {/* AVIS */}
                <div style={{ marginTop: '30px', background: 'rgba(255,255,255,0.05)', padding: '20px', borderRadius: '15px', textAlign: 'left' }}>
                    <h3 style={{ borderBottom: '2px solid #FFD700', paddingBottom: '10px', color: 'var(--text-white)' }}>⭐ Derniers Avis</h3>
                    <div style={{ display: 'grid', gap: '15px', marginTop: '15px' }}>
                        {profile.reviews.length > 0 ? profile.reviews.map((review, i) => (
                            <div key={i} style={{ background: 'rgba(0,0,0,0.3)', padding: '15px', borderRadius: '10px' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                                    <strong style={{ color: 'var(--accent-light)' }}>{review.album_title}</strong>
                                    <span style={{ color: '#FFD700' }}>{"★".repeat(review.rating)}</span>
                                </div>
                                <p style={{ margin: 0, color: 'var(--text-gray)', fontStyle: 'italic' }}>"{review.comment}"</p>
                            </div>
                        )) : <p style={{ color: 'var(--text-gray)' }}>Aucun avis publié.</p>}
                    </div>
                </div>

            </div>
        </div>
    );
}
