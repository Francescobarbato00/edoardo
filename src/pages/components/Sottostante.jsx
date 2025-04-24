import React, { useEffect, useRef, useState } from 'react';

const Sottostante = () => {
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
    <div
      ref={sectionRef}
      id="sottostante"
      className={`bg-white px-6 sm:px-8 md:px-16 py-16 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="flex flex-col md:flex-row md:justify-between md:items-center space-y-8 md:space-y-0">
        {/* Company Info */}
        <div className="md:w-1/3 text-center md:text-left">
          <h2 className="text-amber-500 text-3xl sm:text-4xl font-extrabold tracking-wide">
            Edilges
          </h2>
          <h3 className="text-gray-900 text-xl sm:text-2xl font-semibold mt-2">
            Impresa di Costruzioni
          </h3>
          <p className="text-gray-600 text-base sm:text-lg mt-4 hover:text-amber-500 transition-colors duration-300">
            📍 Via Fittizia, 123 – 00100 Roma
          </p>
          <p className="text-gray-600 text-base sm:text-lg mt-2">
            📞 <span className="font-semibold">Telefono:</span> 06 1234 5678
          </p>
          <p className="text-gray-600 text-base sm:text-lg mt-2">
            ✉️ <span className="font-semibold">E-mail:</span> info@edilges.com
          </p>
        </div>

        {/* Company Details */}
        <div className="md:w-1/3 text-center md:text-left">
          <p className="text-gray-600 text-base sm:text-lg hover:text-amber-500 transition-colors duration-300">
            🏢 <span className="font-semibold">P.IVA:</span> 12345678901
          </p>
          <p className="text-gray-600 text-base sm:text-lg mt-2">
            📜 <span className="font-semibold">REA:</span> RM 123456
          </p>
          <p className="text-gray-600 text-base sm:text-lg mt-2">
            🔒 <span className="font-semibold">PEC:</span> edilges@pec.it
          </p>
        </div>

        {/* Logo */}
        <div className="md:w-1/3 flex justify-center md:justify-end">
          <div className="h-16 w-16 bg-amber-500 flex items-center justify-center rounded-full shadow-lg hover:scale-105 transition-transform duration-300">
            <span className="text-white font-extrabold text-xl sm:text-2xl">EG</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sottostante;