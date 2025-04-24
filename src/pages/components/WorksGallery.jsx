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
      { threshold: 0.3 } // Increased to 30% for smoother trigger
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-gray-900 py-20 px-6 sm:px-8 overflow-hidden">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center mb-12">
        {/* Left Title */}
        <div>
          <h2
            className={`text-3xl sm:text-4xl font-extrabold text-white tracking-tight transform transition-all duration-700 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : '-translate-y-6 opacity-0'
            }`}
          >
            I Nostri Lavori
          </h2>
          <div className="w-16 h-1 bg-amber-500 mt-3"></div>
        </div>

        {/* Right Button */}
        <a
          href="/gallery"
          className={`mt-4 sm:mt-0 inline-block bg-amber-500 text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-amber-600 transition-all duration-300 hover:-translate-y-1 transform transition-all duration-700 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
        >
          Guarda Tutti
        </a>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
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
            className={`group relative rounded-xl overflow-hidden shadow-lg transform transition-all duration-700 ease-out hover:shadow-xl hover:-translate-y-2 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <Image
              src={src}
              alt={`Progetto ${index + 1}`}
              width={400}
              height={300}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Visualizza Progetto
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorksGallery;