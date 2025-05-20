'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

const SERVICE_ID = 'service_c9bpr2a';
const TEMPLATE_ID = 'template_ow8vv0f';
const PUBLIC_KEY = 'VbcO3V29CQFYp7Zah';

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        PUBLIC_KEY
      );
      setFormData({ name: '', email: '', message: '' });
      setToast({ type: 'success', message: 'Thank you for your message! I will get back to you soon.' });
    } catch (error) {
      setToast({ type: 'error', message: 'Sorry, there was an error sending your message. Please try again later.' });
    } finally {
      setLoading(false);
      setTimeout(() => setToast(null), 4000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/shreyakumari0911',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/shreya-k-955819221',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      name: 'Twitter',
      url: 'https://x.com/ShreyaSingh0911',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
  ];

  return (
    <motion.section
      id="contact"
      className="py-20 bg-gradient-to-br from-[#FAD0C9] via-[#FFC3A0] to-[#D5AAFF] relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeIn}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-2 section-title">
            Get in Touch
          </h2>
          <div className="mx-auto w-24 h-1 rounded bg-[#D5AAFF] mb-4" />
          <p className="text-xl text-gray-700 section-subtitle">
            Have a project in mind or want to collaborate? Let's talk!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            className="card p-8 rounded-2xl shadow-lg border border-[#FAD6A5]/40 bg-white/80 backdrop-blur-md"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="input-field focus:ring-2 focus:ring-[#D5AAFF] focus:border-[#D5AAFF]"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="input-field focus:ring-2 focus:ring-[#D5AAFF] focus:border-[#D5AAFF]"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="input-field focus:ring-2 focus:ring-[#D5AAFF] focus:border-[#D5AAFF]"
                />
              </div>
              <motion.button
                type="submit"
                className="btn-primary w-full inline-flex justify-center items-center"
                disabled={loading}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
              >
                {loading ? 'Sending...' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">Connect with me</h3>
              <div className="flex space-x-6">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-[#D5AAFF] transition-colors"
                    whileHover={{ scale: 1.2, color: '#D5AAFF' }}
                  >
                    <span className="sr-only">{link.name}</span>
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">Email</h3>
              <a
                href="mailto:shreyasingh091102@gmail.com"
                className="text-[#D5AAFF] hover:text-[#FFABAB] transition-colors"
              >
                shreyasingh091102@gmail.com
              </a>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">Location</h3>
              <p className="text-gray-600">
                Bhopal, Madhya Pradesh, India
              </p>
            </div>
          </motion.div>
        </div>

        {/* Toast Notification */}
        {toast && (
          <motion.div
            className={`fixed left-1/2 -translate-x-1/2 bottom-8 z-50 px-6 py-3 rounded-lg shadow-lg text-white font-medium transition-all
              ${toast.type === 'success' ? 'bg-green-500' : 'bg-red-500'}`}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
          >
            {toast.message}
          </motion.div>
        )}
      </div>
    </motion.section>
  );
};

export default Contact; 