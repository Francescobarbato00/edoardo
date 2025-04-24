import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const ContactForm = () => {
  return (
    <div className="flex flex-col md:flex-row items-start justify-between w-full bg-white text-gray-900 px-6 sm:px-8 md:px-16 py-16 animate-slide-up">
      {/* Left: Text and Social */}
      <div className="w-full md:w-1/3 space-y-6 text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Contattaci</h1>
        <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
          Compila il modulo per informazioni o preventivi. Ti risponderemo al più presto!
        </p>
        <h2 className="font-semibold text-lg sm:text-xl text-gray-900">Seguici sui Social</h2>
        <div className="flex justify-center md:justify-start space-x-4">
          {[
            { icon: FaFacebookF, href: '#' },
            { icon: FaInstagram, href: '#' },
            { icon: FaLinkedinIn, href: '#' },
          ].map(({ icon: Icon, href }, index) => (
            <a
              key={index}
              href={href}
              className="bg-amber-500 text-white p-3 rounded-full hover:bg-amber-600 transition-all duration-300 hover:scale-105"
              aria-label={`Seguici su ${Icon.name}`}
            >
              <Icon className="text-lg" />
            </a>
          ))}
        </div>
      </div>

      {/* Right: Form */}
      <div className="w-full md:w-1/2 mt-8 md:mt-0">
        <form className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Nome"
              className="border border-gray-300 rounded-lg px-4 py-3 w-full bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all duration-200"
              required
            />
            <input
              type="text"
              placeholder="Cognome"
              className="border border-gray-300 rounded-lg px-4 py-3 w-full bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all duration-200"
              required
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="tel"
              placeholder="Telefono"
              className="border border-gray-300 rounded-lg px-4 py-3 w-full bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all duration-200"
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="border border-gray-300 rounded-lg px-4 py-3 w-full bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all duration-200"
              required
            />
          </div>
          <textarea
            placeholder="Messaggio"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all duration-200"
            rows="4"
            required
          ></textarea>
          <div className="flex items-start space-x-2 text-sm text-gray-600">
            <input
              type="checkbox"
              id="privacy"
              className="mt-1 focus:ring-2 focus:ring-amber-500"
              required
            />
            <label htmlFor="privacy">
              Ho letto l’{' '}
              <a href="#" className="text-amber-500 font-semibold hover:underline">
                informativa sulla privacy
              </a>{' '}
              e acconsento al trattamento dei dati ai sensi del GDPR (Reg. UE 679/2016).
            </label>
          </div>
          <button
            type="submit"
            className="bg-amber-500 text-white font-semibold w-full py-3 rounded-lg hover:bg-amber-600 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            Invia
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;