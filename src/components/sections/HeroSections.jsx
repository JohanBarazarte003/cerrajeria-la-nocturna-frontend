import React from 'react';
import Button from '../ui/Button';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

import { Phone, MessageCircle } from 'lucide-react'; // Importamos los iconos necesarios
import { FaWhatsapp} from 'react-icons/fa';

// Importamos la imagen de fondo y el logo (que usaremos aquí también para mayor impacto)
import heroBackground from '../../assets/bg-background.webp';
// import logoWhite from '../../assets/images/logo-la-nocturna-blanco.png';

const HeroSection = ( {startAnimations}) => {
  const handleCall = () => {
    window.location.href = 'tel:+584242210430';
  };

  const handleWhatsApp = () => {
    // Asumiendo que tenemos un número de WhatsApp configurado
    window.open('https://wa.me/+584242210430', '_blank');
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.2, duration: 0.8, ease: "easeOut" }
    }),
  };
  
  // Definimos las variantes para los botones
  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (custom) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: custom * 0.2, duration: 0.6, ease: "backOut" }
    }),
  };


  return (
    // Contenedor principal que ocupa toda la altura visible y tiene la imagen de fondo
    <section
      className="relative min-h-screen flex flex-col items-center justify-center text-center text-white py-12 px-4
                 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroBackground})` }}
    >
      {/* Overlay para oscurecer la imagen y asegurar legibilidad del texto */}
      <div className="absolute inset-0 bg-brand-dark opacity-60"></div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Logo en un tamaño más grande para el hero */}
        {/* <img src='' alt="Logo Cerrajería La Nocturna" className="h-24 w-auto mx-auto mb-6" /> */}

        {/* Título principal (H1) - Crucial para SEO */}
        <motion.h1 
          className="text-4xl sm:text-5xl lg:text-6xl font-montserrat font-bold leading-tight mb-4"
          variants={textVariants}
          initial="hidden"
           animate={startAnimations ? "visible" : "hidden"}
          custom={1} // custom prop para el delay
           
        >
          Cerrajero 24 Horas en Caracas
        </motion.h1>

        {/* Subtítulo */}
       <motion.p 
          className="text-xl sm:text-2xl lg:text-3xl font-roboto font-normal mb-8"
          variants={textVariants}
          initial="hidden"
          animate={startAnimations ? "visible" : "hidden"}
          custom={2}
        >
         La respuesta a tu emergencia al alcanze de un Click  Te atendemos en cuestión de mi mitnutos
        </motion.p>

        {/* Botones de Llamada a la Acción */}
        <div className="flex flex-col sm:flex-row justify-center gap-6">
       <motion.div variants={buttonVariants} initial="hidden"  animate={startAnimations ? "visible" : "hidden"} custom={3}>
          <Button
            variant="primary"
            size="lg"
            leftIcon={<Phone size={20} />}
            onClick={handleCall}
          >
            Llamar Ahora
          </Button>
          </motion.div>

          <motion.div variants={buttonVariants} initial="hidden"  animate={startAnimations ? "visible" : "hidden"} custom={3.5}>
          <Button
            variant="secondary"
            size="lg"
            leftIcon={<FaWhatsapp size={20} />}
            onClick={handleWhatsApp}
          >
            Enviar Mensaje (WhatsApp)
          </Button>
          </motion.div>
        </div>

        {/* Texto de confianza bajo los botones */}
         <motion.p 
          className="text-lg font-roboto font-normal mt-10 text-brand-gray"
          variants={textVariants}
          
           animate={startAnimations ? "visible" : "hidden"}
          custom={4}
        >
          Más de 15 años de experiencia, contamos con un equipo altamente capacitado y con una gran experiencia en el área de la urgencia.
        </motion.p>
      </div>
    </section>
  );
};

export default HeroSection;