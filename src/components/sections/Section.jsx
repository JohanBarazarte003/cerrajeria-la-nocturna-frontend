import React from 'react';
import PropTypes from 'prop-types';

/**
 * Un componente contenedor reutilizable para estandarizar el espaciado
 * y el ancho de las secciones principales de la página.
 */
const Section = ({ children, className = '' }) => {
  // Combinamos las clases base con cualquier clase adicional que se pase como prop
  const combinedClasses = [
    'w-full',                      // Ocupa todo el ancho disponible
    'py-16 sm:py-20 lg:py-24',     // Padding vertical (arriba y abajo) que se ajusta a diferentes tamaños de pantalla
    'px-4 sm:px-6 lg:px-8',        // Padding horizontal (izquierda y derecha)
    className                      // Permite añadir clases personalizadas desde fuera
  ].join(' ');

  return (
    <section className={combinedClasses}>
      <div className="container mx-auto">
        {children}
      </div>
    </section>
  );
};

Section.propTypes = {
  /**
   * El contenido que se renderizará dentro de la sección.
   * Usualmente, serán los títulos, cuadrículas, etc., de la sección.
   */
  children: PropTypes.node.isRequired,
  /**
   * Permite pasar clases de Tailwind CSS adicionales para personalizar
   * una sección específica si es necesario (ej. un color de fondo diferente).
   */
  className: PropTypes.string,
};

export default Section;