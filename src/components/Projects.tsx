// 'use client';

// import ProjectCard from './ProjectCard';
// import { motion } from 'framer-motion';

// const fadeIn = {
//   hidden: { opacity: 0, y: 40 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
// };

// const stagger = {
//   visible: { transition: { staggerChildren: 0.15 } },
// };

// const Projects = () => {
//   const scrollToSection = (sectionId: string) => {
//     const element = document.getElementById(sectionId);
//     element?.scrollIntoView({ behavior: 'smooth' });
//   };

//   const projects = [
//     {
//       title: "Niti-Nirman (EY Techathon 5.0)",
//       description: "Led the development of an AI-powered platform to improve rural access to government schemes. Implemented a BERT-based system that matches user inputs with 1000+ government schemes, achieving 85% accuracy. Integrated OCR for document verification and developed a multilingual chatbot using Gemini API, reducing verification time by 70% and handling 500+ queries monthly.",
//       imageUrl: "https://placehold.co/600x400/e2e8f0/1e293b?text=Niti-Nirman",
//       technologies: ["React.js", "Python", "FastAPI", "Supabase", "BERT", "OCR", "Gemini API", "SQLite", "Flask"],
//       projectUrl: "https://niti-nirman.vercel.app",
//       githubUrl: "https://github.com/shreyakumari0911/Niti-nirman",
//       achievements: [
//         "Achieved 85% accuracy in scheme matching using BERT",
//         "Reduced document verification time by 70%",
//         "Implemented multilingual support for wider accessibility",
//         "Handled 500+ user queries monthly through AI chatbot",
//         "Recognized in national-level hackathon"
//       ]
//     },
//     {
//       title: "Cognito - AI-Powered Learning Platform",
//       description: "Developed an intelligent learning platform that personalizes educational content using machine learning algorithms. The system analyzes user learning patterns and adapts content delivery accordingly, resulting in a 40% improvement in learning outcomes. Integrated real-time progress tracking and interactive assessments.",
//       imageUrl: "https://placehold.co/600x400/e2e8f0/1e293b?text=Cognito",
//       technologies: ["React.js", "Node.js", "TensorFlow", "MongoDB"],
//       projectUrl: "https://cognito-learning.vercel.app",
//       githubUrl: "https://github.com/shreyakumari0911/cognito-main",
//       achievements: [
//         "Implemented ML-based content personalization",
//         "Achieved 40% improvement in learning outcomes",
//         "Built real-time progress tracking system",
//         "Integrated interactive assessment tools"
//       ]
//     },
//     {
//       title: "TravelSphere - Smart Travel Planning",
//       description: "Created an AI-driven travel planning platform that optimizes itineraries based on user preferences and real-time data. The system uses machine learning to suggest personalized travel routes, accommodations, and activities, while considering factors like weather, local events, and user reviews.",
//       imageUrl: "https://placehold.co/600x400/e2e8f0/1e293b?text=TravelSphere",
//       technologies: ["React.js", "Spring Boot", "MongoDB", "Google Cloud", "Python", "TensorFlow"],
//       projectUrl: "https://travelsphere.vercel.app",
//       githubUrl: "https://github.com/WebSorcerer10/travelsphere2.0",
//       achievements: [
//         "Developed AI-powered itinerary optimization",
//         "Integrated real-time weather and event data",
//         "Implemented user preference learning system",
//         "Built scalable backend with Spring Boot",
//         "Created responsive mobile-first design"
//       ]
//     }
//   ];

//   return (
//     <motion.section
//       id="projects"
//       className="py-24 bg-background relative overflow-hidden"
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.2 }}
//       variants={fadeIn}
//     >
//       {/* Background decoration */}
//       <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5" />
      
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
//         <div className="text-center mb-16">
//           <motion.h2 
//             className="section-title gradient-text"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//           >
//             Featured Projects
//           </motion.h2>
//           <motion.div 
//             className="mx-auto w-24 h-1 rounded-full bg-gradient-to-r from-primary to-accent mb-6"
//             initial={{ width: 0 }}
//             whileInView={{ width: 96 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//           />
//           <motion.p 
//             className="text-xl text-gray-600 max-w-2xl mx-auto"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.3 }}
//           >
//             Showcasing my journey in building intelligent solutions that make a difference
//           </motion.p>
//         </div>

//         <motion.div 
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" 
//           variants={stagger}
//         >
//           {projects.map((project, index) => (
//             <motion.div 
//               key={index} 
//               variants={fadeIn}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.1 * index }}
//             >
//               <ProjectCard {...project} />
//             </motion.div>
//           ))}
//         </motion.div>

//         <motion.div 
//           className="mt-16 text-center"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.6 }}
//         >
//           <p className="text-gray-600 mb-8 text-lg">
//             Interested in collaborating on innovative projects or discussing opportunities?
//           </p>
//           <motion.button
//             onClick={() => scrollToSection('contact')}
//             className="btn-primary"
//             whileHover={{ scale: 1.02 }}
//             whileTap={{ scale: 0.98 }}
//           >
//             Let's Connect
//           </motion.button>
//         </motion.div>
//       </div>
//     </motion.section>
//   );
// };

// export default Projects; 
'use client';

import ProjectCard from './ProjectCard';
import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

const Projects = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const projects = [
    {
      title: "TravelSphere - Smart Travel Planning",
      description:
        "Developed a full-stack AI-driven travel platform with modules like Flight Search, User Profiles, and Agency Enrollment. Enabled real-time chat, JWT & OAuth-based auth, and an Admin Dashboard for live moderation.",
      imageUrl: "https://placehold.co/600x400/e2e8f0/1e293b?text=TravelSphere",
      technologies: [
        "React.js",
        "Spring Boot",
        "MongoDB",
        "WebSockets",
        "Firebase",
        "JWT",
        "OAuth",
        "HTML/CSS",
        "Redux",
      ],
      projectUrl: "https://travelsphere.vercel.app",
      githubUrl: "https://github.com/WebSorcerer10/travelsphere2.0",
      achievements: [
        "Built responsive UI with smooth navigation",
        "Enabled JWT and OAuth login (Gmail/LinkedIn)",
        "Integrated MongoDB for structured user & flight data",
        "Deployed Admin Dashboard for moderation",
        "Implemented real-time WebSocket-based chat",
      ],
    },
    {
      title: "Cognito - AI Authentication & Attendance",
      description:
        "Created a real-time face recognition system with 98% identity accuracy using deep learning. Enabled auto-attendance with daily logs and reports, scaling for enterprise use.",
      imageUrl: "https://placehold.co/600x400/e2e8f0/1e293b?text=Cognito",
      technologies: [
        "Python",
        "OpenCV",
        "TensorFlow",
        "Deep Learning",
        "Flask",
        "SQLite",
        "JavaScript",
        "HTML/CSS",
      ],
      projectUrl: "#",
      githubUrl: "https://github.com/shreyakumari0911/cognito-main",
      achievements: [
        "Real-time face matching under 1s",
        "98% identity match accuracy",
        "Automated attendance tracking system",
        "Daily logs with downloadable reports",
        "Reduced manual tracking by 80%",
      ],
    },
    {
      title: "Niti-Nirman (EY Techathon 5.0)",
      description:
        "An AI+NLP platform streamlining rural access to 1000+ govt schemes using BERT. Added OCR for Aadhaar/doc verification and multilingual chatbot (Gemini API), helping 500+ users/month.",
      imageUrl: "https://placehold.co/600x400/e2e8f0/1e293b?text=Niti-Nirman",
      technologies: [
        "React.js",
        "Python",
        "FastAPI",
        "Supabase",
        "BERT",
        "OCR",
        "Gemini API",
        "SQLite",
        "Flask",
        "TypeScript",
      ],
      projectUrl: "https://niti-nirman.vercel.app",
      githubUrl: "https://github.com/shreyakumari0911/Niti-nirman",
      achievements: [
        "85% accuracy in BERT-based scheme matching",
        "70% reduction in manual verification time",
        "OCR-based Aadhaar & document parsing",
        "Handled 500+ multilingual chatbot queries",
        "Recognized in EY Techathon 5.0",
      ],
    },
    
  ];

  return (
    <motion.section
      id="projects"
      className="py-24 bg-background relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeIn}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <motion.h2
            className="section-title gradient-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Featured Projects
          </motion.h2>
          <motion.div
            className="mx-auto w-24 h-1 rounded-full bg-gradient-to-r from-primary to-accent mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
          <motion.p
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Showcasing my journey in building intelligent solutions that make a difference
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={stagger}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p className="text-gray-600 mb-8 text-lg">
            Interested in collaborating on innovative projects or discussing opportunities?
          </p>
          <motion.button
            onClick={() => scrollToSection('contact')}
            className="btn-primary"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Let's Connect
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Projects;
