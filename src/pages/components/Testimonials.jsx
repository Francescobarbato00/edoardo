import React, { useEffect, useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Testimonials = () => {
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
    <section ref={sectionRef} className="bg-amber-500 py-20 px-6 sm:px-8 overflow-hidden">
      <div
        className={`container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center transform transition-all duration-700 ease-out ${
          isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
        }`}
      >
        {/* Left: Title */}
        <div className="text-center md:text-left">
          <h3
            className={`text-white uppercase text-xs font-semibold tracking-widest mb-3 transform transition-all duration-700 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : '-translate-y-6 opacity-0'
            }`}
          >
            Testimonianze
          </h3>
          <h2
            className={`text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-6 transform transition-all duration-700 ease-out delay-100 ${
              isVisible ? 'translate-y-0 opacity-100' : '-translate-y-6 opacity-0'
            }`}
          >
            Cosa Dicono i Nostri Clienti
          </h2>
        </div>

        {/* Right: Testimonials Carousel */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            navigation={{
              prevEl: '.swiper-prev',
              nextEl: '.swiper-next',
            }}
            pagination={{ clickable: true }}
            className="pb-10"
          >
            {[
              {
                quote:
                  'Ottima ditta per la ristrutturazione del mio appartamento. Professionisti eccellenti, veloci e attenti ai dettagli.',
                author: 'Luciano Caruso',
                date: '31/07/2023',
              },
              {
                quote:
                  'Consigliatissima per amministratori di condomini. Organizzati, affidabili e capaci di gestire qualsiasi cantiere.',
                author: 'Danilo Lacerenza',
                date: '06/02/2023',
              },
            ].map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="group bg-white p-6 md:p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                  <blockquote className="italic text-gray-600 text-sm md:text-base leading-relaxed mb-4">
                    “{testimonial.quote}”
                  </blockquote>
                  <p className="text-right font-semibold text-gray-900 text-sm md:text-base">
                    — {testimonial.author},{' '}
                    <span className="text-gray-500 font-normal">{testimonial.date}</span>
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Arrows */}
          <button
            className="swiper-prev absolute top-1/2 left-0 md:-left-12 transform -translate-y-1/2 bg-amber-600 text-white rounded-full p-3 shadow-lg hover:bg-amber-700 transition-all duration-300 hover:scale-105"
            aria-label="Testimonianza precedente"
          >
            <FaChevronLeft size={16} />
          </button>
          <button
            className="swiper-next absolute top-1/2 right-0 md:-right-12 transform -translate-y-1/2 bg-amber-600 text-white rounded-full p-3 shadow-lg hover:bg-amber-700 transition-all duration-300 hover:scale-105"
            aria-label="Testimonianza successiva"
          >
            <FaChevronRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;