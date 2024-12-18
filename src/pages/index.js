import Head from 'next/head';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturesSection from './components/FeaturesSection';
import RenovationSection from './components/RenovationSection';
import ServicesSection from './components/ServicesSection';
import CertificationsSection from './components/CertificationsSection';
import WorksGallery from './components/WorksGallery';
import Testimonials from './components/Testimonials';
import PartnersSection from './components/PartnersSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot'; // Import del ChatBot

export default function Home() {
  return (
    <div>
      <Head>
        <title>Edilges - Home</title>
        <meta name="description" content="Edilges - Impresa Edile" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <FeaturesSection />

      {/* Renovation Section */}
      <RenovationSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Certifications Section */}
      <CertificationsSection />

      {/* Works Gallery */}
      <WorksGallery />

      {/* Testimonials */}
      <Testimonials />

      {/* Partners Section */}
      <PartnersSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />

      {/* ChatBot */}
      <ChatBot />
    </div>
  );
}
