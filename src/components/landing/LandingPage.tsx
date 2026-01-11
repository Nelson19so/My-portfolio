import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Code2, Github, Linkedin, Mail, ArrowRight, Terminal, Send, Phone, MapPin } from 'lucide-react';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { SkillsSection } from './SkillsSection';
import { TestimonialsSection } from './TestimonialsSection';
import { useEffect, useState } from 'react';
import heroImage from 'figma:asset/689bab0275552b6f143660bff8d874946a65ec71.png';

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image: string;
}

interface Blog {
  id: string;
  title: string;
  excerpt: string;
  date: string;
}

export function LandingPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const storedProjects = localStorage.getItem('projects');
    const storedBlogs = localStorage.getItem('blogs');
    
    if (storedProjects) {
      const allProjects = JSON.parse(storedProjects);
      setProjects(allProjects.slice(0, 3));
    }
    
    if (storedBlogs) {
      const allBlogs = JSON.parse(storedBlogs);
      setBlogs(allBlogs.slice(0, 3));
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 bg-gradient-to-br from-slate-50 via-white to-purple-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Code2 className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
                <span className="text-sm sm:text-base text-purple-600">Full-Stack Developer</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl mb-6 text-slate-900">
                Hi, I'm <span className="text-purple-600">Nelson</span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-600 mb-8 leading-relaxed">
                Full-stack developer crafting elegant solutions across web, mobile, and desktop platforms. 
                I transform ideas into powerful digital experiences.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <Link to="/projects">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-purple-600 text-white px-8 py-3 rounded-lg flex items-center gap-2 shadow-lg shadow-purple-600/30"
                  >
                    View Projects <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </Link>
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-slate-300 text-slate-700 px-8 py-3 rounded-lg hover:border-purple-600 hover:text-purple-600 transition-colors"
                  >
                    Get In Touch
                  </motion.button>
                </Link>
              </div>
              <div className="flex gap-6">
                <motion.a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="text-slate-600 hover:text-purple-600 transition-colors"
                >
                  <Github className="w-6 h-6" />
                </motion.a>
                <motion.a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="text-slate-600 hover:text-purple-600 transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                </motion.a>
                <motion.a
                  href="mailto:nelson@example.com"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="text-slate-600 hover:text-purple-600 transition-colors"
                >
                  <Mail className="w-6 h-6" />
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-purple-800 rounded-3xl rotate-6" />
                <div className="relative bg-white p-2 rounded-3xl shadow-2xl">
                  <img 
                    src={heroImage}
                    alt="Nelson - Software Developer"
                    className="rounded-2xl w-full aspect-square object-cover"
                  />
                </div>
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-xl border border-slate-200"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-2xl">✓</span>
                    </div>
                    <div>
                      <div className="text-slate-900">Available for Work</div>
                      <div className="text-sm text-slate-500">Open to projects</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* My Story Section */}
      <section className="px-4 sm:px-6 py-20 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Terminal className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
              <h2 className="text-2xl sm:text-3xl text-slate-900">My Story</h2>
            </div>
            <div className="space-y-4 text-slate-600 text-base sm:text-lg leading-relaxed">
              <p>
                My journey into software development began when I wrote my first "Hello World" program at age 14. 
                What started as curiosity quickly became a passion that would shape my career and life.
              </p>
              <p>
                After completing my Computer Science degree, I dove into the professional world, where I've had 
                the privilege of working with startups, established companies, and clients from around the globe. 
                Each project has taught me something new and reinforced my love for problem-solving through code.
              </p>
              <p>
                Today, I specialize in building full-stack applications that not only meet technical requirements 
                but also deliver exceptional user experiences. Whether it's a responsive web app, a mobile application, 
                or a complex backend system, I approach each challenge with enthusiasm and dedication.
              </p>
            </div>
            <div className="mt-8">
              <Link to="/about">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-lg hover:bg-purple-600 hover:text-white transition-colors"
                >
                  Learn More About Me
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <SkillsSection />

      {/* Featured Projects */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl mb-4 text-slate-900">Featured Projects</h2>
              <p className="text-slate-600 text-lg">Recent work showcasing my expertise</p>
            </div>
            
            {projects.length > 0 ? (
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {projects.map((project, idx) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    whileHover={{ y: -8 }}
                  >
                    <Link to={`/projects/${project.id}`}>
                      <div className="bg-white rounded-xl overflow-hidden border border-slate-200 hover:shadow-xl transition-shadow">
                        <div className="aspect-video bg-gradient-to-br from-purple-500 to-purple-700 overflow-hidden">
                          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl mb-2 text-slate-900">{project.title}</h3>
                          <p className="text-slate-600 mb-4 line-clamp-2">{project.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.slice(0, 3).map((tech) => (
                              <span key={tech} className="text-xs bg-purple-50 text-purple-600 px-2 py-1 rounded">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 text-slate-500">
                No projects yet. Visit the admin dashboard to add some!
              </div>
            )}

            <div className="text-center">
              <Link to="/projects">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-lg hover:bg-purple-600 hover:text-white transition-colors"
                >
                  View All Projects
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Latest Blog Posts */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl mb-4 text-slate-900">Latest Blog Posts</h2>
              <p className="text-slate-600 text-lg">Insights and tutorials on software development</p>
            </div>
            
            {blogs.length > 0 ? (
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {blogs.map((blog, idx) => (
                  <motion.div
                    key={blog.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    whileHover={{ y: -8 }}
                  >
                    <Link to={`/blog/${blog.id}`}>
                      <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 hover:shadow-xl transition-shadow h-full">
                        <div className="text-sm text-purple-600 mb-3">{blog.date}</div>
                        <h3 className="text-xl mb-3 text-slate-900">{blog.title}</h3>
                        <p className="text-slate-600 line-clamp-3">{blog.excerpt}</p>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 text-slate-500">
                No blog posts yet. Visit the admin dashboard to add some!
              </div>
            )}

            <div className="text-center">
              <Link to="/blog">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-lg hover:bg-purple-600 hover:text-white transition-colors"
                >
                  Read All Posts
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl mb-4 text-slate-900">Get in Touch</h2>
              <p className="text-slate-600 text-lg">Have a project in mind? Let's talk!</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm text-slate-600">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-purple-600"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm text-slate-600">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-purple-600"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm text-slate-600">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-purple-600"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm text-slate-600">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-purple-600"
                  rows={5}
                  required
                />
              </div>
              <div className="text-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors"
                >
                  {submitted ? 'Sent!' : 'Send Message'}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}