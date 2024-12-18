import React, { useEffect, useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Importa icone di navigazione

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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-yellow-500 py-16 px-4 overflow-hidden"
    >
      <div
        className={`container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center transform transition-all duration-1000 ease-out ${
          isVisible ? 'translate-x-0 opacity-100' : '-translate-x-16 opacity-0'
        }`}
      >
        {/* Left: Title */}
        <div>
          <h3 className="text-white uppercase text-[18px] font-manrope font-bold leading-[28px] mb-4">
            Testimonianze
          </h3>
          <h2 className="text-[40px] font-poppins font-semibold text-black leading-[45px] mb-6">
            Cosa dicono i<br /> nostri Clienti.
          </h2>
        </div>

        {/* Right: Testimonials Carousel */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              prevEl: '.swiper-prev',
              nextEl: '.swiper-next',
            }}
            pagination={{ clickable: true }}
            className="pb-12"
          >
            {/* Slide 1 */}
            <SwiperSlide>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <blockquote className="italic text-gray-700 text-lg leading-relaxed mb-4">
                  “Ottima ditta con cui ho svolto i lavori di ristrutturazione del mio appartamento. Professionisti eccellenti, velocità di esecuzione e cura nei dettagli.”
                </blockquote>
                <p className="text-right font-poppins font-semibold text-gray-900">
                  — Luciano Caruso, <span className="text-gray-500 font-normal">31/07/2023</span>
                </p>
              </div>
            </SwiperSlide>

            {/* Slide 2 */}
            <SwiperSlide>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <blockquote className="italic text-gray-700 text-lg leading-relaxed mb-4">
                  “Super consigliata a tutti i miei colleghi amministratori di condomini. Organizzati, affidabili e capaci di gestire qualunque cantiere.”
                </blockquote>
                <p className="text-right font-poppins font-semibold text-gray-900">
                  — Danilo Lacerenza, <span className="text-gray-500 font-normal">06/02/2023</span>
                </p>
              </div>
            </SwiperSlide>
          </Swiper>

          {/* Frecce di navigazione personalizzate */}
          <button className="swiper-prev absolute top-1/2 -left-6 transform -translate-y-1/2 text-white bg-black rounded-full p-3 shadow-lg hover:bg-yellow-500 transition duration-300">
            <FaChevronLeft />
          </button>
          <button className="swiper-next absolute top-1/2 -right-6 transform -translate-y-1/2 text-white bg-black rounded-full p-3 shadow-lg hover:bg-yellow-500 transition duration-300">
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
