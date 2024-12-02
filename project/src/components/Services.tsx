import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shield, Server, Network, Code, Cloud, Lock, Cpu, Phone, Wrench, X } from 'lucide-react';

const services = [
  {
    icon: Shield,
    title: 'Cyber Security',
    description: 'Advanced security solutions including network protection, malware prevention, and DDoS protection.',
    details: `Our comprehensive cybersecurity solutions protect your business from evolving digital threats. Services include:
    • Network Security Assessment and Monitoring
    • Firewall Configuration and Management
    • Endpoint Protection Solutions
    • Security Awareness Training
    • Incident Response Planning
    • Regular Security Audits
    • Data Encryption Services
    • 24/7 Security Monitoring`
  },
  {
    icon: Network,
    title: 'Network Solutions',
    description: 'Complete networking solutions including LAN/WAN design and implementation.',
    details: `Expert network infrastructure solutions tailored to your business needs:
    • Network Design and Architecture
    • LAN/WAN Implementation
    • Network Performance Optimization
    • Wireless Network Solutions
    • Network Security Integration
    • Remote Access Solutions
    • Network Monitoring and Maintenance
    • Scalable Network Planning`
  },
  {
    icon: Wrench,
    title: 'Engineering Services',
    description: 'We offer all sorts of Engineering services, from software development to Internet of Things solutions.',
    details: `Our Engineering solutions span around a multitude of solutions:
    • Software Development
    • Emerging Technologies Consultancy
    • UPS & Inverter Solutions
    • Energy & Power Solutions
    • Microwave Solutions
    • Access Cards & RFID Solutions
    • IoT Implementation
    • System Integration`
  },
  {
    icon: Server,
    title: 'IT Infrastructure',
    description: 'Complete IT infrastructure setup and management solutions.',
    details: `Comprehensive IT infrastructure services:
    • Data Center Design and Implementation
    • Server Setup and Configuration
    • Cloud Infrastructure Management
    • Storage Solutions
    • Backup and Recovery Systems
    • Infrastructure Monitoring
    • Scalability Planning
    • Disaster Recovery Solutions`
  }
];

const ServiceModal = ({ service, onClose }: any) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
    onClick={onClose}
  >
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.9, opacity: 0 }}
      className="bg-gray-900 p-6 rounded-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto"
      onClick={e => e.stopPropagation()}
    >
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-3">
          <service.icon className="h-8 w-8 text-green-500" />
          <h3 className="text-2xl font-bold text-white">{service.title}</h3>
        </div>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-white transition-colors"
        >
          <X className="h-6 w-6" />
        </button>
      </div>
      <div className="text-gray-300 whitespace-pre-line">
        {service.details}
      </div>
    </motion.div>
  </motion.div>
);

const ServiceCard = ({ icon: Icon, title, description, details }: any) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="bg-white/5 backdrop-blur-lg p-6 rounded-xl hover:bg-white/10 transition-all cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <Icon className="h-12 w-12 text-green-500 mb-4" />
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </motion.div>

      <AnimatePresence>
        {isModalOpen && (
          <ServiceModal
            service={{ icon: Icon, title, details }}
            onClose={() => setIsModalOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-black to-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Comprehensive IT solutions tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;