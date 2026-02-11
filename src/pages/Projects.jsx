import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiFolder, FiStar, FiArrowUpRight } from 'react-icons/fi';

const Projects = () => {
  const projects = [
    {
      title: 'FitPro Platform',
      category: 'Health & Fitness',
      description: 'A comprehensive fitness tracking ecosystem featuring real-time workout analytics, diet planning with caloric decomposition, and a community-driven challenge system. Integration with YouTube API provides users with curated exercise tutorials.',
      tech: ['React', 'Redux Toolkit', 'Firebase', 'Chart.js', 'Rest API'],
      github: 'https://github.com/Sirohi01',
      live: '#',
      color: 'from-cyan-500 to-blue-500',
      featured: true
    },
    {
      title: 'KaloDash',
      category: 'Data Visualization',
      description: 'Advanced health metrics dashboard focusing on caloric intake vs. expenditure. Features interactive data visualization graphs for body weight trends, water consumption, and macro-nutrient breakdown using processed health data.',
      tech: ['React', 'D3.js', 'Node.js', 'MongoDB'],
      github: 'https://github.com/Sirohi01',
      live: '#',
      color: 'from-purple-500 to-pink-500',
      featured: true
    },
    {
      title: 'Hospital Ops',
      category: 'Enterprise Management',
      description: 'A robust hospital resource planning system managing 12+ critical modules including patient admission, doctor scheduling, pharmacy inventory, and ambulance fleet tracking. Designed for high-volume data processing.',
      tech: ['React', 'Express', 'PostgreSQL', 'Docker'],
      github: 'https://github.com/Sirohi01',
      color: 'from-orange-500 to-red-500',
      featured: false
    },
    {
      title: 'Sirohi Luxe',
      category: 'E-Commerce',
      description: 'High-performance fashion e-commerce storefront with headless architecture. Features include server-side rendering for SEO, stripe payment gateway integration, and real-time inventory management.',
      tech: ['Next.js', 'Stripe', 'Sanity CMS', 'Tailwind'],
      github: 'https://github.com/Sirohi01',
      color: 'from-indigo-500 to-violet-500',
      featured: false
    },
    {
      title: 'AgroScanner',
      category: 'Machine Learning',
      description: 'Plant disease detection system utilizing Convolutional Neural Networks (CNN). Trained on a dataset of 50k+ plant leaf images to identify diseases with 94% accuracy, helping farmers take early preventive actions.',
      tech: ['Python', 'TensorFlow', 'OpenCV', 'Flask'],
      github: 'https://github.com/Sirohi01',
      color: 'from-green-500 to-emerald-500',
      featured: false
    },
    {
      title: 'BookMind',
      category: 'AI Recommendation',
      description: 'Intelligent book recommendation engine powered by K-Nearest Neighbors (KNN) algorithm. analyzes user reading history and preferences to suggest personalized book titles from a database of 10,000+ books.',
      tech: ['Python', 'Scikit-Learn', 'Pandas', 'FastAPI'],
      github: 'https://github.com/Sirohi01',
      color: 'from-yellow-500 to-orange-500',
      featured: false
    },
  ];

  return (
    <div className="relative min-h-screen pt-32 pb-20 px-6 overflow-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none -z-10 bg-slate-950">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950 to-slate-950" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20"
        >
          <span className="inline-block px-4 py-2 bg-white/5 border border-white/10 backdrop-blur-md rounded-full text-sm font-semibold mb-6 text-cyan-400">
            Selected Works
          </span>
          <h1 className="text-5xl lg:text-7xl font-heading font-bold mb-6 text-white">
            Crafting <span className="gradient-text">Digital Value</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
            I build things that live on the internet. Here are some of the projects I've worked on.
          </p>
        </motion.div>

        <div className="grid gap-8 md:gap-12">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ y: -5 }}
              className="group relative bg-white/5 border border-white/5 hover:border-white/10 rounded-3xl overflow-hidden transition-all duration-300"
            >
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${project.color} opacity-70`} />

              <div className="p-8 md:p-12 grid md:grid-cols-[2fr_1fr] gap-8 items-start">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-white/10 px-3 py-1 rounded-full text-xs font-semibold text-cyan-300 tracking-wider uppercase border border-white/5">{project.category}</span>
                    {project.featured && (
                      <span className="flex items-center gap-1 text-yellow-400 text-xs font-semibold uppercase tracking-wider">
                        <FiStar /> Featured
                      </span>
                    )}
                  </div>

                  <h3 className="text-3xl font-heading font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed mb-8 text-lg">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-4 py-1.5 text-sm bg-black/30 border border-white/5 rounded-full text-gray-300 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-4 md:items-end justify-center h-full">
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-cyan-500/50 hover:text-cyan-400 transition-all text-gray-300 group/btn"
                      aria-label="GitHub Code"
                    >
                      <FiGithub className="w-6 h-6" />
                    </a>
                    {/* {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/20 hover:bg-cyan-500/20 hover:border-cyan-500/50 text-cyan-400 transition-all group/btn"
                        aria-label="Live Demo"
                      >
                        <FiArrowUpRight className="w-6 h-6" />
                      </a>
                    )} */}
                  </div>
                  <div className="hidden md:block mt-auto text-8xl font-bold text-white/5 pointer-events-none select-none">
                    {String(idx + 1).padStart(2, '0')}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-6">More projects on GitHub</h2>
          <a
            href="https://github.com/Sirohi01"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold text-lg hover:underline underline-offset-4 decoration-2"
          >
            View GitHub Profile <FiArrowUpRight />
          </a>
        </motion.div>

      </div>
    </div>
  );
};

export default Projects;
