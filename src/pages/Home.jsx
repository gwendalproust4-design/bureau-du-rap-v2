import { useState } from 'react';
import Navbar from "../components/Navbar";
import ArtistCard from "../components/ArtistCard";
import { useAuth } from "../AuthContext";
import { dataRappeurs } from "../data";

const Home = () => {
  const { user, toggleFavorite, friendsFavs = {} } = useAuth() || {};
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("all");

  const filteredRappeurs = dataRappeurs.filter(rappeur => {
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
      {/* NAVBAR SÉPARÉE */}
      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <div className="container">
        <div className="hero">
          <h1>LA DATA <span className="text-gradient">ULTIME</span></h1>
          <div className="filters-container" style={{ marginTop: '30px' }}>
            <button className={`filter-btn ${selectedStatus === 'all' ? 'active' : ''}`} onClick={() => setSelectedStatus('all')}>Tous</button>
            <button className={`filter-btn ${selectedStatus === 'legende' ? 'active' : ''}`} onClick={() => setSelectedStatus('legende')}>🏆 Légendes</button>
            <button className={`filter-btn ${selectedStatus === 'tendance' ? 'active' : ''}`} onClick={() => setSelectedStatus('tendance')}>🔥 Tendances</button>
            <button className={`filter-btn ${selectedStatus === 'pepite' ? 'active' : ''}`} onClick={() => setSelectedStatus('pepite')}>💎 Pépites</button>
            {user && <button className={`filter-btn ${selectedStatus === 'favorites' ? 'active' : ''}`} onClick={() => setSelectedStatus('favorites')} style={{borderColor: '#ff3b3b', color: selectedStatus === 'favorites' ? 'white' : '#ff3b3b'}}>❤️ Favoris</button>}
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