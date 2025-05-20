'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHome, FaUser, FaCode, FaEnvelope, FaTimes, FaFileAlt } from 'react-icons/fa';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navbarRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;
      setScrolled(window.scrollY > 20);

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', icon: FaHome, color: '#6366F1' },
    { id: 'about', label: 'About', icon: FaUser, color: '#EC4899' },
    { id: 'projects', label: 'Projects', icon: FaCode, color: '#10B981' },
    { id: 'contact', label: 'Contact', icon: FaEnvelope, color: '#F59E0B' },
  ];

  const handleNavigation = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element && navbarRef.current) {
      const navbarHeight = navbarRef.current.offsetHeight;
      const targetPosition = element.offsetTop - navbarHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        ref={navbarRef}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-white/80 backdrop-blur-lg shadow-sm border-b border-border' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link 
                href="/"
                className="text-xl font-bold gradient-text hover:opacity-80 transition-opacity"
              >
                Shreya Kumari
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  href={`#${item.id}`}
                  className={`text-sm font-medium transition-all duration-200 ${
                    activeSection === item.id
                      ? 'text-primary'
                      : 'text-gray-600 hover:text-primary'
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation(item.id);
                  }}
                >
                  {item.label}
                </Link>
              ))}
              <a
                href="/shreya%20resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Floating Navigation */}
      <div className="md:hidden fixed bottom-6 right-6 z-50">
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute bottom-16 right-0 w-64 h-64"
            >
              <div className="relative w-full h-full">
                {navItems.map((item, index) => {
                  const angle = (index * (360 / navItems.length)) * (Math.PI / 180);
                  const radius = 100; // Distance from center
                  const x = Math.cos(angle) * radius;
                  const y = Math.sin(angle) * radius;

                  return (
                    <motion.button
                      key={item.id}
                      initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                      animate={{ 
                        opacity: 1, 
                        scale: 1,
                        x: x,
                        y: y,
                        transition: { delay: index * 0.1 }
                      }}
                      exit={{ 
                        opacity: 0, 
                        scale: 0,
                        x: 0,
                        y: 0,
                        transition: { delay: (navItems.length - index - 1) * 0.1 }
                      }}
                      onClick={() => handleNavigation(item.id)}
                      className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                        w-12 h-12 rounded-full flex items-center justify-center
                        shadow-lg transform hover:scale-110 transition-transform
                        ${activeSection === item.id ? 'ring-2 ring-offset-2' : ''}`}
                      style={{
                        backgroundColor: item.color,
                        color: 'white',
                      }}
                    >
                      <item.icon className="w-5 h-5" />
                      <span className="absolute -top-8 left-1/2 -translate-x-1/2 
                        bg-black/80 text-white text-xs px-2 py-1 rounded whitespace-nowrap
                        opacity-0 group-hover:opacity-100 transition-opacity">
                        {item.label}
                      </span>
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating Action Button */}
        <motion.button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`w-14 h-14 rounded-full flex items-center justify-center shadow-lg
            transform hover:scale-105 transition-transform
            ${isMenuOpen ? 'bg-red-500' : 'bg-gradient-to-r from-primary to-accent'}`}
          whileTap={{ scale: 0.95 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={isMenuOpen ? 'close' : 'menu'}
              initial={{ rotate: -180, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 180, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {isMenuOpen ? (
                <FaTimes className="w-6 h-6 text-white" />
              ) : (
                <FaFileAlt className="w-6 h-6 text-white" />
              )}
            </motion.div>
          </AnimatePresence>
        </motion.button>
      </div>
    </>
  );
};

export default Navbar; 