import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

const WorksGallery = () => {
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
      { threshold: 0.2 } // L'effetto si attiva quando il 20% della sezione è visibile
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#262626] py-16 px-4 overflow-hidden">
      <div className="container mx-auto flex justify-between items-center mb-8">
        {/* Left Title */}
        <h2 className="text-white text-4xl font-bold">
          Lavori Eseguiti
          <div className="w-12 h-1 bg-yellow-500 mt-2"></div>
        </h2>

        {/* Right Button */}
        <a
          href="/gallery"
          className="text-white border border-white px-6 py-3 hover:bg-white hover:text-gray-900 transition"
        >
          GUARDA TUTTI
        </a>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {[
          '/9.jpg',
          '/10.jpg',
          '/11.jpg',
          '/12.jpg',
          '/13.jpg',
          '/14.jpg',
        ].map((src, index) => (
          <div
            key={index}
            className={`relative transform transition-all duration-1000 ease-out ${
              isVisible
                ? 'opacity-100 scale-100'
                : 'opacity-0 scale-90'
            }`}
            style={{ transitionDelay: `${index * 150}ms` }}
          >
            <Image
              src={src}
              alt={`Lavoro ${index + 1}`}
              width={400}
              height={300}
              className="object-cover w-full h-full rounded-lg shadow-lg"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorksGallery;
