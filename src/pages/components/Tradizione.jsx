import React, { useEffect, useRef, useState } from 'react';

const Tradizione = () => {
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
    <section
      ref={sectionRef}
      className={`flex flex-col md:flex-row items-center justify-between w-full px-6 sm:px-8 md:px-16 py-20 bg-white transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {/* Left: Text */}
      <div className="w-full md:w-1/2 text-center md:text-left md:pr-10 mb-8 md:mb-0">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
          La Nostra Tradizione
        </h2>
        <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-md mx-auto md:mx-0">
          Da generazioni, combiniamo passione e qualità per costruire il futuro. Offriamo soluzioni innovative, rispettando le tradizioni architettoniche italiane e integrando tecnologie all’avanguardia.
        </p>
      </div>

      {/* Right: Image */}
      <div className="w-full md:w-1/2 flex justify-center md:pl-10">
        <img
          src="/tradizione.jpg"
          alt="Tradizione edilizia"
          className="max-w-full h-auto rounded-xl shadow-xl transform hover:scale-105 transition-transform duration-300"
        />
      </div>
    </section>
  );
};

export default Tradizione;