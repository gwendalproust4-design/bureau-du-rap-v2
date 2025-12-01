import React, { useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import Home from './pages/Home';
import ArtisteDetail from './ArtisteDetail';
import Login from './Login';
import Profile from './Profile';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Spotlight from './components/Spotlight';
import './index.css';


export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <AuthProvider>
      <Spotlight />
      <HashRouter>
        <div className="app-wrapper">
          <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <div className="main-content">
            <Routes>
              <Route path="/" element={<Home searchTerm={searchTerm} setSearchTerm={setSearchTerm} />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profil" element={<Profile />} />
              <Route path="/artiste/:id" element={<ArtisteDetail />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </HashRouter>
    </AuthProvider>

  );
}