import { motion } from 'framer-motion';
import { FiBook, FiCode, FiCpu, FiAward } from 'react-icons/fi';

const About = () => {
  return (
    <div className="relative min-h-screen pt-32 pb-20 px-6 overflow-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 bg-white/5 border border-white/10 backdrop-blur-md rounded-full text-sm font-semibold mb-6 text-cyan-400">
            Get to know me
          </span>
          <h1 className="text-5xl lg:text-7xl font-heading font-bold mb-6 text-white">
            Driven by <span className="gradient-text">Passion</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            I craft digital experiences that merge art with engineering.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Image/Visual Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-square rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-900 to-transparent z-10" />
              {/* Abstract Code Pattern Bg */}
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 z-0"></div>
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="text-center">
                  <FiCode className="w-24 h-24 text-cyan-500 mx-auto mb-4 animate-bounce" />
                  <h3 className="text-3xl font-bold text-white">Creator.</h3>
                  <h3 className="text-3xl font-bold text-gray-400">Builder.</h3>
                </div>
              </div>
            </div>
            {/* Floating Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-6 -right-6 bg-slate-800/90 backdrop-blur-xl p-6 rounded-2xl border border-white/10 shadow-xl z-30"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-purple-500/20 rounded-xl">
                  <FiAward className="w-8 h-8 text-purple-400" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">35+</div>
                  <div className="text-sm text-gray-400">Completed Projects</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8 flex flex-col justify-center"
          >
            <div className="p-8 rounded-3xl bg-white/5 border border-white/5 backdrop-blur-sm hover:border-white/10 transition-colors">
              <h3 className="text-2xl font-heading font-bold text-white mb-4 flex items-center gap-3">
                <FiCpu className="text-cyan-400" /> The Tech Enthusiast
              </h3>
              <p className="text-gray-400 leading-relaxed text-lg">
                I am a <span className="text-white font-semibold">Full-Stack Developer</span> deep diving into the world of web technologies. My journey started with a curiosity for how things work on the internet, which inevitably led me down the rabbit hole of coding.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white/5 border border-white/5 backdrop-blur-sm hover:border-white/10 transition-colors">
              <h3 className="text-2xl font-heading font-bold text-white mb-4 flex items-center gap-3">
                <FiBook className="text-purple-400" /> Education
              </h3>
              <div>
                <div className="text-xl font-bold text-white">B.Tech - Computer Science</div>
                <div className="text-cyan-400 font-medium mb-2">Dr. A.P.J. Abdul Kalam Technical University</div>
                <div className="text-gray-500 text-sm">2020 - 2024</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Philosophy Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-12 rounded-[2.5rem] bg-gradient-to-br from-slate-900 to-slate-800/50 border border-white/10 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500" />
          <div className="relative z-10">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-white mb-8">My Development Philosophy</h2>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              {[
                { title: 'Clean Code', desc: 'Writing code that is readable, maintainable, and scalable for future growth.' },
                { title: 'User Centric', desc: 'Prioritizing the end-user experience in every design decision I make.' },
                { title: 'Innovation', desc: 'Constantly exploring new technologies to build better solutions.' }
              ].map((item, idx) => (
                <div key={idx} className="bg-black/20 p-6 rounded-2xl border border-white/5 hover:bg-black/30 transition-colors">
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
