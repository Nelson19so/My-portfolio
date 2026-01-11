import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { LogOut, Download, Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Navigation() {
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem('adminAuthenticated') === 'true';
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('adminAuthenticated');
    navigate('/');
    setMobileMenuOpen(false);
  };

  const handleDownloadResume = () => {
    // Create a dummy resume download
    // In a real application, this would link to an actual PDF file
    const link = document.createElement('a');
    link.href = '#';
    link.download = 'Nelson_Resume.pdf';
    // For demo purposes, we'll just alert the user
    alert('Resume download would start here. Please upload your resume PDF to enable actual downloads.');
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { to: '/about', label: 'About' },
    { to: '/projects', label: 'Projects' },
    { to: '/services', label: 'Services' },
    { to: '/blog', label: 'Blog' },
    { to: '/contact', label: 'Contact' }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-b border-slate-200 shadow-sm"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3" onClick={closeMobileMenu}>
            <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg flex items-center justify-center">
              <span className="text-white text-xl">N</span>
            </div>
            <span className="text-slate-900 text-lg">Nelson</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className="text-slate-700 hover:text-purple-600 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            {isAuthenticated ? (
              <motion.button
                onClick={handleLogout}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm flex items-center gap-2"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </motion.button>
            ) : (
              <motion.button
                onClick={handleDownloadResume}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </motion.button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-slate-700 hover:text-purple-600 transition-colors p-2"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pb-4 border-t border-slate-200 pt-4"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={closeMobileMenu}
                  className="text-slate-700 hover:text-purple-600 transition-colors py-2 px-4 hover:bg-slate-50 rounded-lg"
                >
                  {link.label}
                </Link>
              ))}
              {isAuthenticated ? (
                <button
                  onClick={handleLogout}
                  className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm flex items-center gap-2 justify-center"
                >
                  <LogOut className="w-4 h-4" />
                  Logout
                </button>
              ) : (
                <button
                  onClick={handleDownloadResume}
                  className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm flex items-center gap-2 justify-center"
                >
                  <Download className="w-4 h-4" />
                  Download Resume
                </button>
              )}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}