import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { PlusCircle, FileText, FolderKanban, Trash2, Edit, Home } from 'lucide-react';
import { BlogForm } from './BlogForm';
import { ProjectForm } from './ProjectForm';

interface Blog {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  tags: string[];
}

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

export function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<'blogs' | 'projects'>('blogs');
  const [showBlogForm, setShowBlogForm] = useState(false);
  const [showProjectForm, setShowProjectForm] = useState(false);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [editingBlog, setEditingBlog] = useState<Blog | null>(null);
  const [editingProject, setEditingProject] = useState<Project | null>(null);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    const storedBlogs = localStorage.getItem('blogs');
    const storedProjects = localStorage.getItem('projects');
    
    if (storedBlogs) {
      setBlogs(JSON.parse(storedBlogs));
    }
    if (storedProjects) {
      setProjects(JSON.parse(storedProjects));
    }
  };

  const deleteBlog = (id: string) => {
    const updatedBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(updatedBlogs);
    localStorage.setItem('blogs', JSON.stringify(updatedBlogs));
  };

  const deleteProject = (id: string) => {
    const updatedProjects = projects.filter(project => project.id !== id);
    setProjects(updatedProjects);
    localStorage.setItem('projects', JSON.stringify(updatedProjects));
  };

  const handleEditBlog = (blog: Blog) => {
    setEditingBlog(blog);
    setShowBlogForm(true);
  };

  const handleEditProject = (project: Project) => {
    setEditingProject(project);
    setShowProjectForm(true);
  };

  const handleBlogFormClose = () => {
    setShowBlogForm(false);
    setEditingBlog(null);
    loadData();
  };

  const handleProjectFormClose = () => {
    setShowProjectForm(false);
    setEditingProject(null);
    loadData();
  };

  return (
    <div className="min-h-screen bg-purple-950">
      {/* Admin Header */}
      <div className="bg-purple-900 border-b border-purple-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <h1 className="text-xl sm:text-2xl text-white">Admin Dashboard</h1>
            <Link to="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-purple-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"
              >
                <Home className="w-4 h-4" />
                View Site
              </motion.button>
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-4 mb-8">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setActiveTab('blogs')}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-colors ${
              activeTab === 'blogs'
                ? 'bg-purple-600 text-white'
                : 'bg-purple-900 text-slate-300 hover:bg-purple-800'
            }`}
          >
            <FileText className="w-5 h-5" />
            Blogs ({blogs.length})
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setActiveTab('projects')}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-colors ${
              activeTab === 'projects'
                ? 'bg-purple-600 text-white'
                : 'bg-purple-900 text-slate-300 hover:bg-purple-800'
            }`}
          >
            <FolderKanban className="w-5 h-5" />
            Projects ({projects.length})
          </motion.button>
        </div>

        {/* Blogs Tab */}
        {activeTab === 'blogs' && (
          <div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <h2 className="text-xl sm:text-2xl text-white">Manage Blogs</h2>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowBlogForm(true)}
                className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"
              >
                <PlusCircle className="w-5 h-5" />
                New Blog Post
              </motion.button>
            </div>

            {blogs.length > 0 ? (
              <div className="space-y-4">
                {blogs.map((blog) => (
                  <motion.div
                    key={blog.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-purple-900 p-4 sm:p-6 rounded-lg border border-purple-800"
                  >
                    <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                      <div className="flex-1">
                        <h3 className="text-lg sm:text-xl text-white mb-2">{blog.title}</h3>
                        <p className="text-slate-400 mb-3">{blog.excerpt}</p>
                        <div className="flex flex-wrap gap-2 mb-2">
                          {blog.tags.map((tag) => (
                            <span key={tag} className="bg-blue-600/20 text-blue-400 px-2 py-1 rounded text-sm">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <p className="text-sm text-slate-500">{blog.date}</p>
                      </div>
                      <div className="flex gap-2">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => handleEditBlog(blog)}
                          className="p-2 bg-blue-600 text-white rounded-lg"
                        >
                          <Edit className="w-5 h-5" />
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => deleteBlog(blog.id)}
                          className="p-2 bg-red-600 text-white rounded-lg"
                        >
                          <Trash2 className="w-5 h-5" />
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-slate-800 rounded-lg border border-slate-700">
                <FileText className="w-16 h-16 text-slate-600 mx-auto mb-4" />
                <p className="text-slate-400">No blog posts yet. Create your first one!</p>
              </div>
            )}
          </div>
        )}

        {/* Projects Tab */}
        {activeTab === 'projects' && (
          <div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <h2 className="text-xl sm:text-2xl text-white">Manage Projects</h2>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowProjectForm(true)}
                className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"
              >
                <PlusCircle className="w-5 h-5" />
                New Project
              </motion.button>
            </div>

            {projects.length > 0 ? (
              <div className="grid sm:grid-cols-2 gap-4">
                {projects.map((project) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-purple-900 rounded-lg border border-purple-800 overflow-hidden"
                  >
                    <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 overflow-hidden">
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-4 sm:p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-lg sm:text-xl text-white flex-1 mr-2">{project.title}</h3>
                        <div className="flex gap-2">
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => handleEditProject(project)}
                            className="p-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
                          >
                            <Edit className="w-4 h-4" />
                          </motion.button>
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => deleteProject(project.id)}
                            className="p-2 bg-red-600 text-white rounded-lg"
                          >
                            <Trash2 className="w-4 h-4" />
                          </motion.button>
                        </div>
                      </div>
                      <p className="text-slate-400 mb-3">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span key={tech} className="bg-slate-700 text-slate-300 px-2 py-1 rounded text-xs">
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="bg-slate-700 text-slate-300 px-2 py-1 rounded text-xs">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-slate-800 rounded-lg border border-slate-700">
                <FolderKanban className="w-16 h-16 text-slate-600 mx-auto mb-4" />
                <p className="text-slate-400">No projects yet. Create your first one!</p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Modals */}
      {showBlogForm && (
        <BlogForm
          onClose={handleBlogFormClose}
          editingBlog={editingBlog}
        />
      )}
      {showProjectForm && (
        <ProjectForm
          onClose={handleProjectFormClose}
          editingProject={editingProject}
        />
      )}
    </div>
  );
}