import { BsGeoAlt, BsTelephone, BsEnvelope } from "react-icons/bs";
import { useEffect, useState } from "react";

const ContactSections = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("contact-section");
      if (section) {
        const top = section.getBoundingClientRect().top;
        if (top < window.innerHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initially in case it's already visible

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full">
      {/* Sezione superiore con immagine di sfondo */}
      <div
        className="relative w-full h-64 md:h-80 bg-cover bg-center text-white flex items-center justify-center px-6 md:px-16"
        style={{ backgroundImage: "url('/contact.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold drop-shadow-lg">
            Contatti
          </h1>
          <p className="text-base md:text-lg mt-4 max-w-2xl mx-auto drop-shadow-md">
            Siamo pronti ad ascoltare le vostre esigenze e a fornirvi soluzioni su misura. Contattateci oggi stesso per dare vita alle vostre idee.
          </p>
        </div>
      </div>

      {/* Sezione informazioni contatti */}
      <div
        id="contact-section"
        className={`w-full bg-gray-100 grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-800 py-12 px-6 md:px-16 transition-all duration-700 ${
          isVisible ? "fade-in-up" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="flex items-center space-x-4 p-6 bg-white rounded-lg shadow-md hover:scale-105 transition-transform hover:shadow-lg">
          <BsGeoAlt className="text-yellow-500 text-4xl" />
          <div>
            <h2 className="font-semibold text-xl">Dove Siamo</h2>
            <p className="text-sm">Via del Corso, 1</p>
            <p className="text-sm">00186 Roma (RM)</p>
          </div>
        </div>
        <div className="flex items-center space-x-4 p-6 bg-white rounded-lg shadow-md hover:scale-105 transition-transform hover:shadow-lg">
          <BsTelephone className="text-yellow-500 text-4xl" />
          <div>
            <h2 className="font-semibold text-xl">Telefono</h2>
            <p className="text-sm">+39 06 1234 5678</p>
          </div>
        </div>
        <div className="flex items-center space-x-4 p-6 bg-white rounded-lg shadow-md hover:scale-105 transition-transform hover:shadow-lg">
          <BsEnvelope className="text-yellow-500 text-4xl" />
          <div>
            <h2 className="font-semibold text-xl">Email</h2>
            <p className="text-sm">info@azienda.it</p>
          </div>
        </div>
      </div>

      {/* Sezione mappa */}
      <div className="w-full">
        <iframe
          title="Mappa Roma"
          className="w-full h-64 md:h-96 border-none"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95543.33238943161!2d12.452831672165315!3d41.90278347689888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f619e3d65a2e1%3A0x6cd301cc5d4ec78!2sRoma%2C%20RM!5e0!3m2!1sit!2sit!4v1705173000000!5m2!1sit!2sit"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactSections;
