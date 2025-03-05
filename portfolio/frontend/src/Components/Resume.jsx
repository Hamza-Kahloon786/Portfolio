import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaBriefcase, FaAward } from 'react-icons/fa';

const Resume = () => {
  const [activeTab, setActiveTab] = useState('education');

  const education = [
    {
      title: 'Master of Science in Machine Learning',
      institution: 'Stanford University',
      years: '2020 - 2022',
      description: 'Specialized in deep learning and computer vision with research focus on neural networks for image recognition.',
    },
    {
      title: 'Bachelor of Computer Science',
      institution: 'MIT',
      years: '2016 - 2020',
      description: 'Graduated with honors. Focused on artificial intelligence and data structures with minor in mathematics.',
    },
    {
      title: 'Deep Learning Specialization',
      institution: 'Coursera',
      years: '2019',
      description: 'Completed 5-course specialization by Andrew Ng covering deep learning fundamentals and applications.',
    },
  ];

  const experience = [
    {
      title: 'Research Lab Worker (ML)',
      company: 'AI Research Institute',
      years: '2022 - Present',
      description: 'Leading research in computer vision and natural language processing. Developing and implementing machine learning models for real-world applications.',
    },
    {
      title: 'Machine Learning Engineer',
      company: 'Tech Innovations Inc.',
      years: '2020 - 2022',
      description: 'Developed recommendation systems and predictive models. Collaborated with data scientists and software engineers to implement ML solutions.',
    },
    {
      title: 'Data Science Intern',
      company: 'DataTech Solutions',
      years: '2019 - 2020',
      description: 'Assisted in data preprocessing, feature engineering, and model evaluation. Developed data visualization dashboards for business intelligence.',
    },
  ];

  const awards = [
    {
      title: 'Best Research Paper Award',
      organization: 'International Conference on Machine Learning',
      year: '2023',
      description: 'Awarded for innovative research in transfer learning for low-resource environments.',
    },
    {
      title: 'AI Innovation Award',
      organization: 'Tech Summit',
      year: '2022',
      description: 'Recognized for developing an efficient algorithm for real-time object detection on edge devices.',
    },
    {
      title: 'Academic Excellence Scholarship',
      organization: 'Stanford University',
      year: '2020',
      description: 'Awarded full scholarship based on academic achievements and research potential.',
    },
  ];

  const renderContent = () => {
    let content = [];
    
    switch(activeTab) {
      case 'education':
        content = education;
        break;
      case 'experience':
        content = experience;
        break;
      case 'awards':
        content = awards;
        break;
      default:
        content = education;
    }

    return (
      <div className="space-y-8 mt-8">
        {content.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="relative pl-8 border-l-2 border-gray-700"
          >
            <div className="absolute -left-3 top-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
              {activeTab === 'education' && <FaGraduationCap className="text-black text-sm" />}
              {activeTab === 'experience' && <FaBriefcase className="text-black text-sm" />}
              {activeTab === 'awards' && <FaAward className="text-black text-sm" />}
            </div>
            <div>
              <h3 className="text-xl font-bold">{item.title}</h3>
              <div className="flex flex-wrap items-center text-gray-400 mb-2">
                <span className="mr-3">{activeTab === 'education' ? item.institution : activeTab === 'experience' ? item.company : item.organization}</span>
                <span className="px-2 py-1 bg-gray-800 rounded text-primary text-xs">
                  {activeTab === 'awards' ? item.year : item.years}
                </span>
              </div>
              <p className="text-gray-300">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    );
  };

  return (
    <section id="resume" className="py-20 px-6 md:px-16 relative">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">My Resume</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="flex justify-center mb-8 space-x-2 md:space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center px-4 py-2 rounded-md ${activeTab === 'education' ? 'bg-primary text-black' : 'bg-gray-800 text-white'}`}
              onClick={() => setActiveTab('education')}
            >
              <FaGraduationCap className="mr-2" />
              Education
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center px-4 py-2 rounded-md ${activeTab === 'experience' ? 'bg-primary text-black' : 'bg-gray-800 text-white'}`}
              onClick={() => setActiveTab('experience')}
            >
              <FaBriefcase className="mr-2" />
              Experience
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center px-4 py-2 rounded-md ${activeTab === 'awards' ? 'bg-primary text-black' : 'bg-gray-800 text-white'}`}
              onClick={() => setActiveTab('awards')}
            >
              <FaAward className="mr-2" />
              Awards
            </motion.button>
          </div>

          {renderContent()}
        </div>
      </div>

      {/* Background decorations */}
      <div className="animated-dot" style={{ top: '25%', left: '8%' }}></div>
      <div className="animated-dot" style={{ top: '65%', left: '12%' }}></div>
      <div className="animated-dot" style={{ top: '35%', right: '10%' }}></div>
      <div className="animated-dot" style={{ top: '75%', right: '15%' }}></div>
    </section>
  );
};

export default Resume;