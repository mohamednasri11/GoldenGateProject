import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import WelcomeSection from './components/WelcomeSection';
import ServicesSection from './components/ServicesSection';
import ClubsSection from './components/ClubsSection';
import AppSection from './components/AppSection';
import Footer from './components/Footer';
import SignInPage from './components/SignInPage';
import SignUpPage from './components/SignUpPage';
import QRCodePage from './components/QRCodePage';
import './App.css';

function MainLanding() {
  return (
    <>
      <Header />
      <HeroSection />
      <WelcomeSection />
      <ServicesSection />
      <ClubsSection />
      <AppSection />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLanding />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/qr" element={<QRCodePage />} />
      </Routes>
    </Router>
  );
}

export default App; 