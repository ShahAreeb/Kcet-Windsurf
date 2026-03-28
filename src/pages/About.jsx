import { motion } from 'framer-motion';
import { GraduationCap, Target, Eye, Award, BookOpen, Users } from 'lucide-react';

const milestones = [
  { year: '2010', title: 'Foundation', description: 'KCET was established with a vision to provide quality engineering education in Kashmir.' },
  { year: '2015', title: 'AICTE Approval', description: 'Received AICTE approval, establishing credibility and recognition.' },
  { year: '2018', title: 'Program Expansion', description: 'Added AI and advanced computing programs to the curriculum.' },
  { year: '2020', title: 'Digital Campus', description: 'Implemented smart classrooms and advanced laboratory facilities.' },
  { year: '2023', title: 'Research Excellence', description: 'Established research centers and industry partnerships.' },
  { year: '2026', title: 'Global Reach', description: 'International collaborations and exchange programs launched.' },
];

const values = [
  {
    icon: Target,
    title: 'Excellence',
    description: 'Committed to delivering the highest standards in technical education',
  },
  {
    icon: Users,
    title: 'Innovation',
    description: 'Fostering creativity and cutting-edge research',
  },
  {
    icon: BookOpen,
    title: 'Integrity',
    description: 'Building ethical engineers with strong moral values',
  },
  {
    icon: Award,
    title: 'Impact',
    description: 'Creating solutions that benefit society and industry',
  },
];

export default function About() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="section">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-blue-400 font-medium">About Us</span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mt-4 mb-6">
              About <span className="gradient-text">KCET</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Kashmir College of Engineering and Technology (KCET) is an engineering college 
              located in the breathtaking Kashmir Valley, dedicated to providing quality education 
              and empowering local students through professional engineering courses.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">Our Vision</h2>
              <p className="text-gray-400 leading-relaxed">
                To become a center of excellence in engineering education, recognized nationally 
                and internationally for producing competent engineers who contribute to 
                technological advancement and societal development. We envision creating 
                a nurturing environment where innovation thrives and students reach their 
                full potential.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full mt-2" />
                  <span>Provide quality technical education aligned with industry needs</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full mt-2" />
                  <span>Foster research and innovation in emerging technologies</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full mt-2" />
                  <span>Develop ethical leadership and professional competence</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full mt-2" />
                  <span>Create industry-ready graduates through practical exposure</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Our Core Values</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              The principles that guide our institution and shape our culture
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="glass-card rounded-2xl p-6 text-center"
                >
                  <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-500/20 to-emerald-500/20 flex items-center justify-center">
                    <Icon className="w-7 h-7 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                  <p className="text-gray-400 text-sm">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="section bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Our Journey</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              The story of our growth and achievements over the years
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 to-emerald-500" />
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className="w-1/2 pr-8 pl-8">
                    <div className={`glass-card rounded-2xl p-6 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                      <span className="text-4xl font-bold gradient-text">{milestone.year}</span>
                      <h3 className="text-xl font-bold text-white mt-2 mb-2">{milestone.title}</h3>
                      <p className="text-gray-400 text-sm">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500 border-4 border-slate-900" />
                  <div className="w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="section">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Our Leadership</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Meet the visionaries behind KCET's success
            </p>
          </motion.div>

          <div className="glass-card rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center">
                <GraduationCap className="w-16 h-16 text-white" />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold text-white mb-2">Founders & Leadership</h3>
                <p className="text-gray-400 leading-relaxed mb-4">
                  KCET was founded by a group of esteemed engineers who recognized the need for 
                  quality engineering education in the Kashmir Valley. Their vision was to create 
                  an institution that would bridge the gap requiring students to travel to other 
                  states for higher education. Today, their commitment to excellence continues to 
                  guide the institution's growth and success.
                </p>
                <div className="flex items-center justify-center md:justify-start space-x-4 text-sm text-gray-400">
                  <span className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full" />
                    <span>AICTE Approved</span>
                  </span>
                  <span className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-blue-400 rounded-full" />
                    <span>Industry Partners</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
