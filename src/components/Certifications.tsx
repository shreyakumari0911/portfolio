import { motion } from 'framer-motion';

const certifications = [
  {
    title: 'GEN AI Using IBM Watsonx',
    issuer: 'IBM Career Education Program',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80', // AI/IBM themed
    issueDate: 'Apr 2025',
    credentialId: '3a1c73b396a2454f87016cc6bf8480a9',
    link: 'https://courses.ibmcep.cognitiveclass.ai/certificates/3a1c73b396a2454f87016cc6bf8480a9',
  },
  {
    title: 'Full Stack Developer MERN',
    issuer: 'SmartInternz',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80', // Coding themed
    issueDate: 'Apr 2025',
    credentialId: 'CC-FSD-2025-12777',
    link: 'https://skillwallet.smartinternz.com/internships/mongo_db/553c3741e8d893fe9789a3eb8a162821',
  },
  {
    title: 'HTML, CSS, and Javascript for Web Developers',
    issuer: 'The Johns Hopkins University | Coursera',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80', // Web dev themed
    issueDate: 'Dec 2023',
    credentialId: '',
    link: 'https://www.coursera.org/account/accomplishments/verify/T9N423K9DSMN?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course',
  },
];

const cardVariants = {
  rest: { scale: 1, boxShadow: '0 2px 8px 0 rgba(0,0,0,0.04)' },
  hover: { scale: 1.045, boxShadow: '0 8px 24px 0 rgba(99,102,241,0.12)' },
};

const Certifications = () => (
  <section id="certifications" className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <h2 className="section-title gradient-text text-center mb-12">Certifications</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {certifications.map((cert, idx) => (
          <motion.div
            key={cert.title}
            className="card p-6 rounded-lg bg-surface shadow-md flex flex-col items-center transition-all"
            variants={cardVariants}
            initial="rest"
            whileHover="hover"
            animate="rest"
          >
            <img
              src={cert.image}
              alt={cert.title}
              className="w-28 h-28 object-contain mb-4 rounded shadow"
            />
            <h3 className="text-lg font-semibold text-[color:var(--text-main)] mb-2 text-justify w-full">
              {cert.title}
            </h3>
            <p className="text-sm text-gray-500 mb-1 w-full text-justify">
              <span className="font-medium">Issuer:</span> {cert.issuer}
            </p>
            <p className="text-sm text-gray-400 mb-1 w-full text-justify">
              <span className="font-medium">Issued:</span> {cert.issueDate}
            </p>
            {cert.credentialId && (
              <p className="text-xs text-gray-400 mb-4 w-full text-justify">
                <span className="font-medium">Credential ID:</span> {cert.credentialId}
              </p>
            )}
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto mx-auto block text-center font-semibold rounded-full px-6 py-3 bg-gradient-to-r from-primary to-accent text-white shadow-lg transition-all duration-200 transform hover:scale-105 hover:from-primary-dark hover:to-accent/80 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              style={{ minWidth: 160 }}
            >
              View Certificate
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Certifications; 