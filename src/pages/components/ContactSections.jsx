import { BsGeoAlt, BsTelephone, BsEnvelope } from 'react-icons/bs';
import { useEffect, useRef, useState } from 'react';

const ContactSections = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 } // Trigger at 30% visibility
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div
        className="relative w-full h-64 sm:h-72 md:h-80 bg-cover bg-center text-white flex items-center justify-center px-6 sm:px-8 md:px-16"
        style={{ backgroundImage: `url('/contact.jpg')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Contatti
          </h1>
          <p className="text-base sm:text-lg md:text-xl mt-4 max-w-2xl mx-auto">
            Siamo pronti a trasformare le tue idee in realtà con soluzioni su misura. Contattaci oggi!
          </p>
        </div>
      </div>

      {/* Contact Info Section */}
      <div
        ref={sectionRef}
        id="contact-section"
        className={`w-full bg-gray-100 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 py-16 px-6 sm:px-8 md:px-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {[
          {
            icon: BsGeoAlt,
            title: 'Dove Siamo',
            details: ['Via del Corso, 1', '00186 Roma (RM)'],
          },
          {
            icon: BsTelephone,
            title: 'Telefono',
            details: ['+39 06 1234 5678'],
          },
          {
            icon: BsEnvelope,
            title: 'Email',
            details: ['info@azienda.it'],
          },
        ].map(({ icon: Icon, title, details }, index) => (
          <div
            key={index}
            className="group flex items-center space-x-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <Icon className="text-amber-500 text-3xl sm:text-4xl group-hover:scale-110 transition-transform duration-300" />
            <div>
              <h2 className="font-semibold text-lg sm:text-xl text-gray-900">{title}</h2>
              {details.map((detail, i) => (
                <p key={i} className="text-gray-600 text-sm sm:text-base">{detail}</p>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Map Section */}
      <div className="w-full">
        <iframe
          title="Mappa Roma"
          className="w-full h-64 sm:h-80 md:h-96 border-none"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95543.33238943161!2d12.452831672165315!3d41.90278347689888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f619e3d65a2e1%3A0x6cd301cc5d4ec78!2sRoma%2C%20RM!5e0!3m2!1sit!2sit!4v1705173000000!5m2!1sit!2sit"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactSections;