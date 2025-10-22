import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const [currentTitle, setCurrentTitle] = useState(0);
  const titles = ['Software Developer', 'React Developer', 'Frontend Developer'];
  const [displayedTitle, setDisplayedTitle] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typeWriter = () => {
      const current = titles[currentTitle];
      
      if (isDeleting) {
        setDisplayedTitle(current.substring(0, displayedTitle.length - 1));
        if (displayedTitle === '') {
          setIsDeleting(false);
          setCurrentTitle((prev) => (prev + 1) % titles.length);
        }
      } else {
        setDisplayedTitle(current.substring(0, displayedTitle.length + 1));
        if (displayedTitle === current) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      }
    };

    const timer = setTimeout(typeWriter, isDeleting ? 50 : 100);
    return () => clearTimeout(timer);
  }, [displayedTitle, isDeleting, currentTitle, titles]);

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="space-y-8"
        >
          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-cyber font-bold"
          >
            <span className="cyber-text text-shadow-lg">Keene</span>
            <br />
            <span className="text-white">Govender</span>
          </motion.h1>

          {/* Typing Animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="text-2xl md:text-4xl lg:text-5xl font-tech text-neon-blue min-h-[3rem] flex items-center justify-center"
          >
            <span className="text-white">I am a </span>
            <span className="cyber-text text-shadow">
              {displayedTitle}
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="text-neon-blue"
              >
                |
              </motion.span>
            </span>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Crafting digital experiences with cutting-edge technology and innovative solutions.
            <br />
            <span className="text-neon-blue">Building the future, one line of code at a time.</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0,245,255,0.5)" }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToAbout}
              className="px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-purple text-white font-bold rounded-lg cyber-glow transition-all duration-300"
            >
              Explore My Work
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('mailto:keenegovender1810@gmail.com', '_blank')}
              className="px-8 py-4 border-2 border-neon-blue text-neon-blue font-bold rounded-lg hover:bg-neon-blue hover:text-dark-300 transition-all duration-300"
            >
              Get In Touch
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.button
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          onClick={scrollToAbout}
          className="text-neon-blue hover:text-neon-cyan transition-colors duration-300"
        >
          <ChevronDown size={32} />
        </motion.button>
      </motion.div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 right-20 w-4 h-4 bg-neon-blue rounded-full opacity-60"
        animate={{
          y: [0, -20, 0],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute top-40 left-20 w-2 h-2 bg-neon-purple rounded-full opacity-60"
        animate={{
          y: [0, -15, 0],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-40 right-40 w-3 h-3 bg-neon-green rounded-full opacity-60"
        animate={{
          y: [0, -25, 0],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </section>
  );
};

export default Hero;
