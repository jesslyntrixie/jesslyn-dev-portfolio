'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { certifications } from '@/data/content';

export default function CertificationsSection() {
  const [filter, setFilter] = useState('all');

  const categories = ['all', ...new Set(certifications.map(c => c.category))];
  const filteredCertifications = filter === 'all' 
    ? certifications 
    : certifications.filter(c => c.category === filter);

  // Group certifications by year for better organization
  const groupedByYear = filteredCertifications.reduce((acc, cert) => {
    if (!acc[cert.year]) acc[cert.year] = [];
    acc[cert.year].push(cert);
    return acc;
  }, {});

  const years = Object.keys(groupedByYear).sort((a, b) => b - a);

  return (
    <section id="certifications" className="py-20 px-4 md:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{}}
          className="text-center mb-16"
        >
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            viewport={{}}
            className="text-sm md:text-base font-light uppercase tracking-[0.25em] text-blue-400 mb-3"
          >
            Professional Development
          </motion.p>
          
          <motion.h2
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{}}
            className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-transparent mb-6 leading-tight"
          >
            Certifications
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{}}
            className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto"
          >
            Continuous learning through industry-recognized certifications from Harvard, freeCodeCamp, and NVIDIA.
          </motion.p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          viewport={{}}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(category)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                filter === category
                  ? 'bg-blue-500/20 backdrop-blur-lg border border-blue-400/40 text-blue-200 shadow-lg shadow-blue-500/25 hover:bg-blue-500/30'
                  : 'bg-gray-900/40 backdrop-blur-lg border border-white/10 text-gray-300 hover:text-white hover:bg-gray-900/60'
              }`}
            >
              {category === 'all' ? 'All Certifications' : category}
            </motion.button>
          ))}
        </motion.div>

        {/* Certifications by Year */}
        <div className="space-y-12">
          {years.map((year) => (
            <motion.div
              key={year}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{}}
            >
              {/* Year Header */}
              <div className="flex items-center mb-8">
                <h3 className="text-2xl font-bold text-white mr-4">{year}</h3>
                <div className="flex-1 h-px bg-gradient-to-r from-blue-400/50 to-transparent"></div>
              </div>

              {/* Certifications Grid */}
              <motion.div 
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                <AnimatePresence mode="wait">
                  {groupedByYear[year].map((certification, index) => (
                    <CertificationCard
                      key={certification.title}
                      certification={certification}
                      index={index}
                    />
                  ))}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Certification Card Component
function CertificationCard({ certification, index }) {
  const getImagePath = (cert) => {
    const issuerMap = {
      'freeCodeCamp': 'freecodecamp',
      'Harvard CS50': 'harvard',
      'NVIDIA Deep Learning Institute': 'nvidia'
    };
    
    const titleMap = {
      'Backend Development and APIs': 'backend',
      'Relational Database': 'database',
      'Data Visualization': 'dataviz',
      'Front End Development Libraries': 'frontend',
      'JavaScript Algorithms & Data Structures': 'javascript',
      'Responsive Web Design': 'responsive',
      'Introduction to Python': 'python',
      'Introduction to Artificial Intelligence with Python': 'ai',
      'Fundamentals of Deep Learning': 'deeplearning'
    };

    const issuer = issuerMap[cert.issuer] || cert.issuer.toLowerCase().replace(/\s+/g, '-');
    const title = titleMap[cert.title] || cert.title.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    return `/images/certifications/${issuer}-${title}.png`;
  };

  const handleClick = () => {
    if (certification.link) {
      window.open(certification.link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -30, scale: 0.9 }}
      transition={{ 
        delay: index * 0.1,
        duration: 0.5,
        type: "spring",
        stiffness: 100 
      }}
      onClick={handleClick}
      className="group cursor-pointer"
    >
      {/* Card Container */}
      <div className="h-full rounded-2xl overflow-hidden transition-all duration-300 bg-gray-900/40 backdrop-blur-lg border border-white/10 hover:scale-[1.03] hover:shadow-2xl hover:shadow-blue-500/30 hover:border-blue-400/60 hover:ring-2 hover:ring-purple-500/40">
        
        {/* Certification Thumbnail */}
        <div className="relative aspect-[16/10] bg-slate-800 overflow-hidden rounded-t-2xl">
          <img 
            src={getImagePath(certification)}
            alt={`${certification.title} - ${certification.issuer}`}
            className="w-full h-full object-cover"
            onError={(e) => {
              // Fallback to a generic certificate icon
              e.target.src = `data:image/svg+xml;base64,${btoa(`
                <svg width="400" height="250" xmlns="http://www.w3.org/2000/svg">
                  <rect width="100%" height="100%" fill="#1e293b"/>
                  <text x="50%" y="35%" font-family="Arial, sans-serif" font-size="48" fill="#3b82f6" text-anchor="middle" dy=".3em">
                    🏆
                  </text>
                  <text x="50%" y="55%" font-family="Arial, sans-serif" font-size="16" fill="#64748b" text-anchor="middle" dy=".3em">
                    ${certification.issuer}
                  </text>
                  <text x="50%" y="70%" font-family="Arial, sans-serif" font-size="12" fill="#64748b" text-anchor="middle" dy=".3em">
                    Certificate
                  </text>
                </svg>
              `)}`;
            }}
          />
          
          {/* Overlay for hover effect */}
          {certification.link && (
            <>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* View Certificate Button */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 
                             group-hover:opacity-100 transition-opacity duration-300">
                <div className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg border border-white/30">
                  <span className="text-white font-semibold">View Certificate</span>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Card Content */}
        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-lg font-bold text-white line-clamp-2 leading-tight">
              {certification.title}
            </h3>
            {certification.link && (
              <div className="ml-2 p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
            )}
          </div>
          
          <p className="text-blue-400 text-sm font-medium mb-2">
            {certification.issuer}
          </p>
          
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 text-xs bg-purple-500/20 text-purple-200 
                           rounded-full border border-purple-400/30 backdrop-blur-sm">
              {certification.category}
            </span>
            <span className="text-gray-400 text-sm font-mono">
              {certification.year}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}