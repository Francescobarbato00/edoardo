import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

const ServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect(); // Disconnette l'osservatore dopo aver attivato l'effetto
          }
        });
      },
      { threshold: 0.2 } // L'effetto si attiva quando il 20% della sezione entra nello schermo
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#EFEFEF] py-16">
      <div className="container mx-auto text-center px-4">
        {/* Titolo della sezione */}
        <h2
          className={`text-yellow-500 font-semibold uppercase tracking-widest text-sm mb-2 transform transition-all duration-1000 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0'
          }`}
        >
          Servizi
        </h2>
        <h1
          className={`text-4xl font-bold text-black mb-8 transform transition-all duration-1000 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0'
          }`}
        >
          Il nostro Impegno è in ogni dettaglio
        </h1>

        {/* Griglia dei servizi */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {[
            {
              title: 'Riqualificazioni energetiche',
              description:
                'Negli anni ci siamo specializzati in questa attività, operando su stabili, da piccole dimensioni a grandi condomini.',
              img: '/0.jpg',
            },
            {
              title: 'Ristrutturazione e restauro facciate',
              description:
                'Restauri conservativi e rifacimento facciate esterne con elevati standard di qualità e sicurezza.',
              img: '/1.jpg',
            },
            {
              title: 'Rifacimento tetti civili e industriali',
              description:
                'Realizziamo coperture sia sul nuovo che sul preesistente affidandoci a studi ingegneristici altamente qualificati.',
              img: '/2.jpg',
            },
          ].map((service, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 transform transition-all duration-1000 ease-out ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <Image
                src={service.img}
                alt={service.title}
                width={500}
                height={300}
                className="w-full h-auto"
              />
              <div className="p-6">
                <h3 className="text-[27px] font-poppins font-semibold leading-[32px] text-[#3F444B] mb-2">
                  {service.title}
                </h3>
                <p className="text-[15px] font-lato font-normal leading-[28px] text-[#3F444B] mb-4">
                  {service.description}
                </p>
                <button className="bg-yellow-500 text-white font-lato font-bold py-2 px-6 rounded hover:bg-yellow-600 transition duration-300 text-[14px] leading-[24px]">
                  SCOPRI DI PIÙ
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
