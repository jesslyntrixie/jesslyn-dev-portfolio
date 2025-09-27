// src/data/content.js

export const profile = {
  name: "Jesslyn Trixie Edvilie",
  titles: [
    "Software Engineer",
    "AI & Application Developer", 
    "Published Researcher"
  ],
  // Two powerful sentences that capture attention
  tagline: "I translate cutting-edge AI research into production-ready applications that solve real-world problems. As a published researcher and Apple Developer Academy selectee, I bridge the gap between academic innovation and enterprise-grade software solutions.",
  bio: "Published co-author at ICCSCI 2025 and Apple Developer Academy 2026 selectee with a 3.99 GPA. I bridge the gap between cutting-edge machine learning research and practical software solutions, from MERN stack applications to AI-powered desktop tools.",
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
    description: "Led comprehensive laboratory sessions for 100+ Computer Science students across critical foundational courses, demonstrating exceptional pedagogical skills while maintaining academic excellence.",
    responsibilities: [
      "Designed and delivered interactive C programming workshops for 60+ Algorithm & Programming students",
      "Mentored 40+ students in creating viable business models leveraging emerging technologies (AI, IoT, Blockchain)",
      "Conducted weekly office hours providing personalized debugging assistance and code review sessions",
      "Developed supplementary learning materials and coding exercises to enhance curriculum effectiveness",
      "Collaborated with faculty to assess student progress and implement targeted intervention strategies"
    ],
    achievements: [
      "Improved student pass rates by 15% through innovative teaching methodologies",
      "Received outstanding performance evaluation from supervising professors",
      "Successfully balanced teaching responsibilities with personal academic achievement (3.99 GPA)"
    ],
    technologies: ["C Programming", "Algorithm Design", "Data Structures", "Technical Mentoring", "Curriculum Development"],
    skills: ["Technical Communication", "Student Assessment", "Problem-Based Learning", "Code Review"]
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
    status: "featured",
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
    imageCount: 4,
    githubUrl: "https://github.com/jesslyntrixie/doodledetect",
    demoUrl: null,
    timeline: "Feb 2025 - Jul 2025",
    featured: true
  },
  {
    id: "nagiscape",
    title: "Nagiscape: Ambient Sound Mixer",
    category: "Full-Stack Development",
    status: "featured",
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
    imageCount: 4,
    githubUrl: "https://github.com/jesslyntrixie/nagiscape",
    demoUrl: "https://nagiscape.vercel.app",
    timeline: "Jul 2025 - Aug 2025",
    featured: true
  },
  {
    id: "cerita-nusa",
    title: "CeritaNusa: AI History Learning Platform",
    category: "Web Development & AI",
    status: "completed",
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
    imageCount: 3,
    githubUrl: "https://github.com/jesslyntrixie/cerita-nusa",
    demoUrl: "https://linktr.ee/ceritanusa",
    timeline: "Feb 2025 - Jul 2025",
    featured: false
  },
  {
    id: "research-sentiment",
    title: "Stacking Ensemble for Sentiment Analysis",
    category: "Research & Publication",
    status: "published",
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
    imageCount: 3,
    githubUrl: null,
    demoUrl: "https://doi.org/your-paper-doi",
    timeline: "Feb 2025 - Jul 2025",
    featured: true,
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
    specialization: "Intelligence Systems",
    duration: "Aug 2023 - Feb 2027",
    location: "Jakarta, Indonesia",
    gpa: "3.99/4.00",
    status: "In Progress",
    relevantCoursework: [
      "Advanced Machine Learning & Deep Learning",
      "Computer Vision & Image Processing",
      "Natural Language Processing",
      "Algorithm Design & Analysis",
      "Database Systems & Management",
      "Software Engineering Principles",
      "Web Application Development",
      "Mobile Application Development"
    ],
    academicAchievements: [
      "Dean's List recipient for exceptional academic performance",
      "Teaching Assistant for Algorithm & Programming (Sep 2024 - Jan 2025)",
      "Active member of HIMTI (Computer Science Student Association)",
      "Peer tutor for Discrete Mathematics and Data Structures"
    ],
    thesis: {
      title: "Advanced Ensemble Learning Methods for Multi-Modal Sentiment Analysis",
      status: "In Progress",
      expectedCompletion: "Feb 2027"
    }
  },
  {
    institution: "Apple Developer Academy",
    degree: "iOS Development Program",
    specialization: "Mobile App Development & iOS Ecosystem",
    duration: "Mar 2026 - Dec 2026", 
    location: "BSD City, Tangerang, Indonesia",
    status: "Upcoming - Selected Cohort 2026",
    programFocus: [
      "Swift & SwiftUI Development",
      "iOS App Architecture & Design Patterns",
      "Human Interface Guidelines",
      "App Store Optimization & Distribution",
      "Accessibility & Inclusive Design",
      "Core Data & CloudKit Integration",
      "ARKit & Advanced iOS Features"
    ],
    selectionProcess: {
      applicants: "1000+",
      selected: "~100",
      acceptanceRate: "~10%",
      criteria: "Academic excellence, technical aptitude, innovation potential"
    }
  },
  {
    institution: "SMAN 8 Jakarta",
    degree: "High School Diploma",
    specialization: "Mathematics & Natural Sciences",
    duration: "Jul 2020 - May 2023",
    location: "Jakarta, Indonesia",
    achievements: [
      "Graduated with honors - Top 10% of graduating class",
      "Mathematics Olympiad participant (Regional level)",
      "Science Fair winner - Physics category (2022)",
      "Student Council Vice President (2021-2022)"
    ]
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

