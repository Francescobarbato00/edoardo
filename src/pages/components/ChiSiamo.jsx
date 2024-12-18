import React, { useEffect, useState } from "react";

const ChiSiamo = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 200); // Ritardo per l'effetto di ingresso
  }, []);

  return (
    <section
      className="relative w-full py-16 bg-white text-gray-800 overflow-hidden"
      style={{
        backgroundImage: "url('/image.jpg')", // Percorso dell'immagine
        backgroundSize: "contain", // Contiene l'immagine intera
        backgroundPosition: "center", // Centra l'immagine
        backgroundRepeat: "no-repeat", // Evita la ripetizione dell'immagine
      }}
    >
      {/* Overlay sfumato */}
      <div className="absolute inset-0 bg-white opacity-80 z-0"></div>

      <div
        className={`container mx-auto px-4 text-center relative z-10 transform transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Titolo */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          CHI SIAMO
        </h2>
        <div className="w-20 h-1 mx-auto bg-yellow-500 mb-6"></div>

        {/* Contenuto Testuale */}
        <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto text-lg md:text-xl">
          <strong className="font-semibold">
            Edilges è un’impresa edile di ristrutturazioni
          </strong>{" "}
          presente a <strong className="text-yellow-500">Roma</strong> dagli anni ’50. I lavori
          dell’azienda sono garanzia di risultati duraturi e di qualità, rispettosi
          di tutte le leggi sulla sicurezza e delle normative vigenti.
          <br />
          Un progetto guidato da <strong className="font-bold">Dario Zanini</strong> e portato
          avanti oggi con passione dal figlio Geometra,{" "}
          <strong className="text-yellow-500">Edoardo Zanini</strong>, entrambi con una consolidata
          esperienza nell’<strong className="font-bold">edilizia civile e residenziale</strong>.
        </p>
      </div>
    </section>
  );
};

export default ChiSiamo;
