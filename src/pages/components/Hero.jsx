import React, { useState, useEffect } from "react";

const Hero = () => {
  const texts = [
    "Controsoffitti Moderni",
    "Ristrutturazioni di Qualità",
    "Manutenzione e Global Service",
  ];

  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 5000); // Reduced to 5 seconds for better engagement

    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover brightness-90"
      >
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/30"></div>

      {/* Hero Text Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 sm:px-6">
        <h1
          key={currentTextIndex}
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight transition-all duration-1000 ease-in-out transform opacity-0 translate-y-8 animate-slide-in"
        >
          {texts[currentTextIndex]}
        </h1>
        <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl opacity-0 transition-all duration-1000 delay-300 ease-in-out animate-fade-in">
          Soluzioni edili innovative per trasformare i tuoi spazi con stile e funzionalità.
        </p>
        <a
          href="/contact"
          className="mt-6 inline-block px-6 py-3 bg-amber-500 text-white font-semibold rounded-full shadow-lg hover:bg-amber-600 transition-all duration-300 transform hover:scale-105"
        >
          Contattaci Ora
        </a>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center items-start p-2">
          <div className="w-1 h-3 bg-white rounded-full animate-bounce"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;