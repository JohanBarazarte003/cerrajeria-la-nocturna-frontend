import React from 'react';

// Importamos los componentes de layout
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

// Importamos las secciones completadas de la página
import HeroSection from '../components/sections/HeroSections';
import ServicesSection from '../components/sections/ServicesSection';

// Aquí importaremos el resto de las secciones a medida que las construyamos
import WhyUsSection from '../components/sections/WhyUsSection';
// import TestimonialsSection from '../components/sections/TestimonialsSection';
// import ContactFormSection from '../components/sections/ContactFormSection';

/**
 * Componente principal de la página de inicio.
 * Organiza todas las secciones en el orden correcto.
 */
function HomePage({startAnimations}) {
  return (
    // La clase 'antialiased' de Tailwind mejora el renderizado de las fuentes
    <div className="bg-brand-dark text-white font-roboto antialiased">
      <Header />
      <main>
        <HeroSection startAnimations={startAnimations} />
        <ServicesSection />
        {/* Aquí irán las futuras secciones */}
        <WhyUsSection />
        {/* <TestimonialsSection /> */}
        {/* <ContactFormSection /> */}
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;