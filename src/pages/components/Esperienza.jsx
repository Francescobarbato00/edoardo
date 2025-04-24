import React, { useEffect, useState } from 'react';

const Esperienza = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100); // Reduced delay for smoother effect
  }, []);

  return (
    <section
      className="relative w-full py-20 bg-gray-900 text-white overflow-hidden"
      style={{
        backgroundImage: `url('/background-image.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50 z-0"></div>

      <div
        className={`container mx-auto px-6 sm:px-8 text-center relative z-10 transform transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
          30 Anni di Passione
        </h2>
        <div className="w-16 h-1 mx-auto bg-amber-500 mb-8"></div>

        {/* Content */}
        <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed max-w-4xl mx-auto">
          <strong className="font-semibold">Edilges</strong> rappresenta eccellenza e affidabilità nelle{' '}
          <strong className="text-amber-500">ristrutturazioni</strong> e costruzioni. Con un team qualificato, offriamo soluzioni personalizzate che combinano{' '}
          <strong>qualità</strong>, <strong>puntualità</strong> e <strong>innovazione</strong>.
          <br />
          Realizziamo progetti per clienti privati e commerciali, rispettando normative di sicurezza e sostenibilità, con attenzione ai dettagli e materiali di alta qualità.
          <br />
          Affidati a noi per trasformare il tuo spazio in un ambiente funzionale e moderno.
        </p>

        {/* CTA Button */}
        <div className="mt-10">
          <a
            href="/contattaci"
            className="inline-block bg-amber-500 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-amber-600 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            Contattaci Ora
          </a>
        </div>
      </div>
    </section>
  );
};

export default Esperienza;