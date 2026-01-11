import { motion } from 'motion/react';
import { Navigation } from '../landing/Navigation';
import { Footer } from '../landing/Footer';
import { Mail, MapPin, Phone, Github, Linkedin, Twitter, Send } from 'lucide-react';
import { useState } from 'react';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

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
      
      <div className="pt-32 pb-20 px-6 bg-gradient-to-br from-purple-50 to-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl mb-6 text-slate-900">Get In Touch</h1>
            <p className="text-xl text-slate-600 mb-12 max-w-2xl">
              Have a project in mind or want to collaborate? I'd love to hear from you. Drop me a message and I'll get back to you as soon as possible.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-1 space-y-6"
            >
              <div className="bg-white p-6 rounded-xl border border-slate-200">
                <h2 className="text-2xl mb-6 text-slate-900">Contact Information</h2>
                
                <div className="space-y-4">
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-4 p-3 rounded-lg hover:bg-slate-50 transition-colors"
                  >
                    <Mail className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                    <div>
                      <div className="text-sm text-slate-500 mb-1">Email</div>
                      <a href="mailto:your.email@example.com" className="text-slate-900 hover:text-purple-600">
                        your.email@example.com
                      </a>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-4 p-3 rounded-lg hover:bg-slate-50 transition-colors"
                  >
                    <Phone className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                    <div>
                      <div className="text-sm text-slate-500 mb-1">Phone</div>
                      <a href="tel:+1234567890" className="text-slate-900 hover:text-purple-600">
                        +1 (234) 567-8900
                      </a>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-4 p-3 rounded-lg hover:bg-slate-50 transition-colors"
                  >
                    <MapPin className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                    <div>
                      <div className="text-sm text-slate-500 mb-1">Location</div>
                      <div className="text-slate-900">
                        Your City, Country
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl border border-slate-200">
                <h3 className="text-xl mb-4 text-slate-900">Follow Me</h3>
                <div className="flex gap-4">
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center text-slate-700 hover:bg-blue-600 hover:text-white transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center text-slate-700 hover:bg-blue-600 hover:text-white transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center text-slate-700 hover:bg-blue-600 hover:text-white transition-colors"
                  >
                    <Twitter className="w-5 h-5" />
                  </motion.a>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-6 rounded-xl text-white">
                <h3 className="text-xl mb-2">Open to Opportunities</h3>
                <p className="text-blue-100">
                  I'm currently available for freelance projects and full-time positions. Let's discuss how I can help bring your ideas to life.
                </p>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="bg-white p-8 rounded-xl border border-slate-200">
                <h2 className="text-2xl mb-6 text-slate-900">Send Me a Message</h2>
                
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-green-50 border border-green-200 rounded-lg p-8 text-center"
                  >
                    <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Send className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl mb-2 text-green-900">Message Sent!</h3>
                    <p className="text-green-700">Thank you for reaching out. I'll get back to you soon.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm text-slate-700 mb-2">
                          Your Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-slate-700 mb-2">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm text-slate-700 mb-2">
                        Subject <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                        placeholder="Project Inquiry"
                      />
                    </div>

                    <div>
                      <label className="block text-sm text-slate-700 mb-2">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-none"
                        placeholder="Tell me about your project or inquiry..."
                      />
                    </div>

                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-purple-600 text-white py-4 rounded-lg flex items-center justify-center gap-2 hover:bg-purple-700 transition-colors shadow-lg shadow-purple-600/30"
                    >
                      <Send className="w-5 h-5" />
                      Send Message
                    </motion.button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}