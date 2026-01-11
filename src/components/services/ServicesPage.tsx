import { motion } from 'motion/react';
import { Navigation } from '../landing/Navigation';
import { Footer } from '../landing/Footer';
import { Code, Smartphone, Globe, Database, Palette, Zap } from 'lucide-react';

export function ServicesPage() {
  const services = [
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies like React, Node.js, and Django.',
      features: ['Responsive Design', 'SEO Optimized', 'Fast Performance', 'Cross-browser Compatible']
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native-quality mobile applications for iOS and Android using Flutter and React Native.',
      features: ['Cross-platform', 'Native Performance', 'App Store Deployment', 'Push Notifications']
    },
    {
      icon: Code,
      title: 'Full-Stack Development',
      description: 'End-to-end application development from database design to frontend implementation.',
      features: ['API Development', 'Database Design', 'Authentication', 'Cloud Deployment']
    },
    {
      icon: Database,
      title: 'Backend Development',
      description: 'Robust and scalable backend systems with secure APIs and database architecture.',
      features: ['REST APIs', 'GraphQL', 'Microservices', 'Real-time Features']
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful and intuitive user interfaces that provide excellent user experiences.',
      features: ['Figma Design', 'Prototyping', 'User Testing', 'Responsive Layouts']
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Speed up your existing applications and improve overall performance and user experience.',
      features: ['Code Optimization', 'Caching Strategies', 'Load Time Reduction', 'SEO Improvements']
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl mb-6 text-slate-900">Services</h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive software development services to bring your ideas to life. From concept to deployment, I handle every aspect of your project.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-slate-50 p-8 rounded-2xl border border-slate-200 hover:shadow-2xl transition-all group"
              >
                <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-600 transition-colors">
                  <service.icon className="w-7 h-7 text-purple-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl mb-3 text-slate-900">{service.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-slate-700">
                      <div className="w-1.5 h-1.5 bg-purple-600 rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-20 bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl p-12 text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl mb-4">Ready to Start Your Project?</h2>
            <p className="text-purple-100 mb-8 text-lg max-w-2xl mx-auto">
              Let's discuss how I can help bring your vision to life. Get in touch for a free consultation.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-white text-purple-600 px-8 py-4 rounded-lg hover:bg-purple-50 transition-colors"
            >
              Get In Touch
            </motion.a>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}