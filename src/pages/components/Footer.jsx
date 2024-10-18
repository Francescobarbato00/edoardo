import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-[#262626] text-white py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo and Description */}
        <div>
          <img src="/7.png" alt="Edil Company Logo" className="mb-4 w-32" />
          <p>
            Impresa edile specializzata nella manutenzione ordinaria e straordinaria, nella ristrutturazione, nel consolidamento, nel recupero e nel restauro conservativo.
          </p>
        </div>

        {/* Menu Links */}
        <div>
          <h4 className="text-yellow-500 font-bold mb-4">Menu</h4>
          <ul>
            <li><a href="/chi-siamo" className="hover:underline">Chi siamo</a></li>
            <li><a href="/servizi" className="hover:underline">Servizi</a></li>
            <li><a href="/lavori" className="hover:underline">Lavori</a></li>
            <li><a href="/contattaci" className="hover:underline">Contattaci</a></li>
            <li><a href="/lavora-con-noi" className="hover:underline">Lavora con noi</a></li>
          </ul>
        </div>

        {/* Services Links */}
        <div>
          <h4 className="text-yellow-500 font-bold mb-4">Servizi</h4>
          <ul>
            <li><a href="/ristrutturazione" className="hover:underline">Ristrutturazione</a></li>
            <li><a href="/restauro" className="hover:underline">Restauro</a></li>
            <li><a href="/manutenzione" className="hover:underline">Manutenzione</a></li>
            <li><a href="/riqualificazioni" className="hover:underline">Riqualificazioni</a></li>
            <li><a href="/rifacimento-tetti" className="hover:underline">Rifacimento tetti</a></li>
          </ul>
        </div>
      </div>
      <div className="text-center text-sm text-gray-500 mt-8">
        <p>P. IVA 1234567890 – C.F. 123456789</p>
      </div>
    </footer>
  );
};

export default Footer;
