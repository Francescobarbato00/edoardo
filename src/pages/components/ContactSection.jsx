import React from 'react';

const ContactSection = () => {
  return (
    <section className="bg-cover bg-center relative py-24" style={{ backgroundImage: `url('/hand.jpg')` }}>
      <div className="container mx-auto px-4 text-white text-center md:text-left">
        <div className="mb-12">
          <h4 className="text-sm uppercase tracking-wider mb-4">Sei pronto a realizzare il tuo progetto?</h4>
          <h2 className="text-5xl font-bold mb-6">Contattaci ora per informazioni o preventivi.</h2>
          <p className="mb-8 text-lg">
            Contattaci ora per dettagli e preventivi personalizzati. Siamo qui per trasformare le tue idee in realtà.
          </p>
          <a href="/contattaci" className="bg-yellow-500 text-white py-3 px-8 rounded hover:bg-yellow-600 transition text-lg">
            Contattaci
          </a>
        </div>

        {/* Contact Info */}
        <div className="bg-white text-black p-8 rounded-lg shadow-lg flex flex-col md:flex-row justify-around items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="bg-yellow-500 p-4 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m0 12v2m9-7l2-2m0 0l-2-2m2 2H7" />
              </svg>
            </div>
            <div className="ml-4">
              <p className="font-bold">Telefono</p>
              <p>12344567</p>
            </div>
          </div>

          <div className="flex items-center mb-4 md:mb-0">
            <div className="bg-yellow-500 p-4 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12l-4-4m0 0l-4 4m4-4v8" />
              </svg>
            </div>
            <div className="ml-4">
              <p className="font-bold">Email</p>
              <p>info@edilges.it</p>
            </div>
          </div>

          <div className="flex items-center">
            <div className="bg-yellow-500 p-4 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12l-4-4m0 0l-4 4m4-4v8" />
              </svg>
            </div>
            <div className="ml-4">
              <p className="font-bold">Dove siamo</p>
              <p>Via Don Zano, 14 (TO)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
