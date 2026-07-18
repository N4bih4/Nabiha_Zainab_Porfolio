import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';
import { Button } from '../ui/Button';
import emailjs from '@emailjs/browser';

const SERVICE_ID = 'service_tyqachz';
const TEMPLATE_ID = 'template_cy3akb2';
const PUBLIC_KEY = 'XOtqdHvR-DULloVvg';

export const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{type: 'success' | 'error', message: string} | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);
    
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        PUBLIC_KEY
      );
      setStatus({ type: 'success', message: 'Message sent successfully! I will get back to you soon.' });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      setStatus({ type: 'error', message: 'Failed to send message. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-slate-900/80">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Get In <span className="text-blue-500">Touch</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 space-y-8"
          >
            <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700 p-8 rounded-2xl h-full flex flex-col justify-center space-y-8">
              <h3 className="text-2xl font-bold text-white mb-4">Contact Information</h3>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center text-blue-500 shrink-0">
                  <FaEnvelope size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Email</p>
                  <a href="mailto:nabihazainabjutt@gmail.com" className="text-white hover:text-blue-400 transition-colors">nabihazainabjutt@gmail.com</a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center text-purple-500 shrink-0">
                  <FaPhone size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Phone</p>
                  <a href="tel:+923204821242" className="text-white hover:text-purple-400 transition-colors">0320-4821242</a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-cyan-500/10 rounded-full flex items-center justify-center text-cyan-500 shrink-0">
                  <FaMapMarkerAlt size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Location</p>
                  <p className="text-white">Lahore, Pakistan</p>
                </div>
              </div>

              <div className="pt-8 border-t border-slate-700/50 flex gap-4">
                <a href="https://www.linkedin.com/in/nabiha-zainab" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center text-slate-300 hover:text-white hover:bg-blue-600 transition-all border border-slate-700 hover:border-transparent">
                  <FaLinkedin size={18} />
                </a>
                <a href="https://github.com/N4bih4" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-700 transition-all border border-slate-700 hover:border-transparent">
                  <FaGithub size={18} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-[1.5]"
          >
            <form onSubmit={handleSubmit} className="bg-slate-800/40 backdrop-blur-sm border border-slate-700 p-8 rounded-2xl space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-300">Your Name</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all placeholder-slate-500"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-300">Your Email</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all placeholder-slate-500"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-slate-300">Subject</label>
                <input 
                  type="text" 
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all placeholder-slate-500"
                  placeholder="How can I help you?"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-300">Message</label>
                <textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all placeholder-slate-500 resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              {status && (
                <div className={`p-4 rounded-xl text-sm ${status.type === 'success' ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'}`}>
                  {status.message}
                </div>
              )}

              <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
