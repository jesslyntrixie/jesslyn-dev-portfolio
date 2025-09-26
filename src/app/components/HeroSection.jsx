// app/components/HeroSection.jsx
'use client'; // Diperlukan untuk Framer Motion & Spline
import { profile} from '@/data/content';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
// import Spline from '@splinetool/react-spline'; // Uncomment saat kamu sudah punya scene Spline

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center">
      {/* Kolom Kiri: Teks */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-2">
          {profile.name}
        </h1>
        <h2 className="text-lg md:text-xl font-semibold text-blue-500 mb-4 h-14 md:h-7">
          <TypeAnimation
            sequence={[
              profile.titles[0], 1500, // Tulis title pertama, tunggu 1.5 detik
              profile.titles[1], 1500, // Hapus dan tulis title kedua, tunggu 1.5 detik
              profile.titles[2], 1500, // Hapus dan tulis title ketiga, tunggu 1.5 detik
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h2>
        <p className="text-gray-600 mb-6">
          {profile.bio}
        </p>
        <div className="flex gap-4">
          <a href="/projects" className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Lihat Proyek
          </a>
          <a href={profile.resume} target="_blank" className="bg-gray-200 text-gray-800 px-6 py-2 rounded-lg font-semibold hover:bg-gray-300 transition-colors">
            Download CV
          </a>
        </div>
      </motion.div>
      
      {/* Kolom Kanan: 3D Asset */}
      <div className="h-64 md:h-full w-full bg-gray-100 rounded-xl flex items-center justify-center">
        {/* <Spline scene="https://prod.spline.design/your-scene-url/scene.splinecode" /> */}
        <p className="text-gray-400">Tempat untuk 3D Asset-mu</p>
      </div>
    </section>
  );
}