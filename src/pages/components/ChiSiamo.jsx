import React, { useEffect, useState } from 'react';

const ChiSiamo = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100); // Reduced delay for smoother effect
  }, []);

  return (
    <section
      className="relative w-full py-20 bg-gray-50 text-gray-900 overflow-hidden"
      style={{
        backgroundImage: `url('/image.jpg')`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-white/60 z-0"></div>

      <div
        className={`container mx-auto px-6 sm:px-8 text-center relative z-10 transform transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
          Chi Siamo
        </h2>
        <div className="w-16 h-1 mx-auto bg-amber-500 mb-8"></div>

        {/* Content */}
        <p className="text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
          <strong className="font-semibold">Edilges</strong> è un’impresa edile di ristrutturazioni con sede a{' '}
          <strong className="text-amber-500">Roma</strong> dagli anni ’50. Garantiamo risultati duraturi e di qualità, rispettando le normative di sicurezza.
          <br />
          Fondata da <strong className="font-bold">Dario Zanini</strong> e guidata oggi con passione dal figlio Geometra{' '}
          <strong className="text-amber-500">Edoardo Zanini</strong>, la nostra esperienza si concentra sull’
          <strong className="font-bold">edilizia civile e residenziale</strong>.
        </p>
      </div>
    </section>
  );
};

export default ChiSiamo;