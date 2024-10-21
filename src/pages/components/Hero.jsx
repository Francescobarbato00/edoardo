import React, { useState, useEffect } from "react";

const Hero = () => {
  // Lista dei testi
  const texts = [
    "RIFACIMENTO TETTI CIVILI E INDUSTRIALI",
    "RISTRUTTURAZIONE DI INTERNI",
    "MANUTENZIONE E GLOBAL SERVICE"
  ];

  // Stato per tracciare l'indice del testo corrente
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  // Cambia testo ogni 10 secondi
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 10000); // 10000ms = 10 secondi

    return () => clearInterval(interval); // Pulisce l'intervallo quando il componente viene smontato
  }, [texts.length]);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay to darken the video */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Hero Text Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        {/* Animazione di slide-in dall'alto con dissolvenza */}
        <h1
          key={currentTextIndex} // Importante per il ri-render dinamico
          className="text-5xl md:text-7xl font-bold transition-all duration-1000 ease-in-out transform opacity-0 translate-y-12 animate-fade-slide-in"
        >
          {texts[currentTextIndex]}
        </h1>
      </div>
    </div>
  );
};

export default Hero;
