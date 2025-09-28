// app/components/HeroSection.jsx
'use client';
import { profile } from '@/data/content';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex flex-col md:flex-row items-center justify-center md:justify-between px-4 md:px-8 pt-16 md:pt-20">
      
      {/* Kolom kiri: teks */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl text-center md:text-left mb-12 md:mb-0 w-full md:w-auto"
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
          className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mt-8"
        >
          <motion.a
            href="#projects"
            whileHover={{ 
              scale: 1.05, 
              y: -2,
              boxShadow: "0 20px 25px -5px rgba(59, 130, 246, 0.4), 0 10px 10px -5px rgba(59, 130, 246, 0.04)"
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-500/20 backdrop-blur-lg border border-blue-400/40 text-blue-200 px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-blue-500/30 hover:border-blue-400/60 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 text-center w-full sm:w-auto sm:min-w-[160px] flex items-center justify-center"
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
              backgroundColor: 'rgba(255, 255, 255, 0.20)'
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-white/10 backdrop-blur-lg border border-white/20 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 text-center w-full sm:w-auto sm:min-w-[160px] flex items-center justify-center"
          >
            View Resume
          </motion.a>
        </motion.div>
      </motion.div>
      
      {/* Hero Photo Section */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.0, duration: 0.8 }}
        className="w-full md:w-1/2 flex items-center justify-center mt-8 md:mt-0 px-4 md:px-0"
      >
        <div className="relative w-full max-w-[280px] sm:max-w-sm md:max-w-md">
          {/* Main Hero Image Container */}
          <motion.div 
            className="relative"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            {/* Gradient Border */}
            <div className="w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-3xl bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 p-1 shadow-2xl mx-auto">
              <motion.img 
                src="/images/hero-photo.jpg" 
                alt="Jesslyn Trixie Edvilie - Software Engineer & AI Researcher"
                className="w-full h-full object-cover rounded-2xl hover:brightness-110 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              />
            </div>

            {/* Floating Achievement Cards */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.6 }}
              className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-2xl border border-blue-500/30 p-3 sm:p-4 shadow-xl hover:shadow-blue-500/25 hover:border-blue-400/50 transition-all duration-300 min-w-[100px] sm:min-w-[120px]"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="text-center">
                <div className="w-8 h-8 mx-auto mb-2 bg-blue-500/30 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"/>
                  </svg>
                </div>
                <p className="text-xs text-blue-200 font-medium">Research</p>
                <p className="text-xs text-blue-300/80">Published</p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.6 }}
              className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-gradient-to-r from-emerald-600/25 to-teal-600/25 backdrop-blur-lg rounded-2xl border border-emerald-400/40 p-3 sm:p-4 shadow-xl hover:shadow-emerald-500/25 hover:border-emerald-300/50 transition-all duration-300 min-w-[100px] sm:min-w-[120px]"
              whileHover={{ scale: 1.05, y: 5 }}
            >
              <div className="text-center">
                <div className="w-8 h-8 mx-auto mb-2 bg-emerald-500/30 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.75 2.524z"/>
                  </svg>
                </div>
                <p className="text-xs text-white font-medium">Apple Dev</p>
                <p className="text-xs text-emerald-100/90">Academy</p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.8, duration: 0.6 }}
              className="absolute top-1/2 -right-6 sm:-right-10 transform -translate-y-1/2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl border border-purple-500/30 p-2 sm:p-3 shadow-xl hover:shadow-purple-500/25 hover:border-purple-400/50 transition-all duration-300 min-w-[80px] sm:min-w-[100px]"
              whileHover={{ scale: 1.05, x: 5 }}
            >
              <div className="text-center">
                <div className="w-6 h-6 mx-auto mb-1 bg-purple-500/30 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-purple-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                  </svg>
                </div>
                <p className="text-xs text-purple-200 font-medium">Full-Stack</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2.0, duration: 0.6 }}
              className="absolute top-6 sm:top-8 -left-6 sm:-left-8 bg-gradient-to-r from-slate-700/40 to-gray-800/40 backdrop-blur-lg rounded-xl border border-slate-600/50 p-2 sm:p-3 shadow-xl hover:shadow-slate-600/30 hover:border-slate-500/60 transition-all duration-300 min-w-[80px] sm:min-w-[100px]"
              whileHover={{ scale: 1.05, x: -5 }}
            >
              <div className="text-center">
                <div className="w-6 h-6 mx-auto mb-1 bg-slate-600/40 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-slate-200" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12a1 1 0 01-.117-1.993L9 10h2a1 1 0 01.117 1.993L11 12H9zm4-6a1 1 0 01.117 1.993L13 8h-2a1 1 0 01-.117-1.993L11 6h2zM7 8a1 1 0 01.117 1.993L7 10H5a1 1 0 01-.117-1.993L5 8h2zm8 6a1 1 0 01.117 1.993L15 16h-2a1 1 0 01-.117-1.993L13 14h2zM5 14a1 1 0 01.117 1.993L5 16H3a1 1 0 01-.117-1.993L3 14h2zm12-8a1 1 0 01.117 1.993L17 8h-2a1 1 0 01-.117-1.993L15 6h2zM3 6a1 1 0 01.117 1.993L3 8H1a1 1 0 01-.117-1.993L1 6h2zm6-4a1 1 0 01.993.883L10 3v2a1 1 0 01-1.993.117L8 5V3a1 1 0 011-1zm0 16a1 1 0 01.993.883L10 19v2a1 1 0 01-1.993.117L8 21v-2a1 1 0 011-1zm8-8a1 1 0 01.883.993L18 11v2a1 1 0 01-.883.993L17 14v-2a1 1 0 011-1zM2 10a1 1 0 01.883.993L3 11v2a1 1 0 01-.883.993L2 14v-2a1 1 0 011-1z"/>
                  </svg>
                </div>
                <p className="text-xs text-slate-200 font-medium">AI/ML</p>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Achievement Badges Below */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.2, duration: 0.6 }}
            className="absolute -bottom-8 sm:-bottom-12 left-1/2 transform -translate-x-1/2 flex gap-4 sm:gap-6"
          >
            {/* <motion.div 
              className="bg-gradient-to-r from-blue-600/30 to-cyan-600/30 backdrop-blur-lg px-5 py-3 rounded-2xl border border-blue-400/40 shadow-xl hover:shadow-blue-500/30 hover:border-blue-300/60 transition-all duration-300"
              whileHover={{ y: -3, scale: 1.08 }}
            >
              <div className="text-center">
                <p className="text-sm text-white font-semibold">ICCSCI 2025</p>
                <p className="text-xs text-blue-200/90">Published Paper</p>
              </div>
            </motion.div> */}
            <motion.div 
              className="bg-gradient-to-r from-orange-600/30 to-amber-600/30 backdrop-blur-lg px-4 sm:px-6 py-3 sm:py-4 rounded-2xl border border-orange-400/40 shadow-xl hover:shadow-orange-500/30 hover:border-orange-300/60 transition-all duration-300 min-w-[120px] sm:min-w-[140px]"
              whileHover={{ y: -3, scale: 1.08 }}
            >
              <div className="text-center">
                <div className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-1 sm:mb-2 bg-orange-500/30 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-orange-200" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                </div>
                <p className="text-xs text-white font-medium">3.99 GPA</p>
                <p className="text-xs text-orange-200/90">BINUS University</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Background Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 via-purple-400/10 to-pink-500/10 rounded-3xl blur-3xl -z-10 scale-110"></div>
        </div>
      </motion.div>
    </section>
  );
}
