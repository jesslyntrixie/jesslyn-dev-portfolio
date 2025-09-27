// app/page.jsx
import HeroSection from './components/HeroSection';
import AboutBento from './components/AboutBento';
// import FeaturedProjects from './components/FeaturedProjects';
// import Contact from './components/Contact';

export default function HomePage() {
  return (
    <main className="container mx-auto px-4 pt-20 md:pt-24">
      <HeroSection />
      <AboutBento />
      
      {/* Placeholder sections for navigation */}
      <section id="projects" className="min-h-screen flex items-center justify-center py-16">
        <div className="text-center">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-transparent mb-4">
            Projects
          </h2>
          <p className="text-gray-400">Coming Soon - Your amazing projects will be showcased here!</p>
        </div>
      </section>
      
      <section id="experience" className="min-h-screen flex items-center justify-center py-16">
        <div className="text-center">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-transparent mb-4">
            Experience
          </h2>
          <p className="text-gray-400">Coming Soon - Your professional journey will be detailed here!</p>
        </div>
      </section>
      
      <section id="contact" className="min-h-screen flex items-center justify-center py-16">
        <div className="text-center">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-transparent mb-4">
            Contact
          </h2>
          <p className="text-gray-400">Coming Soon - Get in touch section will be added here!</p>
        </div>
      </section>
    </main>
  );
}