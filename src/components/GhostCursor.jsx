import React, { useEffect, useRef } from 'react';

const GhostCursor = ({ color = "#8A2BE2" }) => {
  const canvasRef = useRef(null);
  const pointers = useRef([]);
  const ctx = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    ctx.current = canvas.getContext('2d');
    
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);
    resize();

    let animationFrame;
    
    const loop = () => {
      if (!ctx.current) return;
      // Effet de traînée (fade out)
      ctx.current.globalCompositeOperation = 'destination-out';
      ctx.current.fillStyle = 'rgba(0, 0, 0, 0.1)'; // Vitesse de disparition
      ctx.current.fillRect(0, 0, canvas.width, canvas.height);
      ctx.current.globalCompositeOperation = 'source-over';

      // Dessiner les points
      pointers.current.forEach((p) => {
        ctx.current.beginPath();
        ctx.current.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.current.fillStyle = color;
        ctx.current.fill();
        
        // Réduire la taille pour la prochaine frame
        p.size *= 0.95;
      });

      // Supprimer les points trop petits
      pointers.current = pointers.current.filter(p => p.size > 0.5);

      animationFrame = requestAnimationFrame(loop);
    };
    loop();

    const handleMouseMove = (e) => {
      // Ajouter un point à chaque mouvement
      pointers.current.push({
        x: e.clientX,
        y: e.clientY,
        size: 8 // Taille de départ
      });
    };
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrame);
    };
  }, [color]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none', // Laisse passer les clics au travers !
        zIndex: 9999
      }}
    />
  );
};

export default GhostCursor;