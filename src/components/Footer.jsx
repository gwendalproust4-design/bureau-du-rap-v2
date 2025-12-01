import React from 'react';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-logo">
                    BUREAU DU <span className="logo-accent">RAP</span>
                </div>
                <p className="footer-text">
                    La référence ultime du rap français. <br />
                    Découvrez, écoutez, validez.
                </p>
                <div className="footer-links">
                    <a href="#" className="footer-link">À propos</a>
                    <a href="#" className="footer-link">Contact</a>
                    <a href="#" className="footer-link">Mentions Légales</a>
                </div>
                <div className="footer-socials">
                    <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
                    <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
                    <a href="#" className="social-icon"><i className="fab fa-spotify"></i></a>
                </div>
                <p className="copyright">
                    &copy; {new Date().getFullYear()} Bureau du Rap. Tous droits réservés.
                </p>
            </div>
        </footer>
    );
}
