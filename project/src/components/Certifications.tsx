import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, CheckCircle } from 'lucide-react';

const certificates = [
  {
    title: "Certificate of Incorporation",
    description: "Registered as a Private Company Limited by Shares in Zambia",
    date: "May 29th, 2003",
    issuer: "Republic of Zambia",
    regNo: "2957"
  },
  {
    title: "Engineering Practising Certificate",
    description: "Authorized to practice Electrical/Electronic Engineering in Zambia",
    date: "September 1st, 2022",
    issuer: "The Engineering Registration Board",
    regNo: "611002202009415"
  },
  {
    title: "Tax Registration Certificate",
    description: "Registered with Zambia Revenue Authority",
    date: "April 29th, 2003",
    issuer: "Zambia Revenue Authority",
    regNo: "1001740264"
  },
  {
    title: "General Tax Clearance Certificate",
    description: "Valid tax clearance for conducting business operations",
    date: "Valid until December 31st, 2024",
    issuer: "Zambia Revenue Authority",
    regNo: "2367437832"
  }
];

const CertificationCard = ({ title, description, date, issuer, regNo }: any) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="bg-white/5 backdrop-blur-lg p-6 rounded-xl hover:bg-white/10 transition-all"
    >
      <div className="flex items-start gap-4">
        <div className="bg-green-500/10 p-3 rounded-lg">
          <CheckCircle className="h-6 w-6 text-green-500" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
          <p className="text-gray-300 mb-2">{description}</p>
          <div className="space-y-1 text-sm text-gray-400">
            <p>Issued by: {issuer}</p>
            <p>Date: {date}</p>
            <p>Registration No: {regNo}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Certifications = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="certifications" className="py-20 bg-gradient-to-b from-green-900 to-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-4">
            <Award className="h-12 w-12 text-green-500" />
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">Our Certifications</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We maintain the highest standards of professional certification and compliance
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificates.map((cert, index) => (
            <CertificationCard key={index} {...cert} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;