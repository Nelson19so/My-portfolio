import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useInView,
} from "motion/react";
import {
  ArrowUpRight,
  Menu,
  X,
  Mail,
  Github,
  Linkedin,
  Phone,
  Send,
} from "lucide-react";

// ─── Data ────────────────────────────────────────────────────────────────────

const SKILLS = [
  {
    category: "Languages",
    items: ["Python", "C++", "JavaScript", "TypeScript", "Dart", "SQL"],
  },
  {
    category: "Backend & APIs",
    items: [
      "Django",
      "Django REST Framework",
      "FastAPI",
      "WebSockets",
      "Celery",
      "RESTful APIs",
    ],
  },
  {
    category: "Frontend & Mobile",
    items: [
      "React.js",
      "Tailwind CSS",
      "Flutter",
      "Redux Toolkit",
      "HTML5/CSS3",
    ],
  },
  {
    category: "Databases & Infra",
    items: ["PostgreSQL", "Redis", "Docker", "JWT", "OAuth 2.0", "Git"],
  },
];

const PROJECTS = [
  {
    id: 1,
    num: "01",
    title: "Real-Time Community & Chat Platform",
    category: "Backend · Mobile",
    year: "2026",
    tech: ["Django Channels", "Flutter", "Redis", "WebSockets", "Celery"],
    github: "github.com/Nelson19so/BizChat/",
    description:
      "Engineered a low-latency real-time chat platform supporting persistent bi-directional communication via WebSockets and Django Channels. Optimised critical API endpoints, implemented cache-aside strategy with Redis, and built a resilient Flutter client with auto-reconnection logic.",
  },
  {
    id: 2,
    num: "02",
    title: "ClicOn E-Commerce SaaS Platform",
    category: "Full-Stack · SaaS",
    year: "2025",
    tech: [
      "Django REST Framework",
      "PostgreSQL",
      "React.js",
      "JWT",
      "OAuth 2.0",
    ],
    github: "github.com/Nelson19so/oclicon-shop/",
    description:
      "Architected a full-stack SaaS platform featuring multi-tenant catalog management, dynamic checkout workflows, and scalable RESTful APIs. Custom JWT/OAuth authentication with PostgreSQL schema optimisation to prevent race conditions on concurrent cart operations.",
  },
  {
    id: 3,
    num: "03",
    title: "Therapia — Open Source",
    category: "Open Source · Backend",
    year: "2024",
    github: "github.com/Nelson19so/",
    tech: ["Django", "Django REST Framework", "React"],
    description:
      "Collaborated with a large development team to implement backend functionality including Django models, views, serializers, and signals. Contributed reusable API utilities, mixins, and debugged integration issues across the React frontend and Django backend.",
  },
];

const EXPERIENCE = {
  role: "Mobile App Developer",
  company: "Jhinxpay",
  period: "Feb 2026 – Mar 2026",
  bullets: [
    "Re-architected the Flutter application separating complex business logic from UI components.",
    "Rebuilt the mobile UI to align with Figma designs and introduced reusable components.",
    "Implemented Riverpod-based state management and clean coding practices.",
    "Architected a reusable transaction engine supporting coin purchases, swaps, gift cards, and game-point purchases.",
    "Led a team of three developers through code reviews and bug fixing.",
  ],
};

// ─── Hooks ───────────────────────────────────────────────────────────────────

function useScrolled(threshold = 60) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > threshold);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, [threshold]);
  return scrolled;
}

// ─── Navbar ──────────────────────────────────────────────────────────────────

const NAV_ITEMS = [
  { label: "Work", id: "work" },
  { label: "About", id: "about" },
  { label: "Experience", id: "experience" },
  { label: "Contact", id: "contact" },
];

function Navbar({ onContact }: { onContact: () => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const scrolled = useScrolled();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-neutral-950/85 backdrop-blur-md py-4 border-b border-white/5"
          : "py-8 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.button
          onClick={() => scrollTo("hero")}
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xl font-bold tracking-tighter text-white hover:text-neutral-300 transition-colors"
        >
          NJ<span className="font-light text-neutral-400">.dev</span>
        </motion.button>

        <div className="hidden md:flex gap-8 items-center">
          {NAV_ITEMS.map((item, i) => (
            <motion.button
              key={item.id}
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              onClick={() =>
                item.id === "contact" ? onContact() : scrollTo(item.id)
              }
              className="text-sm uppercase tracking-widest text-neutral-400 hover:text-white transition-colors relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full" />
            </motion.button>
          ))}
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden z-50 text-white"
        >
          {isOpen ? <X /> : <Menu />}
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "tween", duration: 0.4 }}
              className="fixed inset-0 bg-neutral-950 flex flex-col items-center justify-center gap-12 md:hidden"
            >
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() =>
                    item.id === "contact"
                      ? (onContact(), setIsOpen(false))
                      : scrollTo(item.id)
                  }
                  className="text-4xl font-medium tracking-tight text-white hover:text-neutral-500 transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero({ onContact }: { onContact: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const yText = useTransform(scrollY, [0, 500], [0, 180]);
  const yBg = useTransform(scrollY, [0, 500], [0, 90]);
  const opacityText = useTransform(scrollY, [0, 320], [1, 0]);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden px-6 bg-neutral-950"
    >
      {/* Atmospheric glows */}
      <motion.div
        style={{ y: yBg }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <div className="absolute top-[-20%] left-[20%] w-[60vw] h-[60vw] bg-violet-900/15 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-[-20%] right-[20%] w-[50vw] h-[50vw] bg-blue-900/15 rounded-full blur-[120px] mix-blend-screen" />
      </motion.div>

      {/* Technical grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none z-0" />

      {/* Rotating geometric rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 65, repeat: Infinity, ease: "linear" }}
          className="absolute w-[600px] h-[600px] md:w-[800px] md:h-[800px] rounded-full border border-white/10 border-dashed opacity-45"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 85, repeat: Infinity, ease: "linear" }}
          className="absolute w-[450px] h-[450px] md:w-[600px] md:h-[600px] rounded-full border border-white/10 opacity-35"
        >
          <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,0.8)]" />
        </motion.div>
        <motion.div
          animate={{ rotate: 180 }}
          transition={{ duration: 110, repeat: Infinity, ease: "linear" }}
          className="absolute w-[800px] h-[800px] md:w-[1100px] md:h-[1100px] rounded-full border border-white/5 border-dotted opacity-45"
        />
      </div>

      {/* Main content */}
      <motion.div
        style={{ y: yText, opacity: opacityText }}
        className="relative z-10 max-w-6xl mx-auto flex flex-col items-center text-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-xs font-mono tracking-widest uppercase text-neutral-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            Available for new projects
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-7xl md:text-[7rem] font-medium tracking-tighter leading-[0.85] mb-12 text-white"
        >
          Nelson <br />
          <span className="italic font-serif text-neutral-500">Junior</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row items-center gap-6 md:gap-16 text-lg font-light text-neutral-400 max-w-4xl mx-auto mb-14"
        >
          <p className="md:text-right flex-1 leading-relaxed">
            Full-stack software engineer
            <br />
            building robust web & mobile systems.
          </p>
          <div className="w-px h-16 bg-white/10 hidden md:block" />
          <p className="md:text-left flex-1 leading-relaxed">
            Based in Nigeria,
            <br />
            working globally.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex items-center gap-4"
        >
          <button
            onClick={() =>
              document
                .getElementById("work")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="group flex items-center gap-2 text-sm uppercase tracking-widest text-white border border-white/20 px-6 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300"
          >
            View Work
            <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
          </button>
          <button
            onClick={onContact}
            className="text-sm uppercase tracking-widest text-neutral-500 hover:text-white transition-colors border-b border-white/20 pb-0.5"
          >
            Get in Touch
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-12 flex flex-col items-center gap-4"
      >
        <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-600">
          Scroll
        </span>
        <div className="w-px h-24 bg-gradient-to-b from-transparent via-white/20 to-transparent overflow-hidden">
          <motion.div
            animate={{ y: [-100, 100] }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            className="w-full h-1/2 bg-gradient-to-b from-transparent via-white to-transparent"
          />
        </div>
      </motion.div>
    </section>
  );
}

// ─── Section Header ───────────────────────────────────────────────────────────

function SectionLabel({ num, label }: { num: string; label: string }) {
  return (
    <div className="flex items-center gap-6 mb-16 md:mb-24">
      <div className="flex items-baseline gap-3">
        <span className="font-serif italic text-lg text-white">{num}</span>
        <span className="text-xs font-mono uppercase tracking-[0.3em] text-neutral-400">
          {label}
        </span>
      </div>
      <div className="h-px w-32 bg-gradient-to-r from-white/30 to-transparent" />
    </div>
  );
}

// ─── Work / Projects ─────────────────────────────────────────────────────────

function ProjectCard({
  project,
  index,
}: {
  project: (typeof PROJECTS)[0];
  index: number;
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      style={{ y: isEven ? undefined : y }}
      className={`relative group cursor-default ${!isEven ? "md:mt-32" : ""}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
        delay: index * 0.1,
      }}
    >
      {/* Project image placeholder — styled block */}
      <div className="relative overflow-hidden rounded-sm aspect-[4/3] mb-8 bg-neutral-900 border border-white/5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        <div className="absolute inset-0 flex flex-col items-center justify-center p-8 gap-4">
          <span className="font-serif italic text-[5rem] font-medium leading-none text-white/10 select-none">
            {project.num}
          </span>
          <div className="flex flex-wrap gap-2 justify-center">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-[10px] font-mono uppercase tracking-widest text-neutral-600 border border-white/5 px-3 py-1 rounded-full"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-neutral-950/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center z-10">
          <div className="bg-white/10 backdrop-blur-md p-5 rounded-full border border-white/10 scale-0 group-hover:scale-100 transition-transform duration-500 ease-out">
            <a
              href={`https://${project.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm uppercase tracking-widest text-white hover:text-neutral-300 transition-colors"
            >
              <ArrowUpRight className="w-5 h-5 text-white" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 pt-6">
        <div className="flex justify-between items-start gap-4 mb-4">
          <h3 className="text-2xl md:text-3xl font-medium tracking-tight leading-tight group-hover:text-neutral-400 transition-colors duration-300">
            {project.title}
          </h3>
          <span className="font-mono text-xs text-neutral-600 mt-1 flex-shrink-0">
            {project.year}
          </span>
        </div>
        <p className="font-mono text-xs uppercase tracking-widest text-neutral-500 mb-4">
          {project.category}
        </p>
        <p className="text-sm font-light text-neutral-400 leading-relaxed">
          {project.description}
        </p>
      </div>
    </motion.div>
  );
}

function Work() {
  return (
    <section id="work" className="py-32 px-6 bg-neutral-950">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <SectionLabel num="01" label="Selected Work" />
          <h2 className="text-5xl md:text-8xl font-medium tracking-tighter leading-[0.9]">
            Curated <br />
            <span className="italic font-serif text-neutral-500">Projects</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-y-32">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── About ────────────────────────────────────────────────────────────────────

function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section
      ref={containerRef}
      id="about"
      className="py-32 relative bg-neutral-950 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="container mx-auto px-6">
        <SectionLabel num="02" label="The Engineer" />

        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-20 items-start">
          <div className="relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-7xl font-medium tracking-tighter mb-12 leading-[0.9]"
            >
              Building systems <br />
              <span className="italic font-serif text-neutral-500">
                that last.
              </span>
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-12 text-lg font-light text-neutral-400 leading-relaxed mb-16">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                Software engineer and Computer Science student with hands-on
                experience in Django REST APIs, Flutter applications, and
                full-stack architecture.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Experienced in real-time communication, relational database
                optimisation, and mobile application architecture. Has led a
                three-person development team.
              </motion.p>
            </div>

            {/* Skills grid */}
            <div className="pt-12 border-t border-white/5">
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-600 block mb-8">
                Technical Stack
              </span>
              <div className="grid sm:grid-cols-2 gap-x-12 gap-y-8">
                {SKILLS.map((group, i) => (
                  <motion.div
                    key={group.category}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i, duration: 0.6 }}
                  >
                    <p className="text-xs font-mono uppercase tracking-widest text-neutral-600 mb-3">
                      {group.category}
                    </p>
                    <p className="font-light text-neutral-400 text-sm leading-relaxed">
                      {group.items.join(" · ")}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Decorative right column */}
          <motion.div style={{ opacity }} className="relative lg:mt-16">
            <div className="relative z-10 aspect-[4/5] bg-neutral-900 border border-white/5 rounded-sm flex flex-col items-center justify-center gap-10 overflow-hidden">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:3rem_3rem]" />
              {[
                { label: "Years Building", value: "1+" },
                { label: "Projects Shipped", value: "04" },
                { label: "Open Source", value: "01" },
              ].map(({ label, value }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.15 }}
                  className={`relative z-10 text-center ${i < 2 ? "pb-10 border-b border-white/5 w-full flex flex-col items-center" : ""}`}
                >
                  <h4 className="text-6xl font-light text-white tracking-tighter mb-2">
                    {value}
                  </h4>
                  <p className="text-xs uppercase tracking-widest text-neutral-500">
                    {label}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Decorative spinning ring */}
            <div
              className="absolute -bottom-10 -left-10 w-40 h-40 border border-white/10 rounded-full hidden md:flex items-center justify-center"
              style={{ animation: "spin 18s linear infinite" }}
            >
              <style
                dangerouslySetInnerHTML={{
                  __html:
                    "@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }",
                }}
              />
              <svg className="w-full h-full p-2" viewBox="0 0 100 100">
                <path
                  id="circlePath"
                  d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  fill="transparent"
                />
                <text className="fill-neutral-600 text-[9px] uppercase tracking-widest font-mono">
                  <textPath href="#circlePath">
                    • Django • Flutter • React • Python •
                  </textPath>
                </text>
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── Experience ───────────────────────────────────────────────────────────────

function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      id="experience"
      className="py-32 px-6 bg-neutral-950 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.02),transparent_50%)] pointer-events-none" />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
        className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] border border-white/5 rounded-full pointer-events-none opacity-40"
        style={{ borderStyle: "dashed" }}
      />

      <div className="container mx-auto relative z-10">
        <SectionLabel num="03" label="Experience" />

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <motion.h2
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-8xl font-medium tracking-tighter leading-[0.9]"
          >
            Where I've <br />
            <span className="italic font-serif text-neutral-500">Worked</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="md:pl-12 border-l border-white/10 relative"
          >
            <div className="absolute top-0 left-[-1px] h-12 w-px bg-gradient-to-b from-white to-transparent" />
            <p className="text-xl font-light text-neutral-300 leading-relaxed">
              Professional engineering experience shipping production software
              across fintech and open-source.
            </p>
          </motion.div>
        </div>

        <div className="mt-24 space-y-0">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="border-t border-white/10 py-12 grid md:grid-cols-[200px_1fr_auto] gap-8 items-start group hover:bg-white/[0.02] transition-colors px-4 -mx-4 rounded-sm"
          >
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-neutral-600 mb-2">
                Role
              </p>
              <p className="text-sm text-neutral-400 font-light">
                {EXPERIENCE.role}
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-medium tracking-tight mb-6 group-hover:text-neutral-300 transition-colors">
                {EXPERIENCE.company}
              </h3>
              <ul className="space-y-3">
                {EXPERIENCE.bullets.map((b, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-sm font-light text-neutral-400 leading-relaxed"
                  >
                    <span className="text-neutral-700 mt-[5px] flex-shrink-0">
                      —
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            <span className="text-xs font-mono text-neutral-600 whitespace-nowrap">
              {EXPERIENCE.period}
            </span>
          </motion.div>
          <div className="border-t border-white/5" />
        </div>

        {/* Education block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-16 pt-12 border-t border-white/5 grid md:grid-cols-[200px_1fr_auto] gap-8 items-start group hover:bg-white/[0.02] transition-colors px-4 -mx-4 rounded-sm py-12"
        >
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-neutral-600 mb-2">
              Education
            </p>
            <p className="text-sm text-neutral-400 font-light">ESUT</p>
          </div>
          <div>
            <h3 className="text-2xl font-medium tracking-tight mb-4">
              B.Sc. Computer Science
            </h3>
            <p className="text-sm font-light text-neutral-400 leading-relaxed">
              Data Structures & Algorithms · Operating Systems · Database
              Systems · Software Architecture · OOP (C++)
            </p>
            <p className="text-sm font-light text-neutral-500 leading-relaxed mt-3">
              Side project: Gorillar DB — a C++ database engine exploring
              low-level memory allocation, file I/O, indexing, and page storage.
            </p>
          </div>
          <span className="text-xs font-mono text-neutral-600 whitespace-nowrap">
            Expected 2027
          </span>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Contact Modal ────────────────────────────────────────────────────────────

function ContactModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [state, setState] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setState("submitting");
    setTimeout(() => {
      setState("success");
      setTimeout(() => {
        onClose();
        setState("idle");
      }, 2000);
    }, 1200);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-neutral-950/80 backdrop-blur-md z-[100]"
          />
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed inset-y-0 right-0 z-[101] w-full md:w-[600px] bg-neutral-900 border-l border-white/10 shadow-2xl p-8 md:p-12 overflow-y-auto"
          >
            <button
              onClick={onClose}
              className="absolute top-8 right-8 p-2 text-neutral-500 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {state === "success" ? (
              <div className="h-full flex flex-col items-center justify-center text-center min-h-screen">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6"
                >
                  <Send className="w-8 h-8 text-black" />
                </motion.div>
                <h3 className="text-3xl font-medium mb-2">Message Sent</h3>
                <p className="text-neutral-400 font-light">
                  {"I'll be in touch shortly."}
                </p>
              </div>
            ) : (
              <div className="mt-12">
                <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-6 block">
                  04 / Contact
                </span>
                <h3 className="text-4xl md:text-5xl font-medium tracking-tighter mb-2">
                  Start a <br />
                  <span className="italic font-serif text-neutral-500">
                    Project
                  </span>
                </h3>
                <p className="text-neutral-400 font-light mb-12">
                  Open to full-time roles, freelance, and open-source
                  collaboration.
                </p>

                <div className="mb-12 space-y-3">
                  {[
                    {
                      icon: <Mail size={14} />,
                      label: "nelsonsomto19@gmail.com",
                      href: "mailto:nelsonsomto19@gmail.com",
                    },
                    {
                      icon: <Phone size={14} />,
                      label: "+234-803-613-1721",
                      href: "tel:+2348036131721",
                    },
                    {
                      icon: <Github size={14} />,
                      label: "github.com/Nelson19so",
                      href: "https://github.com/Nelson19so",
                    },
                    {
                      icon: <Linkedin size={14} />,
                      label: "linkedin.com/in/nelson",
                      href: "https://linkedin.com/in/nelson",
                    },
                  ].map(({ icon, label, href }) => (
                    <a
                      key={label}
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="flex items-center gap-3 text-sm font-mono text-neutral-500 hover:text-white transition-colors group"
                    >
                      {icon}
                      <span>{label}</span>
                      <ArrowUpRight
                        size={10}
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                    </a>
                  ))}
                </div>

                <form onSubmit={handleSubmit} className="space-y-10">
                  <div className="space-y-8">
                    {[
                      { type: "text", placeholder: "Your Name" },
                      { type: "email", placeholder: "Email Address" },
                    ].map(({ type, placeholder }) => (
                      <input
                        key={placeholder}
                        required
                        type={type}
                        placeholder={placeholder}
                        className="w-full bg-transparent border-b border-white/10 py-4 text-xl font-light focus:outline-none focus:border-white transition-colors placeholder:text-neutral-700"
                      />
                    ))}
                    <textarea
                      required
                      placeholder="Message..."
                      rows={4}
                      className="w-full bg-transparent border-b border-white/10 py-4 text-xl font-light focus:outline-none focus:border-white transition-colors resize-none placeholder:text-neutral-700"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={state === "submitting"}
                    className="w-full bg-white text-black text-lg font-medium py-4 rounded-full hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {state === "submitting" ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

// ─── Footer / Contact ─────────────────────────────────────────────────────────

function Footer({ onContact }: { onContact: () => void }) {
  return (
    <footer
      id="contact"
      className="relative bg-neutral-950 py-32 px-6 overflow-hidden border-t border-white/5"
    >
      <div className="container mx-auto">
        <div className="grid md:grid-cols-[1.5fr_1fr] gap-20 mb-24">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-6xl md:text-9xl font-medium tracking-tighter leading-[0.9] mb-16"
            >
              {"Let's"} <br />
              <span className="italic font-serif text-neutral-500">Talk</span>
            </motion.h2>

            <div className="flex flex-col gap-10">
              <button
                onClick={onContact}
                className="group flex items-center gap-6 text-left"
              >
                <div className="w-20 h-20 rounded-full bg-white text-black flex items-center justify-center group-hover:scale-105 group-hover:bg-neutral-200 transition-all duration-500">
                  <ArrowUpRight className="w-8 h-8 group-hover:rotate-45 transition-transform duration-500" />
                </div>
                <div>
                  <span className="block text-3xl font-light tracking-tighter text-white group-hover:translate-x-2 transition-transform duration-300">
                    Start a Project
                  </span>
                  <span className="block text-sm font-mono uppercase tracking-widest text-neutral-500 mt-1 group-hover:text-neutral-400 transition-colors">
                    Currently available
                  </span>
                </div>
              </button>

              <a
                href="mailto:nelsonsomto19@gmail.com"
                className="group flex items-center gap-4 text-lg font-mono text-neutral-500 hover:text-white transition-colors pl-4"
              >
                <span className="w-2 h-2 rounded-full bg-green-500" />
                nelsonsomto19@gmail.com
              </a>
            </div>
          </div>

          <div className="flex flex-col justify-end gap-12">
            <div className="grid grid-cols-2 gap-12">
              <div>
                <h4 className="font-mono text-xs uppercase tracking-widest text-neutral-500 mb-6">
                  Connect
                </h4>
                <ul className="space-y-4">
                  {[
                    { label: "GitHub", href: "https://github.com/Nelson19so" },
                    {
                      label: "LinkedIn",
                      href: "https://linkedin.com/in/nelson",
                    },
                    { label: "Email", href: "mailto:nelsonsomto19@gmail.com" },
                    { label: "Phone", href: "tel:+2348036131721" },
                  ].map(({ label, href }) => (
                    <li key={label}>
                      <a
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel={
                          href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="flex items-center gap-2 text-lg font-light text-neutral-400 hover:text-white transition-colors group"
                      >
                        {label}
                        <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-mono text-xs uppercase tracking-widest text-neutral-500 mb-6">
                  Navigate
                </h4>
                <ul className="space-y-4">
                  {[
                    { label: "Work", id: "work" },
                    { label: "About", id: "about" },
                    { label: "Experience", id: "experience" },
                  ].map(({ label, id }) => (
                    <li key={id}>
                      <button
                        onClick={() =>
                          document
                            .getElementById(id)
                            ?.scrollIntoView({ behavior: "smooth" })
                        }
                        className="text-lg font-light text-neutral-400 hover:text-white transition-colors"
                      >
                        {label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 gap-6">
          <p className="font-mono text-xs uppercase tracking-widest text-neutral-600">
            © 2026 Nelson Junior
          </p>
          <p className="font-mono text-xs uppercase tracking-widest text-neutral-600">
            Full-Stack Software Engineer · Nigeria
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <Navbar onContact={() => setContactOpen(true)} />
      <Hero onContact={() => setContactOpen(true)} />
      <Work />
      <About />
      <Experience />
      <Footer onContact={() => setContactOpen(true)} />
      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
      />
    </div>
  );
}
