import React, {useRef} from 'react';
import Section from './Section';
import { Clock, Rocket, Shield, Tag } from 'lucide-react'; // Iconos representativos
// eslint-disable-next-line no-unused-vars
import { motion, useInView } from 'framer-motion';

// Datos de los beneficios para mantener el componente limpio
const benefitsData = [
  {
    icon: <Clock size={40} className="mx-auto" />,
    title: 'Disponibles 24/7',
    description: 'Atendemos urgencias a cualquier hora, todos los días del año.',
  },
  {
    icon: <Rocket size={40} className="mx-auto" />,
    title: 'Llegada Rápida',
    description: 'Nos comprometemos a llegar a tu ubicación en tiempo récord.',
  },
  {
    icon: <Shield size={40} className="mx-auto" />,
    title: 'Técnicos Certificados',
    description: 'Nuestro equipo está formado por profesionales con experiencia.',
  },
  {
    icon: <Tag size={40} className="mx-auto" />,
    title: 'Precios Transparentes',
    description: 'Te damos un presupuesto claro y sin sorpresas antes de empezar.',
  },
];

const WhyUsSection = () => {
   const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // 3. Definir las variantes de animación para el contenedor principal
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        // Esto hace que los hijos se animen secuencialmente
        staggerChildren: 0.2,
      },
    },
  };
  
  // 4. Definir las variantes para cada ítem individual
  const itemVariants = {
    hidden: { opacity: 0, y: 50 }, // Empiezan invisibles y 50px más abajo
    visible: {
      opacity: 1,
      y: 0, // Terminan visibles y en su posición original
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  };

  return (
    <Section className="bg-brand-yellow text-brand-dark">
      {/* 5. Usamos la referencia en el contenedor que queremos observar */}
      <div ref={ref}>
        <motion.div
          className="text-center mb-12"
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <h2 className="text-3xl sm:text-4xl font-montserrat font-bold">¿Por Qué Confiar en Nosotros?</h2>
          <div className="w-24 h-1 bg-brand-dark mx-auto mt-4"></div>
        </motion.div>

        {/* 6. Envolvemos la cuadrícula en un motion.div con las variantes del contenedor */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {benefitsData.map((benefit, index) => (
            // 7. Cada ítem de la cuadrícula es un motion.div con las variantes de ítem
            <motion.div key={index} className="text-center" variants={itemVariants}>
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-montserrat font-semibold mb-2">{benefit.title}</h3>
              <p className="font-roboto leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
};

export default WhyUsSection;