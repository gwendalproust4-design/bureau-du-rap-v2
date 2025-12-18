import React, { createContext, useContext, useState, useEffect } from 'react';

const RappersContext = createContext();

export const RappersProvider = ({ children }) => {
    const [allRappers, setAllRappers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                // Using timestamp to avoid caching issues during development updates
                const response = await fetch('/rappers.json?' + new Date().getTime());
                if (!response.ok) {
                    throw new Error('Failed to load data');
                }
                const data = await response.json();
                setAllRappers(data);
            } catch (err) {
                console.error("Error loading rappers data:", err);
                setError(err.message);
                // Fallback or empty state
                setAllRappers([]);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <RappersContext.Provider value={{ allRappers, loading, error }}>
            {children}
        </RappersContext.Provider>
    );
};

export const useRappers = () => useContext(RappersContext);
