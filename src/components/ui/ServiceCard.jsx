import React from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const ServiceCard = ({ icon, title, description, isInView, index  }) => {
   const cardVariants = {
    hidden: { 
      opacity: 0, 
      // Si el índice es par (0, 2), viene de la izquierda. Si es impar (1, 3), de la derecha.
      x: index % 1 === 0 ? -100 : 100 
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { 
        duration: 0.6, 
        // Añadimos un pequeño delay escalonado para que no aparezcan todas a la vez
        delay: index * 0.15 
      }
    }
  };

  return (
    // Envolvemos todo en un motion.div
    <motion.div
      variants={cardVariants}
      initial="hidden"
      // La animación se dispara cuando el contenedor padre (ref) está a la vista
      animate={isInView ? "visible" : "hidden"}
      className="bg-gray-800 bg-opacity-50 p-6 rounded-lg border border-gray-700
                 transform hover:scale-105 hover:border-brand-yellow transition-transform duration-300"
    >
      <div className="flex justify-center mb-4">
        <div className="text-brand-yellow">{icon}</div>
      </div>
      <h3 className="text-xl font-montserrat font-semibold text-center mb-2">{title}</h3>
      <p className="text-brand-gray text-center font-roboto">{description}</p>
    </motion.div>
  );
};

ServiceCard.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  isInView: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
};

export default ServiceCard;