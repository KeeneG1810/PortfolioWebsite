import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Tech Stack', href: '#tech-stack' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-dark-200/90 backdrop-blur-md border-b border-neon-blue/30' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex-shrink-0"
          >
            <span className="text-2xl font-cyber font-bold cyber-text">
              KG
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-300 hover:text-neon-blue px-3 py-2 text-sm font-medium transition-colors duration-300 relative group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon-blue transition-all duration-300 group-hover:w-full"></span>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-neon-blue p-2"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: isMobileMenuOpen ? 1 : 0,
          height: isMobileMenuOpen ? 'auto' : 0
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden bg-dark-200/95 backdrop-blur-md border-t border-neon-blue/30"
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navItems.map((item, index) => (
            <motion.button
              key={item.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ 
                opacity: isMobileMenuOpen ? 1 : 0,
                x: isMobileMenuOpen ? 0 : -20
              }}
              transition={{ delay: index * 0.1 }}
              onClick={() => scrollToSection(item.href)}
              className="text-gray-300 hover:text-neon-blue block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-300"
            >
              {item.name}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navigation;
