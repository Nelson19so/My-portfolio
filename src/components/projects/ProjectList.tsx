import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Navigation } from '../landing/Navigation';
import { Footer } from '../landing/Footer';
import { useEffect, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  technologies: string[];
  image: string;
  liveUrl: string;
  githubUrl: string;
}

export function ProjectList() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const storedProjects = localStorage.getItem('projects');
    if (storedProjects) {
      setProjects(JSON.parse(storedProjects));
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="pt-32 pb-20 px-6 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl mb-6 text-slate-900">Projects</h1>
            <p className="text-xl text-slate-600 mb-12">
              A collection of projects showcasing my skills across different technologies.
            </p>
          </motion.div>

          {projects.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, idx) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -8 }}
                >
                  <Link to={`/projects/${project.id}`}>
                    <div className="bg-white rounded-xl overflow-hidden border border-slate-200 hover:shadow-2xl transition-all h-full flex flex-col group">
                      <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 overflow-hidden relative">
                        <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          {project.liveUrl && (
                            <div className="bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg flex items-center gap-2 text-sm">
                              <ExternalLink className="w-4 h-4" />
                              Live Demo
                            </div>
                          )}
                          {project.githubUrl && (
                            <div className="bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg flex items-center gap-2 text-sm">
                              <Github className="w-4 h-4" />
                              Source
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="p-6 flex-1 flex flex-col">
                        <h3 className="text-2xl mb-3 text-slate-900 group-hover:text-purple-600 transition-colors">{project.title}</h3>
                        <p className="text-slate-600 mb-4 flex-1 leading-relaxed">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.slice(0, 5).map((tech) => (
                            <span key={tech} className="bg-slate-100 text-slate-700 px-3 py-1 rounded-lg text-sm">
                              {tech}
                            </span>
                          ))}
                          {project.technologies.length > 5 && (
                            <span className="bg-purple-50 text-purple-600 px-3 py-1 rounded-lg text-sm">
                              +{project.technologies.length - 5}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-slate-500 mb-4">No projects yet.</p>
              <Link to="/admin" className="text-purple-600 hover:underline">
                Go to admin dashboard to add your first project
              </Link>
            </motion.div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}