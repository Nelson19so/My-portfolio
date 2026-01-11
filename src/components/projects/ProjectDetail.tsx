import { motion } from 'motion/react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Navigation } from '../landing/Navigation';
import { Footer } from '../landing/Footer';
import { useEffect, useState } from 'react';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';

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

export function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState<Project | null>(null);

  useEffect(() => {
    const storedProjects = localStorage.getItem('projects');
    if (storedProjects) {
      const projects = JSON.parse(storedProjects);
      const foundProject = projects.find((p: Project) => p.id === id);
      if (foundProject) {
        setProject(foundProject);
      } else {
        navigate('/projects');
      }
    } else {
      navigate('/projects');
    }
  }, [id, navigate]);

  if (!project) {
    return null;
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="pt-32 pb-20 px-6 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-purple-600 hover:gap-3 transition-all mb-8"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Projects
            </Link>

            <div className="bg-white rounded-xl overflow-hidden border border-slate-200">
              <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
              </div>
              
              <div className="p-8 md:p-12">
                <h1 className="text-4xl md:text-5xl mb-6 text-slate-900">{project.title}</h1>
                
                <div className="flex flex-wrap gap-3 mb-8">
                  {project.liveUrl && (
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-purple-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 shadow-lg shadow-purple-600/30"
                    >
                      <ExternalLink className="w-5 h-5" />
                      View Live Demo
                    </motion.a>
                  )}
                  {project.githubUrl && (
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="border-2 border-slate-300 text-slate-700 px-6 py-3 rounded-lg flex items-center gap-2"
                    >
                      <Github className="w-5 h-5" />
                      View Source
                    </motion.a>
                  )}
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl mb-4 text-slate-900">Overview</h2>
                  <div className="space-y-4 text-slate-700 leading-relaxed">
                    {project.fullDescription.split('\n\n').map((paragraph, idx) => {
                      // Check if paragraph is a heading
                      if (paragraph.trim().endsWith(':') || (paragraph.trim().length < 50 && !paragraph.includes('.'))) {
                        return (
                          <h3 key={idx} className="text-xl mt-6 mb-3 text-slate-900">
                            {paragraph}
                          </h3>
                        );
                      }
                      // Check if paragraph is a list
                      if (paragraph.trim().startsWith('•')) {
                        const items = paragraph.split('\n');
                        return (
                          <ul key={idx} className="space-y-2 ml-4">
                            {items.map((item, itemIdx) => (
                              <li key={itemIdx} className="flex items-start gap-2">
                                <span className="text-purple-600 mt-1">•</span>
                                <span>{item.replace('• ', '')}</span>
                              </li>
                            ))}
                          </ul>
                        );
                      }
                      return (
                        <p key={idx} className="text-lg">
                          {paragraph}
                        </p>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl mb-4 text-slate-900">Technologies Used</h2>
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-blue-50 text-blue-600 px-4 py-2 rounded-lg"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
}