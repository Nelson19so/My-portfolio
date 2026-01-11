import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface Blog {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  tags: string[];
}

interface BlogFormProps {
  onClose: () => void;
  editingBlog: Blog | null;
}

export function BlogForm({ onClose, editingBlog }: BlogFormProps) {
  const [title, setTitle] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const [tags, setTags] = useState('');

  useEffect(() => {
    if (editingBlog) {
      setTitle(editingBlog.title);
      setExcerpt(editingBlog.excerpt);
      setContent(editingBlog.content);
      setAuthor(editingBlog.author);
      setTags(editingBlog.tags.join(', '));
    }
  }, [editingBlog]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const blog: Blog = {
      id: editingBlog?.id || Date.now().toString(),
      title,
      excerpt,
      content,
      date: editingBlog?.date || new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
      author,
      tags: tags.split(',').map(tag => tag.trim()).filter(tag => tag),
    };

    const storedBlogs = localStorage.getItem('blogs');
    let blogs: Blog[] = storedBlogs ? JSON.parse(storedBlogs) : [];

    if (editingBlog) {
      blogs = blogs.map(b => b.id === editingBlog.id ? blog : b);
    } else {
      blogs.unshift(blog);
    }

    localStorage.setItem('blogs', JSON.stringify(blogs));
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
            {editingBlog ? 'Edit Blog Post' : 'New Blog Post'}
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
            <label className="block text-sm text-slate-400 mb-2">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
              placeholder="Enter blog title"
            />
          </div>

          <div>
            <label className="block text-sm text-slate-400 mb-2">Author</label>
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              required
              className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-sm text-slate-400 mb-2">Excerpt</label>
            <textarea
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              required
              rows={2}
              className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
              placeholder="Brief description for preview"
            />
          </div>

          <div>
            <label className="block text-sm text-slate-400 mb-2">Content</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
              rows={12}
              className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
              placeholder="Write your blog content here..."
            />
          </div>

          <div>
            <label className="block text-sm text-slate-400 mb-2">Tags (comma-separated)</label>
            <input
              type="text"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
              placeholder="React, JavaScript, Web Development"
            />
          </div>

          <div className="flex gap-3 pt-4">
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1 bg-blue-600 text-white py-3 rounded-lg"
            >
              {editingBlog ? 'Update Blog Post' : 'Publish Blog Post'}
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