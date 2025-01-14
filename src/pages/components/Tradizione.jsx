import React, { useEffect, useState } from "react";

const Tradizione = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("tradizione-section");
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
      id="tradizione-section"
      className={`flex flex-col md:flex-row items-center justify-between w-full px-6 md:px-20 py-12 transition-all duration-700 ${
        isVisible ? "fade-in-up" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Testo a sinistra con più spazio a destra */}
      <div className="w-full md:w-1/2 text-center md:text-left md:pr-12">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800">LA NOSTRA TRADIZIONE</h1>
        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
          Da generazioni, la nostra impresa edile si impegna a costruire il futuro con passione e qualità.
          Offriamo soluzioni innovative nel settore delle costruzioni, garantendo sicurezza, precisione
          e rispetto delle tradizioni architettoniche italiane. Il nostro obiettivo è realizzare progetti 
          che durino nel tempo, mantenendo un forte legame con l’artigianalità e l’innovazione tecnologica.
        </p>
      </div>

      {/* Immagine a destra con più spazio a sinistra */}
      <div className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center md:pl-12">
        <img
          src="/tradizione.jpg"
          alt="Edilizia Tradizionale"
          className="max-w-full h-auto rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
        />
      </div>
    </div>
  );
};

export default Tradizione;
