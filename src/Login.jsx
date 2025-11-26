import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import './index.css';

export default function Login() {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const [error, setError] = useState('');
  const [infoMessage, setInfoMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  
  const { login, register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setInfoMessage('');

    if (isLoginMode) {
      const res = await login(formData.email, formData.password);
      if (res.success) {
        navigate('/');
      } else {
        setError(res.message);
      }
    } else {
      if (!formData.username || !formData.email || !formData.password) {
        setError("Tous les champs sont obligatoires.");
        return;
      }
      
      const res = await register(formData.username, formData.email, formData.password);
      
      if (res.success) {
        if (res.message && res.message.includes('email')) {
            setInfoMessage(res.message);
            setFormData({ ...formData, password: '' }); 
        } else {
            setInfoMessage("Compte créé avec succès ! Connexion...");
            setTimeout(() => {
               login(formData.email, formData.password).then(() => navigate('/'));
            }, 1500);
        }
      } else {
        setError(res.message);
      }
    }
  };

  return (
    <div className="login-page-wrapper" style={{
        minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center',
        background: 'linear-gradient(-45deg, #0f0c29, #302b63, #24243e)',
        backgroundSize: '400% 400%', animation: 'gradientBG 15s ease infinite'
    }}>
      <div className="login-card">
        <h2 style={{ color: 'white', marginBottom: '20px', fontSize: '2rem', fontWeight: 'bold' }}>
          BUREAU DU <span style={{ color: '#8A2BE2' }}>RAP</span>
        </h2>

        <div className="auth-tabs">
          <button className={`auth-tab ${isLoginMode ? 'active' : ''}`} onClick={() => { setIsLoginMode(true); setError(''); setInfoMessage(''); }}>Connexion</button>
          <button className={`auth-tab ${!isLoginMode ? 'active' : ''}`} onClick={() => { setIsLoginMode(false); setError(''); setInfoMessage(''); }}>Inscription</button>
        </div>

        <form onSubmit={handleSubmit}>
          {!isLoginMode && (
            <div className="input-field-container">
              <input type="text" className="login-input" placeholder="Nom d'utilisateur" value={formData.username} onChange={(e) => setFormData({...formData, username: e.target.value})} />
            </div>
          )}
          <div className="input-field-container">
            <input type="email" className="login-input" placeholder="Email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
          </div>

          {/* 2. CHAMP MOT DE PASSE MODIFIÉ */}
          <div className="input-field-container" style={{position: 'relative'}}>
            <input 
              type={showPassword ? "text" : "password"} // Bascule le type
              className="login-input" 
              placeholder="Mot de passe" 
              value={formData.password} 
              onChange={(e) => setFormData({...formData, password: e.target.value})} 
              style={{paddingRight: '45px'}} // Laisse de la place pour l'icône
            />
            
            {/* Le bouton Œil */}
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              style={{
                position: 'absolute',
                right: '15px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontSize: '1.2rem',
                color: 'rgba(255, 255, 255, 0.6)', // Couleur discrète
                transition: 'color 0.3s'
              }}
              onMouseOver={(e) => e.target.style.color = 'white'}
              onMouseOut={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.6)'}
              title={showPassword ? "Masquer" : "Afficher"}
            >
              {showPassword ? '👁️' : '🔒'}
            </button>
          </div>

          {error && <p style={{ color: '#ff3b3b', marginBottom: '15px', background: 'rgba(255,0,0,0.1)', padding: '10px', borderRadius: '10px' }}>⚠️ {error}</p>}
          {infoMessage && <p style={{ color: '#4caf50', marginBottom: '15px', background: 'rgba(0,255,0,0.1)', padding: '10px', borderRadius: '10px' }}>📧 {infoMessage}</p>}

          <button type="submit" className="action-btn">
            {isLoginMode ? "SE CONNECTER" : "S'INSCRIRE"}
          </button>
        </form>
        
        <div className="divider"><span>OU</span></div>
        <button onClick={() => navigate('/')} className="visitor-btn">Continuer en visiteur</button>
      </div>
    </div>
  );
}