import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  SiReact, 
  SiDotnet, 
  SiReactquery, 
  SiMysql, 
  SiJavascript, 
  SiKotlin, 
  SiHtml5, 
  SiCss3, 
  SiBitbucket, 
  SiBootstrap, 
  SiFirebase, 
  SiGithub, 
  SiExpo,
  SiNodedotjs,
  SiTypescript
} from 'react-icons/si';
import { Code2, Database, Cloud, GitBranch } from 'lucide-react';

const TechStack = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const technologies = [
    { name: 'React', icon: SiReact, color: 'text-blue-400', category: 'Frontend' },
    { name: 'React Native', icon: SiReactquery, color: 'text-cyan-400', category: 'Mobile' },
    { name: 'C#', icon: SiDotnet, color: 'text-purple-400', category: 'Backend' },
    { name: '.NET Core', icon: SiDotnet, color: 'text-blue-500', category: 'Backend' },
    { name: 'SSMS', icon: SiMysql, color: 'text-orange-400', category: 'Database' },
    { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-400', category: 'Frontend' },
    { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-600', category: 'Frontend' },
    { name: 'Kotlin', icon: SiKotlin, color: 'text-purple-500', category: 'Mobile' },
    { name: 'HTML5', icon: SiHtml5, color: 'text-orange-500', category: 'Frontend' },
    { name: 'CSS3', icon: SiCss3, color: 'text-blue-400', category: 'Frontend' },
    { name: 'Bitbucket', icon: SiBitbucket, color: 'text-blue-500', category: 'Version Control' },
    { name: 'Bootstrap', icon: SiBootstrap, color: 'text-purple-500', category: 'Frontend' },
    { name: 'Firebase', icon: SiFirebase, color: 'text-yellow-500', category: 'Backend' },
    { name: 'GitHub', icon: SiGithub, color: 'text-gray-400', category: 'Version Control' },
    { name: 'Expo', icon: SiExpo, color: 'text-gray-400', category: 'Mobile' },
    { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-500', category: 'Backend' },
  ];

  const categories = [
    { name: 'Frontend', icon: Code2, color: 'text-neon-blue' },
    { name: 'Backend', icon: Database, color: 'text-neon-purple' },
    { name: 'Mobile', icon: Cloud, color: 'text-neon-green' },
    { name: 'Tools', icon: GitBranch, color: 'text-neon-cyan' },
  ];

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Frontend': return 'border-neon-blue/30 bg-neon-blue/10';
      case 'Backend': return 'border-neon-purple/30 bg-neon-purple/10';
      case 'Mobile': return 'border-neon-green/30 bg-neon-green/10';
      case 'Database': return 'border-neon-cyan/30 bg-neon-cyan/10';
      case 'State Management': return 'border-neon-pink/30 bg-neon-pink/10';
      case 'Version Control': return 'border-orange-400/30 bg-orange-400/10';
      default: return 'border-gray-400/30 bg-gray-400/10';
    }
  };

  return (
    <section id="tech-stack" className="py-20 relative">
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
            Tech Stack
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
            Technologies and tools I use to bring ideas to life
          </motion.p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.name}
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
              transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg border transition-all duration-300 ${getCategoryColor(category.name)}`}
            >
              <category.icon size={20} className={category.color} />
              <span className="text-white font-medium">{category.name}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Technologies Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 30, scale: 0 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: 1.4 + index * 0.05,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.1, 
                rotateY: 10,
                boxShadow: "0 0 30px rgba(0,245,255,0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              className={`group relative p-6 rounded-lg border backdrop-blur-sm cursor-pointer transition-all duration-150 ${getCategoryColor(tech.category)}`}
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-150" />
              
              {/* Content */}
              <div className="relative z-10 text-center">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.3 }}
                  className="w-12 h-12 mx-auto mb-3"
                >
                  <tech.icon size={48} className={`${tech.color} group-hover:text-neon-blue transition-colors duration-150`} />
                </motion.div>
                
                <h3 className="text-sm font-medium text-white group-hover:text-neon-blue transition-colors duration-150">
                  {tech.name}
                </h3>
                
                <p className="text-xs text-gray-400 mt-1">
                  {tech.category}
                </p>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-neon-blue/50 transition-all duration-300" />
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-cyber font-bold text-white mb-8">
            Additional Skills & Tools
          </h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'CI/CD Pipelines', 'REST APIs', 'Agile Methodologies', 
              'Project Management', 'Code Review', 'Testing & QA',
              'Performance Optimization', 'Security Best Practices'
            ].map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                transition={{ duration: 0.5, delay: 2 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 border border-neon-blue/30 rounded-full text-neon-blue text-sm font-medium cyber-glow"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
