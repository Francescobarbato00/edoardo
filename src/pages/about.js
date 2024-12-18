import Header from './components/Header';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot'; // Import del ChatBot
import ChiSiamo from './components/ChiSiamo';
import Esperienza from './components/Esperienza';

export default function About() {
  return (
    <div>
      

      {/* Header */}
      <Header />

      <ChiSiamo />
       <Esperienza />
      {/* Footer */}
      <Footer />

      {/* ChatBot */}
      <ChatBot />
    </div>
  );
}
