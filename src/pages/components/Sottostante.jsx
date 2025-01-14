import React, { useEffect, useState } from "react";

const Sottostante = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("sottostante");
      if (section) {
        const top = section.getBoundingClientRect().top;
        if (top < window.innerHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      id="sottostante"
      className={`bg-white px-6 sm:px-12 md:px-20 py-12 transition-all duration-700 ${
        isVisible ? "fade-in-up" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="flex flex-col md:flex-row md:justify-between md:items-center space-y-8 md:space-y-0">
        {/* Info Azienda */}
        <div className="md:w-1/3 text-center md:text-left">
          <h2 className="text-yellow-500 text-4xl font-extrabold tracking-wide animate-fade-in">
            Edilges
          </h2>
          <h3 className="text-gray-800 text-2xl font-semibold mt-2">
            Impresa di Costruzioni
          </h3>
          <p className="text-gray-700 mt-4 text-lg hover:text-gray-900 transition duration-300">
            📍 Via Fittizia, 123 – 00100 ROMA
          </p>
          <p className="mt-2 text-gray-800 text-lg">
            📞 <span className="font-bold">Telefono:</span> 06 1234 5678
          </p>
          <p className="mt-2 text-gray-800 text-lg">
            ✉️ <span className="font-bold">E-mail:</span> info@edilges.com
          </p>
        </div>

        {/* Dettagli Azienda */}
        <div className="md:w-1/3 text-center md:text-left">
          <p className="text-gray-800 text-lg hover:text-gray-900 transition duration-300">
            🏢 <span className="font-bold">P.IVA:</span> 12345678901
          </p>
          <p className="mt-2 text-gray-800 text-lg">
            📜 <span className="font-bold">REA:</span> RM 123456
          </p>
          <p className="mt-2 text-gray-800 text-lg">
            🔒 <span className="font-bold">PEC:</span> edilges@pec.it
          </p>
        </div>

        {/* Logo o Immagine */}
        <div className="md:w-1/3 flex justify-center md:justify-end">
          <div className="h-20 w-20 bg-yellow-500 flex items-center justify-center rounded-full shadow-lg hover:scale-105 transition-transform duration-300">
            <span className="text-white font-extrabold text-2xl">EG</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sottostante;
