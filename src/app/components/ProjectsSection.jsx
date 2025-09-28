'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '@/data/content';

// Image Gallery Component - Only shown in modal
function ImageGallery({ project }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = project.gallery ? [project.cover, ...project.gallery].filter(Boolean) : [project.cover].filter(Boolean);
  
  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };
  
  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };
  
  return (
    <div className="relative aspect-[16/10] bg-slate-800 rounded-lg overflow-hidden group">
      {/* Main Image - object-fit handles any size automatically */}
      <motion.img
        key={currentIndex}
        src={images[currentIndex]}
        alt={`${project.title} - Image ${currentIndex + 1}`}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.3 }}
        className="w-full h-full object-cover"
        onError={(e) => {
          e.target.src = `data:image/svg+xml;base64,${btoa(`
            <svg width="400" height="250" xmlns="http://www.w3.org/2000/svg">
              <rect width="100%" height="100%" fill="#1e293b"/>
              <text x="50%" y="45%" font-family="Arial, sans-serif" font-size="40" fill="#64748b" text-anchor="middle" dy=".3em">
                ${project.category.includes('AI') ? '🤖' : project.category.includes('Research') ? '📊' : '💻'}
              </text>
              <text x="50%" y="65%" font-family="Arial, sans-serif" font-size="12" fill="#64748b" text-anchor="middle" dy=".3em">
                ${project.title}
              </text>
            </svg>
          `)}`;
        }}
      />
      
      {/* Navigation Arrows - only show if multiple images */}
      {images.length > 1 && (
        <>
          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-black/60 hover:bg-black/80 
                     rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 
                     transition-all duration-200 backdrop-blur-sm border border-white/20"
          >
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-black/60 hover:bg-black/80 
                     rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 
                     transition-all duration-200 backdrop-blur-sm border border-white/20"
          >
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}
      
      {/* Dots Indicator */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 opacity-0 
                      group-hover:opacity-100 transition-opacity duration-200">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={(e) => { e.stopPropagation(); setCurrentIndex(index); }}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
                index === currentIndex 
                  ? 'bg-white scale-110' 
                  : 'bg-white/60 hover:bg-white/80 hover:scale-105'
              }`}
            />
          ))}
        </div>
      )}
      
      {/* Image Counter */}
      {images.length > 1 && (
        <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-full 
                      opacity-0 group-hover:opacity-100 transition-opacity duration-200 border border-white/20">
          <span className="text-white text-xs font-mono">
            {currentIndex + 1}/{images.length}
          </span>
        </div>
      )}
    </div>
  );
}

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('all');

  const categories = ['all', ...new Set(projects.map(p => p.category))];
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-20 px-4 md:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sm md:text-base font-light uppercase tracking-[0.25em] text-blue-400 mb-3"
          >
            My Work
          </motion.p>
          
          <motion.h2
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-transparent mb-6"
          >
            Projects & Research
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto"
          >
            From AI-powered applications to full-stack solutions and published research. 
            Each project represents a journey of problem-solving and innovation.
          </motion.p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
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
              {category === 'all' ? 'All Projects' : category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
// Project Card Component
function ProjectCard({ project, index, onClick }) {
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
      onClick={onClick}
      className="group cursor-pointer"
    >
      {/* Card Container - Simple border change on hover */}
      <div className="h-full rounded-2xl overflow-hidden transition-all duration-300
                      bg-gray-900/40 backdrop-blur-lg border border-white/10
                      hover:scale-[1.03] hover:shadow-2xl hover:shadow-blue-500/30
                      hover:border-blue-400/60 hover:ring-2 hover:ring-purple-500/40">
        
          {/* Status Badge */}
          <div className="absolute top-4 left-4 z-10">
            <span className={`px-3 py-1 text-xs font-semibold rounded-full backdrop-blur-sm ${
              project.status === 'Featured' 
                ? 'bg-gradient-to-r from-yellow-500/20 to-orange-500/20 text-yellow-400 border border-yellow-500/30'
                : project.status === 'Published'
                ? 'bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-400 border border-green-500/30'
                : 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-400 border border-blue-500/30'
            }`}>
              {project.status}
            </span>
          </div>

          {/* Project Thumbnail */}
          <div className="relative aspect-[16/10] bg-slate-800 overflow-hidden rounded-t-2xl">
            <img 
              src={project.cover || `/images/projects/${project.id}/cover.jpg`}
              alt={project.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                // Try PNG if JPG fails
                if (e.target.src.includes('.jpg')) {
                  e.target.src = `/images/projects/${project.id}/cover.png`;
                } else {
                  // Fallback to SVG placeholder
                  e.target.src = `data:image/svg+xml;base64,${btoa(`
                    <svg width="400" height="250" xmlns="http://www.w3.org/2000/svg">
                      <rect width="100%" height="100%" fill="#1e293b"/>
                      <text x="50%" y="45%" font-family="Arial, sans-serif" font-size="40" fill="#64748b" text-anchor="middle" dy=".3em">
                        ${project.category.includes('AI') ? '🤖' : project.category.includes('Research') ? '📊' : '💻'}
                      </text>
                      <text x="50%" y="65%" font-family="Arial, sans-serif" font-size="12" fill="#64748b" text-anchor="middle" dy=".3em">
                        ${project.title}
                      </text>
                    </svg>
                  `)}`;
                }
              }}
            />
            
            {/* Simple Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* View Details Button */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 
                           group-hover:opacity-100 transition-opacity duration-300">
              <div className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg border border-white/30">
                <span className="text-white font-semibold">View Details</span>
              </div>
            </div>
          </div>

          {/* Card Content */}
          <div className="p-6">
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-xl font-bold text-white line-clamp-2">
                {project.title}
              </h3>
              {/* Project Link Button */}
              {(project.githubUrl || project.demoUrl) && (
                <a
                  href={project.githubUrl || project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="ml-2 p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                  title={project.githubUrl ? 'View Source Code' : project.demoUrl?.includes('linktr.ee') ? 'View Links' : project.demoUrl?.includes('youtube') ? 'Watch Demo' : 'View Demo'}
                >
                  {project.githubUrl ? (
                    <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  ) : project.demoUrl?.includes('linktr.ee') ? (
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                  ) : project.demoUrl?.includes('youtube') ? (
                    <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  ) : (
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  )}
                </a>
              )}
            </div>
            
            <p className="text-gray-400 text-sm mb-4 line-clamp-2 leading-relaxed">
              {project.description}
            </p>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.slice(0, 3).map((tag) => (
                <span key={tag} className="px-3 py-1.5 text-xs bg-purple-500/20 text-purple-200 
                                         rounded-full border border-purple-400/30 backdrop-blur-sm">
                  {tag}
                </span>
              ))}
              {project.tags.length > 3 && (
                <span className="px-2 py-1 text-xs text-blue-400">
                  +{project.tags.length - 3} more
                </span>
              )}
            </div>
          </div>
      </div>
    </motion.div>
  );
}

// Project Modal Component
function ProjectModal({ project, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-gray-900/40 backdrop-blur-lg border border-blue-400/30 rounded-2xl 
                   max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl shadow-blue-500/20
                   ring-1 ring-blue-500/20 custom-scrollbar"
      >
          {/* Header */}
          <div className="sticky top-0 bg-gray-900/60 backdrop-blur-lg border-b border-white/10 p-6 z-10">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  {project.title}
                </h2>
                <p className="text-gray-400">{project.category}</p>
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
              >
                <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Gallery */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Project Gallery
              </h3>
              <ImageGallery project={project} />
            </div>

            {/* Description */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-white mb-4">About This Project</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Role */}
              {project.role && (
                <div className="p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 
                              rounded-lg border border-blue-500/20 mb-6">
                  <h4 className="text-blue-400 font-semibold mb-2">My Role</h4>
                  <p className="text-gray-300 leading-relaxed">
                    {project.role}
                  </p>
                </div>
              )}
            </div>

            {/* Technologies */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-white mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-4 py-2 bg-white/10 text-gray-300 
                                             rounded-lg border border-white/20 text-sm font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Publication Info */}
            {project.publication && (
              <div className="mb-8 p-6 bg-gradient-to-r from-green-500/10 to-emerald-500/10 
                            rounded-lg border border-green-500/20">
                <h3 className="text-xl font-semibold text-white mb-4">Publication Details</h3>
                <div className="space-y-2 text-gray-300">
                  <p><span className="text-green-400 font-medium">Title:</span> {project.publication.title}</p>
                  <p><span className="text-green-400 font-medium">Venue:</span> {project.publication.venue}</p>
                  <p><span className="text-green-400 font-medium">Type:</span> {project.publication.type}</p>
                  <p><span className="text-green-400 font-medium">Acceptance Rate:</span> {project.publication.acceptanceRate}</p>
                </div>
              </div>
            )}

            {/* Actions */}
            <div className="flex flex-wrap gap-4">
              {project.githubUrl && (
                <motion.a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="px-6 py-3 bg-blue-500/20 backdrop-blur-lg border border-blue-400/40 
                           text-blue-200 rounded-lg font-semibold hover:bg-blue-500/30 hover:shadow-lg 
                           hover:shadow-blue-500/25 hover:border-blue-400/60 transition-all duration-200 flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  View Source Code
                </motion.a>
              )}
              {project.demoUrl && (
                <motion.a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="px-6 py-3 bg-white/10 text-white rounded-lg font-semibold 
                           hover:bg-white/20 transition-all duration-200 border border-white/20 flex items-center gap-2"
                >
                  {project.demoUrl.includes('linktr.ee') ? (
                    <>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                      </svg>
                      View Links
                    </>
                  ) : project.demoUrl.includes('youtube') ? (
                    <>
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                      Watch Demo
                    </>
                  ) : project.demoUrl.includes('doi.org') ? (
                    <>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Read Paper
                    </>
                  ) : (
                    <>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Live Demo
                    </>
                  )}
                </motion.a>
              )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}