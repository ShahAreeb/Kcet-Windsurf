import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  Facebook,
  Instagram,
  Linkedin,
  GraduationCap,
  CheckCircle2
} from 'lucide-react';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Address',
    details: [
      'Kashmir College of Engineering & Technology',
      'Ranbirgarh, Srinagar',
      'Jammu and Kashmir 190001',
      'India',
    ],
    color: 'blue',
  },
  {
    icon: Phone,
    title: 'Phone',
    details: ['+91 9622161642', '+91 [Secondary Number]'],
    action: 'tel:+919622161642',
    color: 'emerald',
  },
  {
    icon: Mail,
    title: 'Email',
    details: ['info@kcet.edu.in', 'kcetsrinagar@gmail.com'],
    action: 'mailto:kcetsrinagar@gmail.com',
    color: 'purple',
  },
  {
    icon: Clock,
    title: 'Office Hours',
    details: ['Monday - Saturday', '9:00 AM - 5:00 PM', 'Sunday: Closed'],
    color: 'orange',
  },
];

const socialLinks = [
  { name: 'Facebook', icon: Facebook, url: 'https://www.facebook.com/kceat/', color: 'bg-blue-600' },
  { name: 'Instagram', icon: Instagram, url: 'https://www.instagram.com/kceatofficial/', color: 'bg-gradient-to-br from-purple-500 to-pink-500' },
  { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/company/102762812/admin/dashboard/', color: 'bg-blue-700' },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
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
            <span className="text-blue-400 font-medium">Get in Touch</span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mt-4 mb-6">
              Contact <span className="gradient-text">Us</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Have questions? We are here to help. Reach out to us for admissions inquiries, 
              general information, or to schedule a campus visit.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="section bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              const colors = {
                blue: 'from-blue-500 to-cyan-500',
                emerald: 'from-emerald-500 to-teal-500',
                purple: 'from-purple-500 to-pink-500',
                orange: 'from-orange-500 to-red-500',
              };
              return (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card rounded-2xl p-6 text-center hover:scale-105 transition-transform"
                >
                  <div className={`w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${colors[info.color]} flex items-center justify-center`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{info.title}</h3>
                  <div className="space-y-1">
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-gray-400 text-sm">
                        {info.action ? (
                          <a 
                            href={info.action} 
                            className="hover:text-blue-400 transition-colors"
                          >
                            {detail}
                          </a>
                        ) : (
                          detail
                        )}
                      </p>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="section">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8"
            >
              <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
              
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-8 h-8 text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Thank You!</h3>
                  <p className="text-gray-400 text-center">
                    Your message has been received. We will get back to you soon.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-400 text-sm mb-2">Full Name *</label>
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
                      <label className="block text-gray-400 text-sm mb-2">Email *</label>
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
                        className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-white/10 text-white focus:outline-none focus:border-blue-500 transition-colors"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-gray-400 text-sm mb-2">Subject *</label>
                      <select
                        required
                        className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-white/10 text-white focus:outline-none focus:border-blue-500 transition-colors"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      >
                        <option value="">Select Subject</option>
                        <option value="admission">Admission Inquiry</option>
                        <option value="course">Course Information</option>
                        <option value="tour">Campus Tour</option>
                        <option value="placement">Placement Query</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-400 text-sm mb-2">Message *</label>
                    <textarea
                      rows={5}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-white/10 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
                      placeholder="Your message..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-primary flex items-center justify-center space-x-2"
                  >
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </motion.div>

            {/* Map & Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Map Placeholder */}
              <div className="glass-card rounded-2xl overflow-hidden h-80">
                <div className="w-full h-full bg-slate-800 flex items-center justify-center relative">
                  <div className="absolute inset-0 grid-pattern opacity-30" />
                  <div className="text-center z-10">
                    <MapPin className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                    <p className="text-white font-semibold mb-2">KCET Campus</p>
                    <p className="text-gray-400 text-sm">Ranbirgarh, Srinagar</p>
                    <a 
                      href="https://maps.google.com/?q=KCET+Srinagar" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-block mt-4 px-4 py-2 bg-blue-500/20 text-blue-400 rounded-lg text-sm hover:bg-blue-500/30 transition-colors"
                    >
                      Open in Google Maps
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="glass-card rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-12 h-12 rounded-xl ${social.color} flex items-center justify-center text-white hover:scale-110 transition-transform`}
                        aria-label={social.name}
                      >
                        <Icon className="w-5 h-5" />
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="glass-card rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <a 
                    href="/admissions" 
                    className="flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <GraduationCap className="w-5 h-5 text-blue-400" />
                      <span className="text-gray-300">Apply for Admission</span>
                    </div>
                    <span className="text-blue-400">→</span>
                  </a>
                  <a 
                    href="tel:+919622161642" 
                    className="flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-emerald-400" />
                      <span className="text-gray-300">Call Us Now</span>
                    </div>
                    <span className="text-emerald-400">+91 9622161642</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ CTA */}
      <section className="section bg-slate-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-8 md:p-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Have More Questions?</h2>
            <p className="text-gray-400 mb-8">
              Check out our frequently asked questions section for quick answers to common queries 
              about admissions, programs, campus life, and more.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="btn-primary">
                View FAQs
              </button>
              <a href="tel:+919622161642" className="btn-outline">
                Call Admissions Office
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
