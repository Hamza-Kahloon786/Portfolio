import React from 'react';
import { motion } from 'framer-motion';
import { FaHeart, FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt, FaBehance, FaDribbble } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300
      }
    }
  };

  return (
    <footer className="relative py-16 px-6 md:px-16 bg-gradient-to-b from-black/70 to-secondary overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-primary/5 blur-3xl"></div>
      <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-primary/5 blur-3xl"></div>
      
      <div className="container mx-auto">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* About column */}
          <motion.div 
            className="col-span-1 md:col-span-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="logo text-3xl font-bold mb-4">
              Hamza Kahloon<span className="text-primary">.</span>
            </motion.div>
            
            <motion.p variants={itemVariants} className="text-gray-400 mb-6 max-w-md">
              Passionate ML researcher and developer focused on creating innovative solutions using artificial intelligence and machine learning technologies.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex space-x-4">
              <motion.a 
                whileHover={{ y: -5, color: "#F0AB00" }}
                whileTap={{ scale: 0.9 }}
                href="#" 
                className="bg-gray-800/50 w-10 h-10 rounded-full flex items-center justify-center text-gray-300 hover:bg-primary/20 transition-colors duration-300"
              >
                <FaLinkedin />
              </motion.a>
              <motion.a 
                whileHover={{ y: -5, color: "#F0AB00" }}
                whileTap={{ scale: 0.9 }}
                href="#" 
                className="bg-gray-800/50 w-10 h-10 rounded-full flex items-center justify-center text-gray-300 hover:bg-primary/20 transition-colors duration-300"
              >
                <FaGithub />
              </motion.a>
              <motion.a 
                whileHover={{ y: -5, color: "#F0AB00" }}
                whileTap={{ scale: 0.9 }}
                href="#" 
                className="bg-gray-800/50 w-10 h-10 rounded-full flex items-center justify-center text-gray-300 hover:bg-primary/20 transition-colors duration-300"
              >
                <FaTwitter />
              </motion.a>
              <motion.a 
                whileHover={{ y: -5, color: "#F0AB00" }}
                whileTap={{ scale: 0.9 }}
                href="#" 
                className="bg-gray-800/50 w-10 h-10 rounded-full flex items-center justify-center text-gray-300 hover:bg-primary/20 transition-colors duration-300"
              >
                <FaInstagram />
              </motion.a>
              <motion.a 
                whileHover={{ y: -5, color: "#F0AB00" }}
                whileTap={{ scale: 0.9 }}
                href="#" 
                className="bg-gray-800/50 w-10 h-10 rounded-full flex items-center justify-center text-gray-300 hover:bg-primary/20 transition-colors duration-300"
              >
                <FaBehance />
              </motion.a>
            </motion.div>
          </motion.div>
          
          {/* Quick links */}
          <motion.div 
            className="col-span-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h3 variants={itemVariants} className="text-xl font-bold mb-6 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-primary"></span>
            </motion.h3>
            
            <motion.ul variants={containerVariants} className="space-y-3">
              {['Home', 'About', 'Resume', 'Projects', 'Contact'].map((item) => (
                <motion.li key={item} variants={itemVariants}>
                  <Link
                    to={item.toLowerCase()}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="text-gray-400 hover:text-primary transition-colors duration-300 flex items-center group cursor-pointer"
                  >
                    <span className="w-0 h-0.5 bg-primary mr-0 group-hover:w-4 group-hover:mr-2 transition-all duration-300"></span>
                    {item}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
          
          {/* Contact Info */}
          <motion.div 
            className="col-span-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h3 variants={itemVariants} className="text-xl font-bold mb-6 relative inline-block">
              Contact Info
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-primary"></span>
            </motion.h3>
            
            <motion.ul variants={containerVariants} className="space-y-4">
              <motion.li variants={itemVariants} className="flex items-start">
                <div className="mt-1 mr-3 text-primary">
                  <FaEnvelope />
                </div>
                <div>
                  <h4 className="font-medium text-white">Email</h4>
                  <p className="text-gray-400">hamzaakahloon903</p>
                </div>
              </motion.li>
              
              <motion.li variants={itemVariants} className="flex items-start">
                <div className="mt-1 mr-3 text-primary">
                  <FaPhone />
                </div>
                <div>
                  <h4 className="font-medium text-white">Phone</h4>
                  <p className="text-gray-400">+92 3091453950</p>
                </div>
              </motion.li>
              
              <motion.li variants={itemVariants} className="flex items-start">
                <div className="mt-1 mr-3 text-primary">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h4 className="font-medium text-white">Location</h4>
                  <p className="text-gray-400">Narang Mandi</p>
                </div>
              </motion.li>
            </motion.ul>
          </motion.div>
        </div>
        
        {/* Newsletter section with email functionality */}
        <motion.div 
          className="mt-16 p-8 bg-gray-900/60 rounded-xl border border-gray-800"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h3 className="text-xl font-bold mb-2">Subscribe to my newsletter</h3>
              <p className="text-gray-400">Stay updated with my latest projects and research.</p>
            </div>
            <div className="w-full md:w-auto">
              <form 
                action="https://formsubmit.co/hamzaakahloon903@gmail.com" 
                method="POST"
                className="flex"
              >
                <input type="hidden" name="_subject" value="New Newsletter Subscriber!" />
                <input type="hidden" name="_captcha" value="false" />
                <input 
                  type="email" 
                  name="email"
                  placeholder="Enter your email" 
                  required
                  className="w-full md:w-64 px-4 py-3 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="bg-primary text-black px-5 py-3 rounded-r-lg font-medium"
                >
                  Subscribe
                </motion.button>
              </form>
            </div>
          </div>
        </motion.div>
        
        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-700 to-transparent my-10"></div>
        
        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.p 
            className="text-gray-400 text-sm mb-4 md:mb-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            © {currentYear} Hamza Kahloon. All rights reserved. Made with <FaHeart className="inline text-primary mx-1" /> using React.
          </motion.p>
          
          <motion.div 
            className="flex space-x-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">Cookie Policy</a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;