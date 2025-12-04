import React, { useState, useEffect } from 'react';
import { generateGamePool, createPairsFromPool, recordVote, getVoteStats } from '../utils/gameUtils';
import { useTheme } from '../ThemeContext';
import { useAuth } from '../useAuth';
import { useNavigate } from 'react-router-dom';

export default function Game() {
  // Global State
  const { theme } = useTheme();
  const { user } = useAuth() || {};
  const navigate = useNavigate();

  // Game Configuration State
  const [gameState, setGameState] = useState('setup'); // 'setup', 'playing', 'transition', 'winner'
  const [category, setCategory] = useState('rapper');
  const [subCategory, setSubCategory] = useState('all');
  const [tournamentSize, setTournamentSize] = useState(16); // 4, 8, 16

  // Tournament State
  const [currentRound, setCurrentRound] = useState(''); // '16', '8', '4', '2' (final)
  const [roundMatches, setRoundMatches] = useState([]);
  const [currentMatchIndex, setCurrentMatchIndex] = useState(0);
  const [nextRoundCandidates, setNextRoundCandidates] = useState([]);
  const [champion, setChampion] = useState(null);

  // Match State
  const [loading, setLoading] = useState(false);
  const [animation, setAnimation] = useState('');
  const [showStats, setShowStats] = useState(false);
  const [stats, setStats] = useState(null);

  // Auto-advance timer
  useEffect(() => {
    let timer;
    if (showStats && gameState === 'playing') {
      timer = setTimeout(() => {
        nextMatch();
      }, 3500);
    }
    return () => clearTimeout(timer);
  }, [showStats, gameState]);

  // --- Logic ---

  const startTournament = () => {
    setLoading(true);
    // 1. Generate initial pool
    // 1. Generate initial pool
    const pool = generateGamePool(category, subCategory, tournamentSize, user?.favorites);

    // 2. Create first round matches
    const matches = createPairsFromPool(pool);

    setRoundMatches(matches);
    setCurrentMatchIndex(0);
    setNextRoundCandidates([]);
    setCurrentRound(String(tournamentSize)); // '16', '8', '4'
    setGameState('playing');
    setLoading(false);
  };

  const handleVote = async (winner, loser, side) => {
    if (showStats) return;

    // 1. Visuals
    setAnimation(side === 'left' ? 'voted-left' : 'voted-right');

    // 2. Record Vote
    recordVote(winner, loser, category, user?.id);

    // 3. Add winner to next round
    setNextRoundCandidates(prev => [...prev, winner]);

    // 4. Show Stats
    const statsData = await getVoteStats(winner.id || winner.titre, loser.id || loser.titre);
    setStats(statsData);
    setShowStats(true);
  };

  const nextMatch = () => {
    setShowStats(false);
    setStats(null);
    setAnimation('');

    if (currentMatchIndex < roundMatches.length - 1) {
      // Next match in current round
      setCurrentMatchIndex(prev => prev + 1);
    } else {
      // End of round
      handleEndOfRound();
    }
  };

  const handleEndOfRound = () => {
    if (nextRoundCandidates.length === 1) {
      // We have a champion!
      setChampion(nextRoundCandidates[0]);
      setGameState('winner');
    } else {
      // Prepare next round
      setGameState('transition');
    }
  };

  const startNextRound = () => {
    const newMatches = createPairsFromPool(nextRoundCandidates);
    setRoundMatches(newMatches);
    setCurrentMatchIndex(0);
    setNextRoundCandidates([]); // Reset for the round after the next one
    setCurrentRound(String(newMatches.length * 2)); // Update round name (e.g. 8 -> 4)
    setGameState('playing');
  };

  // --- Helpers ---

  const getRoundName = (roundSize) => {
    switch (String(roundSize)) {
      case '16': return '8èmes de Finale';
      case '8': return 'Quarts de Finale';
      case '4': return 'Demi-Finales';
      case '2': return 'FINALE';
      default: return 'Tournoi';
    }
  };

  const getCurrentPair = () => {
    if (roundMatches.length > 0 && roundMatches[currentMatchIndex]) {
      return roundMatches[currentMatchIndex];
    }
    return [{}, {}];
  };

  // --- Render ---

  // 1. Auth Check
  if (!user) {
    return (
      <div className={`game-page ${theme} auth-required`}>
        <div className="auth-message-container">
          <h1>🔒 Accès Restreint</h1>
          <p>Vous devez être connecté pour participer au tournoi.</p>
          <button className="login-btn-large" onClick={() => navigate('/login')}>Se Connecter</button>
        </div>
      </div>
    );
  }

  // 2. Setup Screen
  if (gameState === 'setup') {
    return (
      <div className={`game-page ${theme} setup-screen`}>
        <h1>🏆 CRÉER UN TOURNOI</h1>

        <div className="setup-section">
          <h3>1. Catégorie</h3>
          <div className="category-selector">
            <button className={category === 'rapper' ? 'active' : ''} onClick={() => setCategory('rapper')}>Rappeurs</button>
            <button className={category === 'album' ? 'active' : ''} onClick={() => setCategory('album')}>Albums</button>
            <button className={category === 'single' ? 'active' : ''} onClick={() => setCategory('single')}>Singles</button>
          </div>

          {category === 'rapper' && (
            <select value={subCategory} onChange={(e) => setSubCategory(e.target.value)} className="dropdown-select">
              <option value="all">Tous les rappeurs</option>
              {user && user.favorites && user.favorites.length > 0 && (
                <option value="favorites">❤️ Mes Favoris</option>
              )}
              <option value="legende">🏆 Légendes</option>
              <option value="star">⭐ Stars</option>
              <option value="pepite">💎 Pépites</option>
              <option value="trend">📈 Trends</option>
            </select>
          )}

          {/* Also allow favorites for albums/singles if user has favorites */}
          {(category === 'album' || category === 'single') && user && user.favorites && user.favorites.length > 0 && (
            <div style={{ marginTop: '10px' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', color: 'var(--text-secondary)' }}>
                <input
                  type="checkbox"
                  checked={subCategory === 'favorites'}
                  onChange={(e) => setSubCategory(e.target.checked ? 'favorites' : 'all')}
                />
                Uniquement de mes rappeurs favoris ❤️
              </label>
            </div>
          )}
        </div>

        <div className="setup-section">
          <h3>2. Taille du Tournoi</h3>
          <div className="size-selector">
            <button className={tournamentSize === 4 ? 'active' : ''} onClick={() => setTournamentSize(4)}>4 (Express)</button>
            <button className={tournamentSize === 8 ? 'active' : ''} onClick={() => setTournamentSize(8)}>8 (Rapide)</button>
            <button className={tournamentSize === 16 ? 'active' : ''} onClick={() => setTournamentSize(16)}>16 (Complet)</button>
          </div>
        </div>

        <button className="start-btn" onClick={startTournament}>LANCER LE TOURNOI 🚀</button>
      </div>
    );
  }

  // 3. Winner Screen
  if (gameState === 'winner' && champion) {
    return (
      <div className={`game-page ${theme} winner-screen`}>
        <div className="winner-content">
          <h1>👑 CHAMPION 👑</h1>
          <div className="winner-card">
            <img src={champion.cover || champion.image} alt={champion.titre} />
            <h2>{champion.titre}</h2>
          </div>
          <button className="restart-btn" onClick={() => setGameState('setup')}>Nouveau Tournoi</button>
        </div>
      </div>
    );
  }

  // 4. Transition Screen
  if (gameState === 'transition') {
    return (
      <div className={`game-page ${theme} transition-screen`}>
        <div className="transition-content">
          <h2>Fin des {getRoundName(currentRound)} !</h2>
          <p>Les vainqueurs sont qualifiés pour la suite.</p>
          <button className="next-round-btn" onClick={startNextRound}>
            Lancer les {getRoundName(nextRoundCandidates.length * 2)} ➔
          </button>
        </div>
      </div>
    );
  }

  // 5. Playing Screen
  const [left, right] = getCurrentPair();
  const leftId = left.id || left.titre;
  const rightId = right.id || right.titre;

  return (
    <div className={`game-page ${theme}`}>
      <div className="game-header">
        <div className="round-badge">{getRoundName(currentRound)}</div>
        <div className="match-badge">Match {currentMatchIndex + 1} / {roundMatches.length}</div>
      </div>

      <div className={`game-arena ${animation} ${showStats ? 'showing-stats' : ''}`}>
        {/* Left Card */}
        <div className={`game-card left-card ${showStats && animation === 'voted-right' ? 'loser' : ''} ${showStats && animation === 'voted-left' ? 'winner' : ''}`}
          onClick={() => handleVote(left, right, 'left')}>
          <div className="card-image-container">
            <img src={left.cover || left.image} alt={left.titre} />
            <div className="overlay"><span className="vote-text">CHOISIR</span></div>
            {showStats && stats && <div className="stats-overlay"><span className="percentage">{stats[leftId]}%</span></div>}
          </div>
          <div className="card-info"><h2>{left.titre}</h2></div>
        </div>

        <div className="vs-badge">VS</div>

        {/* Right Card */}
        <div className={`game-card right-card ${showStats && animation === 'voted-left' ? 'loser' : ''} ${showStats && animation === 'voted-right' ? 'winner' : ''}`}
          onClick={() => handleVote(right, left, 'right')}>
          <div className="card-image-container">
            <img src={right.cover || right.image} alt={right.titre} />
            <div className="overlay"><span className="vote-text">CHOISIR</span></div>
            {showStats && stats && <div className="stats-overlay"><span className="percentage">{stats[rightId]}%</span></div>}
          </div>
          <div className="card-info"><h2>{right.titre}</h2></div>
        </div>
      </div>

      {showStats && (
        <div className="game-footer">
          <div className="next-duel-container">
            <button className="next-btn" onClick={nextMatch}>Duel Suivant ➔</button>
            <div className="progress-bar-container"><div className="progress-bar"></div></div>
          </div>
        </div>
      )}

      {/* Styles reused and extended */}

    </div>
  );
}
