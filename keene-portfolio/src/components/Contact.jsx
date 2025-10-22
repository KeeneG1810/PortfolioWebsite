import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Linkedin } from 'lucide-react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "keenegovender1810@gmail.com",
      link: "mailto:keenegovender1810@gmail.com",
      color: "text-neon-blue"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "keene-govender-53aa94250",
      link: "https://www.linkedin.com/in/keene-govender-53aa94250",
      color: "text-neon-cyan"
    }
  ];


  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl font-cyber font-bold cyber-text mb-6"
          >
            Get In Touch
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto mb-8"
          />

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg text-gray-300 max-w-3xl mx-auto"
          >
            Ready to bring your ideas to life? Let's collaborate and create something amazing together.
          </motion.p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-cyber font-bold text-white mb-6">
                Let's Connect
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                I'm always excited to discuss new opportunities, innovative projects, 
                and how we can work together to achieve your goals.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-6">
              {contactInfo.map((contact, index) => (
                <motion.a
                  key={contact.label}
                  href={contact.link}
                  target={contact.link.startsWith('http') ? '_blank' : '_self'}
                  rel={contact.link.startsWith('http') ? 'noopener noreferrer' : ''}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                  whileHover={{ 
                    scale: 1.05, 
                    x: 10,
                    boxShadow: "0 0 30px rgba(0,245,255,0.3)"
                  }}
                  className="group flex items-center gap-4 p-6 cyber-border rounded-lg cursor-pointer transition-all duration-150"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.3 }}
                    className={`w-12 h-12 rounded-lg bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 flex items-center justify-center group-hover:from-neon-blue/30 group-hover:to-neon-purple/30 transition-all duration-150`}
                  >
                    <contact.icon size={24} className={`${contact.color} group-hover:text-neon-blue transition-colors duration-150`} />
                  </motion.div>
                  
                  <div>
                    <h4 className="text-white font-bold group-hover:text-neon-blue transition-colors duration-150">
                      {contact.label}
                    </h4>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-150">
                      {contact.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="grid grid-cols-2 gap-4 pt-8"
            >
              <div className="text-center p-4 cyber-border rounded-lg">
                <div className="text-2xl font-cyber font-bold cyber-text mb-1">
                  24h
                </div>
                <div className="text-gray-400 text-sm">Response Time</div>
              </div>
              <div className="text-center p-4 cyber-border rounded-lg">
                <div className="text-2xl font-cyber font-bold cyber-text mb-1">
                  100%
                </div>
                <div className="text-gray-400 text-sm">Availability</div>
              </div>
            </motion.div>
          </motion.div>

        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="mt-20 text-center pt-8 border-t border-neon-blue/20"
        >
          <p className="text-gray-400 mb-4">
            © 2025 Keene Govender. Built with React, Tailwind CSS, and Framer Motion.
          </p>
          <div className="flex justify-center gap-6">
            <motion.a
              href="https://www.linkedin.com/in/keene-govender-53aa94250"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.2 }}
              className="text-neon-blue hover:text-neon-cyan transition-colors duration-150"
            >
              <Linkedin size={24} />
            </motion.a>
            <motion.a
              href="mailto:keenegovender1810@gmail.com"
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.2 }}
              className="text-neon-blue hover:text-neon-cyan transition-colors duration-150"
            >
              <Mail size={24} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
