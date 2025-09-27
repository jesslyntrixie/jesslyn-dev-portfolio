'use client';
import { motion } from 'framer-motion';
import { profile, experience, achievements, skills, education, certifications, publications } from '@/data/content';

// Enhanced Glassmorphism Bento Box component
const BentoBox = ({ className, children, delay = 0, hover = true }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className={`bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-2xl ${hover ? 'hover:bg-white/15 hover:border-white/30' : ''} transition-all duration-300 ${className}`}
    >
      {children}
    </motion.div>
  );
};

const SkillTag = ({ skill, delay = 0, variant = 'default' }) => {
  const variants = {
    default: 'bg-blue-500/20 text-blue-400 border-blue-500/30 hover:bg-blue-500/30',
    purple: 'bg-purple-500/20 text-purple-400 border-purple-500/30 hover:bg-purple-500/30',
    green: 'bg-green-500/20 text-green-400 border-green-500/30 hover:bg-green-500/30',
    orange: 'bg-orange-500/20 text-orange-400 border-orange-500/30 hover:bg-orange-500/30'
  };

  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay }}
      className={`px-3 py-1 rounded-full text-sm border transition-colors ${variants[variant]}`}
    >
      {skill}
    </motion.span>
  );
};

export default function AboutBento() {
  
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-transparent mb-6">
            About Me
          </h2>
        </motion.div>

        {/* Enhanced Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          
          {/* Main Bio Card */}
          <BentoBox className="md:col-span-2 md:row-span-2" delay={0.1}>
            <div className="flex flex-col md:flex-row items-start gap-6 h-full">
              <div className="relative flex-shrink-0">
                <div className="w-32 h-32 rounded-2xl bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 p-1">
                  <img 
                    src={profile.photo} 
                    alt="Jesslyn Trixie Edvilie"
                    className="w-full h-full object-cover rounded-xl"
                    onError={(e) => {
                      e.target.src = '/images/placeholder-avatar.png';
                    }}
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-gray-900 flex items-center justify-center">
                  <span className="text-sm">🍎</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-3">
                  Summary
                </h3>
                <div className="space-y-3">
                  <p className="text-gray-300 leading-relaxed text-sm">
                    {profile.bio}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs border border-blue-500/30">
                      📍 {profile.location}
                    </span>
                    <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded-full text-xs border border-green-500/30">
                      🎓 {profile.metrics.gpa} GPA
                    </span>
                    <span className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs border border-purple-500/30">
                      📄 Published Researcher
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </BentoBox>

          {/* Education */}
          <BentoBox className="md:col-span-2" delay={0.2}>
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-2xl">🎓</span>
              Education
            </h3>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500/50 pl-4">
                <h4 className="font-semibold text-white text-sm">{education[0].degree}</h4>
                <p className="text-blue-400 text-sm">{education[0].institution}</p>
                <p className="text-xs text-gray-400">{education[0].specialization} • {education[0].gpa}</p>
                <p className="text-xs text-gray-500">{education[0].duration}</p>
              </div>
              <div className="border-l-4 border-green-500/50 pl-4">
                <h4 className="font-semibold text-white text-sm">{education[1].degree}</h4>
                <p className="text-green-400 text-sm">{education[1].institution}</p>
                <p className="text-xs text-gray-400">{education[1].specialization}</p>
                <p className="text-xs text-gray-500">{education[1].duration}</p>
              </div>
            </div>
          </BentoBox>

          {/* Research Publications - Expanded */}
          <BentoBox className="md:col-span-4" delay={0.3}>
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-2xl">📄</span>
              Publications
            </h3>
            <div className="space-y-4">
              {publications.map((pub, index) => (
                <div key={index} className="bg-white/5 p-6 rounded-lg border border-white/10">
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="md:col-span-2">
                      <p className="text-lg font-medium text-blue-400 mb-2">{pub.venue}</p>
                      <p className="text-sm text-white font-medium mb-3 leading-tight">"{pub.title}"</p>
                      <p className="text-sm text-gray-400 mb-3">{pub.authors}</p>
                      <p className="text-xs text-gray-300">{pub.note}</p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex flex-wrap gap-2">
                        <span className="text-sm bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full border border-blue-500/30">{pub.role}</span>
                        <span className="text-sm bg-green-500/20 text-green-400 px-3 py-1 rounded-full border border-green-500/30">{pub.ranking}</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <span className="text-sm bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full border border-purple-500/30">{pub.acceptanceRate}</span>
                        <span className="text-sm bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full border border-orange-500/30">{pub.year}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </BentoBox>

          {/* Work Experience */}
          <BentoBox className="md:col-span-4" delay={0.4}>
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-2xl">💼</span>
              Work Experience
            </h3>
            
            {/* Laboratory Teaching Assistant */}
            <div className="bg-white/5 p-4 rounded-lg border border-white/10 mb-4">
              <div className="flex items-start gap-3 mb-3">
                <span className="text-lg">👨‍🏫</span>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-white">{experience[0].role}</h4>
                  <p className="text-blue-400 text-sm">{experience[0].company}</p>
                  <p className="text-xs text-gray-400">{experience[0].duration} • {experience[0].location}</p>
                </div>
              </div>
              
              <p className="text-sm text-gray-300 mb-4">{experience[0].description}</p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="border-l-4 border-blue-500/50 pl-4">
                  <h5 className="text-sm font-semibold text-blue-400 mb-2">Algorithm and Programming</h5>
                  <p className="text-sm text-gray-300 mb-1">• <span className="text-white font-medium">60+ students</span></p>
                  <p className="text-xs text-gray-400">Teaching fundamental concepts of algorithms and programming logic in C</p>
                </div>
                <div className="border-l-4 border-purple-500/50 pl-4">
                  <h5 className="text-sm font-semibold text-purple-400 mb-2">Commercializing Emerging Technology</h5>
                  <p className="text-sm text-gray-300 mb-1">• <span className="text-white font-medium">40+ students</span></p>
                  <p className="text-xs text-gray-400">Guiding practical application of emerging technology for business model creation</p>
                </div>
              </div>
              
              <div className="mt-3 flex flex-wrap gap-2">
                {experience[0].technologies.map((tech, index) => (
                  <SkillTag key={tech} skill={tech} delay={0.4 + index * 0.05} variant="purple" />
                ))}
              </div>
            </div>
          </BentoBox>

          {/* Academic Metrics */}
          <BentoBox className="md:col-span-2" delay={0.5}>
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-xl">📊</span>
              Academic Impact
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {Object.entries(profile.metrics).map(([key, value], index) => (
                <div key={key} className="text-center">
                  <div className="text-2xl font-bold text-blue-400">{value}</div>
                  <div className="text-xs text-gray-400 capitalize">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </div>
                </div>
              ))}
            </div>
          </BentoBox>

        </div>

        {/* Bottom Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Technical Expertise */}
          <BentoBox className="md:col-span-2" delay={0.6}>
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-2xl">⚡</span>
              Technical Expertise
            </h3>
            <div className="space-y-4">
              {Object.entries(skills.technical).map(([category, techs], categoryIndex) => (
                <div key={category}>
                  <h4 className="text-sm font-medium text-blue-400 mb-3">{category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {techs.map((tech, techIndex) => (
                      <SkillTag 
                        key={tech} 
                        skill={tech} 
                        delay={0.6 + categoryIndex * 0.1 + techIndex * 0.05}
                        variant={categoryIndex % 4 === 0 ? 'default' : categoryIndex % 4 === 1 ? 'green' : categoryIndex % 4 === 2 ? 'purple' : 'orange'}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </BentoBox>

          {/* Languages & Awards Combined */}
          <BentoBox delay={0.7}>
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-xl">🌏</span>
              Languages & Awards
            </h3>
            
            {/* Languages */}
            <div className="mb-6">
              <h4 className="text-sm font-medium text-blue-400 mb-3">Languages</h4>
              <div className="space-y-2">
                {skills.languages.map((lang, index) => (
                  <div key={lang.name} className="flex justify-between items-center p-2 bg-white/5 rounded-lg border border-white/10">
                    <span className="text-sm text-white font-medium">{lang.name}</span>
                    <span className="text-xs text-blue-400 bg-blue-500/20 px-2 py-1 rounded-full border border-blue-500/30">{lang.level}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Awards & Honors */}
            <div>
              <h4 className="text-sm font-medium text-purple-400 mb-3">Awards & Honors</h4>
              <div className="space-y-2 max-h-40 overflow-y-auto">
                {achievements.map((achievement, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                    className="flex items-start gap-2 p-2 bg-white/5 rounded-lg border border-white/10"
                  >
                    <span className="text-sm flex-shrink-0">{achievement.icon}</span>
                    <div className="flex-1">
                      <p className="font-medium text-xs text-white leading-tight mb-1">{achievement.title}</p>
                      <div className="flex flex-wrap gap-1 text-xs text-gray-400">
                        <span>{achievement.year}</span>
                        {achievement.location && (
                          <>
                            <span>•</span>
                            <span>{achievement.location}</span>
                          </>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </BentoBox>

        </div>
      </div>
    </section>
  );
}