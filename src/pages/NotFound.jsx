import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
    const navigate = useNavigate();

    return (
        <div className="not-found-container">
            <h1 className="not-found-title">404</h1>
            <p className="not-found-text">Oups ! T'es perdu dans la trap ?</p>
            <p className="not-found-subtext">Cette page n'existe pas ou a été supprimée.</p>
            <button onClick={() => navigate('/')} className="back-home-btn">
                Retour au Bureau
            </button>
        </div>
    );
}
