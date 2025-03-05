import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: 'ML Image Recognition',
      description: 'A machine learning project for image recognition using TensorFlow and React.',
      tags: ['React', 'TensorFlow', 'Python', 'ML'],
      image: 'https://via.placeholder.com/600x400/1a1a1a/808080?text=ML+Project',
      github: '#',
      demo: '#',
    },
    {
      title: 'Data Visualization Dashboard',
      description: 'Interactive dashboard for visualizing complex datasets using D3.js and React.',
      tags: ['React', 'D3.js', 'Tailwind CSS', 'API'],
      image: 'https://via.placeholder.com/600x400/1a1a1a/808080?text=Data+Dashboard',
      github: '#',
      demo: '#',
    },
    {
      title: 'Research Paper Analyzer',
      description: 'NLP-based tool to analyze and summarize scientific research papers.',
      tags: ['Python', 'NLP', 'Flask', 'React'],
      image: 'https://via.placeholder.com/600x400/1a1a1a/808080?text=NLP+Tool',
      github: '#',
      demo: '#',
    },
    {
      title: 'AI Recommendation System',
      description: 'Recommendation system using collaborative filtering and content-based approaches.',
      tags: ['Python', 'ML', 'Django', 'PostgreSQL'],
      image: 'https://via.placeholder.com/600x400/1a1a1a/808080?text=AI+Recommender',
      github: '#',
      demo: '#',
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 md:px-16 bg-black/30 relative">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">My Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-secondary border border-gray-800 rounded-lg overflow-hidden shadow-lg"
            >
              <div className="relative overflow-hidden group">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <motion.a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-primary text-black p-3 rounded-full"
                  >
                    <FaGithub />
                  </motion.a>
                  <motion.a 
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-primary text-black p-3 rounded-full"
                  >
                    <FaExternalLinkAlt />
                  </motion.a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="bg-gray-800 text-primary text-xs px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-primary text-primary hover:bg-primary hover:text-black font-medium py-2 px-6 rounded-md transition-colors duration-300"
          >
            View All Projects
          </motion.button>
        </div>
      </div>

      {/* Background decorations */}
      <div className="animated-dot" style={{ top: '15%', left: '5%' }}></div>
      <div className="animated-dot" style={{ top: '80%', left: '15%' }}></div>
      <div className="animated-dot" style={{ top: '40%', right: '8%' }}></div>
      <div className="animated-dot" style={{ top: '70%', right: '20%' }}></div>
    </section>
  );
};

export default Projects;