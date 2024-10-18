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

export default function Home() {
  return (
    <div>
      <Head>
        <title>EDIL Company</title>
        <meta name="description" content="Riqualificazioni energetiche" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />

      {/* Hero Section */}
      <Hero />

      <FeaturesSection />

      <RenovationSection />

      <ServicesSection />

      <CertificationsSection />


      <WorksGallery />


      <Testimonials />


      <PartnersSection />

      <ContactSection />

      <Footer />

    </div>
  );
}
