import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';

const Portfolio = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Apps' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'ai', label: 'AI/ML' },
    { id: 'startup', label: 'Startup Tools' },
  ];

  const projects = [
    {
      id: 1,
      title: 'EcoTrack - Sustainability Platform',
      description: 'A comprehensive platform helping startups track and reduce their carbon footprint with AI-powered insights.',
      image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'web',
      technologies: ['React', 'Node.js', 'MongoDB', 'AI'],
      featured: true,
    },
    {
      id: 2,
      title: 'FinFlow - Mobile Banking',
      description: 'Secure mobile banking app with biometric authentication and real-time transaction monitoring.',
      image: 'https://images.pexels.com/photos/4386476/pexels-photo-4386476.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'mobile',
      technologies: ['React Native', 'Firebase', 'Blockchain'],
      featured: true,
    },
    {
      id: 3,
      title: 'SmartAnalytics Dashboard',
      description: 'AI-powered business intelligence platform providing real-time insights and predictive analytics.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'ai',
      technologies: ['Python', 'TensorFlow', 'React', 'D3.js'],
      featured: false,
    },
    {
      id: 4,
      title: 'StartupHub - Collaboration Tool',
      description: 'All-in-one workspace for startup teams with project management, communication, and file sharing.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'startup',
      technologies: ['Vue.js', 'Express', 'Socket.io', 'AWS'],
      featured: false,
    },
    {
      id: 5,
      title: 'HealthConnect Telemedicine',
      description: 'Telemedicine platform connecting patients with healthcare providers through secure video consultations.',
      image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'web',
      technologies: ['React', 'WebRTC', 'Node.js', 'PostgreSQL'],
      featured: false,
    },
    {
      id: 6,
      title: 'FoodieAI - Recipe Generator',
      description: 'AI-powered mobile app that generates personalized recipes based on dietary preferences and available ingredients.',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'mobile',
      technologies: ['Flutter', 'Python', 'OpenAI', 'Firebase'],
      featured: false,
    },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Portfolio</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcasing innovative solutions we've built for startups and growing businesses.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-indigo-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ${
                project.featured ? 'md:col-span-2 lg:col-span-2' : ''
              }`}
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className={`w-full object-cover group-hover:scale-110 transition-transform duration-500 ${
                    project.featured ? 'h-64' : 'h-48'
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Overlay Actions */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-4">
                    <button className="p-3 bg-white/90 rounded-full hover:bg-white transition-colors duration-200">
                      <ExternalLink className="h-5 w-5 text-gray-900" />
                    </button>
                    <button className="p-3 bg-white/90 rounded-full hover:bg-white transition-colors duration-200">
                      <Github className="h-5 w-5 text-gray-900" />
                    </button>
                  </div>
                </div>

                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-indigo-600 text-white text-sm font-medium rounded-full">
                      Featured
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-6">
            Interested in seeing more of our work or discussing your project?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-indigo-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-indigo-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
          >
            Let's Work Together
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;