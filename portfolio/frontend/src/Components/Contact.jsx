import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });

  const formRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Show "sending" status
    setFormStatus({
      submitted: true,
      success: true,
      message: 'Sending your message...'
    });

    try {
      // Using FormSubmit.co service (no API key needed)
      const response = await fetch('https://formsubmit.co/ajax/hamzaakahloon903@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message
        })
      });

      if (response.ok) {
        // Show success message
        setFormStatus({
          submitted: true,
          success: true,
          message: 'Thank you! Your message has been sent successfully.'
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error:', error);
      setFormStatus({
        submitted: true,
        success: false,
        message: 'Failed to send message. Please try again later.'
      });
    }
  };

  // Alternative formspree.io method - no API key needed
  const handleFormspreeSubmit = (e) => {
    e.preventDefault();
    
    const form = formRef.current;
    const formData = new FormData(form);
    
    fetch("https://formspree.io/f/mwkgdpgq", { // Replace with your formspree form ID
      method: "POST",
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) {
        setFormStatus({
          submitted: true,
          success: true,
          message: 'Thank you! Your message has been sent successfully.'
        });
        form.reset();
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        response.json().then(data => {
          setFormStatus({
            submitted: true,
            success: false,
            message: data.error || 'Something went wrong. Please try again.'
          });
        });
      }
    })
    .catch(error => {
      setFormStatus({
        submitted: true,
        success: false,
        message: 'There was a problem sending your message. Please try again.'
      });
    });
  };

  return (
    <section id="contact" className="py-20 px-6 md:px-16 bg-black/30 relative">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Contact Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
            <p className="text-gray-300 mb-8">
              Whether you have a question, want to start a project, or simply want to connect, feel free to reach out.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-primary/20 p-3 rounded-lg mr-4">
                  <FaEnvelope className="text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <p className="text-gray-400">hamzaakahloon903@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary/20 p-3 rounded-lg mr-4">
                  <FaPhone className="text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Phone</h4>
                  <p className="text-gray-400">+92 3091453950</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary/20 p-3 rounded-lg mr-4">
                  <FaMapMarkerAlt className="text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Location</h4>
                  <p className="text-gray-400">Narang Mandi</p>
                </div>
              </div>
            </div>
            
            <div className="flex mt-8 space-x-4">
              <motion.a 
                whileHover={{ y: -5 }}
                href="#" 
                className="bg-primary/20 p-3 rounded-lg text-primary hover:bg-primary hover:text-black transition-colors duration-300"
              >
                <FaLinkedin />
              </motion.a>
              <motion.a 
                whileHover={{ y: -5 }}
                href="#" 
                className="bg-primary/20 p-3 rounded-lg text-primary hover:bg-primary hover:text-black transition-colors duration-300"
              >
                <FaGithub />
              </motion.a>
              <motion.a 
                whileHover={{ y: -5 }}
                href="#" 
                className="bg-primary/20 p-3 rounded-lg text-primary hover:bg-primary hover:text-black transition-colors duration-300"
              >
                <FaTwitter />
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-1">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                ></textarea>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-primary text-black font-medium py-3 px-6 rounded-lg hover:bg-yellow-500 transition-colors"
              >
                Send Message
              </motion.button>
              
              {formStatus.submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-3 rounded-lg ${formStatus.success ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}
                >
                  {formStatus.message}
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>

      {/* Background decorations */}
      <div className="animated-dot" style={{ top: '15%', left: '5%' }}></div>
      <div className="animated-dot" style={{ top: '85%', left: '10%' }}></div>
      <div className="animated-dot" style={{ top: '25%', right: '8%' }}></div>
      <div className="animated-dot" style={{ top: '75%', right: '12%' }}></div>
    </section>
  );
};

export default Contact;