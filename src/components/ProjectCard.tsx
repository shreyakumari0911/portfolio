// 'use client';

// import Image from 'next/image';
// import Link from 'next/link';
// import { motion } from 'framer-motion';
// import { FaGithub } from 'react-icons/fa';

// interface ProjectCardProps {
//   title: string;
//   description: string;
//   imageUrl: string;
//   technologies: string[];
//   projectUrl: string;
//   githubUrl: string;
//   achievements: string[];
// }

// const ProjectCard = ({
//   title,
//   description,
//   imageUrl,
//   technologies,
//   projectUrl,
//   githubUrl,
//   achievements,
// }: ProjectCardProps) => {
//   return (
//     <motion.div
//       className="card group overflow-hidden min-h-[340px] flex flex-col relative"
//       whileHover={{ y: -5 }}
//       transition={{ duration: 0.2 }}
//     >
//       <div className="relative h-48 overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
//         <img
//           src={imageUrl}
//           alt={title}
//           className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//       </div>
//       <div className="p-6 flex flex-col flex-1 z-10">
//         <h3 className="text-xl font-semibold text-[color:var(--text-main)] mb-0 group-hover:text-primary transition-colors">
//           {title}
//         </h3>
//       </div>
//       {/* Overlay on hover */}
//       <div className="absolute inset-0 bg-white/95 bg-opacity-95 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 z-20">
//         <h3 className="text-xl font-semibold text-primary mb-3 text-center">
//           {title}
//         </h3>
//         <p className="text-gray-600 mb-4 text-center line-clamp-4">
//           {description}
//         </p>
//         <div className="mb-4 w-full">
//           <h4 className="text-sm font-medium text-[color:var(--text-main)] mb-2">Technologies:</h4>
//           <div className="flex flex-wrap gap-2 justify-center">
//             {technologies.map((tech, index) => (
//               <span
//                 key={index}
//                 className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium"
//               >
//                 {tech}
//               </span>
//             ))}
//           </div>
//         </div>
//         <div className="mb-4 w-full">
//           <h4 className="text-sm font-medium text-[color:var(--text-main)] mb-2">Key Achievements:</h4>
//           <ul className="space-y-1 text-xs text-gray-600 list-disc list-inside">
//             {achievements.slice(0, 4).map((achievement, index) => (
//               <li key={index}>{achievement}</li>
//             ))}
//           </ul>
//         </div>
//         {githubUrl && (
//           <a
//             href={githubUrl}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="mt-2 flex items-center gap-2 text-primary hover:text-primary-dark font-semibold text-lg border border-primary rounded-full px-4 py-2 transition-colors shadow-sm hover:bg-primary/10"
//           >
//             <FaGithub className="w-5 h-5" />
//             GitHub
//           </a>
//         )}
//       </div>
//     </motion.div>
//   );
// };

// export default ProjectCard; 
'use client';

import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  githubUrl: string;
  achievements: string[];
}

const ProjectCard = ({
  title,
  description,
  imageUrl,
  technologies,
  githubUrl,
  achievements,
}: ProjectCardProps) => {
  return (
    <motion.div
      className="group relative rounded-lg overflow-hidden shadow-md cursor-pointer
                 max-h-[200px] hover:max-h-[600px] transition-all duration-500 ease-in-out"
      whileHover={{ scale: 1.02 }}
    >
      {/* Image always visible */}
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-[200px] object-cover group-hover:h-[600px] transition-all duration-500 ease-in-out"
      />

      {/* Overlay content, hidden initially */}
      <div
        className="absolute inset-0 bg-white bg-opacity-95 p-6 flex flex-col
                   opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out overflow-auto"
        style={{ maxHeight: '600px' }}
      >
        <h3 className="text-xl font-semibold text-[color:var(--text-main)] mb-3">
          {title}
        </h3>

        <p className="text-gray-600 mb-4">{description}</p>

        <div className="mb-4">
          <h4 className="text-sm font-medium text-[color:var(--text-main)] mb-2">
            Technologies:
          </h4>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <h4 className="text-sm font-medium text-[color:var(--text-main)] mb-2">
            Key Achievements:
          </h4>
          <ul className="space-y-1 text-xs text-gray-600 list-disc list-inside">
            {achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </div>

        <div className="flex justify-center mt-auto">
  {githubUrl && (
    <a
      href={githubUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-semibold text-lg border border-primary rounded-full px-4 py-2 transition-colors shadow-sm hover:bg-primary/10"
    >
      <FaGithub className="w-5 h-5" />
      GitHub
    </a>
  )}
</div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
