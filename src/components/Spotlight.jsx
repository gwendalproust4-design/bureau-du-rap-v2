import React, { useState, useEffect } from 'react';

const Spotlight = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setOpacity(1); // On affiche la lumière dès que la souris bouge
    };

    const handleMouseLeave = () => {
      setOpacity(0); // On cache si la souris sort de la fenêtre
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1, // Important : Reste DERRIÈRE tout le contenu
        pointerEvents: 'none', // Laisse passer les clics
        background: `
          radial-gradient(
            600px circle at ${position.x}px ${position.y}px, 
            rgba(138, 43, 226, 0.15), 
            transparent 40%
          )
        `,
        opacity: opacity,
        transition: 'opacity 0.5s ease', // Apparition douce
      }}
    />
  );
};

export default Spotlight;