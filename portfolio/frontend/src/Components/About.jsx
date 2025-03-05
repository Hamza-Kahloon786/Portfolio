import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaLaptopCode, FaServer, FaBrain } from 'react-icons/fa';

const About = () => {
  const skills = [
    { name: 'Frontend Development', icon: <FaCode />, level: 90 },
    { name: 'Machine Learning', icon: <FaBrain />, level: 85 },
    { name: 'Backend Development', icon: <FaServer />, level: 80 },
    { name: 'Data Science', icon: <FaLaptopCode />, level: 75 },
  ];

  return (
    <section id="about" className="py-20 px-6 md:px-16 relative">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">Who I Am</h3>
            <p className="text-gray-300 mb-4">
              I am a passionate Research Lab Worker specializing in Machine Learning and Data Science.
              With a background in computer science and a keen interest in AI, I work on developing
              innovative solutions to complex problems.
            </p>
            <p className="text-gray-300 mb-4">
              My expertise lies in developing and implementing machine learning models, data analysis,
              and creating user-friendly interfaces to visualize complex data. I enjoy tackling challenging
              projects that require both technical expertise and creative problem-solving.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-black font-medium py-2 px-6 rounded-md mt-2 hover:bg-yellow-500 transition-colors"
            >
              Download CV
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">My Skills</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex items-center mb-2">
                    <span className="text-primary mr-2">{skill.icon}</span>
                    <span className="font-medium">{skill.name}</span>
                    <span className="ml-auto">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.3 }}
                      viewport={{ once: true }}
                      className="h-full bg-primary rounded-full"
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background decorations */}
      <div className="animated-dot" style={{ top: '20%', left: '10%' }}></div>
      <div className="animated-dot" style={{ top: '70%', left: '15%' }}></div>
      <div className="animated-dot" style={{ top: '30%', right: '15%' }}></div>
      <div className="animated-dot" style={{ top: '80%', right: '10%' }}></div>
    </section>
  );
};

export default About;