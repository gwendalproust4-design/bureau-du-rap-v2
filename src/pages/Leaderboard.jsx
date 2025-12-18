import React, { useState, useEffect } from 'react';
import { getLeaderboard } from '../utils/gameUtils';
import { useTheme } from '../ThemeContext';
import { useRappers } from '../RappersContext';

export default function Leaderboard() {
    const [category, setCategory] = useState('rapper');
    const [subCategory, setSubCategory] = useState('all');
    const [rankings, setRankings] = useState([]);
    const [loading, setLoading] = useState(true);
    const { theme } = useTheme();
    const { allRappers, loading: rappersLoading } = useRappers();

    useEffect(() => {
        if (!rappersLoading) {
            fetchAndMergeRankings();
        }
    }, [category, rappersLoading, allRappers]);

    const fetchAndMergeRankings = async () => {
        setLoading(true);
        try {
            // 1. Fetch stats from Supabase (only items that have played)
            const stats = await getLeaderboard(category);
            console.log('Stats from DB:', stats);

            // 2. Get all possible items from local data
            let allItems = [];
            if (category === 'rapper') {
                allItems = allRappers.map(r => ({
                    id: r.id,
                    name: r.nom,
                    image: r.image,
                    statut: r.statut,
                    type: 'rapper'
                }));
            } else {
                // Flatten albums/singles
                allRappers.forEach(r => {
                    if (r.albums) {
                        r.albums.forEach(a => {
                            if ((category === 'album' && a.category === 'project') ||
                                (category === 'single' && (a.category === 'single' || a.category === 'feat'))) {
                                allItems.push({
                                    id: a.titre, // Using title as ID for now as per DB schema
                                    name: a.titre,
                                    image: a.cover,
                                    statut: r.statut, // Inherit status from rapper for filtering
                                    type: category
                                });
                            }
                        });
                    }
                });
            }

            // 3. Merge stats into items
            const mergedData = allItems.map(item => {
                // Find matching stat
                // Normalize for robust matching
                const normalize = (str) => str ? str.toString().trim().toLowerCase() : '';

                const stat = stats.find(s =>
                    normalize(s.id) === normalize(item.id) ||
                    normalize(s.name) === normalize(item.name)
                );

                return {
                    ...item,
                    wins: stat ? stat.wins : 0,
                    losses: stat ? stat.losses : 0,
                    total_matches: stat ? stat.total_matches : 0,
                    win_rate: stat ? parseFloat(stat.win_rate) : 0 // Default to 0% if no games
                };
            });

            // 4. Sort by Win Rate (Desc), then Total Matches (Desc)
            const activeItems = mergedData.filter(item => item.total_matches > 0);

            activeItems.sort((a, b) => {
                if (b.win_rate !== a.win_rate) return b.win_rate - a.win_rate;
                return b.total_matches - a.total_matches;
            });

            console.log('Final Rankings:', activeItems);
            setRankings(activeItems);

        } catch (error) {
            console.error("Error generating leaderboard:", error);
        } finally {
            setLoading(false);
        }
    };

    // Filter rankings based on subCategory
    const filteredRankings = rankings.filter(item => {
        if (category !== 'rapper') return true;
        if (subCategory === 'all') return true;

        if (!item.statut) return false;

        // Robust comparison
        const normalize = (str) => str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
        return normalize(item.statut) === normalize(subCategory);
    });

    return (
        <div className={`leaderboard-page ${theme}`}>
            <div className="leaderboard-header">
                <h1>CLASSEMENT 🏆</h1>

                <div className="filters-container">
                    <div className="category-selector">
                        <button
                            className={category === 'rapper' ? 'active' : ''}
                            onClick={() => { setCategory('rapper'); setSubCategory('all'); }}
                        >
                            Rappeurs
                        </button>
                        <button
                            className={category === 'album' ? 'active' : ''}
                            onClick={() => setCategory('album')}
                        >
                            Albums
                        </button>
                        <button
                            className={category === 'single' ? 'active' : ''}
                            onClick={() => setCategory('single')}
                        >
                            Singles
                        </button>
                    </div>

                    {category === 'rapper' && (
                        <select
                            className="dropdown-select"
                            value={subCategory}
                            onChange={(e) => setSubCategory(e.target.value)}
                        >
                            <option value="all">Tous les statuts</option>
                            <option value="legende">Légendes</option>
                            <option value="star">Stars</option>
                            <option value="pepite">Pépites</option>
                            <option value="tendance">Trends</option>
                            <option value="gem">Gems</option>
                            <option value="confirme">Confirmés</option>
                        </select>
                    )}
                </div>
            </div>

            <div className="leaderboard-container">
                {loading ? (
                    <div className="spinner"></div>
                ) : filteredRankings.length === 0 ? (
                    <div className="no-data">
                        <p>Aucune donnée pour cette catégorie. Jouez pour remplir le classement !</p>
                    </div>
                ) : (
                    <table className="leaderboard-table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Nom</th>
                                <th>Victoires</th>
                                <th>Défaites</th>
                                <th>Win Rate</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredRankings.map((item, index) => (
                                <tr key={item.id || index} className={`rank-${index + 1}`}>
                                    <td className="rank-cell">
                                        {index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : index + 1}
                                    </td>
                                    <td className="name-cell">
                                        <div className="item-info">
                                            {item.image ? (
                                                <img src={item.image} alt={item.name} className="item-avatar" />
                                            ) : (
                                                <div className="item-avatar-placeholder">{item.name[0]}</div>
                                            )}
                                            <div className="name-details">
                                                <span>{item.name}</span>
                                                {item.statut && <span className="statut-badge">{item.statut}</span>}
                                            </div>
                                        </div>
                                    </td>
                                    <td>{item.wins}</td>
                                    <td>{item.losses}</td>
                                    <td className="winrate-cell">
                                        <div className="winrate-bar-container">
                                            <div
                                                className="winrate-bar"
                                                style={{ width: `${item.win_rate}%`, backgroundColor: getWinRateColor(item.win_rate) }}
                                            ></div>
                                            <span>{item.win_rate}%</span>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>

            <style>{`
        .leaderboard-page {
          min-height: 90vh;
          padding: 2rem;
          color: var(--text-primary);
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .leaderboard-header {
          text-align: center;
          margin-bottom: 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }

        .leaderboard-header h1 {
          font-size: 2.5rem;
          margin-bottom: 0.5rem;
          background: linear-gradient(45deg, #ffd700, #ff8c00);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-transform: uppercase;
        }

        .filters-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1rem;
        }

        .category-selector {
          display: flex;
          gap: 0.5rem;
          justify-content: center;
          background: rgba(255, 255, 255, 0.05);
          padding: 0.5rem;
          border-radius: 50px;
        }

        .category-selector button {
          background: transparent;
          border: none;
          color: var(--text-secondary);
          padding: 0.5rem 1.5rem;
          border-radius: 25px;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .category-selector button.active {
          background: var(--accent-color);
          color: white;
        }

        .dropdown-select {
            background: rgba(0, 0, 0, 0.5);
            color: white;
            border: 1px solid rgba(255, 255, 255, 0.2);
            padding: 0.5rem 1rem;
            border-radius: 10px;
            font-family: var(--font-main);
            cursor: pointer;
            min-width: 200px;
        }

        .leaderboard-container {
          width: 100%;
          max-width: 800px;
          background: var(--card-bg);
          border-radius: 20px;
          padding: 1rem;
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
          overflow-x: auto;
        }

        .leaderboard-table {
          width: 100%;
          border-collapse: collapse;
        }

        .leaderboard-table th {
          text-align: left;
          padding: 1rem;
          color: var(--text-secondary);
          font-weight: 600;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .leaderboard-table td {
          padding: 1rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .rank-cell {
          font-size: 1.2rem;
          font-weight: bold;
          width: 50px;
        }

        .item-info {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .name-details {
            display: flex;
            flex-direction: column;
            gap: 0.2rem;
        }

        .statut-badge {
            font-size: 0.7rem;
            background: rgba(255, 255, 255, 0.1);
            padding: 2px 6px;
            border-radius: 4px;
            width: fit-content;
            color: var(--text-secondary);
        }

        .item-avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          object-fit: cover;
        }

        .item-avatar-placeholder {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #333;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
        }

        .winrate-bar-container {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          width: 150px;
        }

        .winrate-bar {
          height: 6px;
          border-radius: 3px;
        }

        .rank-1 .name-cell { color: #ffd700; font-weight: bold; }
        .rank-2 .name-cell { color: #c0c0c0; font-weight: bold; }
        .rank-3 .name-cell { color: #cd7f32; font-weight: bold; }
        
        .no-data {
          text-align: center;
          padding: 2rem;
          color: var(--text-secondary);
        }
      `}</style>
        </div>
    );
}

function getWinRateColor(rate) {
    if (rate >= 70) return '#00ff80'; // Green
    if (rate >= 50) return '#ffaa00'; // Orange
    return '#ff0055'; // Red
}
