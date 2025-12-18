import { supabase } from '../supabaseClient';

// Helper to get all albums from all rappers
const getAllAlbums = (favoritesIds = null, dataRappeurs = []) => {
    return dataRappeurs.flatMap(rapper => {
        // If favorites filter is active, skip rappers not in favorites
        if (favoritesIds && !favoritesIds.includes(rapper.id)) return [];

        return (rapper.albums || []).filter(a => a.category === 'project').map(album => ({
            ...album,
            artistName: rapper.nom,
            artistId: rapper.id,
            type: 'album'
        }));
    });
};

// Helper to get all singles from all rappers
const getAllSingles = (favoritesIds = null, dataRappeurs = []) => {
    return dataRappeurs.flatMap(rapper => {
        // If favorites filter is active, skip rappers not in favorites
        if (favoritesIds && !favoritesIds.includes(rapper.id)) return [];

        return (rapper.albums || []).filter(a => a.category === 'single' || a.category === 'feat').map(track => ({
            ...track,
            artistName: rapper.nom,
            artistId: rapper.id,
            type: 'single'
        }));
    });
};

// Helper to get all rappers, optionally filtered by sub-category or favorites
const getAllRappers = (subCategory = null, favoritesIds = null, dataRappeurs = []) => {
    let rappers = dataRappeurs;

    // Filter by favorites if provided
    if (favoritesIds) {
        rappers = rappers.filter(r => favoritesIds.includes(r.id));
    }
    // Otherwise filter by subCategory (status)
    else if (subCategory && subCategory !== 'all') {
        rappers = rappers.filter(r => r.statut === subCategory);
    }

    return rappers.map(rapper => ({
        ...rapper,
        titre: rapper.nom, // Unify naming for display
        cover: rapper.image, // Unify naming for display
        type: 'rapper'
    }));
};

// Shuffle array helper
const shuffleArray = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
};

export const generateGamePool = (category = 'rapper', subCategory = null, size = 16, favoritesIds = null, dataRappeurs = []) => {
    let fullPool = [];

    // If subCategory is 'favorites', we use the favoritesIds
    // Note: The UI should pass favoritesIds ONLY when 'favorites' is selected, 
    // but we can also check subCategory here to be safe or just rely on the arg.
    const isFavoritesMode = subCategory === 'favorites';
    const effectiveFavorites = isFavoritesMode ? favoritesIds : null;

    switch (category) {
        case 'album':
            fullPool = getAllAlbums(effectiveFavorites, dataRappeurs);
            break;
        case 'single':
            fullPool = getAllSingles(effectiveFavorites, dataRappeurs);
            break;
        case 'rapper':
        default:
            fullPool = getAllRappers(isFavoritesMode ? null : subCategory, effectiveFavorites, dataRappeurs);
            break;
    }

    // Shuffle and slice to get random sample
    return shuffleArray(fullPool).slice(0, size);
};

export const getPairFromPool = (pool) => {
    if (!pool || pool.length < 2) return null;

    // Get two distinct random indices from the pool
    const idx1 = Math.floor(Math.random() * pool.length);
    let idx2 = Math.floor(Math.random() * pool.length);

    while (idx2 === idx1) {
        idx2 = Math.floor(Math.random() * pool.length);
    }

    return [pool[idx1], pool[idx2]];
};

export const createPairsFromPool = (pool) => {
    const pairs = [];
    // Ensure even number
    const workingPool = [...pool];
    if (workingPool.length % 2 !== 0) workingPool.pop();

    for (let i = 0; i < workingPool.length; i += 2) {
        pairs.push([workingPool[i], workingPool[i + 1]]);
    }
    return pairs;
};

export const recordVote = async (winner, loser, category, userId = null) => {
    try {
        const voteData = {
            winner_id: winner.id || winner.titre,
            loser_id: loser.id || loser.titre,
            winner_name: winner.titre || winner.nom,
            loser_name: loser.titre || loser.nom,
            category: category,
            theme: 'general'
        };

        // Add user_id if provided
        if (userId) {
            voteData.user_id = userId;
        }

        const { error } = await supabase
            .from('game_votes')
            .insert([voteData]);

        if (error) {
            console.error('Error recording vote:', error);
        }
    } catch (err) {
        console.error('Unexpected error recording vote:', err);
    }
};

export const getVoteStats = async (id1, id2) => {
    try {
        // Fetch global stats for both items separately
        const { data, error } = await supabase
            .from('game_votes')
            .select('winner_id, loser_id')
            .or(`winner_id.eq.${id1},loser_id.eq.${id1},winner_id.eq.${id2},loser_id.eq.${id2}`);

        if (error) throw error;

        // Calculate stats for Item 1
        let wins1 = 0;
        let total1 = 0;

        // Calculate stats for Item 2
        let wins2 = 0;
        let total2 = 0;

        data.forEach(vote => {
            // Stats for ID1
            if (vote.winner_id === id1 || vote.loser_id === id1) {
                total1++;
                if (vote.winner_id === id1) wins1++;
            }

            // Stats for ID2
            if (vote.winner_id === id2 || vote.loser_id === id2) {
                total2++;
                if (vote.winner_id === id2) wins2++;
            }
        });

        // Calculate percentages (Global Win Rate)
        const rate1 = total1 === 0 ? 50 : Math.round((wins1 / total1) * 100);
        const rate2 = total2 === 0 ? 50 : Math.round((wins2 / total2) * 100);

        return {
            [id1]: rate1,
            [id2]: rate2,
            total: total1 + total2 // Just for debug info if needed
        };

    } catch (err) {
        console.error('Error fetching stats:', err);
        return { [id1]: 50, [id2]: 50, total: 0 }; // Fallback
    }
};

export const getLeaderboard = async (category) => {
    try {
        const { data, error } = await supabase
            .rpc('get_leaderboard', { category_filter: category });

        if (error) throw error;
        return data;
    } catch (err) {
        console.error('Error fetching leaderboard:', err);
        return [];
    }
};
