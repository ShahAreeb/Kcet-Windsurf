import { motion } from 'framer-motion';
import { BookOpen, Clock, Award, Users, ChevronRight, CheckCircle2 } from 'lucide-react';

const programs = [
  {
    code: 'B.Tech',
    name: 'Artificial Intelligence Engineering',
    duration: '4 Years',
    seats: 60,
    description: 'Explore the realm of AI, mastering algorithms and neural networks to revolutionize industries and elevate the quality of human existence.',
    highlights: [
      'Machine Learning & Deep Learning',
      'Natural Language Processing',
      'Computer Vision',
      'Robotics & Automation',
      'Data Science & Analytics',
    ],
    color: 'from-purple-500 to-pink-500',
  },
  {
    code: 'B.Tech',
    name: 'Computer Engineering',
    duration: '4 Years',
    seats: 60,
    description: 'Merge hardware and software skills to pioneer technological breakthroughs and innovation in the computing world.',
    highlights: [
      'Computer Architecture',
      'Operating Systems',
      'Network Security',
      'Software Engineering',
      'Cloud Computing',
    ],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    code: 'B.Tech',
    name: 'Civil Engineering',
    duration: '4 Years',
    seats: 60,
    description: 'Dive into infrastructure design and construction with a focus on sustainability and societal impact.',
    highlights: [
      'Structural Engineering',
      'Environmental Engineering',
      'Transportation Engineering',
      'Geotechnical Engineering',
      'Construction Management',
    ],
    color: 'from-orange-500 to-red-500',
  },
  {
    code: 'B.Tech',
    name: 'Information Technology',
    duration: '4 Years',
    seats: 60,
    description: 'Develop mastery in navigating software and hardware infrastructures to drive digital empowerment initiatives.',
    highlights: [
      'Web Development',
      'Database Management',
      'Information Security',
      'IT Infrastructure',
      'Mobile Applications',
    ],
    color: 'from-emerald-500 to-teal-500',
  },
  {
    code: 'B.Tech',
    name: 'Electronics & Communication',
    duration: '4 Years',
    seats: 60,
    description: 'Develop vital communication systems driving global connectivity and innovation.',
    highlights: [
      'Digital Signal Processing',
      'VLSI Design',
      'Wireless Communication',
      'Embedded Systems',
      'IoT & Automation',
    ],
    color: 'from-indigo-500 to-purple-500',
  },
];

const curriculumFeatures = [
  {
    icon: BookOpen,
    title: 'Industry-Aligned Curriculum',
    description: 'Courses designed in collaboration with industry experts',
  },
  {
    icon: Clock,
    title: 'Practical Training',
    description: 'Hands-on experience in state-of-the-art laboratories',
  },
  {
    icon: Award,
    title: 'Certification Programs',
    description: 'Industry-recognized certifications integrated into courses',
  },
  {
    icon: Users,
    title: 'Expert Faculty',
    description: 'Learn from experienced professors and industry practitioners',
  },
];

export default function Academics() {
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
            <span className="text-blue-400 font-medium">Academics</span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mt-4 mb-6">
              Academic <span className="gradient-text">Programs</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Discover our comprehensive B.Tech programs designed to prepare you for 
              a successful career in engineering and technology
            </p>
          </motion.div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="section bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={program.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card rounded-2xl overflow-hidden"
              >
                <div className={`h-2 bg-gradient-to-r ${program.color}`} />
                <div className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-center space-x-4 mb-4">
                        <span className={`px-4 py-2 rounded-full bg-gradient-to-r ${program.color} text-white text-sm font-bold`}>
                          {program.code}
                        </span>
                        <div className="flex items-center space-x-4 text-sm text-gray-400">
                          <span className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>{program.duration}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <Users className="w-4 h-4" />
                            <span>{program.seats} Seats</span>
                          </span>
                        </div>
                      </div>
                      
                      <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        {program.name}
                      </h2>
                      <p className="text-gray-400 mb-6 max-w-3xl">
                        {program.description}
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                        {program.highlights.map((highlight) => (
                          <div key={highlight} className="flex items-center space-x-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                            <span className="text-gray-300 text-sm">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="lg:w-48 flex-shrink-0">
                      <button className="w-full py-3 px-6 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-xl text-white font-semibold hover:shadow-lg transition-all flex items-center justify-center space-x-2">
                        <span>Apply Now</span>
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Features */}
      <section className="section">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Curriculum Highlights</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              What makes our academic programs stand out
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {curriculumFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
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
                  <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Academic Calendar CTA */}
      <section className="section bg-slate-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-8 md:p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Admissions are now open for the 2026 batch. Secure your seat in one of 
              Kashmir's premier engineering institutions.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="/admissions" className="btn-primary">
                Apply for Admission
              </a>
              <button className="btn-outline">
                Download Brochure
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
