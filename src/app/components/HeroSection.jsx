// app/components/HeroSection.jsx
'use client';
import { profile } from '@/data/content';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

export default function HeroSection() {
  return (
    <section id="home" className="h-screen flex flex-col md:flex-row items-center justify-center md:justify-between px-4 md:px-8 -mt-20 pt-20">
      
      {/* Kolom kiri: teks */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl text-center md:text-left mb-8 md:mb-0"
      >
        {/* Hello intro */}
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-sm md:text-base font-light uppercase tracking-[0.25em] text-blue-400 mb-3"
        >
          Hello, I’m
        </motion.p>

        {/* Nama besar */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="leading-normal text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-transparent mb-4"
        >
          {profile.name}
        </motion.h1>

        {/* Titles typing effect */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="font-mono text-lg md:text-xl text-gray-200 h-12 mb-6"
        >
          <TypeAnimation
            sequence={[
              profile.titles[0], 1500,
              profile.titles[1], 1500,
              profile.titles[2], 1500,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </motion.h2>

        {/* Bio - Powerful two sentences */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-gray-300 mb-6 text-lg leading-relaxed max-w-2xl"
        >
          {profile.tagline}
        </motion.p>


        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="flex flex-col sm:flex-row justify-center gap-4 mt-8"
        >
          <motion.a
            href="#projects"
            whileHover={{ 
              scale: 1.05, 
              y: -2,
              boxShadow: "0 20px 25px -5px rgba(59, 130, 246, 0.4), 0 10px 10px -5px rgba(59, 130, 246, 0.04)"
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 text-center min-w-[160px] flex items-center justify-center"
          >
            View Projects
          </motion.a>
          <motion.a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ 
              scale: 1.05, 
              y: -2,
              backgroundColor: 'rgba(255, 255, 255, 0.15)'
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-white/10 backdrop-blur-lg border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 text-center min-w-[160px] flex items-center justify-center"
          >
            View Resume
          </motion.a>
        </motion.div>
      </motion.div>
      
      {/* Kolom kanan: 3D asset */}
      <div className="w-full md:w-1/2 h-72 md:h-[500px] flex items-center justify-center mt-8 md:mt-0">
        {/* Placeholder dulu */}
        <div className="w-full max-w-md md:max-w-full h-full bg-white/10 backdrop-blur-lg rounded-2xl flex items-center justify-center border border-white/20">
          <p className="text-gray-400">Tempat untuk 3D Asset-mu</p>
        </div>
      </div>
    </section>
  );
}
