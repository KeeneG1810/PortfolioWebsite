import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import ParticleBackground from './components/ParticleBackground';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-dark-300 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-16 h-16 border-4 border-neon-blue border-t-transparent rounded-full mx-auto mb-4"
          />
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-2xl font-cyber cyber-text"
          >
            Loading Portfolio...
          </motion.h1>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark-300 relative overflow-x-hidden">
      <ParticleBackground />
      <Navigation />
      
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Hero />
        <About />
        <TechStack />
        <Experience />
        <Education />
        <Contact />
      </motion.main>
    </div>
  );
}

export default App;