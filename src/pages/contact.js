import Header from './components/Header';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot'; // Import del ChatBot
import CallToAction from './components/CallToAction';
import Sottostante from './components/Sottostante';
import ContactForm from './components/ContactForm';
import ContactSections from './components/ContactSections';

export default function Contact() {
  return (
    <div>
      

      {/* Header */}
      <Header />
      <ContactSections/>
      <ContactForm />
      <CallToAction />
      <Sottostante />
      {/* Footer */}
      <Footer />

      {/* ChatBot */}
      <ChatBot />
    </div>
  );
}
