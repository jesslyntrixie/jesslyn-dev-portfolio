// src/data/content.js

export const profile = {
  name: "Jesslyn Trixie Edvilie",
  titles: [
    "Software Engineer",
    "AI & Application Developer", 
    "Published Researcher"
  ],
  // Two powerful sentences that capture attention
  tagline: "I translate complex AI research into intuitive applications that solve real-world problems.",
  bio: "Computer Science undergraduate specializing in Intelligent Systems who translates complex algorithms into practical, user-facing software. I combine published applied ML research (co-author at ICCSCI 2025) withend-to-end development experience from a deployed MERN full-stack soundscape app to ML-powered tools and GUIs. Preparing for Apple Developer Academy 2026, aiming to pivot into mobile/iOS engineering while bringing strong product sense and advanced Mandarin proficiency for cross-cultural collaboration.",
  location: "Jakarta, Indonesia",
  photo: "/images/profile-photo.jpg",
  email: "jesslyntrixiedev@gmail.com",
  linkedin: "https://www.linkedin.com/in/jesslyn-trixie-edvilie",
  github: "https://github.com/jesslyntrixie",
  website: "https://jesslyntrixie.vercel.app",
  resume: "/JesslynTrixieEdvilie_CV.pdf",
  // Add metrics for impact
  metrics: {
    gpa: "3.99/4.00",
    studentsTeached: "100+",
    projectsCompleted: "10+",
    researchPapers: "1"
  }
};

export const skills = {
  technical: {
    "AI/ML": ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "OpenCV", "CLIP", "BERT"],
    "Web Development": ["React.js", "Next.js", "Node.js", "Express", "MongoDB", "JavaScript", "HTML/CSS"],
    "Desktop Apps": ["Tkinter", "Java", "C"],
    "Tools & DevOps": ["Git", "Docker", "CI/CD", "Vercel", "RESTful APIs"],
    "Data Science": ["Pandas", "NumPy", "Matplotlib", "Data Visualization", "EDA"]
  },
  languages: [
    { name: "English", level: "Professional Working" },
    { name: "Indonesian", level: "Native" },
    { name: "Chinese", level: "Advanced" }
  ]
};

export const experience = [
  {
    role: "Laboratory Teaching Assistant",
    company: "BINUS University",
    duration: "Sep 2024 - Jan 2025",
    location: "Jakarta, Indonesia",
    type: "Part-time",
    description: "Led hands-on lab sessions for 100+ students across Algorithm & Programming and Commercializing Emerging Technology courses.",
    highlights: [
      "Taught C programming fundamentals to 60+ students",
      "Guided 40+ students in business model creation using emerging tech",
      "Improved student comprehension through interactive problem-solving sessions"
    ],
    technologies: ["C", "Teaching", "Technical Mentoring"]
  },
  {
    role: "Staff Member & Master of Ceremonies", 
    company: "HIMTI Student Association",
    duration: "Mar 2024 - Dec 2024",
    location: "Jakarta, Indonesia",
    type: "Leadership",
    description: "Led academic events and provided technical mentorship while serving as primary MC for major workshops and bootcamps.",
    highlights: [
      "Hosted 'AI 101: Object Detection' workshop with NVIDIA expert",
      "Mentored student teams in AR development competition",
      "Conducted weekly Discrete Mathematics supplementary sessions"
    ],
    technologies: ["Public Speaking", "Event Management", "Technical Mentoring"]
  }
];

export const projects = [
  {
    id: "doodle-detect",
    title: "DoodleDetect: Sketch Recognition App",
    category: "AI/ML Engineering",
    status: "Featured", // Featured, Completed, In Progress
    shortDescription: "Desktop GUI app with hybrid ML pipeline (CLIP + SVM + FAISS) that outperformed VGG-16 baseline by 7.8% in sketch classification.",
    fullDescription: "Engineered a sophisticated sketch recognition system combining classical ML with modern embeddings. Served as lead technical writer and independently deployed the trained model into an interactive Tkinter GUI.",
    impact: {
      metric: "77.2% vs 69.4%",
      description: "Top-1 accuracy improvement over deep learning baseline"
    },
    tags: ["Python", "CLIP", "SVM", "FAISS", "Tkinter", "Computer Vision"],
    technologies: {
      "AI/ML": ["CLIP Embeddings", "SVM", "FAISS", "Scikit-learn"],
      "GUI": ["Tkinter", "Real-time Processing"],
      "Tools": ["Python", "Model Deployment"]
    },
    thumbnail: "/images/projects/doodle-detect/cover.png",
    gallery: [
      "/images/projects/doodle-detect/demo.png",
      "/images/projects/doodle-detect/architecture.png",
      "/images/projects/doodle-detect/results.png"
    ],
    githubUrl: "https://github.com/jesslyntrixie/doodledetect",
    demoUrl: null,
    featured: true,
    timeline: "Feb 2025 - Jul 2025"
  },
  {
    id: "nagiscape",
    title: "Nagiscape: Ambient Sound Mixer",
    category: "Full-Stack Development",
    status: "Featured",
    shortDescription: "MERN stack web application for personalized ambient soundscapes with dynamic audio mixing and glassmorphism UI.",
    fullDescription: "Developed and deployed a full-stack ambient sound mixer enabling users to create, save, and share custom soundscapes. Features secure authentication, email-based password reset, and responsive design.",
    impact: {
      metric: "Fully Deployed",
      description: "Production-ready app on Vercel with user authentication"
    },
    tags: ["React", "Node.js", "MongoDB", "Express", "JWT", "Vercel"],
    technologies: {
      "Frontend": ["React.js", "Tailwind CSS", "Glassmorphism Design"],
      "Backend": ["Node.js", "Express.js", "JWT Authentication"],
      "Database": ["MongoDB", "User Management"],
      "Deployment": ["Vercel", "Email Integration"]
    },
    thumbnail: "/images/projects/nagiscape/cover.png",
    gallery: [
      "/images/projects/nagiscape/interface.png",
      "/images/projects/nagiscape/mixer.png",
      "/images/projects/nagiscape/auth.png"
    ],
    githubUrl: "https://github.com/jesslyntrixie/nagiscape",
    demoUrl: "https://nagiscape.vercel.app",
    featured: true,
    timeline: "Jul 2025 - Aug 2025"
  },
  {
    id: "cerita-nusa",
    title: "CeritaNusa: AI History Learning Platform",
    category: "Web Development & AI",
    status: "Completed",
    shortDescription: "React.js admin dashboard powering an AI summarization engine for Indonesian cultural history with BERT integration.",
    fullDescription: "Built the administrative backbone for an NLP-powered learning platform. Developed CRUD workflows supporting content teams and contributed to MLOps pipeline for BERT model deployment.",
    impact: {
      metric: "0 failures/8 tests",
      description: "Improved system stability from v1.0 to v1.3"
    },
    tags: ["React.js", "BERT", "Admin Dashboard", "MLOps", "Educational Tech"],
    technologies: {
      "Frontend": ["React.js", "JavaScript", "Admin Interface"],
      "AI/ML": ["BERT", "NLP", "Content Summarization"],
      "Backend": ["CRUD Operations", "Content Management"],
      "Testing": ["UAT", "System Evaluation"]
    },
    thumbnail: "/images/projects/cerita-nusa/cover.png",
    gallery: [
      "/images/projects/cerita-nusa/dashboard.png",
      "/images/projects/cerita-nusa/content.png"
    ],
    githubUrl: "https://github.com/jesslyntrixie/cerita-nusa",
    demoUrl: "https://linktr.ee/ceritanusa",
    featured: false,
    timeline: "Feb 2025 - Jul 2025"
  },
  {
    id: "research-sentiment",
    title: "Stacking Ensemble for Sentiment Analysis",
    category: "Research & Publication",
    status: "Published",
    shortDescription: "Co-authored research published at ICCSCI 2025 (Scopus Q2) improving sentiment classification accuracy from 73.46% to 88.08%.",
    fullDescription: "Served as primary technical writer for peer-reviewed research on stacking ensemble learning. Collaborated on model evaluation combining Decision Tree + SVM for enhanced sentiment classification performance.",
    impact: {
      metric: "88.08% accuracy",
      description: "14.62% improvement in sentiment classification"
    },
    tags: ["Research", "Machine Learning", "Ensemble Methods", "Publication", "Academic Writing"],
    technologies: {
      "AI/ML": ["Decision Trees", "SVM", "Stacking Ensemble"],
      "Research": ["Academic Writing", "Model Evaluation"],
      "Publication": ["Scopus Q2", "Peer Review"]
    },
    thumbnail: "/images/projects/research/cover.png",
    gallery: [
      "/images/projects/research/paper.png",
      "/images/projects/research/results.png"
    ],
    githubUrl: null,
    demoUrl: "https://doi.org/your-paper-doi", // Add when available
    featured: true,
    timeline: "Feb 2025 - Jul 2025",
    publication: {
      title: "Enhancing Decision Tree Performance through Stacking Ensemble Learning for Sentiment Analysis",
      venue: "ICCSCI 2025",
      type: "Scopus Q2",
      acceptanceRate: "~23%"
    }
  }
];

export const achievements = [
  {
    title: "Published Researcher at ICCSCI 2025",
    description: "Co-authored paper on ensemble learning for sentiment analysis at prestigious international conference (Scopus Q2, ~23% acceptance rate).",
    icon: "📄",
    year: "2025",
    category: "Research"
  },
  {
    title: "Apple Developer Academy 2026 Selectee",
    description: "Selected for the exclusive 2026 cohort focusing on iOS ecosystem development and native app creation.",
    icon: "🍎", 
    year: "2026",
    category: "Education"
  },
  {
    title: "Academic Excellence - 3.99 GPA",
    description: "Maintained exceptional academic performance in Computer Science with Intelligence Systems specialization.",
    icon: "🎓",
    year: "2023-2027",
    category: "Academic"
  },
  {
    title: "Mandarin Proficiency Awards",
    description: "2nd Place Winner in both Story Telling (Zhongwen Bisai 2024) and News Reading competitions, demonstrating advanced Chinese proficiency.",
    icon: "🏆",
    year: "2024", 
    category: "Language"
  }
];

export const education = [
  {
    institution: "BINUS University",
    degree: "Bachelor of Science in Computer Science",
    specialization: "Intelligence Systems Specialization",
    duration: "Aug 2023 - Feb 2027",
    location: "Jakarta, Indonesia",
    gpa: "3.99/4.00",
    status: "In Progress"
  },
  {
    institution: "Apple Developer Academy Cohort 2026",
    degree: "Apple Developer Academy",
    specialization: "Application Development",
    duration: "Mar 2026 - Dec 2026", 
    location: "Tangerang, Indonesia",
    status: "Upcoming"
  }
];


export const certifications = [
  // Web Development - freeCodeCamp (2025)
  {
    title: "Backend Development and APIs",
    issuer: "freeCodeCamp",
    year: "2025",
    category: "Web Development"
  },
  {
    title: "Relational Database",
    issuer: "freeCodeCamp", 
    year: "2025",
    category: "Web Development"
  },
  {
    title: "Data Visualization",
    issuer: "freeCodeCamp",
    year: "2025", 
    category: "Web Development"
  },
  {
    title: "Front End Development Libraries",
    issuer: "freeCodeCamp",
    year: "2025",
    category: "Web Development"
  },
  {
    title: "JavaScript Algorithms & Data Structures",
    issuer: "freeCodeCamp",
    year: "2025",
    category: "Web Development"
  },
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    year: "2025",
    category: "Web Development"
  },
  // Python and AI - Harvard CS50 (2024)
  {
    title: "Introduction to Python",
    issuer: "Harvard CS50",
    year: "2024",
    category: "Programming"
  },
  {
    title: "Introduction to Artificial Intelligence with Python",
    issuer: "Harvard CS50",
    year: "2024",
    category: "AI/ML"
  },
  // NVIDIA (2024)
  {
    title: "Fundamentals of Deep Learning",
    issuer: "NVIDIA Deep Learning Institute",
    year: "2024",
    category: "AI/ML"
  }
];

