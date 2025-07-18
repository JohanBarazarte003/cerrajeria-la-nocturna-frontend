import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button'; // Reutilizamos nuestro súper botón
import { Phone, ArrowRight } from 'lucide-react';
import logo from '../../assets/logo.png';

const WelcomeModal = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  const handleEmergencyCall = () => {
    window.location.href = 'tel:+584242210430'; 
  };

  // Esta función previene que un clic dentro del modal lo cierre
  const handleModalContentClick = (e) => {
    e.stopPropagation();
  };

  return (
    // Contenedor del overlay: ocupa toda la pantalla y tiene un fondo semitransparente
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-[90] p-4"
      onClick={onClose} // Cierra el modal si se hace clic en el fondo
    >
      {/* Contenido del modal */}
      <div
        className="bg-brand-dark border-2 border-brand-yellow rounded-lg shadow-xl w-full max-w-md mx-auto p-8 text-center"
        onClick={handleModalContentClick}
      >
        <img src={logo} alt="Logo" className="h-16 w-auto mx-auto mb-6" />
        
        <h2 className="text-2xl sm:text-3xl font-montserrat font-bold text-white mb-4">
          ¿Cómo podemos ayudarte?
        </h2>

        <p className="text-brand-gray mb-8">
          Selecciona una opción para continuar.
        </p>

        <div className="flex flex-col gap-4">
          {/* Botón de Emergencia (acción principal) */}
          <Button
            variant="primary"
            size="lg"
            leftIcon={<Phone size={20} />}
            onClick={handleEmergencyCall}
          >
            Emergencia 24/7
          </Button>

          {/* Botón de Servicios (acción secundaria) */}
          <Button
            variant="secondary"
            size="lg"
            rightIcon={<ArrowRight size={20} />}
            onClick={onClose} // Simplemente cierra el modal
          >
            Ver Servicios
          </Button>
        </div>
      </div>
    </div>
  );
};

WelcomeModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default WelcomeModal;