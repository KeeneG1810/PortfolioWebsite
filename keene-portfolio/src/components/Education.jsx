import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Award, Trophy, Calendar, MapPin, BookOpen } from 'lucide-react';

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const education = [
    {
      degree: "Bachelor of Information Technology",
      specialization: "Application Development",
      institution: "Varsity College Westville",
      year: "2024",
      location: "Westville, South Africa",
      achievements: [
        {
          title: "Scholarship Recipient",
          description: "Awarded academic scholarship for outstanding performance",
          icon: Award,
          color: "text-yellow-400"
        },
        {
          title: "WIL Best Website Award",
          description: "Recognized for creating the best website during Work Integrated Learning",
          icon: Trophy,
          color: "text-neon-blue"
        }
      ],
      skills: [
        "Software Development", "Database Design", "Web Technologies", 
        "Mobile Development", "Project Management", "System Analysis"
      ]
    }
  ];


  return (
    <section id="education" className="py-20 relative">
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
            Education
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
            Academic foundation and continuous learning journey
          </motion.p>
        </motion.div>

        {/* Main Education Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-16"
        >
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.8, delay: 1 + index * 0.2 }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 0 40px rgba(0,245,255,0.2)"
              }}
              className="relative p-8 rounded-2xl cyber-border overflow-hidden group"
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/5 to-neon-purple/5 group-hover:from-neon-blue/10 group-hover:to-neon-purple/10 transition-all duration-300" />
              
              {/* Content */}
              <div className="relative z-10">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div>
                    <motion.h3
                      whileHover={{ scale: 1.05 }}
                      className="text-2xl md:text-3xl font-cyber font-bold text-white mb-2"
                    >
                      {edu.degree}
                    </motion.h3>
                    
                    <div className="text-xl text-neon-blue mb-2 font-medium">
                      {edu.specialization}
                    </div>
                    
                    <div className="flex items-center gap-2 text-gray-300 mb-2">
                      <BookOpen size={20} />
                      <span className="text-lg">{edu.institution}</span>
                    </div>
                    
                    <div className="flex flex-wrap gap-4 text-gray-400 text-sm">
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        <span>{edu.year}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={16} />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-16 h-16 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full flex items-center justify-center mt-4 lg:mt-0"
                  >
                    <GraduationCap size={32} className="text-white" />
                  </motion.div>
                </div>

                {/* Achievements */}
                <div className="mb-6">
                  <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <Trophy size={24} className="text-neon-blue" />
                    Notable Achievements
                  </h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    {edu.achievements.map((achievement, achIndex) => (
                      <motion.div
                        key={achievement.title}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.6, delay: 1.2 + achIndex * 0.1 }}
                        whileHover={{ scale: 1.05, x: 10 }}
                        className="p-4 bg-dark-200/50 rounded-lg border border-neon-blue/20 hover:border-neon-blue/40 transition-all duration-300"
                      >
                        <div className="flex items-start gap-3">
                          <motion.div
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                            className={`w-10 h-10 rounded-lg bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 flex items-center justify-center flex-shrink-0`}
                          >
                            <achievement.icon size={20} className={achievement.color} />
                          </motion.div>
                          <div>
                            <h5 className="text-white font-bold mb-1">{achievement.title}</h5>
                            <p className="text-gray-300 text-sm">{achievement.description}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Skills Learned */}
                <div>
                  <h4 className="text-lg font-bold text-white mb-3">Key Skills Developed</h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                        transition={{ duration: 0.5, delay: 1.4 + skillIndex * 0.1 }}
                        whileHover={{ scale: 1.1 }}
                        className="px-3 py-1 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 border border-neon-blue/30 rounded-full text-neon-blue text-sm font-medium"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Education;
