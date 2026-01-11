import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

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

interface ProjectFormProps {
  onClose: () => void;
  editingProject: Project | null;
}

export function ProjectForm({ onClose, editingProject }: ProjectFormProps) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [fullDescription, setFullDescription] = useState('');
  const [technologies, setTechnologies] = useState('');
  const [image, setImage] = useState('');
  const [liveUrl, setLiveUrl] = useState('');
  const [githubUrl, setGithubUrl] = useState('');

  useEffect(() => {
    if (editingProject) {
      setTitle(editingProject.title);
      setDescription(editingProject.description);
      setFullDescription(editingProject.fullDescription);
      setTechnologies(editingProject.technologies.join(', '));
      setImage(editingProject.image);
      setLiveUrl(editingProject.liveUrl);
      setGithubUrl(editingProject.githubUrl);
    }
  }, [editingProject]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const project: Project = {
      id: editingProject?.id || Date.now().toString(),
      title,
      description,
      fullDescription,
      technologies: technologies.split(',').map(tech => tech.trim()).filter(tech => tech),
      image,
      liveUrl,
      githubUrl,
    };

    const storedProjects = localStorage.getItem('projects');
    let projects: Project[] = storedProjects ? JSON.parse(storedProjects) : [];

    if (editingProject) {
      projects = projects.map(p => p.id === editingProject.id ? project : p);
    } else {
      projects.unshift(project);
    }

    localStorage.setItem('projects', JSON.stringify(projects));
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 sm:p-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-slate-800 rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
      >
        <div className="sticky top-0 bg-slate-800 border-b border-slate-700 p-4 sm:p-6 flex justify-between items-center">
          <h2 className="text-xl sm:text-2xl text-white">
            {editingProject ? 'Edit Project' : 'New Project'}
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-700 rounded-lg transition-colors"
          >
            <X className="w-6 h-6 text-slate-400" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div>
            <label className="block text-sm text-slate-400 mb-2">Project Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
              placeholder="E.g., E-commerce Platform"
            />
          </div>

          <div>
            <label className="block text-sm text-slate-400 mb-2">Short Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              rows={2}
              className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
              placeholder="Brief description for preview"
            />
          </div>

          <div>
            <label className="block text-sm text-slate-400 mb-2">Full Description</label>
            <textarea
              value={fullDescription}
              onChange={(e) => setFullDescription(e.target.value)}
              required
              rows={6}
              className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
              placeholder="Detailed project description..."
            />
          </div>

          <div>
            <label className="block text-sm text-slate-400 mb-2">Technologies (comma-separated)</label>
            <input
              type="text"
              value={technologies}
              onChange={(e) => setTechnologies(e.target.value)}
              required
              className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
              placeholder="React, Node.js, MongoDB"
            />
          </div>

          <div>
            <label className="block text-sm text-slate-400 mb-2">Project Image URL</label>
            <input
              type="url"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              required
              className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
              placeholder="https://example.com/image.jpg"
            />
          </div>

          <div>
            <label className="block text-sm text-slate-400 mb-2">Live Demo URL (optional)</label>
            <input
              type="url"
              value={liveUrl}
              onChange={(e) => setLiveUrl(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
              placeholder="https://example.com"
            />
          </div>

          <div>
            <label className="block text-sm text-slate-400 mb-2">GitHub URL (optional)</label>
            <input
              type="url"
              value={githubUrl}
              onChange={(e) => setGithubUrl(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
              placeholder="https://github.com/username/repo"
            />
          </div>

          <div className="flex gap-3 pt-4">
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1 bg-blue-600 text-white py-3 rounded-lg"
            >
              {editingProject ? 'Update Project' : 'Create Project'}
            </motion.button>
            <motion.button
              type="button"
              onClick={onClose}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 bg-slate-700 text-white py-3 rounded-lg"
            >
              Cancel
            </motion.button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}