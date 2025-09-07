import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import ServicioAperturaPage from './pages/ServicioAperturaPage'; // Importamos la nueva página

import Preloader from './components/ui/Preloader';
import WelcomeModal from './components/ui/WelcomeModal';
import FloatingSocials from './components/ui/FloatingSocials';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [startAnimations, setStartAnimations] = useState(false);

  useEffect(() => {
    const hasModalBeenClosed = sessionStorage.getItem('modalClosed');

    const preloaderTimer = setTimeout(() => {
      setIsLoading(false);
      if (hasModalBeenClosed) {
        setStartAnimations(true);
      }
    }, 2000);

    const modalTimer = setTimeout(() => {
      if (!hasModalBeenClosed) {
        setIsModalOpen(true);
      }
    }, 2100);

    return () => {
      clearTimeout(preloaderTimer);
      clearTimeout(modalTimer);
    };
  }, []);

  const handleCloseModal = () => {
    setIsModalOpen(false);
    sessionStorage.setItem('modalClosed', 'true');
    setStartAnimations(true);
  };

  return (
    <Router>
      <Preloader isLoading={isLoading} />
      <FloatingSocials />
      <div style={{ opacity: isLoading ? 0 : 1, transition: 'opacity 0.5s' }}>
        <Routes>
          <Route path="/" element={<HomePage startAnimations={startAnimations} />} />
          <Route path="/servicios/apertura-de-emergencia" element={<ServicioAperturaPage />} />
        </Routes>
      </div>
      <WelcomeModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </Router>
  );
}

export default App;