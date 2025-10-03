// src/data/content.js

import { m } from "framer-motion";

export const profile = {
  name: "Jesslyn Trixie Edvilie",
  titles: [
    "Software Engineer",
    "AI & Application Developer", 
    "Published Researcher"
  ],
  // Two powerful sentences that capture attention
  tagline: "I translate complex AI research into intuitive applications that solve real-world problems.",
  bio: "Computer Science undergraduate specializing in Intelligent Systems who translates complex algorithms into practical, user-facing software. I combine published applied ML research (co-author at ICCSCI 2025) with end-to-end development experience from a deployed MERN full-stack soundscape app to ML-powered tools and GUIs. Preparing for Apple Developer Academy 2026, aiming to pivot into mobile/iOS engineering while bringing strong product sense and advanced Mandarin proficiency for cross-cultural collaboration.",
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
    location: "Malang, Indonesia",
    type: "Part-time",
    description: "Led weekly hands-on lab sessions for over 100 students across two core computer science and business innovation courses.",
    courses: [
      {
        name: "Algorithm and Programming",
        students: "60+",
        description: "Led weekly hands-on lab sessions for over 60 students, teaching fundamental concepts of algorithms and programming logic in C."
      },
      {
        name: "Commercializing Emerging Technology",
        students: "40+",
        description: "Collaborated with the lead lecturer to conduct weekly lab sessions for over 40 students, guiding them on the practical application of emerging technology for business model creation."
      }
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
    id: "nagiscape",
    title: "Nagiscape: Ambient Sound Mixer",
    category: "Web Development",
    status: "Featured",
    description: "A full-stack MERN application that allows users to mix curated music with ambient sounds (rain, ocean, fireplace) to create personalized soundscapes. Includes JWT-based authentication, email verification, password reset, account management, and a modern glassmorphism UI deployed on Vercel.",
    role: "As the sole developer, I handled both frontend (React, Tailwind, Vite) and backend (Node.js, Express, MongoDB) development. I implemented authentication, audio player logic, and responsive UI design, ensuring seamless integration between backend and frontend.",
    tags: ["React", "Node.js", "MongoDB", "Express", "JWT", "Vercel"],
    cover: "/images/projects/nagiscape/cover.jpg",
    gallery: ["/images/projects/nagiscape/1.jpg", "/images/projects/nagiscape/2.jpg", "/images/projects/nagiscape/3.jpg", "/images/projects/nagiscape/4.jpg"],
    githubUrl: "https://github.com/jesslyntrixie/nagiscape",
    demoUrl: "https://nagiscape.vercel.app"
  },
  {
    id: "doodle-detect",
    title: "DoodleDetect: AI Sketch Recognition System",
    category: "AI",
    status: "Featured",
    description: "An interactive sketch recognition system using CLIP embeddings, PCA, SVM, and FAISS for fast similarity search. Built with Python and Tkinter GUI, it achieved 77.2% Top-1 accuracy on TU-Berlin—outperforming deep learning baselines like VGG-16.",
    role: "I developed the Tkinter-based desktop GUI that transformed the ML pipeline into a tangible, user-facing application. In addition, I served as the main technical writer, analyzing our experimental results (classical ML outperforming a deep learning baseline) and articulating them clearly in the final report.",
    tags: ["Python", "CLIP", "SVM", "FAISS", "Tkinter", "Computer Vision"],
    cover: "/images/projects/doodle-detect/cover.jpg",
    gallery: ["/images/projects/doodle-detect/1.jpg", "/images/projects/doodle-detect/2.jpg"],
    githubUrl: "https://github.com/jesslyntrixie/doodledetect"
  },
  {
    id: "decisiontrees",
    title: "Enhancing Decision Tree Performance through Stacking Ensemble Learning",
    category: "AI",
    status: "Published",
    description: "A research project proposing a stacking ensemble pipeline to improve sentiment analysis accuracy by combining diverse base learners. Achieved significant performance gains over single decision tree models, published in Procedia Computer Science (ICCSCI 2025, Scopus Q2).",
    role: "As Paper Coordinator, I structured the research paper, integrated team contributions, and ensured methodological clarity. I translated experimental results into persuasive academic writing, making the work accessible to the research community.",
    tags: ["Ensemble Learning", "Decision Trees", "Sentiment Analysis", "Scikit-learn"],
    cover: "/images/projects/decisiontrees/cover.jpg",
    gallery: ["/images/projects/decisiontrees/1.jpg", "/images/projects/decisiontrees/2.jpg"],
    demoUrl: "https://doi.org/your-paper-doi"
  },
  {
    id: "alzheimers-cnn",
    title: "Deep Learning for Alzheimer’s MRI Classification",
    category: "AI",
    status: "Completed",
    description: "Benchmarked CNN architectures (EfficientNet, ResNet, InceptionV4, MobileNetV3, VGG-16) for Alzheimer’s detection from MRI scans. Achieved 98% accuracy, providing insights on balancing predictive power with clinical interpretability.",
    role: "As Paper Coordinator, I led experiment design, coordinated training and evaluation, and authored the final manuscript. My focus was integrating team contributions into a coherent and clinically relevant narrative.",
    tags: ["Deep Learning", "CNNs", "TensorFlow", "Healthcare AI"],
    cover: "/images/projects/alzheimers-cnn/cover.jpg",
    gallery: ["/images/projects/alzheimers-cnn/1.jpg", "/images/projects/alzheimers-cnn/2.jpg"],
    demoUrl: "https://linktr.ee/alzheimercnn"
  },
  {
    id: "ceritanusa",
    title: "CeritaNusa: AI-Powered Indonesian History Learning App",
    category: "Mobile Apps",
    status: "Completed",
    description: "An Android application built with Flutter and Django REST API that leverages a fine-tuned AI summarization model to deliver concise Indonesian history content. Designed with an interactive, accessible educational interface for students and the public.",
    role: "As Frontend Developer (Admin Page), I customized a React.js admin dashboard for the content team. I modified components and optimized the workflow so non-technical members could seamlessly manage and publish historical content.",
    tags: ["Flutter", "Django REST", "React.js", "Education", "AI Summarization"],
    cover: "/images/projects/ceritanusa/cover.png",
    gallery: ["/images/projects/ceritanusa/1.png", "/images/projects/ceritanusa/2.png", "/images/projects/ceritanusa/3.png"],
    githubUrl: "https://github.com/jesslyntrixie/cerita-nusa",
    demoUrl: "https://linktr.ee/ceritanusa"
  },
  {
    id: "pomoducky",
    title: "PomoDucky: Pomodoro Timer App",
    category: "Desktop Apps",
    status: "Completed",
    description: "A desktop productivity tool built with Electron + React, combining the Pomodoro technique with a pixel-art duck. Features always-on-top mode, customizable session lengths, animated themes, and sound notifications.",
    role: "As sole developer, I designed and built the entire app, from timer logic and UI to packaging as a cross-platform desktop application.",
    tags: ["Electron.js", "React", "Productivity Tool"],
    cover: "/images/projects/pomoducky/cover.png",
    githubUrl: "https://github.com/jesslyntrixie/pomoducky-desktop"
  },
  {
    id: "calculator",
    title: "Python Tkinter Calculator",
    category: "Learning Projects",
    status: "Completed",
    description: "Made as the final project for Harvard CS50's Introduction to Python certification. A simple calculator with a Tkinter GUI supporting arithmetic operations, clear/reset, and unit testing via pytest.",
    role: "As sole developer, I implemented GUI logic with Tkinter and added test coverage with pytest, exploring GUI development in Python.",
    tags: ["Python", "Tkinter", "GUI"],
    cover: "/images/projects/calculator/cover.png",
    githubUrl: "https://github.com/jesslyntrixie/python-calculator",
    demoUrl: "https://www.youtube.com/watch?v=_hm-0D1bCBE"
  },  
  {
    id: "bar-chart",
    title: "US GDP Bar Chart Visualization",
    category: "Learning Projects",
    status: "Completed",
    description: "Interactive D3.js bar chart visualizing US Gross Domestic Product data from 1947-2015. Features hover tooltips, responsive design, and smooth animations. Built as part of freeCodeCamp's Data Visualization certification.",
    role: "Developed as a solo project to master D3.js fundamentals, SVG manipulation, and data binding. Focused on creating clean, accessible data visualizations with proper scaling and user interactions.",
    tags: ["D3.js", "JavaScript", "Data Visualization", "SVG"],
    cover: "/images/projects/bar-chart/cover.png",
    githubUrl: "https://github.com/jesslyntrixie/bar-chart-fcc",
    demoUrl: "https://jesslyntrixie.github.io/bar-chart-fcc/"
  },
  {
    id: "scatterplot",
    title: "Cycling Doping Allegations Scatterplot",
    category: "Learning Projects", 
    status: "Completed",
    description: "D3.js scatterplot analyzing cycling race times vs. doping allegations. Visualizes professional cyclists' performance data with interactive tooltips, color-coded legends, and responsive design. Part of freeCodeCamp's Data Visualization curriculum.",
    role: "Built to explore advanced D3.js concepts including scales, axes, and data filtering. Implemented color coding and interactive elements to reveal patterns in sports performance data.",
    tags: ["D3.js", "JavaScript", "Data Analysis", "Sports Analytics"],
    cover: "/images/projects/scatterplot/cover.png", 
    githubUrl: "https://github.com/jesslyntrixie/scatterplot-fcc",
    demoUrl: "https://jesslyntrixie.github.io/scatterplot-fcc/"
  },
  {
    id: "heatmap",
    title: "Global Temperature Heat Map",
    category: "Learning Projects",
    status: "Completed", 
    description: "Interactive heat map visualizing global land-surface temperature variations from 1753-2015. Features color-coded temperature scales, hover interactions, and responsive design. Demonstrates climate data patterns through effective visual encoding.",
    role: "Developed to master complex D3.js heat map implementations, including calendar-based layouts, color scales, and large dataset handling. Focused on making climate data accessible and visually compelling.",
    tags: ["D3.js", "Climate Data", "Data Visualization", "Environmental Analytics"],
    cover: "/images/projects/heatmap/cover.png",
    githubUrl: "https://github.com/jesslyntrixie/heatmap-fcc", 
    demoUrl: "https://jesslyntrixie.github.io/heatmap-fcc/"
  },
  {
    id: "choropleth",
    title: "US Education Choropleth Map",
    category: "Learning Projects",
    status: "Completed",
    description: "Geographic choropleth map showing educational attainment across US counties. Uses TopoJSON data and D3.js to create an interactive map with hover tooltips and color-coded education levels. Demonstrates geospatial data visualization techniques.",
    role: "Built to learn geospatial data visualization, working with TopoJSON files, geographic projections, and county-level statistical data. Emphasized creating intuitive geographic data representations.",
    tags: ["D3.js", "TopoJSON", "Geographic Visualization", "Education Data"],
    cover: "/images/projects/choropleth/cover.png",
    githubUrl: "https://github.com/jesslyntrixie/choropleth-fcc",
    demoUrl: "https://jesslyntrixie.github.io/choropleth-fcc/"
  },
  {
    id: "treemap",
    title: "Video Game Sales Treemap Diagram", 
    category: "Learning Projects",
    status: "Completed",
    description: "Interactive treemap visualization of video game sales data by platform and genre. Features hierarchical data representation, hover effects, color-coded categories, and responsive legends. Capstone project for freeCodeCamp's Data Visualization certification.",
    role: "Developed as the final certification project, combining all learned D3.js concepts. Implemented complex hierarchical layouts, nested data structures, and interactive filtering to showcase video game industry trends.",
    tags: ["D3.js", "Hierarchical Data", "Gaming Analytics", "Interactive Visualization"],
    cover: "/images/projects/treemap/cover.png",
    githubUrl: "https://github.com/jesslyntrixie/treemap-fcc",
    demoUrl: "https://jesslyntrixie.github.io/treemap-fcc/"
  }
];


export const achievements = [
  {
    title: "2nd Winner Mandarin Story Telling Zhongwen Bisai 2024",
    description: "Universitas Negeri Malang",
    icon: "🏆",
    year: "June 2024",
    location: "Malang, Indonesia",
    category: "Language"
  },
  {
    title: "2nd Place Winner, Mandarin News Reading Competition",
    description: "Pusat Bahasa Mandarin, Universitas Negeri Malang",
    icon: "🏆",
    year: "November 2024",
    location: "Malang, Indonesia",
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
    status: "In Progress"
  },
  {
    institution: "Apple Developer Academy",
    degree: "iOS Development Program",
    specialization: "Mobile App Development",
    duration: "Mar 2026 - Dec 2026", 
    location: "Tangerang, Indonesia",
    status: "Upcoming"
  }
];


export const publications = [
  {
    title: "Enhancing Decision Tree Performance through Stacking Ensemble Learning for Sentiment Analysis",
    authors: "Teguh, S. P., Edvilie, J.T., et al.",
    venue: "Procedia Computer Science (ICCSCI 2025)",
    role: "Second author",
    ranking: "Scopus Q2",
    acceptanceRate: "≈23%",
    year: "2025",
    note: "ICCSCI 2025 acceptance rate ≈23%"
  }
];

export const certifications = [
  // Web Development - freeCodeCamp (2025)
  {
    title: "Backend Development and APIs",
    issuer: "freeCodeCamp",
    year: "2025",
    category: "Web Development",
    link: "https://freecodecamp.org/certification/jesslyntrixie/back-end-development-and-apis"
  },
  {
    title: "Relational Database",
    issuer: "freeCodeCamp", 
    year: "2025",
    category: "Web Development",
    link: "https://freecodecamp.org/certification/jesslyntrixie/relational-database-v8"
  },
  {
    title: "Data Visualization",
    issuer: "freeCodeCamp",
    year: "2025", 
    category: "Web Development",
    link: "https://freecodecamp.org/certification/jesslyntrixie/data-visualization"
  },
  {
    title: "Front End Development Libraries",
    issuer: "freeCodeCamp",
    year: "2025",
    category: "Web Development",
    link: "https://freecodecamp.org/certification/jesslyntrixie/front-end-development-libraries"
  },
  {
    title: "JavaScript Algorithms & Data Structures",
    issuer: "freeCodeCamp",
    year: "2025",
    category: "Web Development",
    link: "https://freecodecamp.org/certification/jesslyntrixie/javascript-algorithms-and-data-structures-v8"
  },
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    year: "2025",
    category: "Web Development",
    link: "https://freecodecamp.org/certification/jesslyntrixie/responsive-web-design"
  },
  // Python and AI - Harvard CS50 (2024)
  {
    title: "Introduction to Python",
    issuer: "Harvard CS50",
    year: "2024",
    category: "Programming",
    link: "https://certificates.cs50.io/65b5dcc3-f767-45c1-9750-8656e521a41f.pdf?size=letter"
  },
  {
    title: "Introduction to Artificial Intelligence with Python",
    issuer: "Harvard CS50",
    year: "2024",
    category: "AI/ML",
    link: "https://certificates.cs50.io/73ffce71-6548-434b-93ef-81a76d0f5ecd.pdf?size=letter"
  },
  // NVIDIA (2024)
  {
    title: "Fundamentals of Deep Learning",
    issuer: "NVIDIA Deep Learning Institute",
    year: "2024",
    category: "AI/ML",
    link: "https://learn.nvidia.com/certificates?id=ggOlc2nYRmKaUimLHis_5g"
  }
];

