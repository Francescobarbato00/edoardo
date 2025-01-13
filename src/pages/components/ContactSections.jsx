import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const ContactSections = () => {
  return (
    <div className="w-full">
      {/* Sezione superiore con immagine di sfondo */}
      <div className="relative w-full h-64 md:h-80 bg-cover bg-center text-white flex items-center px-6 md:px-16"
        style={{ backgroundImage: "url('/contact.jpg')" }} // Cambia con il percorso dell'immagine di Roma
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div> {/* Overlay scuro */}
        <div className="relative z-10">
          <h1 className="text-3xl md:text-4xl font-bold">Contatti</h1>
          <p className="text-lg mt-2">
            Siamo pronti ad ascoltare le vostre esigenze e a fornirvi soluzioni su misura. Contattateci oggi stesso per dare vita alle vostre idee.
          </p>
        </div>
      </div>

      {/* Sezione informazioni contatti */}
      <div className="w-full bg-gray-100 grid grid-cols-1 md:grid-cols-3 text-gray-800 py-8 px-6 md:px-16">
        <div className="flex items-start space-x-4">
          <FaMapMarkerAlt className="text-yellow-500 text-2xl mt-1" />
          <div>
            <h2 className="font-semibold text-lg">Dove Siamo</h2>
            <p>Via del Corso, 1</p>
            <p>00186 Roma (RM)</p>
          </div>
        </div>
        <div className="flex items-start space-x-4 mt-6 md:mt-0">
          <FaPhoneAlt className="text-yellow-500 text-2xl mt-1" />
          <div>
            <h2 className="font-semibold text-lg">Telefono</h2>
            <p>+39 06 1234 5678</p>
          </div>
        </div>
        <div className="flex items-start space-x-4 mt-6 md:mt-0">
          <FaEnvelope className="text-yellow-500 text-2xl mt-1" />
          <div>
            <h2 className="font-semibold text-lg">Email</h2>
            <p>info@azienda.it</p>
          </div>
        </div>
      </div>

      {/* Sezione mappa */}
      <div className="w-full">
        <iframe
          title="Mappa Roma"
          className="w-full h-80 md:h-96"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95543.33238943161!2d12.452831672165315!3d41.90278347689888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f619e3d65a2e1%3A0x6cd301cc5d4ec78!2sRoma%2C%20RM!5e0!3m2!1sit!2sit!4v1705173000000!5m2!1sit!2sit"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactSections;
