import React, { useState, useEffect } from 'react';
import HomePage from './pages/HomePage';
import Preloader from './components/ui/Preloader';
import WelcomeModal from './components/ui/WelcomeModal';
import FloatingSocials from './components/ui/FloatingSocials';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [startAnimations, setStartAnimations] = useState(false);

  useEffect(() => {
    // --- LÓGICA DE CARGA ---
    const hasModalBeenClosed = sessionStorage.getItem('modalClosed');

    const preloaderTimer = setTimeout(() => {
      setIsLoading(false);
      
      // --- ¡AQUÍ ESTÁ LA SOLUCIÓN! ---
      // Si el modal NO se va a mostrar, activamos las animaciones AHORA.
      if (hasModalBeenClosed) {
        setStartAnimations(true);
      }

    }, 2000); // Fin del preloader

    // --- LÓGICA DEL MODAL ---
    const modalTimer = setTimeout(() => {
      // Solo abrir el modal si no ha sido cerrado antes
      if (!hasModalBeenClosed) {
        setIsModalOpen(true);
      }
    }, 2100); // Se ejecuta justo después del preloader

    return () => {
      clearTimeout(preloaderTimer);
      clearTimeout(modalTimer);
    };
  }, []);

  const handleCloseModal = () => {
    setIsModalOpen(false);
    sessionStorage.setItem('modalClosed', 'true');
    // Esta es la primera forma de activar las animaciones
    setStartAnimations(true);
  };

  return (
    <>
      <Preloader isLoading={isLoading} />
       <FloatingSocials />
      <div style={{ opacity: isLoading ? 0 : 1, transition: 'opacity 0.5s' }}>
        <HomePage startAnimations={startAnimations} />
      </div>
      <WelcomeModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  );
}
export default App;