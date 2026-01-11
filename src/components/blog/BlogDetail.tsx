import { motion } from 'motion/react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Navigation } from '../landing/Navigation';
import { Footer } from '../landing/Footer';
import { CodeBlock } from './CodeBlock';
import { useEffect, useState } from 'react';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';

interface Blog {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  tags: string[];
}

export function BlogDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState<Blog | null>(null);

  useEffect(() => {
    const storedBlogs = localStorage.getItem('blogs');
    if (storedBlogs) {
      const blogs = JSON.parse(storedBlogs);
      const foundBlog = blogs.find((b: Blog) => b.id === id);
      if (foundBlog) {
        setBlog(foundBlog);
      } else {
        navigate('/blog');
      }
    } else {
      navigate('/blog');
    }
  }, [id, navigate]);

  if (!blog) {
    return null;
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="pt-32 pb-20 px-6 bg-gradient-to-br from-purple-50 to-white">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-purple-600 hover:gap-3 transition-all mb-8"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Blog
            </Link>

            <div className="bg-white p-8 md:p-12 rounded-xl border border-slate-200">
              <div className="flex items-center gap-4 text-sm text-slate-600 mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {blog.date}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  5 min read
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl mb-6 text-slate-900">{blog.title}</h1>
              
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white">
                  {blog.author.charAt(0).toUpperCase()}
                </div>
                <div>
                  <div className="text-slate-900">{blog.author}</div>
                  <div className="text-sm text-slate-600">Software Developer</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {blog.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-purple-50 text-purple-600 px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="prose prose-slate max-w-none">
                {blog.content.split('\n\n').map((paragraph, idx) => {
                  // Check if it's a code block
                  if (paragraph.trim().startsWith('```')) {
                    const lines = paragraph.split('\n');
                    const language = lines[0].replace('```', '').trim() || 'javascript';
                    const code = lines.slice(1, -1).join('\n');
                    return <CodeBlock key={idx} code={code} language={language} />;
                  }
                  
                  // Check if paragraph is a heading
                  if (paragraph.trim().length < 50 && !paragraph.includes('.')) {
                    return (
                      <h3 key={idx} className="text-2xl mt-8 mb-4 text-slate-900">
                        {paragraph}
                      </h3>
                    );
                  }
                  // Check if paragraph is a list
                  if (paragraph.trim().startsWith('•') || /^\d+\./.test(paragraph.trim())) {
                    const items = paragraph.split('\n');
                    return (
                      <ul key={idx} className="mb-6 space-y-2">
                        {items.map((item, itemIdx) => (
                          <li key={itemIdx} className="text-slate-700 leading-relaxed ml-6">
                            {item.replace(/^[•\d]+\.?\s*/, '')}
                          </li>
                        ))}
                      </ul>
                    );
                  }
                  return (
                    <p key={idx} className="mb-6 text-slate-700 leading-relaxed text-lg">
                      {paragraph}
                    </p>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}