// app/page.jsx
import HeroSection from './components/HeroSection';
import AboutBento from './components/AboutBento';
import ProjectsSection from './components/ProjectsSection';
import CertificationsSection from './components/CertificationsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function HomePage() {
  return (
    <>
      <main className="container mx-auto px-4">
        <HeroSection />
        <AboutBento />
        
        <ProjectsSection />
        
        <CertificationsSection />
        
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}