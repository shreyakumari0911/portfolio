'use client';

import Navbar from '@/components/Navbar';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaArrowRight, FaEnvelope } from 'react-icons/fa';

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

export default function Home() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section
        id="home"
        className="relative flex items-center justify-center min-h-[80vh] overflow-hidden bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10"
      >
        {/* Animated Gradient/Particles */}
        <motion.div
          className="absolute inset-0 z-0 animate-float pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 60% 40%, #6366F1 0%, transparent 70%), radial-gradient(ellipse at 30% 70%, #EC4899 0%, transparent 80%)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.25 }}
          transition={{ duration: 1.2 }}
        />
        <div className="relative z-10 w-full max-w-3xl mx-auto px-4 text-center flex flex-col items-center justify-center py-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <TypeAnimation
              sequence={['Hi, I\'m Shreya Kumari', 1200, 'AI & Cloud Innovator', 1200, 'Full Stack Developer', 1200, 'Hi, I\'m Shreya Kumari', 1200]}
              wrapper="h1"
              speed={40}
              repeat={Infinity}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold gradient-text mb-6 drop-shadow-lg"
              cursor={true}
            />
          </motion.div>
          <motion.p
            className="text-xl sm:text-2xl text-gray-700 mb-10 max-w-2xl mx-auto font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            <span className="inline-block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-float">
              Building Intelligent Solutions at the Intersection of AI and Cloud Computing
            </span>
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
          >
            <button
              onClick={() => scrollToSection('projects')}
              className="inline-flex items-center justify-center px-7 py-3 font-semibold rounded-full bg-gradient-to-r from-primary to-accent text-white shadow-lg transition-all duration-200 transform hover:scale-105 hover:from-primary-dark hover:to-accent/80 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 text-lg"
            >
              View My Work <FaArrowRight className="ml-2" />
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="inline-flex items-center justify-center px-7 py-3 font-semibold rounded-full bg-gradient-to-r from-accent to-primary text-white shadow-lg transition-all duration-200 transform hover:scale-105 hover:from-primary-dark hover:to-accent/80 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 text-lg"
            >
              Get in Touch <FaEnvelope className="ml-2" />
            </button>
          </motion.div>
        </div>
      </section>

      <About />
      <Projects />
      <Contact />
    </main>
  );
}
