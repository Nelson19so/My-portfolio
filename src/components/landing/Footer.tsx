import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-slate-200 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg flex items-center justify-center">
                <span className="text-white text-xl">N</span>
              </div>
              <span className="text-slate-900 text-lg">Nelson</span>
            </div>
            <p className="text-slate-600 text-sm">
              Full-stack developer crafting digital experiences.
            </p>
          </div>
          <div>
            <h4 className="text-slate-900 mb-4">Quick Links</h4>
            <div className="space-y-2 text-sm">
              <Link to="/about" className="block text-slate-600 hover:text-purple-600">About</Link>
              <Link to="/projects" className="block text-slate-600 hover:text-purple-600">Projects</Link>
              <Link to="/services" className="block text-slate-600 hover:text-purple-600">Services</Link>
              <Link to="/blog" className="block text-slate-600 hover:text-purple-600">Blog</Link>
            </div>
          </div>
          <div>
            <h4 className="text-slate-900 mb-4">Connect</h4>
            <div className="space-y-2 text-sm">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="block text-slate-600 hover:text-purple-600">GitHub</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="block text-slate-600 hover:text-purple-600">LinkedIn</a>
              <Link to="/contact" className="block text-slate-600 hover:text-purple-600">Contact</Link>
            </div>
          </div>
          <div>
            <h4 className="text-slate-900 mb-4">Admin</h4>
            <div className="space-y-2 text-sm">
              <Link to="/admin/login" className="block text-slate-600 hover:text-purple-600">Admin Login</Link>
            </div>
          </div>
        </div>
        <div className="text-center text-slate-600 text-sm pt-8 border-t border-slate-200">
          <p>© 2025 Nelson. Built with React & Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}
