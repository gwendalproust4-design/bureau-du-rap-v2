import React, { useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import { ThemeProvider } from './ThemeContext';
import Home from './pages/Home';
import ArtisteDetail from './ArtisteDetail';
import Login from './Login';
import Profile from './Profile';
import FriendProfile from './pages/FriendProfile';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Spotlight from './components/Spotlight';
import ClickSpark from './components/ClickSpark';
import './index.css';

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <ThemeProvider>
      <AuthProvider>
        <Spotlight />
        <HashRouter>
          <ClickSpark
            sparkColor='#333333'
            sparkSize={10}
            sparkRadius={15}
            sparkCount={8}
            duration={400}
          >
            <div className="app-wrapper">
              <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
              <div className="main-content">
                <Routes>
                  <Route path="/" element={<Home searchTerm={searchTerm} setSearchTerm={setSearchTerm} />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/profil" element={<Profile />} />
                  <Route path="/profile/:id" element={<FriendProfile />} />
                  <Route path="/artiste/:id" element={<ArtisteDetail />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </div>
              <Footer />
            </div>
          </ClickSpark>
        </HashRouter>
      </AuthProvider>
    </ThemeProvider>
  );
}