import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiMapPin, FiAward, FiArrowUpRight } from 'react-icons/fi';

const Experience = () => {
  // Animation variants
  const item = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 }
  };

  const experiences = [
    {
      company: 'Bterai Technologies',
      role: 'Frontend Developer',
      period: 'Jun 2025 - Present',
      location: 'Remote',
      type: 'Full-time',
      stack: ['React.js', 'Tailwind', 'Vite', 'React-PDF'],
      description: 'Leading frontend development for enterprise applications with focus on performance and scalability.',
      achievements: [
        'Optimized build times by 40% using Vite and code-splitting strategies.',
        'Engineered a complex PDF generation module serving 1000+ daily reports.',
        'Developed reusable component library reducing dev time by 30%.'
      ]
    },
    {
      company: 'LeaveCode Technologies',
      role: 'Mobile App Developer',
      period: 'Sep 2024 - Apr 2025',
      location: 'Remote',
      type: 'Full-time',
      stack: ['React Native', 'Redux', 'Firebase', 'Node.js'],
      description: 'Built cross-platform mobile application for waste management with real-time features.',
      achievements: [
        'Architected AppLaChain utilizing Redux for state management across 15+ screens.',
        'Implemented real-time data sync with Firestore and offline persistence.',
        'Secured user data with role-based access control and Firebase Auth.'
      ]
    },
    {
      company: 'Sneagnic Pvt. Ltd.',
      role: 'Web Development Intern',
      period: 'Feb 2024 - Aug 2024',
      location: 'Remote',
      type: 'Internship',
      stack: ['React.js', 'Bootstrap', 'Node.js', 'Firebase'],
      description: 'Developed responsive web applications and implemented SEO best practices.',
      achievements: [
        'Built full-stack web solutions improving client engagement by 25%.',
        'Implemented SEO strategies increasing organic traffic.',
        'Collaborated with backend teams for seamless API integration.'
      ]
    }
  ];

  return (
    <div className="relative min-h-screen pt-32 pb-20 px-6 overflow-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none -z-10 bg-slate-950">
        <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 bg-white/5 border border-white/10 backdrop-blur-md rounded-full text-sm font-semibold mb-6 text-cyan-400">
            Career Journey
          </span>
          <h1 className="text-5xl lg:text-7xl font-heading font-bold mb-6 text-white">
            Professional <span className="gradient-text">Experience</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Building impactful solutions and growing with every challenge.
          </p>
        </motion.div>

        <div className="relative space-y-12">
          {/* Vertical Line */}
          <div className="absolute left-4 lg:left-1/2 top-4 bottom-4 w-px bg-gradient-to-b from-cyan-500/50 via-purple-500/50 to-transparent lg:-translate-x-1/2" />

          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1 }}
              className={`relative grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${idx % 2 === 0 ? 'lg:text-right' : 'lg:text-left'
                }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-4 lg:left-1/2 w-4 h-4 rounded-full bg-slate-950 border-2 border-cyan-500 z-10 -translate-x-[7px] lg:-translate-x-1/2 mt-1.5 shadow-[0_0_15px_rgba(6,182,212,0.5)]" />

              {/* Content Card */}
              <div className={`pl-12 lg:pl-0 ${idx % 2 === 0
                  ? 'lg:col-start-1 lg:pr-12'
                  : 'lg:col-start-2 lg:pl-12'
                }`}>
                <div className="p-8 rounded-3xl bg-white/5 border border-white/5 hover:border-white/10 backdrop-blur-sm transition-all duration-300 group hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-500/10 text-left">

                  <div className="flex flex-wrap items-center gap-3 mb-2 text-sm text-cyan-400 font-semibold uppercase tracking-wider">
                    <span>{exp.period}</span>
                    <span className="w-1 h-1 rounded-full bg-white/20" />
                    <span>{exp.type}</span>
                  </div>

                  <h3 className="text-2xl font-heading font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                    {exp.role}
                  </h3>

                  <div className="text-lg text-gray-300 font-medium mb-4 flex items-center gap-2">
                    {exp.company}
                    <FiArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity text-cyan-400" />
                  </div>

                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  <ul className="space-y-3 mb-6">
                    {exp.achievements.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-400">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.stack.map((tech, i) => (
                      <span key={i} className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 border border-white/10 text-gray-300 group-hover:border-white/20 transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
