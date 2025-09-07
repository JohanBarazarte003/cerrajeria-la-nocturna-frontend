import React from 'react';
import { Helmet } from 'react-helmet-async';

// Importamos los componentes de layout y UI
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Button from '../components/ui/Button';
import { Phone, ShieldCheck, Clock, Wrench } from 'lucide-react';

const ServicioAperturaPage = () => {
  const handleCall = () => {
    window.location.href = 'tel:+584242210430';
  };

  return (
    <div className="bg-brand-dark text-white font-roboto antialiased">
      <Helmet>
        <title>Apertura de Puertas de Emergencia a Domicilio | Cerrajero en Caracas</title>
        <meta 
          name="description" 
          content="Servicio de cerrajero de emergencia para apertura de puertas de casas, apartamentos y oficinas en Caracas. Disponibles 24/7, llegamos rápido a tu domicilio." 
        />
      </Helmet>

      <Header />

      <main>
        {/* Hero Section Específico para este Servicio */}
        <section className="pt-32 pb-20 text-center bg-gray-800">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl sm:text-5xl font-montserrat font-bold leading-tight mb-4 text-brand-yellow">
              Servicio de Apertura de Emergencia a Domicilio en Caracas
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              ¿Te quedaste fuera? No te preocupes. Abrimos tu puerta sin causar daños, de forma rápida y profesional.
            </p>
            <Button
              variant="primary"
              size="lg"
              leftIcon={<Phone size={20} />}
              onClick={handleCall}
            >
              ¡Llama Ahora! Urgencias 24/7
            </Button>
          </div>
        </section>

        {/* Sección de Tipos de Apertura */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-montserrat font-bold mb-12">Nos Especializamos en Todo Tipo de Aperturas</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-800 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-brand-yellow">Puertas de Hogar</h3>
                <p>Apertura de puertas principales de casas y apartamentos, habitaciones, rejas y más.</p>
              </div>
              <div className="bg-gray-800 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-brand-yellow">Oficinas y Locales</h3>
                <p>Servicios para empresas, apertura de santamarías, despachos y locales comerciales.</p>
              </div>
              <div className="bg-gray-800 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-brand-yellow">Cerraduras de Alta Seguridad</h3>
                <p>Contamos con las herramientas para abrir cerraduras de seguridad complejas sin dañar tu propiedad.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Sección Por Qué Elegirnos */}
        <section className="py-20 bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-montserrat font-bold">Tu Tranquilidad es Nuestra Prioridad</h2>
              <div className="w-24 h-1 bg-brand-yellow mx-auto mt-4"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div className="flex flex-col items-center">
                <Clock size={48} className="text-brand-yellow mb-4" />
                <h3 className="text-xl font-bold mb-2">Disponibles 24/7</h3>
                <p>Atendemos tu emergencia a cualquier hora, cualquier día de la semana.</p>
              </div>
              <div className="flex flex-col items-center">
                <Wrench size={48} className="text-brand-yellow mb-4" />
                <h3 className="text-xl font-bold mb-2">Sin Daños a tu Propiedad</h3>
                <p>Utilizamos técnicas profesionales para garantizar una apertura limpia y segura.</p>
              </div>
              <div className="flex flex-col items-center">
                <ShieldCheck size={48} className="text-brand-yellow mb-4" />
                <h3 className="text-xl font-bold mb-2">Técnicos de Confianza</h3>
                <p>Nuestro equipo está calificado y es de total confianza para tu seguridad.</p>
              </div>
               <div className="flex flex-col items-center">
                <Phone size={48} className="text-brand-yellow mb-4" />
                <h3 className="text-xl font-bold mb-2">Atención Inmediata</h3>
                <p>Priorizamos tu llamada y llegamos rápido a tu domicilio en Caracas.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ServicioAperturaPage;
