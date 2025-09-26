// app/page.jsx
import HeroSection from './components/HeroSection';
import AboutBento from './components/AboutBento';
// import FeaturedProjects from './components/FeaturedProjects';
// import Contact from './components/Contact';

export default function HomePage() {
  return (
    <main className="container mx-auto px-4 py-8 md:py-16">
      <HeroSection />
      <AboutBento />
      {/* Nanti kamu bisa tambah komponen lain di sini */}
      {/* <FeaturedProjects /> */}
      {/* <Contact /> */}
    </main>
  );
}