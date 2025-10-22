import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const ParticleBackground = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const generateParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 50; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 3 + 1,
          delay: Math.random() * 5,
          duration: Math.random() * 10 + 10,
        });
      }
      setParticles(newParticles);
    };

    generateParticles();
    window.addEventListener('resize', generateParticles);
    return () => window.removeEventListener('resize', generateParticles);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Grid Background */}
      <div className="absolute inset-0 cyber-bg opacity-20"></div>
      
      {/* Animated Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-neon-blue"
          style={{
            width: particle.size,
            height: particle.size,
            left: particle.x,
            top: particle.y,
          }}
          animate={{
            y: [particle.y, particle.y - 100, particle.y],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Floating Orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 blur-xl"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute top-3/4 right-1/4 w-24 h-24 rounded-full bg-gradient-to-r from-neon-purple/20 to-neon-pink/20 blur-xl"
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-1/2 right-1/3 w-16 h-16 rounded-full bg-gradient-to-r from-neon-green/20 to-neon-cyan/20 blur-xl"
        animate={{
          x: [0, 60, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default ParticleBackground;
