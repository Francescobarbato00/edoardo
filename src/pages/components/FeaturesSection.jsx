import React from 'react';
import Image from 'next/image';

const FeaturesSection = () => {
  return (
    <section className="bg-[#262626] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="flex flex-col items-start text-left">
            <div className="flex items-center">
              <Image
                src="/icon-1.png" // Percorso aggiornato per l'immagine icon-1.png
                alt="Trasparenza"
                width={60}
                height={60}
              />
              <h3 className="text-white text-[18px] font-poppins font-semibold leading-[45px] ml-4">
                Trasparenza
              </h3>
            </div>
            <p className="text-[15px] text-[#aaaaaa] font-lato leading-[28px] mt-2">
              La trasparenza di Edilges si riflette nell’apertura totale verso clienti, fornitori e collaboratori, garantendo fiducia e chiarezza.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-start text-left">
            <div className="flex items-center">
              <Image
                src="/icon-2.png" // Percorso aggiornato per l'immagine icon-2.png
                alt="Esperienza"
                width={60}
                height={60}
              />
              <h3 className="text-white text-[18px] font-poppins font-semibold leading-[45px] ml-4">
                Esperienza
              </h3>
            </div>
            <p className="text-[15px] text-[#aaaaaa] font-lato leading-[28px] mt-2">
              Da oltre 20 anni operiamo sul patrimonio edilizio esistente, perseguendo una filosofia conservativa e adottando tecniche innovative.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-start text-left">
            <div className="flex items-center">
              <Image
                src="/icon-3.png" // Percorso aggiornato per l'immagine icon-3.png
                alt="Tempestività"
                width={60}
                height={60}
              />
              <h3 className="text-white text-[18px] font-poppins font-semibold leading-[45px] ml-4">
                Tempestività
              </h3>
            </div>
            <p className="text-[15px] text-[#aaaaaa] font-lato leading-[28px] mt-2">
              EDILGES  si distingue per la sua tempestività nell’esecuzione dei lavori, garantendo risultati rapidi senza compromettere la qualità.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
