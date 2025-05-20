import { motion } from 'framer-motion';
import { BsJustify } from 'react-icons/bs';
import { TypeAnimation } from 'react-type-animation';
import Certifications from '@/components/Certifications';

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const About = () => {
  const tagline = "Building Intelligent Solutions at the Intersection of AI and Cloud Computing";
  
  const keySkills = {
    "Programming Languages": ["Python", "Java", "JavaScript", "TypeScript", "HTML/CSS"],
    "Web Technologies": ["React.js", "Spring Boot", "FastAPI", "Node.js", "Tailwind CSS"],
    "Databases": ["MongoDB", "SQLite", "Supabase", "PostgreSQL"],
    "Cloud Platforms": ["AWS", "Google Cloud", "IBM Cloud"],
    "DevOps Tools": ["Docker", "Git", "GitHub Actions", "Postman"],
    "AI/ML Frameworks": ["TensorFlow", "BERT", "IBM Watson", "Gemini API"]
  };

  return (
    <motion.section
      id="about"
      className="py-24 bg-background relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeIn}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <motion.h2 
            className="section-title gradient-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            About Me
          </motion.h2>
          <motion.div 
            className="mx-auto w-24 h-1 rounded-full bg-gradient-to-r from-primary to-accent mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
          <motion.p 
            className="text-xl text-gray-600 font-medium max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {tagline}
          </motion.p>
        </div>

        <motion.div 
          className="prose prose-lg mx-auto text-gray-600 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <TypeAnimation
            sequence={[
              "I'm a B.Tech Computer Science student at VIT Bhopal University, passionate about building intelligent solutions at the intersection of cloud computing, automation, and AI. With hands-on experience in full-stack development and AI integration, I specialize in creating scalable, real-world applications using technologies like React.js, Spring Boot, and MongoDB. I'm actively seeking impactful opportunities to learn, grow, and collaborate—feel free to connect if you share similar interests or have exciting ideas to explore.",
              1000,
            ]}
            wrapper="p"
            speed={50}
            className="font-mono text-lg sm:text-xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent leading-relaxed text-justify"
            cursor={true}
            repeat={0}
          />
        </motion.div>

        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h3 className="text-2xl font-semibold text-[color:var(--text-main)] mb-8 text-center">
            Technical Skills
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(keySkills).map(([category, skills], index) => (
              <motion.div
                key={category}
                className="card p-6 hover:scale-105 transition-transform duration-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <h4 className="text-lg font-semibold text-primary mb-4">{category}</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h3 className="text-2xl font-semibold text-[color:var(--text-main)] mb-8">
            Education
          </h3>
          <div className="card p-8 inline-block max-w-md">
            <h4 className="text-xl font-semibold text-primary mb-2">VIT Bhopal University</h4>
            <p className="text-gray-600 mb-1">B.Tech in Computer Science and Engineering</p>
            <p className="text-gray-500">CGPA: 8.89</p>
          </div>
        </motion.div>

        <Certifications />
      </div>
    </motion.section>
  );
};

export default About; 