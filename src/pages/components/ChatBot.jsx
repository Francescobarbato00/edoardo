import React, { useState, useRef, useEffect } from 'react';
import { FaRobot, FaPaperPlane, FaTimes } from 'react-icons/fa';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userMessage, setUserMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      from: 'bot',
      text: 'Ciao! Come posso aiutarti oggi?',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);

  const chatEndRef = useRef(null);

  const handleSendMessage = (message) => {
    const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const userMsg = message || userMessage;

    if (userMsg.trim() === '') return;

    const newMessages = [...messages, { from: 'user', text: userMsg, time: currentTime }];
    setMessages(newMessages);
    setUserMessage('');

    setTimeout(() => {
      let botReply = 'Grazie! Al momento siamo in fase di sviluppo.';
      if (userMsg.toLowerCase().includes('chi siamo')) {
        botReply =
          'Siamo Edilges, un team dedicato all’innovazione e ai servizi di costruzione di alta qualità.';
      } else if (userMsg.toLowerCase().includes('cosa facciamo')) {
        botReply =
          'Ci occupiamo di edilizia residenziale e commerciale, offrendo ristrutturazioni e nuove costruzioni.';
      } else if (userMsg.toLowerCase().includes('contatti')) {
        botReply =
          'Puoi contattarci al numero 013 123 12 123 o tramite email all’indirizzo info@edilges.it.';
      }

      setMessages((prevMessages) => [
        ...prevMessages,
        {
          from: 'bot',
          text: botReply,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    }, 800); // Reduced delay for faster response
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <>
      {/* Floating Chat Button */}
      <div
        className="fixed bottom-6 right-6 bg-amber-500 text-white p-4 rounded-full shadow-lg cursor-pointer hover:bg-amber-600 transition-all duration-300 hover:scale-110 z-50"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Chiudi chatbot' : 'Apri chatbot'}
      >
        {isOpen ? <FaTimes size={20} /> : <FaRobot size={20} />}
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 z-40 transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div
          className="fixed bottom-6 right-4 sm:bottom-10 sm:right-6 w-[90%] max-w-sm sm:max-w-md h-[80vh] sm:h-[520px] bg-white rounded-xl shadow-2xl flex flex-col z-50 animate-slide-up"
        >
          {/* Chat Header */}
          <div className="bg-amber-500 text-white py-3 px-5 flex justify-between items-center rounded-t-xl">
            <h3 className="text-base sm:text-lg font-semibold tracking-tight">Edilges ChatBot</h3>
            <button
              className="text-white hover:text-gray-200 transition-colors duration-200"
              onClick={() => setIsOpen(false)}
              aria-label="Chiudi chat"
            >
              <FaTimes size={16} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 bg-gray-100 overflow-y-auto space-y-4 custom-scrollbar">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex flex-col ${msg.from === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`px-3 py-2 max-w-[75%] rounded-lg text-sm sm:text-base shadow-md transition-all duration-300 ${
                    msg.from === 'user'
                      ? 'bg-amber-500 text-white'
                      : 'bg-white text-gray-900 border border-gray-200'
                  }`}
                >
                  {msg.text}
                </div>
                <div className="text-gray-500 text-xs mt-1">{msg.time}</div>
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>

          {/* Preset Question Buttons */}
          <div className="p-3 bg-white flex flex-wrap gap-2 justify-center border-t border-gray-200">
            {['Chi siamo', 'Cosa facciamo', 'Contatti'].map((question, index) => (
              <button
                key={index}
                className="bg-gray-100 hover:bg-amber-100 text-gray-900 text-xs sm:text-sm px-3 py-1.5 rounded-full transition-all duration-300 hover:text-amber-600"
                onClick={() => handleSendMessage(question)}
              >
                {question}
              </button>
            ))}
          </div>

          {/* Message Input */}
          <div className="p-3 bg-white border-t border-gray-200 flex items-center rounded-b-xl">
            <input
              type="text"
              className="flex-1 p-2 sm:p-3 border border-gray-300 rounded-full outline-none text-gray-900 text-sm sm:text-base focus:ring-2 focus:ring-amber-500 transition-all duration-200"
              placeholder="Scrivi un messaggio..."
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
              aria-label="Inserisci il tuo messaggio"
            />
            <button
              onClick={() => handleSendMessage()}
              className="ml-2 bg-amber-500 hover:bg-amber-600 text-white p-2.5 rounded-full shadow-md transition-all duration-300 hover:scale-105"
              aria-label="Invia messaggio"
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