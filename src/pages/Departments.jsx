import { motion } from 'framer-motion';
import { Users, BookOpen, Award, Microscope, ChevronRight, Mail } from 'lucide-react';

const departments = [
  {
    code: 'CSE-AI',
    name: 'Artificial Intelligence',
    hod: 'Dr. [HOD Name]',
    faculty: 12,
    labs: 4,
    description: 'The AI Department focuses on cutting-edge research in machine learning, deep learning, natural language processing, and computer vision. Our state-of-the-art laboratories equipped with high-performance computing systems enable students to work on real-world AI projects.',
    vision: 'To be a globally recognized center of excellence in Artificial Intelligence education and research, producing innovative solutions for societal benefit.',
    mission: [
      'Provide world-class education in AI and ML',
      'Foster research in emerging AI technologies',
      'Collaborate with industry for practical applications',
      'Develop ethical AI solutions',
    ],
    color: 'from-purple-500 to-pink-500',
    icon: '🤖',
  },
  {
    code: 'CSE',
    name: 'Computer Engineering',
    hod: 'Dr. [HOD Name]',
    faculty: 15,
    labs: 5,
    description: 'The Computer Engineering Department offers comprehensive programs covering software engineering, computer architecture, networks, and cybersecurity. Our curriculum emphasizes practical skills through hands-on laboratory sessions and industry projects.',
    vision: 'To produce globally competent computer engineers who can drive technological innovation and contribute to the digital transformation of society.',
    mission: [
      'Deliver quality technical education',
      'Promote research and innovation',
      'Build industry partnerships',
      'Develop professional excellence',
    ],
    color: 'from-blue-500 to-cyan-500',
    icon: '💻',
  },
  {
    code: 'CIVIL',
    name: 'Civil Engineering',
    hod: 'Er. Afrah Ahsan',
    faculty: 14,
    labs: 6,
    description: 'Led by Er. Afrah Ahsan (Ph.D pursuing), the Civil Engineering Department focuses on sustainable infrastructure development. The department is equipped with modern surveying equipment, material testing labs, and structural analysis software.',
    vision: 'To establish a distinct identity by delivering high-quality technical education and producing globally competent Civil Engineers.',
    mission: [
      'Promote academic excellence in Civil Engineering',
      'Provide technical expertise for sustainable development',
      'Inculcate ethical and professional values',
      'Evolve as a Centre of Excellence in research',
    ],
    color: 'from-orange-500 to-red-500',
    icon: '🏗️',
  },
  {
    code: 'IT',
    name: 'Information Technology',
    hod: 'Dr. [HOD Name]',
    faculty: 10,
    labs: 4,
    description: 'The IT Department prepares students for the rapidly evolving digital landscape. With focus areas in web technologies, database management, and information security, graduates are well-equipped for diverse IT careers.',
    vision: 'To create IT professionals who can navigate the digital landscape and drive technological empowerment.',
    mission: [
      'Provide comprehensive IT education',
      'Foster innovation in software development',
      'Develop problem-solving skills',
      'Prepare industry-ready graduates',
    ],
    color: 'from-emerald-500 to-teal-500',
    icon: '🌐',
  },
  {
    code: 'ECE',
    name: 'Electronics & Communication',
    hod: 'Dr. [HOD Name]',
    faculty: 11,
    labs: 5,
    description: 'The ECE Department offers programs in electronics design, communication systems, signal processing, and embedded systems. Advanced laboratories support research in VLSI design, wireless communication, and IoT applications.',
    vision: 'To develop communication systems and electronic solutions driving global connectivity and innovation.',
    mission: [
      'Deliver excellence in ECE education',
      'Promote research in emerging technologies',
      'Develop practical skills through projects',
      'Foster industry collaboration',
    ],
    color: 'from-indigo-500 to-purple-500',
    icon: '📡',
  },
];

export default function Departments() {
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
            <span className="text-blue-400 font-medium">Academic Excellence</span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mt-4 mb-6">
              Our <span className="gradient-text">Departments</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Explore our specialized departments offering cutting-edge education in various 
              engineering disciplines, equipped with modern facilities and experienced faculty.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Departments List */}
      <section className="section bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-8">
            {departments.map((dept, index) => (
              <motion.div
                key={dept.code}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card rounded-2xl overflow-hidden"
              >
                {/* Header */}
                <div className={`h-1 bg-gradient-to-r ${dept.color}`} />
                <div className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                    {/* Left: Basic Info */}
                    <div className="lg:w-1/3">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${dept.color} flex items-center justify-center text-2xl`}>
                          {dept.icon}
                        </div>
                        <div>
                          <span className="text-gray-500 text-sm">{dept.code}</span>
                          <h2 className="text-2xl font-bold text-white">{dept.name}</h2>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-4 mb-6">
                        <div className="text-center p-3 rounded-xl bg-white/5">
                          <Users className="w-5 h-5 text-blue-400 mx-auto mb-1" />
                          <p className="text-white font-bold">{dept.faculty}</p>
                          <p className="text-gray-500 text-xs">Faculty</p>
                        </div>
                        <div className="text-center p-3 rounded-xl bg-white/5">
                          <Microscope className="w-5 h-5 text-emerald-400 mx-auto mb-1" />
                          <p className="text-white font-bold">{dept.labs}</p>
                          <p className="text-gray-500 text-xs">Labs</p>
                        </div>
                        <div className="text-center p-3 rounded-xl bg-white/5">
                          <Award className="w-5 h-5 text-purple-400 mx-auto mb-1" />
                          <p className="text-white font-bold">B.Tech</p>
                          <p className="text-gray-500 text-xs">Degree</p>
                        </div>
                      </div>

                      <div className="p-4 rounded-xl bg-white/5">
                        <p className="text-gray-400 text-sm mb-2">Head of Department</p>
                        <p className="text-white font-semibold">{dept.hod}</p>
                      </div>
                    </div>

                    {/* Right: Details */}
                    <div className="lg:w-2/3">
                      <p className="text-gray-400 mb-6 leading-relaxed">
                        {dept.description}
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20">
                          <h3 className="text-blue-400 font-semibold mb-2 flex items-center">
                            <BookOpen className="w-4 h-4 mr-2" />
                            Vision
                          </h3>
                          <p className="text-gray-400 text-sm">{dept.vision}</p>
                        </div>

                        <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                          <h3 className="text-emerald-400 font-semibold mb-2 flex items-center">
                            <Award className="w-4 h-4 mr-2" />
                            Key Mission Points
                          </h3>
                          <ul className="space-y-1">
                            {dept.mission.slice(0, 3).map((item, i) => (
                              <li key={i} className="text-gray-400 text-sm flex items-start">
                                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-1.5 mr-2 flex-shrink-0" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="mt-6 flex items-center space-x-4">
                        <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-xl text-white font-semibold hover:shadow-lg transition-all flex items-center space-x-2">
                          <span>View Details</span>
                          <ChevronRight className="w-5 h-5" />
                        </button>
                        <button className="px-6 py-3 border border-white/20 rounded-xl text-white hover:bg-white/5 transition-all flex items-center space-x-2">
                          <Mail className="w-5 h-5" />
                          <span>Contact HOD</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Research & Innovation */}
      <section className="section">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-8 md:p-12"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Research & Innovation
                </h2>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Our departments actively engage in cutting-edge research across various domains. 
                  From AI and machine learning applications to sustainable infrastructure development, 
                  our faculty and students are at the forefront of innovation.
                </p>
                <ul className="space-y-3">
                  {[
                    'Industry-sponsored research projects',
                    'National and international conferences',
                    'Patent filings and publications',
                    'Interdisciplinary collaborations',
                    'Innovation and incubation center',
                  ].map((item, index) => (
                    <li key={index} className="flex items-center space-x-3 text-gray-300">
                      <span className="w-2 h-2 bg-blue-400 rounded-full" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="glass-card rounded-xl p-6 text-center">
                  <p className="text-4xl font-bold gradient-text mb-2">50+</p>
                  <p className="text-gray-400 text-sm">Research Papers</p>
                </div>
                <div className="glass-card rounded-xl p-6 text-center">
                  <p className="text-4xl font-bold gradient-text mb-2">10+</p>
                  <p className="text-gray-400 text-sm">Patents Filed</p>
                </div>
                <div className="glass-card rounded-xl p-6 text-center">
                  <p className="text-4xl font-bold gradient-text mb-2">25+</p>
                  <p className="text-gray-400 text-sm">Industry Projects</p>
                </div>
                <div className="glass-card rounded-xl p-6 text-center">
                  <p className="text-4xl font-bold gradient-text mb-2">5</p>
                  <p className="text-gray-400 text-sm">Research Centers</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
