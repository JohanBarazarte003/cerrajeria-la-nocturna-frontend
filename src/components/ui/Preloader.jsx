import React from 'react';
import logo from '../../assets/logo.png';

const Preloader = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-brand-dark flex items-center justify-center z-[100]">
      <style>
        {`
          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.7; }
          }
          .animate-pulse-logo {
            animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          }
        `}
      </style>
      <img
        src={logo}
        alt="Cargando - Logo Cerrajería La Nocturna"
        className="h-16 w-auto sm:h-24 animate-pulse-logo"
      />
    </div>
  );
};

export default Preloader;