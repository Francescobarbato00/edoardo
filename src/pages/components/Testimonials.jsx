
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Testimonials = () => {
  return (
    <section className="bg-yellow-500 py-16 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left: Title */}
        <div>
          <h3 className="text-white uppercase text-[18px] font-manrope font-bold leading-[28px] mb-4">
            testimonianze
          </h3>
          <h2 className="text-[40px] font-poppins font-semibold text-black leading-[40px] mb-6">
            Cosa dicono i<br /> nostri Clienti.
          </h2>
        </div>

        {/* Right: Testimonials Carousel */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
          >
            <SwiperSlide>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <span className="text-yellow-500 text-2xl font-bold">★★★★★</span>
                  <img
                    src="/google-logo.png"
                    alt="Google"
                    className="ml-auto w-6 h-6"
                  />
                </div>
                <p className="text-gray-700 mb-4">
                  Ottima ditta con cui ho svolto i lavori di ristrutturazione del mio appartamento, tutti professionisti di eccellenza velocità di esecuzione e cura nei dettagli. Consiglio per chi vuole avere...
                </p>
                <div className="flex items-center">
                  <img
                    src="/user-1.jpg" // Inserisci il percorso corretto della tua immagine
                    alt="Luciano Caruso"
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <p className="text-black font-bold">Luciano Caruso</p>
                    <p className="text-gray-500 text-sm">31/07/2023</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <span className="text-yellow-500 text-2xl font-bold">★★★★★</span>
                  <img
                    src="/google-logo.png"
                    alt="Google"
                    className="ml-auto w-6 h-6"
                  />
                </div>
                <p className="text-gray-700 mb-4">
                  Super consigliata a tutti i miei colleghi amministratori di condomini. Sono in grado di gestire qualunque cantiere, grosso o piccolo, si sono da subito dimostrati organizzati in tutto....
                </p>
                <div className="flex items-center">
                  <img
                    src="/user-2.jpg" // Inserisci il percorso corretto della tua immagine
                    alt="Danilo Lacerenza"
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <p className="text-black font-bold">Danilo Lacerenza</p>
                    <p className="text-gray-500 text-sm">06/02/2023</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* Aggiungi altre testimonianze qui */}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
