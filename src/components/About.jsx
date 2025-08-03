import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Lightbulb, Users, Rocket, Target } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { label: 'End-to-End Digital Solutions', icon: '⚙️' },
    { label: 'Results-Driven Marketing Approach', icon: '📈' },
    { label: 'Customized Strategies for Every Brand', icon: '🎯' },
    { label: 'Innovation-Focused Development', icon: '💡' }
  ];

  const features = [
    {
      icon: Lightbulb,
      title: 'Innovation First',
      description: 'We embrace cutting-edge technologies and creative solutions to solve complex problems.',
    },
    {
      icon: Users,
      title: 'Startup Agility',
      description: 'Fast decision-making and rapid iteration to deliver results quickly and efficiently.',
    },
    {
      icon: Rocket,
      title: 'Growth Focused',
      description: 'We build scalable solutions that grow with your business and adapt to changing needs.',
    },
    {
      icon: Target,
      title: 'Results Driven',
      description: 'Every project is measured by its impact and the value it brings to our clients.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            About <span className="text-indigo-600">Nimblix</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're a passionate startup on a mission to transform the digital landscape through innovative technology solutions.
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Story</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Founded by a team of passionate technologists, Nimblix Technologies emerged from the belief that 
              every great idea deserves exceptional execution. As a startup, we combine the energy and innovation 
              of a young company with the expertise and dedication of seasoned professionals.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We specialize in creating digital solutions that not only meet today's needs but anticipate 
              tomorrow's challenges. From AI-powered applications to scalable web platforms, we're building 
              the future, one line of code at a time.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="text-center p-4 bg-white rounded-lg shadow-sm"
                >
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-indigo-600" />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h4>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;