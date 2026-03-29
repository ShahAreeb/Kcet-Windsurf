import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  GraduationCap, 
  Users, 
  BookOpen, 
  Building2, 
  ChevronRight, 
  Star,
  CheckCircle2,
  Play,
  ArrowRight
} from 'lucide-react';

const programs = [
  {
    title: 'Artificial Intelligence',
    description: 'Master AI algorithms and neural networks to revolutionize industries.',
    icon: '🤖',
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Computer Engineering',
    description: 'Merge hardware and software skills for tech innovation.',
    icon: '💻',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Civil Engineering',
    description: 'Design infrastructure with sustainability focus.',
    icon: '🏗️',
    color: 'from-orange-500 to-red-500',
  },
  {
    title: 'IT Engineering',
    description: 'Navigate software and hardware for digital empowerment.',
    icon: '🌐',
    color: 'from-emerald-500 to-teal-500',
  },
  {
    title: 'Electronics & Communication',
    description: 'Develop communication systems for global connectivity.',
    icon: '📡',
    color: 'from-indigo-500 to-purple-500',
  },
];

const stats = [
  { value: '5', label: 'Engineering Programs', icon: BookOpen },
  { value: '50+', label: 'Expert Faculty', icon: Users },
  { value: '1000+', label: 'Students Enrolled', icon: GraduationCap },
  { value: '95%', label: 'Placement Rate', icon: Star },
];

const notifications = [
  {
    badge: 'New',
    title: 'MOU with Malla Reddy University',
    date: 'January 2026',
    link: '/admissions',
  },
  {
    badge: 'Admissions',
    title: 'Admissions Open for 2026',
    date: 'Register Now',
    link: '/admissions',
  },
  {
    badge: 'Event',
    title: 'AI Summit Workshop',
    date: 'January 2026',
    link: '/academics',
  },
];

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        
        {/* Hero Section - Zero Animation for Instant LCP */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20 hero-content">
          <div>
            <span className="inline-block px-4 py-2 rounded-full glass text-blue-400 text-sm font-medium mb-6">
              AICTE Approved Institution
            </span>
          </div>

          <h1 className="hero-title mb-6">
            <span className="text-white">Kashmir</span>
            <br />
            <span className="gradient-text glow-text">College of Engineering</span>
            <br />
            <span className="text-white">& Technology</span>
          </h1>

          <p className="hero-subtitle max-w-3xl mx-auto mb-10">
            Engineering Futures, Innovating Today. Located in the breathtaking Kashmir Valley,
            we provide world-class technical education with a commitment to excellence.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/admissions" className="btn-primary flex items-center space-x-2">
              <span>Apply Now</span>
              <ChevronRight className="w-5 h-5" />
            </Link>
            <button className="btn-outline flex items-center space-x-2">
              <Play className="w-5 h-5" />
              <span>Watch Campus Tour</span>
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* Programs Section */}
      <section className="section bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-blue-400 font-medium">Our Programs</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">
              Engineering Excellence
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Discover our diverse range of B.Tech programs designed to shape future engineers
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="glass-card rounded-2xl p-6 card-3d group"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${program.color} flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform`}>
                  {program.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{program.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{program.description}</p>
                <Link 
                  to="/academics" 
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 text-sm font-medium"
                >
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-emerald-600/20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-500/20 to-emerald-500/20 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-blue-400" />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">{stat.value}</div>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Notifications & About Section */}
      <section className="section">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* About Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="text-emerald-400 font-medium">Who We Are</span>
              <h2 className="text-4xl font-bold text-white mt-2 mb-6">
                Transforming Education in the Heart of Kashmir Valley
              </h2>
              <p className="text-gray-400 mb-6 leading-relaxed">
                KCET is dedicated to providing quality education and empowering local students by 
                offering professional courses in various engineering streams. Our founders, all 
                esteemed engineers, aim to bridge the gap that required students to travel to 
                other states for higher education.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  'AICTE Approved Institution',
                  'Modern Infrastructure & Labs',
                  'Experienced Faculty Team',
                  'Strong Industry Connections',
                  'Excellent Placement Record',
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    <span className="text-gray-300">{item}</span>
                  </motion.div>
                ))}
              </div>

              <Link to="/about" className="btn-primary inline-flex items-center space-x-2">
                <span>Learn More About Us</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>

            {/* Notifications Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse mr-3" />
                Latest Notifications
              </h3>
              
              <div className="space-y-4">
                {notifications.map((notification, index) => (
                  <motion.div
                    key={notification.title}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="inline-block px-2 py-1 rounded text-xs font-medium bg-blue-500/20 text-blue-400 mb-2">
                          {notification.badge}
                        </span>
                        <h4 className="text-white font-medium">{notification.title}</h4>
                        <p className="text-gray-400 text-sm">{notification.date}</p>
                      </div>
                      <ChevronRight className="w-5 h-5 text-gray-400" />
                    </div>
                  </motion.div>
                ))}
              </div>

              <Link 
                to="/admissions" 
                className="mt-6 block w-full py-3 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-xl text-center text-white font-semibold hover:shadow-lg transition-all"
              >
                Apply for Admission
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Campus Video Section */}
      <section className="section relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent z-10" />
          <div className="w-full h-full bg-gradient-to-br from-blue-900/30 to-emerald-900/30" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Experience Our Campus
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Take a virtual tour of our state-of-the-art facilities and beautiful campus
              nestled in the Kashmir Valley
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden max-w-4xl mx-auto"
            style={{ aspectRatio: '16/9', minHeight: '300px' }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-emerald-600/20" />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-all group">
                <Play className="w-8 h-8 text-white fill-white group-hover:scale-110 transition-transform" />
              </button>
            </div>
            <div className="absolute inset-0 border border-white/10 rounded-3xl" />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
