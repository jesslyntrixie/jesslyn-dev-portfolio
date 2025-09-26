// src/data/content.js

export const profile = {
  name: "Jesslyn Trixie Edvilie",
titles: [
    "Software Engineer",
    "AI & Application Developer",
    "Computer Science Undergraduate"
  ],  
  bio: `I'm a problem solver passionate about translating complex technology—from AI research to application development—into intuitive and functional user experiences. I build to solve real-world problems.`,
  photo: "/images/profile-photo.jpg", // Ganti dengan path fotomu di `public/images`
  email: "jesslynedvilie@gmail.com",
  linkedin: "https://www.linkedin.com/in/jesslyn-trixie-edvilie",
  github: "https://github.com/jesslyntrixie",
  resume: "/JesslynTrixieEdvilie_CV.pdf" // Taruh file CV-mu di folder `public`
};

export const workExperience = [
  {
    role: "Laboratory Teaching Assistant",
    institution: "Bina Nusantara University",
    description: "Led weekly lab sessions, teaching fundamental concepts of algorithms and programming logic in C."
  },
  {
    role: "Public Speaking & Technical Mentoring",
    institution: "HIMTI Student Association",
    description: "Hosted and moderated various technical bootcamps and workshops, and provided technical mentorship for student teams in an AR development competition."
  }
];

export const achievements = [
  {
    title: "Paper Presented at ICCSCI 2025",
    description: "Our research, 'Enhancing Decision Tree Performance...', was accepted and presented at the 9th International Conference on Computer Science and Computational Intelligence.",
    icon: "📄"
  },
  {
    title: "2nd Place Winner, Mandarin News Reading Competition",
    description: "Awarded by the Mandarin Language Center, State University of Malang.",
    icon: "🏆"
  },
  {
    title: "Accepted into Apple Developer Academy",
    description: "Selected to join the upcoming 2026 cohort to focus on native app development within the Apple ecosystem.",
    icon: "🍎"
  }
];

// Di sini kamu bisa menambahkan daftar proyekmu
export const projects = [
    // Contoh untuk satu proyek, kamu bisa tambahkan sisanya
    {
        id: "doodle-detect",
        title: "DoodleDetect: Sketch Recognition App",
        category: "AI/ML Engineering",
        shortDescription: "Engineered a desktop GUI application with Tkinter to deploy a classical machine learning model, outperforming a deep learning baseline.",
        tags: ["Python", "Tkinter", "Scikit-learn", "CLIP"],
        image: "/images/projects/doodledetected.png",
        githubUrl: "https://github.com/jesslyntrixie/doodledetect",
    },
    {
        id: "cerita-nusa",
        title: "CeritaNusa: AI-Powered History App",
        category: "Web Development",
        shortDescription: "Developed the admin dashboard using React.js, creating the foundational data management interface for the app's AI text summarization model.",
        tags: ["React.js", "JavaScript", "Admin Dashboard"],
        image: "/images/projects/ceritanusa.png",
        liveUrl: "https://linktr.ee/ceritanusa"
    }
    // ... Tambahkan proyek lainnya dengan format yang sama
];