import React from 'react';
import Image from 'next/image';

const RenovationSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Left Side: Image */}
        <div className="relative w-full md:w-1/2 mb-8 md:mb-0">
          {/* Decorative element */}
          <div className="absolute -top-4 -left-4 border-4 border-yellow-500 w-80 h-80 z-10"></div>

          <div className="relative z-20">
            <Image
              src="/1.jpg" // Inserisci qui il percorso corretto della tua immagine
              alt="Construction workers"
              width={500}
              height={500}
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Additional Decorative Dotted element */}
          <div className="absolute -bottom-6 -right-8 w-40 h-40 bg-[url('/dots-pattern.png')] opacity-50 z-0"></div>
        </div>

        {/* Right Side: Text Content */}
        <div className="w-full md:w-1/2 text-left">
          <span className="text-yellow-500 font-semibold uppercase tracking-widest text-sm">Dal 1993</span>
          <h2 className="text-3xl font-bold text-black leading-tight mt-2">
            Ristrutturazioni, consolidamento, recupero e restauro
          </h2>
          <p className="text-gray-600 text-lg mt-4">
            Da oltre 20 anni operiamo sul patrimonio edilizio esistente, perseguendo una filosofia conservativa e adottando tecniche riprese dalla tradizione integrando sistemi e prodotti innovativi. Abbiamo da sempre cercato di privilegiare la soddisfazione e la fidelizzazione del cliente, i migliori veicoli promozionali per garantire la continuità e la crescita. Operiamo nel settore dell’edilizia con un approccio del tutto innovativo e una riconoscenza altissima nel territorio piemontese e non solo.
          </p>

          {/* Button */}
          <button className="bg-yellow-500 text-white font-bold py-3 px-6 mt-6 hover:bg-yellow-600 transition duration-300">
            SCOPRI DI PIÙ
          </button>
        </div>
      </div>
    </section>
  );
};

export default RenovationSection;