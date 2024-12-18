import React, { useState } from 'react';
import { FaRobot, FaPaperPlane, FaTimes } from 'react-icons/fa';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false); // Stato per aprire/chiudere la chat
  const [userMessage, setUserMessage] = useState(''); // Messaggio utente
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Ciao! Come posso aiutarti oggi?' },
  ]); // Stato dei messaggi

  // Invio messaggio
  const handleSendMessage = () => {
    if (userMessage.trim() === '') return;

    const newMessages = [...messages, { from: 'user', text: userMessage }];
    setMessages(newMessages);
    setUserMessage('');

    // Risposta predefinita
    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { from: 'bot', text: 'Grazie! Al momento siamo in fase di sviluppo, torna presto!' },
      ]);
    }, 1000);
  };

  return (
    <>
      {/* Bottone di apertura chat */}
      <div
        className="fixed bottom-6 right-6 bg-yellow-500 text-white p-4 rounded-full shadow-lg cursor-pointer hover:translate-y-[-4px] hover:shadow-2xl transition-all duration-300 z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes size={22} /> : <FaRobot size={22} />}
      </div>

      {/* Overlay scuro */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setIsOpen(false)}></div>
      )}

      {/* Finestra della Chat */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 w-72 bg-white rounded-lg shadow-2xl flex flex-col z-50">
          {/* Header della Chat */}
          <div className="bg-yellow-500 text-white py-3 px-4 flex justify-between items-center rounded-t-lg">
            <h3 className="text-sm font-semibold">ChatBot Edilges</h3>
            <button
              className="hover:text-gray-200 transition"
              onClick={() => setIsOpen(false)}
            >
              <FaTimes size={16} />
            </button>
          </div>

          {/* Area dei messaggi */}
          <div className="flex-1 p-3 overflow-y-auto bg-gray-100">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-2 flex ${
                  msg.from === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className={`px-3 py-2 max-w-[75%] rounded-lg text-sm shadow-md ${
                    msg.from === 'user'
                      ? 'bg-yellow-500 text-white'
                      : 'bg-white text-gray-800 border border-gray-300'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input dei messaggi */}
          <div className="p-3 bg-white border-t flex items-center rounded-b-lg">
            <input
              type="text"
              className="flex-1 p-2 border border-gray-300 rounded-full outline-none text-gray-700 focus:ring-2 focus:ring-yellow-500"
              placeholder="Scrivi un messaggio..."
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            <button
              onClick={handleSendMessage}
              className="ml-2 bg-yellow-500 hover:bg-yellow-600 text-white p-2 rounded-full transition duration-300"
            >
              <FaPaperPlane size={16} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
