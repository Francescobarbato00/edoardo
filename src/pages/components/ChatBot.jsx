import React, { useState, useRef, useEffect } from 'react';
import { FaRobot, FaPaperPlane, FaTimes } from 'react-icons/fa';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userMessage, setUserMessage] = useState('');
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Ciao! Come posso aiutarti oggi?', time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) },
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
        botReply = 'Siamo Edilges, un team dedicato all\'innovazione e ai servizi di costruzione di alta qualità.';
      } else if (userMsg.toLowerCase().includes('cosa facciamo')) {
        botReply = 'Ci occupiamo di edilizia residenziale e commerciale, offrendo ristrutturazioni e nuove costruzioni.';
      } else if (userMsg.toLowerCase().includes('contatti')) {
        botReply = 'Puoi contattarci al numero 013 123 12 123 o tramite email all\'indirizzo info@edilges.it.';
      }

      setMessages((prevMessages) => [
        ...prevMessages,
        { from: 'bot', text: botReply, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) },
      ]);
    }, 1000);
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <>
      {/* Bottone di apertura chat */}
      <div
        className="fixed bottom-6 right-6 bg-yellow-500 text-white p-4 rounded-full shadow-lg cursor-pointer hover:scale-110 transition-transform duration-300 z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes size={22} /> : <FaRobot size={22} />}
      </div>

      {/* Overlay scuro */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Finestra della Chat */}
      {isOpen && (
        <div className="fixed bottom-10 right-4 md:right-10 w-[90%] md:w-96 h-[75vh] md:h-[500px] bg-white rounded-2xl shadow-2xl flex flex-col z-50 max-w-md">
          {/* Header della Chat */}
          <div className="bg-yellow-500 text-white py-4 px-6 flex justify-between items-center rounded-t-2xl">
            <h3 className="text-lg font-semibold">ChatBot Edilges</h3>
            <button className="hover:text-gray-200 transition" onClick={() => setIsOpen(false)}>
              <FaTimes size={18} />
            </button>
          </div>

          {/* Area dei messaggi */}
          <div className="flex-1 p-4 overflow-y-auto bg-gray-50 space-y-3 custom-scrollbar">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  msg.from === 'user' ? 'items-end' : 'items-start'
                }`}
              >
                <div
                  className={`px-4 py-2 max-w-[80%] rounded-lg text-sm shadow ${
                    msg.from === 'user'
                      ? 'bg-yellow-500 text-white'
                      : 'bg-white text-gray-800 border border-gray-300'
                  }`}
                >
                  {msg.text}
                </div>
                <div className="text-gray-400 text-xs mt-1">{msg.time}</div>
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>

          {/* Pulsanti di domande preimpostate */}
          <div className="p-3 bg-white flex flex-wrap gap-2 justify-center border-t">
            {['Chi siamo', 'Cosa facciamo', 'Contatti'].map((question, index) => (
              <button
                key={index}
                className="bg-gray-200 hover:bg-gray-300 text-gray-700 text-xs px-3 py-2 rounded-lg transition duration-300"
                onClick={() => handleSendMessage(question)}
              >
                {question}
              </button>
            ))}
          </div>

          {/* Input dei messaggi */}
          <div className="p-3 bg-white border-t border-gray-200 flex items-center rounded-b-2xl">
            <input
              type="text"
              className="flex-1 p-3 border border-gray-300 rounded-full outline-none text-gray-700 focus:ring-2 focus:ring-yellow-500"
              placeholder="Scrivi un messaggio..."
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            <button
              onClick={() => handleSendMessage()}
              className="ml-3 bg-yellow-500 hover:bg-yellow-600 text-white p-3 rounded-full shadow-md transition-transform duration-300 transform hover:scale-110"
            >
              <FaPaperPlane size={18} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
