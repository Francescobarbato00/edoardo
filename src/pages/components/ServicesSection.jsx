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
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 } // Increased to 30% for smoother trigger
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-gray-100 py-20">
      <div className="container mx-auto text-center px-6 sm:px-8">
        {/* Section Title */}
        <h2
          className={`text-amber-500 font-semibold uppercase tracking-widest text-xs mb-3 transform transition-all duration-700 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : '-translate-y-6 opacity-0'
          }`}
        >
          Servizi
        </h2>
        <h1
          className={`text-3xl sm:text-4xl font-extrabold text-gray-900 mb-10 transform transition-all duration-700 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : '-translate-y-6 opacity-0'
          }`}
        >
          Impegno in Ogni Dettaglio
        </h1>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Riqualificazioni Energetiche',
              description:
                'Specializzati in interventi su edifici di ogni dimensione, dai piccoli stabili ai grandi condomini, per migliorare l’efficienza energetica.',
              img: '/0.jpg',
            },
            {
              title: 'Restauro Facciate',
              description:
                'Rifacimento e restauro conservativo di facciate esterne con standard elevati di qualità e sicurezza.',
              img: '/1.jpg',
            },
            {
              title: 'Rifacimento Tetti',
              description:
                'Coperture per edifici civili e industriali, su nuove costruzioni o strutture esistenti, con studi ingegneristici qualificati.',
              img: '/2.jpg',
            },
          ].map((service, index) => (
            <div
              key={index}
              className={`group bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-700 ease-out hover:shadow-xl hover:-translate-y-2 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Image
                src={service.img}
                alt={service.title}
                width={500}
                height={300}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <a
                  href="/services"
                  className="inline-block bg-amber-500 text-white font-semibold py-2 px-5 rounded-full hover:bg-amber-600 transition-all duration-300 hover:-translate-y-1"
                >
                  Scopri di Più
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;