import React from 'react';

const Sottostante = () => {
  return (
    <div id="sottostante" className="bg-white p-8">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start">
        <div className="mb-8 md:mb-0">
          <h2 className="text-yellow-500 text-3xl font-bold mb-2">
            Edilges
          </h2>
          <h3 className="text-gray-800 text-xl font-semibold mb-4">
            Impresa di Costruzioni
          </h3>
          <p className="text-gray-700">Via Fittizia, 123 – 00100 ROMA</p>
          <p className="mt-2 text-gray-800">
            <span className="font-bold">Telefono:</span> 06 1234 5678
          </p>
          <p className="mt-2 text-gray-800">
            <span className="font-bold">E-mail:</span> info@edilges.com
          </p>
        </div>
        
        <div className="flex flex-col items-start">
          <p className="text-gray-800">
            <span className="font-bold">P.IVA:</span> 12345678901
          </p>
          <p className="mt-2 text-gray-800">
            <span className="font-bold">REA:</span> RM 123456
          </p>
          <p className="mt-2 text-gray-800">
            <span className="font-bold">PEC:</span> edilges@pec.it
          </p>
        </div>
        
        <div className="mt-8 md:mt-0 md:ml-8 flex items-center">
          {/* Logo o immagine sostitutiva se disponibile */}
          <div className="h-16 w-16 bg-yellow-500 flex items-center justify-center rounded">
            <span className="text-white font-bold">EG</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sottostante;
