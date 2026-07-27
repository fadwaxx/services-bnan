import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhyUs from "./components/WhyUs";
import ServicesSection from "./components/ServicesSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import StepsSection from "./components/StepsSection";
import FAQSection from "./components/FAQSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

export default function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <AboutSection />
        <WhyUs />
        <ServicesSection />
        <ProjectsSection />
        <StepsSection />
        <FAQSection />
        <ContactSection />
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}