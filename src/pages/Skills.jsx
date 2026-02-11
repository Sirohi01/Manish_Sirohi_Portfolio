import { motion } from 'framer-motion';
import { FaReact, FaNode, FaPython, FaAws, FaGitAlt, FaDocker, FaHtml5, FaCss3Alt, FaJs, FaSass, FaJava, FaAndroid, FaApple, FaLinux, FaVial, FaPuzzlePiece } from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiFirebase, SiTailwindcss, SiRedux, SiExpress, SiNextdotjs, SiPostgresql, SiMysql, SiGraphql, SiNestjs, SiPrisma, SiJest, SiCypress, SiPostman, SiVite, SiWebpack, SiVercel } from 'react-icons/si';

const Skills = () => {

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  const skillCategories = [
    {
      title: 'Frontend Ecosystem',
      skills: [
        { name: 'React.js', icon: <FaReact className="text-cyan-400" /> },
        { name: 'Next.js', icon: <SiNextdotjs className="text-white" /> },
        { name: 'TypeScript', icon: <SiTypescript className="text-blue-500" /> },
        { name: 'Redux', icon: <SiRedux className="text-purple-500" /> },
        { name: 'Tailwind', icon: <SiTailwindcss className="text-cyan-300" /> },
        { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" /> },
        { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500" /> },
        { name: 'Sass', icon: <FaSass className="text-pink-400" /> },
      ]
    },
    {
      title: 'Mobile Development',
      skills: [
        { name: 'React Native', icon: <FaReact className="text-blue-400" /> },
        { name: 'Expo', icon: <SiTypescript className="text-white" /> }, // Using TS icon as placeholder or generic
        { name: 'Android', icon: <FaAndroid className="text-green-500" /> },
        { name: 'iOS', icon: <FaApple className="text-white" /> },
      ]
    },
    {
      title: 'Backend & API',
      skills: [
        { name: 'Node.js', icon: <FaNode className="text-green-500" /> },
        { name: 'Express', icon: <SiExpress className="text-gray-400" /> },
        { name: 'NestJS', icon: <SiNestjs className="text-red-500" /> },
        { name: 'Python', icon: <FaPython className="text-yellow-400" /> },
        { name: 'Java', icon: <FaJava className="text-red-400" /> },
        { name: 'GraphQL', icon: <SiGraphql className="text-pink-500" /> },
        { name: 'REST API', icon: <SiPostman className="text-orange-500" /> },
      ]
    },
    {
      title: 'Testing & QA',
      skills: [
        { name: 'Unit Testing', icon: <FaVial className="text-pink-500" /> },
        { name: 'Integration Testing', icon: <FaPuzzlePiece className="text-yellow-500" /> },
        { name: 'Jest', icon: <SiJest className="text-red-600" /> },
        { name: 'RTL', icon: <FaReact className="text-cyan-500" /> },
        { name: 'Cypress', icon: <SiCypress className="text-green-400" /> },
        { name: 'Postman', icon: <SiPostman className="text-orange-500" /> },
        { name: 'JUnit', icon: <FaJava className="text-red-400" /> },
      ]
    },
    {
      title: 'Database & Cloud',
      skills: [
        { name: 'MongoDB', icon: <SiMongodb className="text-green-500" /> },
        { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-400" /> },
        { name: 'MySQL', icon: <SiMysql className="text-orange-400" /> },
        { name: 'Prisma', icon: <SiPrisma className="text-white" /> },
        { name: 'AWS', icon: <FaAws className="text-orange-500" /> },
        { name: 'Firebase', icon: <SiFirebase className="text-yellow-500" /> },
        { name: 'Vercel', icon: <SiVercel className="text-white" /> },
      ]
    },
    {
      title: 'DevOps & Tools',
      skills: [
        { name: 'Git', icon: <FaGitAlt className="text-red-500" /> },
        { name: 'Docker', icon: <FaDocker className="text-blue-500" /> },
        { name: 'Vite', icon: <SiVite className="text-purple-500" /> },
        { name: 'Webpack', icon: <SiWebpack className="text-blue-400" /> },
        { name: 'Linux', icon: <FaLinux className="text-white" /> },
      ]
    }
  ];

  return (
    <div className="relative min-h-screen pt-32 pb-20 px-6 overflow-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black">
        <div className="absolute top-[-10%] left-[20%] w-[30%] h-[30%] bg-blue-600/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[20%] w-[30%] h-[30%] bg-cyan-600/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 bg-white/5 border border-white/10 backdrop-blur-md rounded-full text-sm font-semibold mb-6 text-cyan-400">
            Tech Stack
          </span>
          <h1 className="text-5xl lg:text-7xl font-heading font-bold mb-6 text-white">
            My <span className="gradient-text">Arsenal</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A curated list of technologies I use to build robust and scalable applications.
          </p>
        </motion.div>

        <div className="space-y-24">
          {skillCategories.map((category, idx) => (
            <div key={idx}>
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-3xl font-heading font-bold text-white mb-10 pl-4 border-l-4 border-cyan-500"
              >
                {category.title}
              </motion.h2>

              <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6"
              >
                {category.skills.map((skill, sIdx) => (
                  <motion.div
                    key={sIdx}
                    variants={item}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="group relative bg-white/5 border border-white/5 hover:border-cyan-500/50 rounded-2xl p-6 flex flex-col items-center justify-center gap-4 transition-all duration-300 hover:shadow-[0_0_30px_-5px_theme(colors.cyan.500/0.3)]"
                  >
                    <div className="text-5xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                      {skill.icon}
                    </div>
                    <span className="font-medium text-gray-300 group-hover:text-white transition-colors">{skill.name}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>

        {/* Learning Badges */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 p-12 rounded-[2.5rem] bg-gradient-to-br from-slate-900 to-black border border-white/10 text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-8">Constantly Learning</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'System Design', 'Cloud Architecture', 'Machine Learning',
              'Web3', 'Blockchain', 'Cybersecurity'
            ].map((tag, i) => (
              <span key={i} className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-cyan-400 hover:border-cyan-500/50 transition-colors cursor-default">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Skills;
