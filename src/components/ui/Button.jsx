import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  leftIcon = null,
  rightIcon = null,
  className = '',
  type = 'button',
}) => {
  // --- Estilos base del botón ---
  const baseStyles = 'inline-flex items-center justify-center font-bold rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-dark';

  // --- Estilos por variante (color) ---
  const variantStyles = {
    primary: 'bg-brand-yellow text-brand-dark hover:bg-yellow-300 focus:ring-yellow-400',
    secondary: 'bg-transparent border-2 border-brand-yellow text-brand-yellow hover:bg-brand-yellow hover:text-brand-dark focus:ring-yellow-400',
  };

  // --- Estilos por tamaño ---
  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg font-montserrat uppercase tracking-wider', // Tamaño para los CTAs principales
  };
  
  // Combinamos todas las clases de Tailwind
  const combinedClasses = [
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    className,
  ].join(' ');

  return (
    <button type={type} className={combinedClasses} onClick={onClick}>
      {leftIcon && <span className="mr-2">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="ml-2">{rightIcon}</span>}
    </button>
  );
};

// --- Definición de PropTypes para validación y autocompletado ---
Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(['primary', 'secondary']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  className: PropTypes.string,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
};

export default Button;