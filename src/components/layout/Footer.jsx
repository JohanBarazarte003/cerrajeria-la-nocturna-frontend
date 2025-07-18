import React from 'react';
import { Phone, Instagram } from 'lucide-react';
import logo from '../../assets/logo.png';
import { FaWhatsapp} from 'react-icons/fa';
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-brand-gray pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* Columna 1: Logo y Descripción */}
          <div className="md:col-span-1">
            <img src={logo} alt="Logo de Cerrajería La Nocturna" className="h-12 mb-5" />
            <p className="text-sm">Tu solución de cerrajería de urgencia, disponible 24 horas al día, 7 días a la semana.</p>
          </div>

          {/* Columna 2: Servicios */}
          <div>
            <h4 className="text-white font-montserrat font-bold mb-4">Servicios</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#services" className="hover:text-brand-yellow">Apertura de Puertas</a></li>
              <li><a href="#services" className="hover:text-brand-yellow">Llaves de Coche</a></li>
              <li><a href="#services" className="hover:text-brand-yellow">Cambio de Cerraduras</a></li>
              <li><a href="#services" className="hover:text-brand-yellow">Cajas Fuertes</a></li>
            </ul>
          </div>

          {/* Columna 3: Contacto */}
          <div>
            <h4 className="text-white font-montserrat font-bold mb-4">Contacto Urgente</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center">
                <Phone size={16} className="text-brand-yellow mr-2" />
                <a href="tel:+584242210430" className="hover:text-brand-yellow">+58 424 221 0430</a>
              </li>
              <li className="flex items-center">
                <FaWhatsapp size={16} className="text-brand-yellow mr-2" />
                <a href="https://wa.me/+584242210430" target="_blank" rel="noopener noreferrer" className="hover:text-brand-yellow">
                  WhatsApp
                </a>
              </li>
               <li className="flex items-center">
                <Instagram size={16} className="text-brand-yellow mr-2" />
                <a href="https://www.instagram.com/cerrajerialanocturna/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-yellow">
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 4: Zona de Cobertura */}
          <div>
            <h4 className="text-white font-montserrat font-bold mb-4">Zona de Cobertura</h4>
            {/* Placeholder para el mapa. Por ahora, una imagen estática. */}
            <div className="bg-gray-800 h-24 rounded-md flex items-center justify-center text-sm">
              <p>[Mapa de la ciudad aquí]</p>
            </div>
          </div>

        </div>

        {/* Línea divisoria y Copyright */}
        <div className="border-t border-gray-800 pt-6 text-center text-sm">
          <p className="mb-2">
            <a href="/aviso-legal" className="hover:text-brand-yellow mx-2">Aviso Legal</a> | 
            <a href="/politica-privacidad" className="hover:text-brand-yellow mx-2">Política de Privacidad</a>
          </p>
          <p>© {currentYear} Cerrajería La Nocturna. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;