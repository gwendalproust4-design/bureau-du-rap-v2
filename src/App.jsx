import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider, useAuth } from './AuthContext';
import { dataRappeurs } from './data';
import Home from './pages/Home';
import ArtisteDetail from './ArtisteDetail';
import Login from './Login';
import Profile from './Profile';
import Navbar from './components/Navbar';      
import ArtistCard from './components/ArtistCard';
import Spotlight from './components/Spotlight';
import './index.css';


export default function App() {
  return (
    <AuthProvider>
      <Spotlight />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profil" element={<Profile />} />
          <Route path="/artiste/:id" element={<ArtisteDetail />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}