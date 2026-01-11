import { motion } from 'motion/react';

export function SkillsSection() {
  const skills = [
    {
      category: 'Frontend Development',
      items: [
        { 
          name: 'HTML5', 
          icon: (
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L3 4.5V10.5C3 16.5 6.8 21.8 12 23C17.2 21.8 21 16.5 21 10.5V4.5L12 2Z" stroke="currentColor" strokeWidth="2"/>
              <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )
        },
        { 
          name: 'CSS3', 
          icon: (
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
              <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
              <path d="M8 8H16M8 12H16M8 16H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          )
        },
        { 
          name: 'JavaScript', 
          icon: (
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
              <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
              <path d="M7 17V13M12 17V7M17 17V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          )
        },
        { 
          name: 'React', 
          icon: (
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="2" fill="currentColor"/>
              <path d="M12 2C10.3431 2 9 3.34315 9 5C9 6.65685 10.3431 8 12 8C13.6569 8 15 6.65685 15 5C15 3.34315 13.6569 2 12 2Z" stroke="currentColor" strokeWidth="1.5"/>
              <ellipse cx="12" cy="12" rx="9" ry="3" stroke="currentColor" strokeWidth="1.5"/>
              <ellipse cx="12" cy="12" rx="9" ry="3" transform="rotate(60 12 12)" stroke="currentColor" strokeWidth="1.5"/>
              <ellipse cx="12" cy="12" rx="9" ry="3" transform="rotate(-60 12 12)" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
          )
        },
        { 
          name: 'Tailwind CSS', 
          icon: (
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
              <path d="M12 4C8.667 4 6.667 5.667 6 9C7 7 8.333 6.333 10 7C10.755 7.228 11.293 7.773 11.883 8.37C12.945 9.451 14.167 10.667 17 10.667C20.333 10.667 22.333 9 23 5.333C22 7.333 20.667 8 19 7.333C18.245 7.105 17.707 6.56 17.117 5.963C16.055 4.882 14.833 3.667 12 4ZM6 10.667C2.667 10.667 0.667 12.333 0 16C1 14 2.333 13.333 4 14C4.755 14.228 5.293 14.773 5.883 15.37C6.945 16.451 8.167 17.667 11 17.667C14.333 17.667 16.333 16 17 12.333C16 14.333 14.667 15 13 14.333C12.245 14.105 11.707 13.56 11.117 12.963C10.055 11.882 8.833 10.667 6 10.667Z" fill="currentColor"/>
            </svg>
          )
        },
        { 
          name: 'Bootstrap', 
          icon: (
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
              <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
              <path d="M8 8H12C13.1046 8 14 8.89543 14 10C14 11.1046 13.1046 12 12 12H8V8Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
              <path d="M8 12H13C14.1046 12 15 12.8954 15 14C15 15.1046 14.1046 16 13 16H8V12Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
            </svg>
          )
        }
      ]
    },
    {
      category: 'Backend Development',
      items: [
        { 
          name: 'Python', 
          icon: (
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
              <path d="M9.5 2C6.5 2 5 3.5 5 6.5V9H12V10H5.5C3 10 2 11.5 2 14.5C2 17.5 3 19 5.5 19H7V16.5C7 13.5 9 12 12 12C15 12 17 13.5 17 16.5V19H18.5C21 19 22 17.5 22 14.5C22 11.5 21 10 18.5 10H16V9H19V6.5C19 3.5 17.5 2 14.5 2H9.5Z" stroke="currentColor" strokeWidth="1.5"/>
              <circle cx="8" cy="6" r="1" fill="currentColor"/>
              <circle cx="16" cy="18" r="1" fill="currentColor"/>
            </svg>
          )
        },
        { 
          name: 'Django', 
          icon: (
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
              <rect x="4" y="2" width="4" height="20" rx="1" stroke="currentColor" strokeWidth="1.5"/>
              <rect x="10" y="2" width="4" height="20" rx="1" stroke="currentColor" strokeWidth="1.5"/>
              <rect x="16" y="6" width="4" height="16" rx="1" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
          )
        },
        { 
          name: 'Node.js', 
          icon: (
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L3 7L3 17L12 22L21 17V7L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
              <path d="M12 12L3 7M12 12L21 7M12 12V22" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
            </svg>
          )
        },
        { 
          name: 'Express', 
          icon: (
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
              <path d="M3 12L6 9M6 9L9 12M6 9V15M21 12L18 9M18 9L15 12M18 9V15M9 12H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )
        },
        { 
          name: 'MongoDB', 
          icon: (
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
              <path d="M12 3C10.9 3 10 3.9 10 5V19C10 20.1 10.9 21 12 21C13.1 21 14 20.1 14 19V5C14 3.9 13.1 3 12 3Z" stroke="currentColor" strokeWidth="1.5"/>
              <ellipse cx="12" cy="7" rx="7" ry="4" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
          )
        },
        { 
          name: 'PostgreSQL', 
          icon: (
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
              <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M8 9H16M8 12H16M8 15H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          )
        }
      ]
    },
    {
      category: 'Mobile & Desktop',
      items: [
        { 
          name: 'Flutter', 
          icon: (
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
              <path d="M14 2L3 13L7 17L22 2H14Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
              <path d="M14 9L7 16L11 20L18 13L14 9Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
            </svg>
          )
        },
        { 
          name: 'Dart', 
          icon: (
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
              <path d="M7 7L17 7L17 17L12 22L7 17V7Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
              <path d="M17 7L22 12L17 17" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
            </svg>
          )
        },
        { 
          name: 'Java', 
          icon: (
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
              <path d="M8 18C6 18 4 17 4 15C4 13 6 12 8 12C10 12 12 13 12 15C12 17 10 18 8 18ZM16 18C14 18 12 17 12 15C12 13 14 12 16 12C18 12 20 13 20 15C20 17 18 18 16 18Z" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M8 12C8 10 8 8 10 6C12 4 14 4 16 6C18 8 18 10 18 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          )
        },
        { 
          name: 'C++', 
          icon: (
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M9 15C9 15 10 16 12 16C14 16 15 15 15 15M9 9H9.01M15 9H15.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path d="M16 9L18 7M18 7L20 9M18 7V11M16 13L18 15M18 15L20 13M18 15V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          )
        }
      ]
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl mb-4 text-slate-900">Technical Skills</h2>
            <p className="text-slate-600 text-base sm:text-lg">Technologies I work with to build amazing products</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skillGroup, idx) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-slate-50 p-8 rounded-2xl border border-slate-200"
              >
                <h3 className="text-xl mb-6 text-slate-900">{skillGroup.category}</h3>
                <div className="grid grid-cols-2 gap-4">
                  {skillGroup.items.map((skill) => (
                    <motion.div
                      key={skill.name}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="bg-white p-4 rounded-xl border border-slate-200 hover:border-purple-300 hover:shadow-lg transition-all group"
                    >
                      <div className="text-purple-600 group-hover:text-purple-700 mb-2 flex justify-center">
                        {skill.icon}
                      </div>
                      <div className="text-center text-sm text-slate-700">{skill.name}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}