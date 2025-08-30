import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import TrustBar from '@/components/TrustBar/TrustBar';
import StatsBar from '@/components/StatsBar/StatsBar';
import Services from '@/components/Services/Services';
import AboutUs from '@/components/AboutUs/AboutUs';
import DeliverySection from '@/components/DeliverySection/DeliverySection';
import HowItWorks from '@/components/HowItWorks/HowItWorks';
import Testimonials from '@/components/Testimonials/Testimonials';
import ContactForm from '@/components/ContactForm/ContactForm';
import WhatsAppButton from '@/components/WhatsAppButton/WhatsAppButton';
import MapSection from '@/components/MapSection/MapSection';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <StatsBar />
        <Services />
        <AboutUs />
        <DeliverySection />
        <HowItWorks />
        <Testimonials />
        <ContactForm />
        <MapSection /> 
        <WhatsAppButton />
      </main>
      <Footer />
    </>
  );
}