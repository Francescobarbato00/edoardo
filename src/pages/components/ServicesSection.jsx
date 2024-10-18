import React from 'react';
import Image from 'next/image';

const ServicesSection = () => {
  return (
    <section className="bg-[#EFEFEF] py-16">
      <div className="container mx-auto text-center">
        {/* Titolo della sezione */}
        <h2 className="text-yellow-500 font-semibold uppercase tracking-widest text-sm mb-2">
          Servizi
        </h2>
        <h1 className="text-4xl font-bold text-black mb-8">
          Il nostro Impegno è in ogni dettaglio
        </h1>

        {/* Griglia dei servizi */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {/* Card 1 */}
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
            <Image
              src="/0.jpg" // Percorso dell'immagine
              alt="Riqualificazioni energetiche"
              width={500}
              height={300}
              className="w-full h-auto"
            />
            <div className="p-6">
              <h3 className="text-[27px] font-poppins font-semibold leading-[32px] text-[#3F444B] mb-2">
                Riqualificazioni energetiche
              </h3>
              <p className="text-[15px] font-lato font-normal leading-[28px] text-[#3F444B] mb-4">
                Negli anni ci siamo specializzati in questa attività, operando su stabili, da piccole dimensioni a grandi condomini.
              </p>
              <button className="bg-yellow-500 text-white font-lato font-bold py-2 px-6 rounded hover:bg-yellow-600 transition duration-300 text-[14px] leading-[24px]">
                SCOPRI DI PIÙ
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
            <Image
              src="/1.jpg" // Percorso dell'immagine
              alt="Ristrutturazione e restauro facciate"
              width={500}
              height={300}
              className="w-full h-auto"
            />
            <div className="p-6">
              <h3 className="text-[27px] font-poppins font-semibold leading-[32px] text-[#3F444B] mb-2">
                Ristrutturazione e restauro facciate
              </h3>
              <p className="text-[15px] font-lato font-normal leading-[28px] text-[#3F444B] mb-4">
                Restauri conservativi e rifacimento facciate esterne con elevati standard di qualità e sicurezza.
              </p>
              <button className="bg-yellow-500 text-white font-lato font-bold py-2 px-6 rounded hover:bg-yellow-600 transition duration-300 text-[14px] leading-[24px]">
                SCOPRI DI PIÙ
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
            <Image
              src="/2.jpg" // Percorso dell'immagine
              alt="Rifacimento tetti civili e industriali"
              width={500}
              height={300}
              className="w-full h-auto"
            />
            <div className="p-6">
              <h3 className="text-[27px] font-poppins font-semibold leading-[32px] text-[#3F444B] mb-2">
                Rifacimento tetti civili e industriali
              </h3>
              <p className="text-[15px] font-lato font-normal leading-[28px] text-[#3F444B] mb-4">
                Realizziamo coperture sia sul nuovo che sul preesistente affidandoci a studi ingegneristici altamente qualificati.
              </p>
              <button className="bg-yellow-500 text-white font-lato font-bold py-2 px-6 rounded hover:bg-yellow-600 transition duration-300 text-[14px] leading-[24px]">
                SCOPRI DI PIÙ
              </button>
            </div>
          </div>
        </div>

        {/* Griglia inferiore */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Card 4 */}
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
            <Image
              src="/3.jpg" // Percorso dell'immagine
              alt="Ristrutturazione di interni"
              width={500}
              height={300}
              className="w-full h-auto"
            />
            <div className="p-6">
              <h3 className="text-[27px] font-poppins font-semibold leading-[32px] text-[#3F444B] mb-2">
                Ristrutturazione di interni
              </h3>
              <p className="text-[15px] font-lato font-normal leading-[28px] text-[#3F444B] mb-4">
                Garantiamo le massime performance sia nell’edilizia residenziale, sia nella ristrutturazione di edifici commerciali.
              </p>
              <button className="bg-yellow-500 text-white font-lato font-bold py-2 px-6 rounded hover:bg-yellow-600 transition duration-300 text-[14px] leading-[24px]">
                SCOPRI DI PIÙ
              </button>
            </div>
          </div>

          {/* Card 5 */}
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
            <Image
              src="/6.jpg" // Percorso dell'immagine
              alt="Manutenzione e global service"
              width={500}
              height={300}
              className="w-full h-auto"
            />
            <div className="p-6">
              <h3 className="text-[27px] font-poppins font-semibold leading-[32px] text-[#3F444B] mb-2">
                Manutenzione e global service
              </h3>
              <p className="text-[15px] font-lato font-normal leading-[28px] text-[#3F444B] mb-4">
                Elevata competenza tecnica del personale, organizzazione flessibile e orientata al servizio e parco macchine innovativo.
              </p>
              <button className="bg-yellow-500 text-white font-lato font-bold py-2 px-6 rounded hover:bg-yellow-600 transition duration-300 text-[14px] leading-[24px]">
                SCOPRI DI PIÙ
              </button>
            </div>
          </div>

          {/* Card 6 */}
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
            <Image
              src="/8.jpg" // Percorso dell'immagine
              alt="Contattaci per saperne di più"
              width={500}
              height={300}
              className="w-full h-auto"
            />
            <div className="p-6 text-left">
              <h3 className="text-[27px] font-poppins font-semibold leading-[32px] text-[#3F444B] mb-2">
                Contattaci per saperne di più
              </h3>
              <p className="text-[15px] font-lato font-normal leading-[28px] text-[#3F444B] mb-4">
                Siamo pronti ad ascoltare le vostre esigenze e a fornirvi soluzioni su misura. Contattateci oggi stesso per dare vita alle vostre idee.
              </p>
              <button className="bg-yellow-500 text-white font-lato font-bold py-2 px-6 rounded hover:bg-yellow-600 transition duration-300 text-[14px] leading-[24px]">
                CONTATTACI
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
