import { motion } from 'motion/react';
import { Navigation } from '../landing/Navigation';
import { Footer } from '../landing/Footer';
import { Code2, GraduationCap, Briefcase, Award, Heart, Coffee, Terminal, Rocket } from 'lucide-react';

export function AboutPage() {
  const experiences = [
    {
      title: 'Senior Full-Stack Developer',
      company: 'Tech Innovations Inc.',
      period: '2021 - Present',
      description: 'Leading development of enterprise web applications and mentoring junior developers. Architecting scalable solutions using React, Node.js, and cloud infrastructure.'
    },
    {
      title: 'Full-Stack Developer',
      company: 'Digital Solutions Ltd.',
      period: '2019 - 2021',
      description: 'Developed and maintained multiple client projects using modern web technologies. Collaborated with cross-functional teams to deliver high-quality software products.'
    },
    {
      title: 'Junior Developer',
      company: 'StartUp Ventures',
      period: '2017 - 2019',
      description: 'Built responsive web applications and mobile apps. Gained extensive experience in agile development and rapid prototyping.'
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University of Technology',
      period: '2013 - 2017',
      description: 'Graduated with honors. Focus on software engineering, algorithms, and database systems.'
    }
  ];

  const values = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: 'Clean Code',
      description: 'I believe in writing maintainable, well-documented code that stands the test of time.'
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Innovation',
      description: 'Always exploring new technologies and approaches to solve complex problems efficiently.'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'User-Centric',
      description: 'Every line of code I write is with the end user\'s experience in mind.'
    },
    {
      icon: <Coffee className="w-8 h-8" />,
      title: 'Continuous Learning',
      description: 'Technology evolves rapidly, and I\'m committed to staying at the forefront of innovation.'
    }
  ];

  const achievements = [
    'Built and deployed 50+ production applications',
    'Contributed to 20+ open-source projects',
    'Mentored 15+ junior developers',
    'Speaker at local tech meetups and conferences',
    'Certified in AWS and Azure cloud platforms'
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="pt-24 pb-20">
        {/* Hero Section */}
        <section className="px-4 sm:px-6 py-20 bg-gradient-to-br from-slate-50 via-white to-purple-50">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl mb-6 text-slate-900">
                About <span className="text-purple-600">Me</span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                I'm a passionate full-stack developer with over 7 years of experience crafting elegant solutions 
                that blend functionality with beautiful design. My journey in technology has been driven by 
                curiosity and a desire to create meaningful digital experiences.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Story Section */}
        <section className="px-6 py-20">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Terminal className="w-6 h-6 text-purple-600" />
                <h2 className="text-3xl text-slate-900">My Story</h2>
              </div>
              <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
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
            </motion.div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="px-6 py-20 bg-slate-50">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-12">
                <Briefcase className="w-6 h-6 text-purple-600" />
                <h2 className="text-3xl text-slate-900">Work Experience</h2>
              </div>
              <div className="space-y-8">
                {experiences.map((exp, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="bg-white p-6 rounded-xl border border-slate-200 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                      <div>
                        <h3 className="text-xl text-slate-900 mb-1">{exp.title}</h3>
                        <div className="text-purple-600">{exp.company}</div>
                      </div>
                      <div className="text-sm text-slate-500">{exp.period}</div>
                    </div>
                    <p className="text-slate-600">{exp.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Education Section */}
        <section className="px-6 py-20">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-12">
                <GraduationCap className="w-6 h-6 text-purple-600" />
                <h2 className="text-3xl text-slate-900">Education</h2>
              </div>
              <div className="space-y-8">
                {education.map((edu, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="bg-slate-50 p-6 rounded-xl border border-slate-200"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                      <div>
                        <h3 className="text-xl text-slate-900 mb-1">{edu.degree}</h3>
                        <div className="text-purple-600">{edu.institution}</div>
                      </div>
                      <div className="text-sm text-slate-500">{edu.period}</div>
                    </div>
                    <p className="text-slate-600">{edu.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Values Section */}
        <section className="px-6 py-20 bg-slate-50">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl text-slate-900 mb-4">My Values</h2>
                <p className="text-slate-600 text-lg">Principles that guide my work</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {values.map((value, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    whileHover={{ y: -8 }}
                    className="bg-white p-6 rounded-xl border border-slate-200 hover:shadow-lg transition-all text-center"
                  >
                    <div className="w-16 h-16 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-4 text-purple-600">
                      {value.icon}
                    </div>
                    <h3 className="text-lg text-slate-900 mb-2">{value.title}</h3>
                    <p className="text-slate-600 text-sm">{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="px-6 py-20">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-12">
                <Award className="w-6 h-6 text-purple-600" />
                <h2 className="text-3xl text-slate-900">Achievements</h2>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-slate-50 p-8 rounded-xl border border-slate-200">
                <ul className="space-y-4">
                  {achievements.map((achievement, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-sm">✓</span>
                      </div>
                      <span className="text-slate-700 text-lg">{achievement}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-6 py-20 bg-gradient-to-br from-purple-600 to-purple-800">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl text-white mb-6">Let's Work Together</h2>
              <p className="text-purple-100 text-lg mb-8">
                I'm always interested in hearing about new projects and opportunities.
              </p>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-white text-purple-600 px-8 py-3 rounded-lg hover:bg-purple-50 transition-colors"
              >
                Get In Touch
              </motion.a>
            </motion.div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}