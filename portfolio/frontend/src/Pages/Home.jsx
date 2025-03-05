import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Hero = () => {
  const [dots, setDots] = useState([]);

  // Generate random dots for the background
  useEffect(() => {
    const generateDots = () => {
      const newDots = [];
      const numberOfDots = 15;
      
      for (let i = 0; i < numberOfDots; i++) {
        newDots.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          delay: Math.random() * 5,
          size: 0.5 + Math.random() * 1,
        });
      }
      
      setDots(newDots);
    };

    generateDots();
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden">
      {/* Animated dots */}
      {dots.map((dot) => (
        <div
          key={dot.id}
          className="animated-dot"
          style={{
            left: `${dot.x}%`,
            top: `${dot.y}%`,
            width: `${dot.size}rem`,
            height: `${dot.size}rem`,
            animationDelay: `${dot.delay}s`,
          }}
        />
      ))}
      
      {/* Main content */}
      <div className="container mx-auto px-6 md:px-16 z-10 text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 text-primary font-medium text-lg md:text-xl"
        >
          HEY! I AM
        </motion.div>
        
        <motion.h1
          className="hero-title mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Kabir Ahmad
        </motion.h1>
        
        <motion.div
          className="text-2xl md:text-3xl mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          I am{" "}
          <motion.span 
            className="text-primary"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Research Lab Worker(ML)
          </motion.span>
        </motion.div>
      </div>
      
      {/* Scroll down indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <Link to="about" spy={true} smooth={true} offset={-70} duration={500}>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="cursor-pointer"
          >
            <FaChevronDown className="text-primary text-2xl" />
            <FaChevronDown className="text-primary text-2xl -mt-3" />
            <FaChevronDown className="text-primary text-2xl -mt-3" />
          </motion.div>
        </Link>
      </motion.div>
      
      {/* Diagonal lines decoration */}
      <div className="absolute -bottom-20 -left-20 w-64 h-64 border-t-2 border-primary opacity-10 transform rotate-45"></div>
      <div className="absolute -top-20 -right-20 w-64 h-64 border-b-2 border-primary opacity-10 transform rotate-45"></div>
    </section>
  );
};

export default Hero;