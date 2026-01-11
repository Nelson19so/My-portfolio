import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Navigation } from '../landing/Navigation';
import { Footer } from '../landing/Footer';
import { useEffect, useState } from 'react';
import { Calendar, Clock } from 'lucide-react';

interface Blog {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  tags: string[];
}

export function BlogList() {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    const storedBlogs = localStorage.getItem('blogs');
    if (storedBlogs) {
      setBlogs(JSON.parse(storedBlogs));
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="pt-32 pb-20 px-6 bg-gradient-to-br from-purple-50 to-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl mb-6 text-slate-900">Blog</h1>
            <p className="text-xl text-slate-600 mb-12">
              Thoughts on software development, technology, and more.
            </p>
          </motion.div>

          {blogs.length > 0 ? (
            <div className="space-y-6">
              {blogs.map((blog, idx) => (
                <motion.div
                  key={blog.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -4 }}
                >
                  <Link to={`/blog/${blog.id}`}>
                    <div className="bg-white rounded-xl border border-slate-200 hover:shadow-2xl transition-all overflow-hidden group">
                      <div className="flex flex-col md:flex-row">
                        <div className="md:w-80 h-48 md:h-auto bg-gradient-to-br from-blue-500 to-purple-600 relative overflow-hidden flex-shrink-0">
                          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                          <div className="absolute bottom-4 left-4 right-4">
                            <div className="flex items-center gap-3 mb-2">
                              <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white">
                                {blog.author.charAt(0).toUpperCase()}
                              </div>
                              <div>
                                <div className="text-white text-sm">{blog.author}</div>
                                <div className="text-white/80 text-xs">{blog.date}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex-1 p-6 md:p-8">
                          <div className="flex items-center gap-3 mb-4">
                            {blog.tags.slice(0, 2).map((tag) => (
                              <span
                                key={tag}
                                className="bg-purple-50 text-purple-600 px-3 py-1 rounded-full text-xs"
                              >
                                {tag}
                              </span>
                            ))}
                            <div className="flex items-center gap-1 text-sm text-slate-500 ml-auto">
                              <Clock className="w-4 h-4" />
                              {Math.ceil(blog.content.split(' ').length / 200)} min read
                            </div>
                          </div>
                          <h2 className="text-2xl md:text-3xl mb-3 text-slate-900 group-hover:text-purple-600 transition-colors">
                            {blog.title}
                          </h2>
                          <p className="text-slate-600 leading-relaxed line-clamp-2">
                            {blog.excerpt}
                          </p>
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
              <p className="text-slate-500 mb-4">No blog posts yet.</p>
              <Link to="/admin" className="text-purple-600 hover:underline">
                Go to admin dashboard to create your first post
              </Link>
            </motion.div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}