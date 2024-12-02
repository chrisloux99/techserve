import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Building, Users, Award, Globe } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-blue-900 to-green-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">About TechServe</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Established in 2003, TechServe Technology Services Limited has grown into a major advanced
            technology solution provider in Zambia, focusing on delivering cutting-edge IT solutions
            and professional services.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <StatsCard
            icon={Building}
            number="20+"
            text="Years Experience"
            delay={0}
          />
          <StatsCard
            icon={Users}
            number="1000+"
            text="Satisfied Clients"
            delay={0.2}
          />
          <StatsCard
            icon={Award}
            number="50+"
            text="IT Solutions"
            delay={0.4}
          />
          <StatsCard
            icon={Globe}
            number="over 10"
            text="Global Partners"
            delay={0.6}
          />
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white/5 backdrop-blur-lg p-8 rounded-xl"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
            <p className="text-gray-300">
              To provide innovative and reliable technology solutions that empower businesses
              to achieve their full potential through digital transformation and technological excellence.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white/5 backdrop-blur-lg p-8 rounded-xl"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
            <p className="text-gray-300">
              To be the leading technology solutions provider in Africa, known for excellence,
              innovation, and commitment to customer success.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const StatsCard = ({ icon: Icon, number, text, delay }: any) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay }}
      className="bg-white/5 backdrop-blur-lg p-6 rounded-xl text-center"
    >
      <Icon className="h-12 w-12 text-green-500 mx-auto mb-4" />
      <div className="text-3xl font-bold text-white mb-2">{number}</div>
      <div className="text-gray-300">{text}</div>
    </motion.div>
  );
};

export default About;