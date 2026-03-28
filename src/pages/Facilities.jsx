import { motion } from 'framer-motion';
import { 
  Building2, 
  BookOpen, 
  Bus, 
  Wifi, 
  Users, 
  HeartPulse, 
  Monitor, 
  ShieldCheck,
  Dumbbell,
  Coffee,
  Car,
  Video,
  CheckCircle2,
  Microscope
} from 'lucide-react';

const facilities = [
  {
    icon: BookOpen,
    title: 'Library',
    description: 'Spacious, well-stocked library with digital resources, journals, and reference materials covering all engineering disciplines.',
    features: ['10,000+ Books', 'Digital Library Access', 'E-Journals & Research Papers', 'Quiet Study Areas', '24/7 Digital Access'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Monitor,
    title: 'Computer Center',
    description: 'State-of-the-art computer labs equipped with latest hardware and software for all engineering programs.',
    features: ['200+ Workstations', 'High-Speed Internet', 'Latest Software', 'Programming Labs', 'Project Workstations'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Building2,
    title: 'Smart Classrooms',
    description: 'Modern classrooms equipped with interactive displays, projectors, and advanced audio-visual systems.',
    features: ['Interactive Displays', 'Projectors & AV Systems', 'Air Conditioned', 'Ergonomic Seating', 'High-Speed WiFi'],
    color: 'from-emerald-500 to-teal-500',
  },
  {
    icon: Microscope,
    title: 'Laboratories',
    description: 'Well-equipped laboratories for practical training in all engineering disciplines with modern equipment.',
    features: ['AI & ML Lab', 'Network Security Lab', 'Structural Lab', 'Electronics Lab', 'IoT Lab'],
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: Wifi,
    title: 'High-Speed Internet',
    description: 'Campus-wide high-speed WiFi connectivity enabling seamless access to digital resources and online learning.',
    features: ['1 Gbps Bandwidth', 'Campus-wide Coverage', 'Secure Network', '24/7 Connectivity', 'E-Learning Support'],
    color: 'from-indigo-500 to-purple-500',
  },
  {
    icon: Users,
    title: 'Multipurpose Hall',
    description: 'Large auditorium for seminars, workshops, cultural events, and guest lectures with modern amenities.',
    features: ['500+ Seating Capacity', 'Stage & AV Systems', 'Air Conditioned', 'Conference Setup', 'Video Conferencing'],
    color: 'from-pink-500 to-rose-500',
  },
  {
    icon: Dumbbell,
    title: 'Sports Facilities',
    description: 'Comprehensive sports facilities including indoor and outdoor options for physical fitness and recreation.',
    features: ['Indoor Sports Complex', 'Outdoor Grounds', 'Cricket & Football', 'Basketball Court', 'Gymnasium'],
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Coffee,
    title: 'Cafeteria',
    description: 'Spacious cafeteria serving nutritious meals and refreshments in a hygienic environment.',
    features: ['Hygienic Kitchen', 'Variety of Cuisines', 'Spacious Seating', 'Affordable Pricing', 'Fresh Ingredients'],
    color: 'from-yellow-500 to-orange-500',
  },
  {
    icon: Bus,
    title: 'Transport Facility',
    description: 'College buses covering major routes in Srinagar and surrounding areas for convenient commuting.',
    features: ['Multiple Routes', 'Air-Conditioned Buses', 'GPS Tracking', 'Safe Transport', 'Affordable Fares'],
    color: 'from-cyan-500 to-blue-500',
  },
  {
    icon: Car,
    title: 'Spacious Parking',
    description: 'Ample parking space for students and staff with designated areas for two-wheelers and four-wheelers.',
    features: ['Student Parking', 'Staff Parking', 'Visitor Parking', 'Security Surveillance', 'Well-lit Areas'],
    color: 'from-gray-500 to-slate-500',
  },
  {
    icon: HeartPulse,
    title: 'Medical Room',
    description: 'On-campus medical facility with qualified staff for immediate healthcare needs and first aid.',
    features: ['Qualified Nurse', 'First Aid Kit', 'Emergency Response', 'Regular Checkups', 'Health Records'],
    color: 'from-red-500 to-pink-500',
  },
  {
    icon: ShieldCheck,
    title: 'Safety & Security',
    description: 'Comprehensive security measures including CCTV surveillance and fire safety systems across campus.',
    features: ['CCTV Monitoring', 'Fire Safety Systems', 'Security Guards', 'Access Control', 'Emergency Exits'],
    color: 'from-slate-500 to-gray-500',
  },
];

const safetyFeatures = [
  'Fire safety measures on all floors',
  'CCTV monitoring across campus',
  'Ramps and lifts for accessibility',
  '24/7 security personnel',
  'Emergency response protocols',
  'Well-lit pathways and corridors',
];

export default function Facilities() {
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
            <span className="text-blue-400 font-medium">Campus Life</span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mt-4 mb-6">
              World-Class <span className="gradient-text">Facilities</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Experience a comprehensive learning environment with state-of-the-art infrastructure 
              designed to support your academic journey and personal growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="section bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((facility, index) => {
              const Icon = facility.icon;
              return (
                <motion.div
                  key={facility.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="glass-card rounded-2xl overflow-hidden group"
                >
                  <div className={`h-1 bg-gradient-to-r ${facility.color}`} />
                  <div className="p-6">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${facility.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{facility.title}</h3>
                    <p className="text-gray-400 text-sm mb-4">{facility.description}</p>
                    <ul className="space-y-2">
                      {facility.features.map((feature, i) => (
                        <li key={i} className="flex items-center space-x-2 text-sm text-gray-500">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Safety & Security */}
      <section className="section">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="text-emerald-400 font-medium">Your Safety Matters</span>
              <h2 className="text-4xl font-bold text-white mt-2 mb-6">
                Safety & Security Measures
              </h2>
              <p className="text-gray-400 mb-6 leading-relaxed">
                At KCET, we prioritize the safety and well-being of our students and staff. 
                Our campus is equipped with comprehensive security measures and safety protocols 
                to ensure a secure learning environment.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {safetyFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <ShieldCheck className="w-5 h-5 text-emerald-400" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Campus Security Stats</h3>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                      <Video className="w-5 h-5 text-blue-400" />
                    </div>
                    <span className="text-gray-300">CCTV Cameras</span>
                  </div>
                  <span className="text-white font-bold">50+</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: '100%' }} />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                      <ShieldCheck className="w-5 h-5 text-emerald-400" />
                    </div>
                    <span className="text-gray-300">Security Personnel</span>
                  </div>
                  <span className="text-white font-bold">24/7</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '100%' }} />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center">
                      <HeartPulse className="w-5 h-5 text-orange-400" />
                    </div>
                    <span className="text-gray-300">Emergency Response</span>
                  </div>
                  <span className="text-white font-bold">&lt; 5 min</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <div className="bg-orange-500 h-2 rounded-full" style={{ width: '90%' }} />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Hostel Information */}
      <section className="section bg-slate-900/50">
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
                <span className="text-purple-400 font-medium">Accommodation</span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-6">
                  Hostel Facilities
                </h2>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Comfortable and secure hostel accommodation is available for students with 
                  all modern amenities. Separate hostels for boys and girls with wardens ensure 
                  a safe and conducive environment for living and learning.
                </p>
                <ul className="space-y-3">
                  {[
                    'Spacious, well-ventilated rooms',
                    'WiFi connectivity in all rooms',
                    'Common room with TV and indoor games',
                    'Mess facility with nutritious meals',
                    '24/7 security and warden supervision',
                    'Laundry and housekeeping services',
                  ].map((item, index) => (
                    <li key={index} className="flex items-center space-x-3 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-purple-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="glass-card rounded-xl p-6 text-center">
                  <p className="text-4xl font-bold gradient-text mb-2">200+</p>
                  <p className="text-gray-400 text-sm">Hostel Capacity</p>
                </div>
                <div className="glass-card rounded-xl p-6 text-center">
                  <p className="text-4xl font-bold gradient-text mb-2">24/7</p>
                  <p className="text-gray-400 text-sm">Security</p>
                </div>
                <div className="glass-card rounded-xl p-6 text-center">
                  <p className="text-4xl font-bold gradient-text mb-2">3</p>
                  <p className="text-gray-400 text-sm">Meals Daily</p>
                </div>
                <div className="glass-card rounded-xl p-6 text-center">
                  <p className="text-4xl font-bold gradient-text mb-2">100%</p>
                  <p className="text-gray-400 text-sm">WiFi Coverage</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Schedule a Campus Tour
            </h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Visit our campus and experience our world-class facilities firsthand. 
              Schedule a guided tour with our admissions team.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="/contact" className="btn-primary">
                Book a Tour
              </a>
              <button className="btn-outline">
                Virtual Tour
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
