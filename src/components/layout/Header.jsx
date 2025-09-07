import React from 'react';
import Button from '../ui/Button';
import { Phone } from 'lucide-react';
import logo from '../../assets/logo.webp'; // Asumimos que tenemos el logo en la carpeta de assets

const Header = () => {
  const handleCall = () => {
    // Aquí iría el número de teléfono real del cliente
    window.location.href = 'tel:+584242210430';
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-brand-dark bg-opacity-70 backdrop-blur-sm z-50 shadow-lg pt-5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* --- Logo a la izquierda --- */}
          <div className="flex-shrink-0">
            <a href="/" aria-label="Página de inicio de Cerrajería La Nocturna">
              <img className="h-20 w-auto mb-5 " src={logo} alt="Logo de Cerrajería La Nocturna" />
            </a>
          </div>

          {/* --- Botón de llamada a la derecha --- */}
          <div>
            <Button
              variant="primary"
              size="md"
              leftIcon={<Phone size={18} />}
              onClick={handleCall}
              className="hidden sm:inline-flex" // El botón se oculta en pantallas muy pequeñas y aparece a partir de 'sm'
            >
              Llamar Ahora
            </Button>
            
            {/* Botón solo con ícono para pantallas muy pequeñas (móvil) */}
            <Button
              variant="primary"
              size="md"
              onClick={handleCall}
              className="sm:hidden p-3" // Aparece solo en pantallas 'xs' y se oculta a partir de 'sm'
              aria-label="Llamar ahora"
            >
              <Phone size={20} />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;