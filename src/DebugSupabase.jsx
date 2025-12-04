import React, { useState, useEffect } from 'react';
import { supabase } from './supabaseClient';
import { useAuth } from './useAuth';

export default function DebugSupabase() {
    const { user } = useAuth();
    const [friends, setFriends] = useState([]);
    const [logs, setLogs] = useState([]);

    const log = (msg) => setLogs(prev => [`${new Date().toLocaleTimeString()} - ${msg}`, ...prev]);

    const fetchFriends = async () => {
        log("Fetching friends...");
        const { data, error } = await supabase.from('friends').select('*');
        if (error) log("Error: " + error.message);
        else {
            log(`Found ${data.length} rows.`);
            setFriends(data);
        }
    };

    const deleteAll = async () => {
        if (!user) return;
        if (!window.confirm("Supprimer TOUS vos liens d'amitié ?")) return;

        log("Deleting all friends for user...");
        const { error } = await supabase.from('friends').delete().eq('user_id', user.id);
        if (error) log("Delete Error: " + error.message);
        else log("Deleted.");
        fetchFriends();
    };

    useEffect(() => {
        if (user) fetchFriends();
    }, [user]);

    return (
        <div style={{ color: 'white', padding: '100px 20px', minHeight: '100vh', background: '#111' }}>
            <h1>Supabase Debugger 🕵️‍♂️</h1>
            <p>User ID: <strong>{user?.id}</strong></p>

            <div style={{ marginBottom: 20 }}>
                <button onClick={fetchFriends} style={{ padding: '10px 20px', marginRight: 10 }}>Refresh List</button>
                <button onClick={deleteAll} style={{ padding: '10px 20px', background: 'red', color: 'white', border: 'none' }}>Delete My Friend Links</button>
            </div>

            <h3>Friends Table Content (Visible to you):</h3>
            <div style={{ background: '#222', padding: 10, borderRadius: 5, overflow: 'auto' }}>
                {friends.length === 0 ? <p>No rows found.</p> : (
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                            <tr style={{ borderBottom: '1px solid #444' }}>
                                <th style={{ textAlign: 'left', padding: 5 }}>ID</th>
                                <th style={{ textAlign: 'left', padding: 5 }}>User ID</th>
                                <th style={{ textAlign: 'left', padding: 5 }}>Friend ID</th>
                                <th style={{ textAlign: 'left', padding: 5 }}>Created At</th>
                            </tr>
                        </thead>
                        <tbody>
                            {friends.map(f => (
                                <tr key={f.id} style={{ borderBottom: '1px solid #333' }}>
                                    <td style={{ padding: 5 }}>{f.id}</td>
                                    <td style={{ padding: 5 }}>{f.user_id}</td>
                                    <td style={{ padding: 5 }}>{f.friend_id}</td>
                                    <td style={{ padding: 5 }}>{f.created_at}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>

            <h3>Logs:</h3>
            <div style={{ background: '#000', padding: 10, height: 200, overflowY: 'scroll', fontFamily: 'monospace', fontSize: '0.9rem' }}>
                {logs.map((l, i) => <div key={i}>{l}</div>)}
            </div>
        </div>
    );
}
