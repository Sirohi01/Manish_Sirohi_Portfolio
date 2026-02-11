import { motion, useScroll, useTransform } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiArrowRight, FiDownload, FiCode, FiLayers, FiZap, FiAward, FiTrendingUp, FiStar, FiCpu, FiGlobe, FiDatabase } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const techStack = [
    'React', 'Node.js', 'TypeScript', 'MongoDB', 'Express', 'Tailwind',
    'Redux', 'Firebase', 'Next.js', 'PostgreSQL', 'Docker', 'AWS', 'Three.js'
  ];

  const services = [
    {
      icon: FiCode,
      title: 'Full Stack Dev',
      description: 'End-to-end web application development using modern MERN stack and Next.js.',
      gradient: 'from-blue-500 to-cyan-500',
      delay: 0
    },
    {
      icon: FiLayers,
      title: 'UI/UX Design',
      description: 'Crafting pixel-perfect, accessible, and engaging user interfaces with Tailwind & Framer.',
      gradient: 'from-purple-500 to-pink-500',
      delay: 0.1
    },
    {
      icon: FiZap,
      title: 'Performance',
      description: 'Optimizing for Core Web Vitals, fast load times, and SEO best practices.',
      gradient: 'from-orange-500 to-red-500',
      delay: 0.2
    }
  ];

  return (
    <div ref={containerRef} className="relative min-h-screen pt-32 pb-20 px-6 overflow-hidden">

      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/20 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/20 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-[40%] left-[40%] w-[20%] h-[20%] bg-cyan-500/10 rounded-full blur-[100px] animate-float-slow" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">

        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-8rem)] mb-20">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "outCirc" }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-green-500/30 bg-green-500/10 backdrop-blur-md"
            >
              <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </div>
              <span className="text-xs font-semibold text-green-400 uppercase tracking-wide">Available for Work</span>
            </motion.div>

            <div>
              <motion.h1
                className="text-5xl lg:text-7xl font-bold mb-4 leading-tight font-heading"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Building <span className="gradient-text">Digital</span> <br />
                <span className="text-white">Experiences.</span>
              </motion.h1>

              <motion.p
                className="text-lg lg:text-xl text-gray-400 max-w-lg leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                I'm <span className="text-white font-semibold">Manish Sirohi</span>, a Full-Stack Developer passionate about creating beautiful, functional, and scalable web applications.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                to="/projects"
                className="px-8 py-4 bg-white text-black rounded-full font-bold hover:scale-105 transition-transform duration-300 flex items-center gap-2"
              >
                View Projects <FiArrowRight />
              </Link>
              <a
                href="/Manish_Sirohi_Resume.pdf"
                download
                className="px-8 py-4 rounded-full border border-white/20 hover:bg-white/10 transition-colors duration-300 flex items-center gap-2 backdrop-blur-sm"
              >
                Download CV <FiDownload />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex gap-6 text-gray-400"
            >
              <a href="https://github.com/Sirohi01" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors hover:scale-110 transform duration-200"><FiGithub size={24} /></a>
              <a href="https://www.linkedin.com/in/manish-kumar-sirohi-593268217" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors hover:scale-110 transform duration-200"><FiLinkedin size={24} /></a>
              <a href="mailto:manishsirohi023@gmail.com" className="hover:text-red-400 transition-colors hover:scale-110 transform duration-200"><FiMail size={24} /></a>
            </motion.div>
          </motion.div>

          {/* Right Content - Interactive Card */}
          <motion.div
            style={{ y }}
            className="relative hidden lg:block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.div
              style={{
                rotateX: mousePosition.y,
                rotateY: mousePosition.x,
              }}
              className="relative z-10 w-[500px] h-[600px] mx-auto perspective-1000"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-purple-600/20 rounded-3xl blur-xl transform translate-y-4" />
              <div className="relative h-full bg-slate-900/40 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 overflow-hidden shadow-2xl flex flex-col justify-between group">

                {/* Decorative Code bg */}
                <div className="absolute inset-0 opacity-10 font-mono text-xs p-4 overflow-hidden pointer-events-none text-cyan-500">
                  {Array.from({ length: 20 }).map((_, i) => (
                    <div key={i}>{`const future = await build(dreams, code); // executing line ${i * 45}`}</div>
                  ))}
                </div>

                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center mb-6">
                    <FiCode size={32} className="text-cyan-400" />
                  </div>
                  <h3 className="text-3xl font-heading font-bold text-white mb-2">Clean Code.</h3>
                  <h3 className="text-3xl font-heading font-bold text-gray-400">Elegant Design.</h3>
                </div>

                <div className="relative z-10 grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/5 backdrop-blur-sm">
                    <FiGlobe className="text-blue-400 mb-2" size={24} />
                    <div className="text-2xl font-bold text-white">10+</div>
                    <div className="text-xs text-gray-400">Live Projects</div>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/5 backdrop-blur-sm">
                    <FiCpu className="text-purple-400 mb-2" size={24} />
                    <div className="text-2xl font-bold text-white">Full</div>
                    <div className="text-xs text-gray-400">Stack Ready</div>
                  </div>
                </div>

                {/* Floating Elements on Card */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-1/4 right-8 w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 blur-lg opacity-60"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Tech Stack Marquee */}
        <div className="py-12 border-y border-white/5 bg-black/20 backdrop-blur-sm -mx-6 px-6 mb-32">
          <div className="max-w-7xl mx-auto overflow-hidden relative">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-950 to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-950 to-transparent z-10" />

            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="flex gap-12 whitespace-nowrap w-max"
            >
              {[...techStack, ...techStack].map((tech, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xl font-bold text-gray-500 uppercase tracking-widest hover:text-white transition-colors cursor-default">
                  <FiStar className="w-4 h-4 text-cyan-500" /> {tech}
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Services Section */}
        <div className="mb-32">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-5xl font-heading font-bold mb-6"
            >
              My <span className="gradient-text">Expertise</span>
            </motion.h2>
            <p className="text-gray-400">
              I bring ideas to life with a comprehensive skill set covering the entire development process.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: service.delay }}
                whileHover={{ y: -5 }}
                className="group relative p-8 rounded-3xl bg-slate-900/50 border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="text-white text-2xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats Section with Glassmorphism */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-32">
          {[
            { value: '2+', label: 'Years Exp', icon: FiZap, color: 'text-yellow-400' },
            { value: '15+', label: 'Projects', icon: FiLayers, color: 'text-cyan-400' },
            { value: '100%', label: 'Commitment', icon: FiAward, color: 'text-purple-400' },
            { value: '24/7', label: 'Support', icon: FiTrendingUp, color: 'text-pink-400' },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-sm text-center group"
            >
              <stat.icon className={`w-8 h-8 mx-auto mb-4 ${stat.color} group-hover:scale-110 transition-transform`} />
              <div className="text-3xl font-heading font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-gray-400 font-medium uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Home;
