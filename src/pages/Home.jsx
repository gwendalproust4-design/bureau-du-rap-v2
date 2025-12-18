import { useState } from 'react';
import ArtistCard from "../components/ArtistCard";
import { useAuth } from "../useAuth";
import { useRappers } from "../RappersContext";

const Home = ({ searchTerm }) => {
  const { user, toggleFavorite, friendsFavs = {} } = useAuth() || {};
  const { allRappers, loading } = useRappers();
  const [selectedStatus, setSelectedStatus] = useState("all");

  if (loading) return <div className="text-white text-center mt-20">Chargement des artistes...</div>;

  const filteredRappeurs = allRappers.filter(rappeur => {
    const matchSearch = rappeur.nom.toLowerCase().includes(searchTerm.toLowerCase());
    let matchStatus = true;
    if (selectedStatus === "favorites") {
      matchStatus = user && user.favorites && user.favorites.includes(rappeur.id);
    } else if (selectedStatus !== "all") {
      matchStatus = rappeur.statut === selectedStatus;
    }
    return matchSearch && matchStatus;
  });

  return (
    <div style={{ width: '100%', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Navbar is rendered globally in App.jsx */}

      <div className="container">
        <div className="hero">
          <h1>Bureau Du <span className="text-gradient">Rap</span></h1>
          <div className="filters-container" style={{ marginTop: '30px' }}>
            <button className={`filter-btn ${selectedStatus === 'all' ? 'active' : ''}`} onClick={() => setSelectedStatus('all')}>Tous</button>
            <button className={`filter-btn ${selectedStatus === 'legende' ? 'active' : ''}`} onClick={() => setSelectedStatus('legende')}>🏆 Légendes</button>
            <button className={`filter-btn ${selectedStatus === 'tendance' ? 'active' : ''}`} onClick={() => setSelectedStatus('tendance')}>🔥 Tendances</button>
            <button className={`filter-btn ${selectedStatus === 'pepite' ? 'active' : ''}`} onClick={() => setSelectedStatus('pepite')}>💎 Pépites</button>
            {user && <button className={`filter-btn ${selectedStatus === 'favorites' ? 'active' : ''}`} onClick={() => setSelectedStatus('favorites')} style={{ borderColor: '#ff3b3b', color: selectedStatus === 'favorites' ? 'white' : '#ff3b3b' }}>❤️ Favoris</button>}
          </div>
        </div>

        <div className="grid">
          {filteredRappeurs.map((rappeur) => (
            // CARTE ARTISTE SÉPARÉE
            <ArtistCard
              key={rappeur.id}
              rappeur={rappeur}
              user={user}
              toggleFavorite={toggleFavorite}
              friendsFavs={friendsFavs}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;