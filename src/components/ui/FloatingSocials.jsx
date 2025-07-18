import React from 'react';
import { Instagram } from 'lucide-react'; // Usamos MessageCircle para WhatsApp
import { FaWhatsapp} from 'react-icons/fa';

const FloatingSocials = () => {
  return (
    // Contenedor principal con posicionamiento fijo
    <div className="fixed top-1/2 right-4 transform -translate-y-1/2 z-40 flex flex-col gap-4">
      
      {/* Enlace a WhatsApp */}
      <a
        href="https://wa.me/+584242210430"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className="bg-green-500 text-white p-3 rounded-full shadow-lg
                   hover:bg-green-600 hover:scale-110 transform transition-all duration-300"
      >
        <FaWhatsapp size={28} />
      </a>

      {/* Enlace a Instagram */}
      <a
        href="https://www.instagram.com/cerrajerialanocturna/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visitar nuestro perfil de Instagram"
        className="bg-gradient-to-br from-purple-600 via-pink-500 to-yellow-400 text-white p-3 rounded-full shadow-lg
                   hover:scale-110 transform transition-all duration-300"
      >
        <Instagram size={28} />
      </a>

    </div>
  );
};

export default FloatingSocials;