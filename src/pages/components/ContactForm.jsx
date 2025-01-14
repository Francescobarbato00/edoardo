import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const ContactForm = () => {
  return (
    <div className="flex flex-col md:flex-row items-start justify-between w-full bg-white text-black px-4 sm:px-6 md:px-20 py-12 animate-fade-in">
      {/* Sezione sinistra - Testo e Social */}
      <div className="w-full md:w-1/3 space-y-4 text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-bold">Contattaci</h1>
        <p className="text-gray-800">
          Per informazioni e preventivi contattaci compilando il modulo, ti
          ricontatteremo il prima possibile.
        </p>
        <h2 className="font-semibold text-lg">Dai un'occhiata ai nostri social</h2>
        <div className="flex justify-center md:justify-start space-x-3">
          <a
            href="#"
            className="bg-black text-white p-3 rounded-full hover:bg-gray-800 transition duration-300"
          >
            <FaFacebookF className="text-xl" />
          </a>
          <a
            href="#"
            className="bg-black text-white p-3 rounded-full hover:bg-gray-800 transition duration-300"
          >
            <FaInstagram className="text-xl" />
          </a>
          <a
            href="#"
            className="bg-black text-white p-3 rounded-full hover:bg-gray-800 transition duration-300"
          >
            <FaLinkedinIn className="text-xl" />
          </a>
        </div>
      </div>

      {/* Sezione Destra - Form */}
      <div className="w-full md:w-1/2 mt-8 md:mt-0 animate-slide-up">
        <form className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Nome"
              className="border border-gray-400 rounded-lg px-4 py-2 w-full bg-white text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-black"
            />
            <input
              type="text"
              placeholder="Cognome"
              className="border border-gray-400 rounded-lg px-4 py-2 w-full bg-white text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="tel"
              placeholder="Telefono"
              className="border border-gray-400 rounded-lg px-4 py-2 w-full bg-white text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-black"
            />
            <input
              type="email"
              placeholder="Email"
              className="border border-gray-400 rounded-lg px-4 py-2 w-full bg-white text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
          <textarea
            placeholder="Messaggio"
            className="w-full border border-gray-400 rounded-lg px-4 py-2 bg-white text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-black"
            rows="4"
          ></textarea>
          <div className="flex items-start space-x-2 text-sm">
            <input
              type="checkbox"
              id="privacy"
              className="mt-1 focus:ring-2 focus:ring-black"
            />
            <label htmlFor="privacy">
              Ho letto l'
              <a href="#" className="text-black font-bold hover:underline">
                informativa sulla privacy
              </a>
              e acconsento alla memorizzazione dei miei dati, secondo quanto stabilito dal regolamento europeo per la
              protezione dei dati personali n. 679/2016 (GDPR).
            </label>
          </div>
          <button
            type="submit"
            className="bg-black text-white font-bold w-full py-2 rounded-lg hover:bg-gray-800 transition duration-300"
          >
            INVIA
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
