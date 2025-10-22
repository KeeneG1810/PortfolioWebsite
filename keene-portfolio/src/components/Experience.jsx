import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Building2, Award, Users, Code, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredCard, setHoveredCard] = useState(null);

  const experiences = [
    {
      company: "ITSA (Innovative Technology South Africa)",
      position: "Software Developer",
      duration: "2022 - Present",
      location: "South Africa",
      type: "Full-time",
      description: "Contributing to front-end development initiatives and building solutions across multiple sectors.",
      achievements: [
        "Frontend developer for Clinix Connect - a comprehensive healthcare management platform",
        "Developed a Field Deployment Management System for utility companies",
        "Winner of Code Conqueror competition - showcasing innovative problem-solving skills",
        "Collaborated with senior developers and followed established coding best practices",
        "Contributed to CI/CD pipeline improvements reducing deployment time by 60%"
      ],
      technologies: ["React", "C#", ".NET Core", "SQL", "JavaScript", "React Native"],
      color: "from-neon-blue to-neon-cyan"
    }
  ];

  const projects = [
    {
      title: "Clinix Connect",
      description: "Healthcare management platform",
      role: "Frontend Developer",
      impact: "Streamlined patient management for healthcare providers"
    },
    {
      title: "Field Deployment System",
      description: "Utility company management solution",
      role: "Frontend Developer",
      impact: "Improved field operations efficiency by 40%"
    },
    {
      title: "Code Conqueror Winner",
      description: "Innovation competition project",
      role: "Developer",
      impact: "Recognized for exceptional problem-solving approach"
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
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
            Experience
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
            Building innovative solutions and leading development teams
          </motion.p>
        </motion.div>

        {/* Main Experience Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-16"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.8, delay: 1 + index * 0.2 }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 0 40px rgba(0,245,255,0.2)"
              }}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              className="relative p-8 rounded-2xl cyber-border overflow-hidden group cursor-pointer"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
              
              {/* Content */}
              <div className="relative z-10">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div>
                    <motion.h3
                      whileHover={{ scale: 1.05 }}
                      className="text-2xl md:text-3xl font-cyber font-bold text-white mb-2"
                    >
                      {exp.position}
                    </motion.h3>
                    
                    <div className="flex items-center gap-2 text-neon-blue mb-2">
                      <Building2 size={20} />
                      <span className="text-lg font-medium">{exp.company}</span>
                    </div>
                    
                    <div className="flex flex-wrap gap-4 text-gray-400 text-sm">
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users size={16} />
                        <span>{exp.type}</span>
                      </div>
                    </div>
                  </div>
                  
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-16 h-16 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full flex items-center justify-center mt-4 lg:mt-0"
                  >
                    <Code size={32} className="text-white" />
                  </motion.div>
                </div>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                  className="text-gray-300 text-lg mb-6 leading-relaxed"
                >
                  {exp.description}
                </motion.p>

                {/* Achievements */}
                <div className="mb-6">
                  <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <Award size={24} className="text-neon-blue" />
                    Key Achievements
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {exp.achievements.map((achievement, achIndex) => (
                      <motion.div
                        key={achIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.6, delay: 1.4 + achIndex * 0.1 }}
                        whileHover={{ scale: 1.02, x: 10 }}
                        className="flex items-start gap-3 p-4 bg-dark-200/50 rounded-lg border border-neon-blue/20 hover:border-neon-blue/40 transition-all duration-300"
                      >
                        <div className="w-2 h-2 bg-neon-blue rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{achievement}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-lg font-bold text-white mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                        transition={{ duration: 0.5, delay: 1.6 + techIndex * 0.1 }}
                        whileHover={{ scale: 1.1 }}
                        className="px-3 py-1 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 border border-neon-blue/30 rounded-full text-neon-blue text-sm font-medium"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <h3 className="text-3xl font-cyber font-bold text-center text-white mb-12">
            Featured Projects
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30, rotateY: -15 }}
                animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : { opacity: 0, y: 30, rotateY: -15 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 1.4 + index * 0.2,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.05, 
                  rotateY: 5,
                  boxShadow: "0 0 30px rgba(0,245,255,0.3)"
                }}
                className="group relative p-6 rounded-xl cyber-border cursor-pointer overflow-hidden"
              >
                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 to-neon-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-150" />
                
                <div className="relative z-10">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.3 }}
                    className="w-12 h-12 bg-gradient-to-r from-neon-blue to-neon-purple rounded-lg flex items-center justify-center mb-4"
                  >
                    <Code size={24} className="text-white" />
                  </motion.div>
                  
                  <h4 className="text-xl font-bold text-white mb-2 group-hover:text-neon-blue transition-colors duration-150">
                    {project.title}
                  </h4>
                  
                  <p className="text-gray-400 mb-3 text-sm">
                    {project.description}
                  </p>
                  
                  <div className="text-neon-blue text-sm font-medium mb-2">
                    {project.role}
                  </div>
                  
                  <p className="text-gray-300 text-sm">
                    {project.impact}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
