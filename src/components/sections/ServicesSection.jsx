import React from 'react';
import ServiceCard from '../ui/ServiceCard';
import Section from './Section'; // Usamos nuestro contenedor genérico
import { useInView } from 'framer-motion'; 
import { useRef } from 'react';

import { KeyRound, Car, ShieldCheck, Lock } from 'lucide-react'; // Iconos para los servicios

// Datos de los servicios. En un futuro, esto podría venir de una API.
const servicesData = [
  {
    icon: <Lock size={48} />,
    title: 'Apertura de Puertas',
    description: 'Servicio de urgencia 24/7 para casas y apartamentos.',
  },
  {
    icon: <Car size={48} />,
    title: 'Llaves de Coche',
    description: 'Duplicado y codificación de llaves con chip para todas las marcas.',
  },
  {
    icon: <KeyRound size={48} />,
    title: 'Cambio de Cerraduras',
    description: 'Aumenta tu seguridad con cerraduras de alta calidad.',
  },
  {
    icon: <ShieldCheck size={48} />,
    title: 'Cajas Fuertes',
    description: 'Instalación, reparación y apertura de cajas de seguridad.',
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  
  // 4. Usar el hook useInView
  const isInView = useInView(ref, { once: true, amount: 0.3 }); // once:true para que la animación solo ocurra una vez. amount: 0.3 para que se dispare cuando el 30% del elemento sea visible.

  return (
    <Section>
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-montserrat font-bold">Nuestros Servicios</h2>
        <div className="w-24 h-1 bg-brand-yellow mx-auto mt-4"></div>
      </div>
      
      {/* 5. Asignar la referencia al contenedor de la cuadrícula */}
      <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {servicesData.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
            // 6. Pasamos el estado de visibilidad y el índice a cada tarjeta
            isInView={isInView}
            index={index}
          />
        ))}
      </div>
    </Section>
  );
};

export default ServicesSection;