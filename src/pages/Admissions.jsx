import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, 
  FileText, 
  Calendar, 
  Users, 
  GraduationCap, 
  Clock,
  ChevronRight,
  AlertCircle,
  Download
} from 'lucide-react';

const eligibilityCriteria = [
  'Passed 10+2 examination with Physics and Mathematics as compulsory subjects',
  'Chemistry/Biotechnology/Biology/Technical Vocational subject as optional',
  'Minimum 45% marks in aggregate (40% for reserved categories)',
  'Valid JEE Main score or state-level entrance examination',
  'Domicile certificate for state quota seats',
];

const admissionSteps = [
  {
    step: 1,
    title: 'Online Application',
    description: 'Fill out the online application form with your personal and academic details.',
    icon: FileText,
  },
  {
    step: 2,
    title: 'Document Upload',
    description: 'Upload required documents including marksheets, certificates, and photographs.',
    icon: Download,
  },
  {
    step: 3,
    title: 'Entrance Exam',
    description: 'Appear for JEE Main or state-level entrance examination.',
    icon: GraduationCap,
  },
  {
    step: 4,
    title: 'Counseling',
    description: 'Participate in counseling process for seat allocation.',
    icon: Users,
  },
  {
    step: 5,
    title: 'Fee Payment',
    description: 'Pay the admission fees to confirm your seat.',
    icon: CheckCircle2,
  },
];

const importantDates = [
  { event: 'Application Start', date: 'January 2026', status: 'Open' },
  { event: 'Last Date to Apply', date: 'April 30, 2026', status: 'Upcoming' },
  { event: 'Entrance Exam', date: 'May 2026', status: 'Upcoming' },
  { event: 'Results Declaration', date: 'June 2026', status: 'Upcoming' },
  { event: 'Counseling Starts', date: 'July 2026', status: 'Upcoming' },
  { event: 'Classes Begin', date: 'August 2026', status: 'Upcoming' },
];

const fees = [
  { item: 'Tuition Fee (per year)', amount: '₹75,000' },
  { item: 'Development Fee', amount: '₹10,000' },
  { item: 'Caution Deposit (refundable)', amount: '₹10,000' },
  { item: 'Library Fee', amount: '₹2,000' },
  { item: 'Laboratory Fee', amount: '₹5,000' },
  { item: 'Examination Fee (per semester)', amount: '₹1,500' },
];

export default function Admissions() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your interest! We will contact you soon.');
  };

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
            <span className="inline-block px-4 py-2 rounded-full glass text-emerald-400 text-sm font-medium mb-6">
              Admissions Open 2026
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mt-4 mb-6">
              Begin Your <span className="gradient-text">Journey</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Join KCET and transform your future with world-class engineering education. 
              Applications are now open for the 2026 batch.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="section bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Important Dates</h2>
            <p className="text-gray-400">Stay updated with the admission schedule</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {importantDates.map((item, index) => (
              <motion.div
                key={item.event}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card rounded-xl p-4 text-center"
              >
                <Calendar className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                <p className="text-white text-sm font-medium mb-1">{item.event}</p>
                <p className="text-gray-400 text-xs">{item.date}</p>
                <span className={`inline-block mt-2 px-2 py-1 rounded text-xs ${
                  item.status === 'Open' 
                    ? 'bg-emerald-500/20 text-emerald-400' 
                    : 'bg-blue-500/20 text-blue-400'
                }`}>
                  {item.status}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="section">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Admission Process</h2>
            <p className="text-gray-400">Simple 5-step process to join KCET</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {admissionSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="glass-card rounded-2xl p-6 h-full">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center mb-4">
                      <span className="text-white font-bold">{step.step}</span>
                    </div>
                    <Icon className="w-6 h-6 text-blue-400 mb-3" />
                    <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-gray-400 text-sm">{step.description}</p>
                  </div>
                  {index < admissionSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                      <ChevronRight className="w-6 h-6 text-gray-600" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Eligibility & Fees */}
      <section className="section bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Eligibility */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <AlertCircle className="w-6 h-6 text-blue-400 mr-3" />
                Eligibility Criteria
              </h3>
              <ul className="space-y-4">
                {eligibilityCriteria.map((criterion, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-400">{criterion}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Fee Structure */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Fee Structure</h3>
              <div className="space-y-4">
                {fees.map((fee, index) => (
                  <div
                    key={fee.item}
                    className="flex items-center justify-between py-3 border-b border-white/10 last:border-0"
                  >
                    <span className="text-gray-400">{fee.item}</span>
                    <span className="text-white font-semibold">{fee.amount}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-blue-500/10 rounded-xl">
                <p className="text-blue-400 text-sm">
                  <strong>Note:</strong> Scholarships available for meritorious students and reserved categories.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="section">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-8"
          >
            <h2 className="text-3xl font-bold text-white mb-2 text-center">Admission Enquiry</h2>
            <p className="text-gray-400 text-center mb-8">
              Fill out the form below and our team will contact you
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Full Name</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-white/10 text-white focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Email</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-white/10 text-white focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Phone</label>
                  <input
                    type="tel"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-white/10 text-white focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Interested Program</label>
                  <select
                    required
                    className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-white/10 text-white focus:outline-none focus:border-blue-500 transition-colors"
                    value={formData.program}
                    onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                  >
                    <option value="">Select Program</option>
                    <option value="ai">B.Tech AI Engineering</option>
                    <option value="cse">B.Tech Computer Engineering</option>
                    <option value="civil">B.Tech Civil Engineering</option>
                    <option value="it">B.Tech IT Engineering</option>
                    <option value="ece">B.Tech E&C Engineering</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-gray-400 text-sm mb-2">Message (Optional)</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-white/10 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  placeholder="Your message..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <button type="submit" className="w-full btn-primary">
                Submit Enquiry
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
