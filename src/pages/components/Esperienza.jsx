import React, { useEffect, useState } from "react";

const Esperienza = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 200); // Ritardo per attivare l'effetto
  }, []);

  return (
    <section
      className="relative w-full py-16 bg-gray-900 text-white overflow-hidden"
      style={{
        backgroundImage: "url('/background-image.jpg')", // Inserisci l'immagine di sfondo
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Contenuto principale */}
      <div
        className={`container mx-auto px-6 text-center transform transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Titolo */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          30 ANNI DI PASSIONE
        </h2>
        <div className="w-20 h-1 mx-auto bg-yellow-500 mb-8"></div>

        {/* Testo contenuto */}
        <p className="leading-relaxed text-lg md:text-xl max-w-4xl mx-auto">
          La nostra azienda <strong>Edilges</strong> è sinonimo di eccellenza e affidabilità nel
          campo delle <strong className="text-yellow-500">ristrutturazioni</strong> e delle costruzioni. Con
          un team di esperti qualificati, ci dedichiamo a offrire soluzioni personalizzate per
          ogni tipo di esigenza edilizia, combinando <strong>qualità</strong>, <strong>puntualità</strong> e{" "}
          <strong>innovazione</strong>.
          <br />
          Nel corso degli anni, abbiamo realizzato progetti su misura per clienti privati e
          commerciali, garantendo risultati che rispecchiano le aspettative e rispettando
          tutte le normative vigenti in materia di sicurezza e sostenibilità.
          <br />
          Che si tratti di ristrutturazioni interne, esterne o di nuove costruzioni, ci
          impegniamo a ridurre i tempi e i costi con un'attenzione particolare al dettaglio
          e alla qualità dei materiali utilizzati.
          <br />
          Affidati a noi per trasformare il tuo spazio in un ambiente funzionale,
          sicuro e all'avanguardia.
        </p>

        {/* Bottone CTA */}
        <div className="mt-8">
          <a
            href="#contattaci"
            className="inline-block bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-6 rounded-md shadow-lg transition-transform duration-300 transform hover:scale-105"
          >
            CONTATTACI
          </a>
        </div>
      </div>
    </section>
  );
};

export default Esperienza;
