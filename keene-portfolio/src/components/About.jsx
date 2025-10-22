import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Users, Target, Zap } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const aboutText = "I am a passionate software developer with hands-on experience in building front-end solutions for web and mobile platforms. Skilled in modern technologies including C#, React, React Native, .NET Core, and SQL, with experience delivering applications across healthcare, utilities, and non-profit sectors. Eager to learn and grow while leveraging technology to solve problems and create meaningful solutions.";

  const highlights = [
    {
      icon: Code,
      title: "Frontend Development",
      description: "Building responsive web applications with modern frameworks"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working effectively in development teams and learning from peers"
    },
    {
      icon: Target,
      title: "Problem Solving",
      description: "Passionate about tackling technical challenges and finding solutions"
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Always exploring new technologies and improving my skills"
    }
  ];

  return (
    <section id="about" className="py-20 relative">
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
            About Me
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto mb-8"
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-6"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-lg text-gray-300 leading-relaxed"
            >
              {aboutText}
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              {['React', 'C#', '.NET Core', 'React Native', 'SQL', 'JavaScript'].map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                  whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(0,245,255,0.3)" }}
                  className="px-4 py-2 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 border border-neon-blue/30 rounded-full text-neon-blue text-sm font-medium cyber-glow"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-2 gap-6"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 0 30px rgba(0,245,255,0.2)",
                  borderColor: "rgba(0,245,255,0.5)"
                }}
                className="p-6 cyber-border rounded-lg text-center group cursor-pointer transition-all duration-150"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.3 }}
                  className="w-12 h-12 mx-auto mb-4 text-neon-blue group-hover:text-neon-cyan transition-colors duration-150"
                >
                  <highlight.icon size={48} />
                </motion.div>
                
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-neon-blue transition-colors duration-150">
                  {highlight.title}
                </h3>
                
                <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-150">
                  {highlight.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
        >
          {[
            { number: "3+", label: "Years Experience" },
            { number: "10+", label: "Projects Completed" },
            { number: "5+", label: "Technologies Used" },
            { number: "100%", label: "Client Satisfaction" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
              transition={{ duration: 0.6, delay: 1.6 + index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              className="text-center p-6 cyber-border rounded-lg"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.8, delay: 1.8 + index * 0.1 }}
                className="text-3xl md:text-4xl font-cyber font-bold cyber-text mb-2"
              >
                {stat.number}
              </motion.div>
              <div className="text-gray-400 text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
