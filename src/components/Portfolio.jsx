// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import { ExternalLink, Github } from 'lucide-react';

// const Portfolio = () => {
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });
//   const [activeFilter, setActiveFilter] = useState('all');
//   const [hoveredProject, setHoveredProject] = useState(null);
  
//   const filters = [
//     { id: 'all', label: 'All Projects' },
//     { id: 'web', label: 'Web Apps' },
//     { id: 'mobile', label: 'Mobile' },
//     { id: 'ai', label: 'AI/ML' },
//     { id: 'startup', label: 'Startup Tools' },
//   ];
  
//   const projects = [
//     {
//       id: 1,
//       title: 'EcoTrack - Sustainability Platform',
//       description: 'A comprehensive platform helping startups track and reduce their carbon footprint with AI-powered insights.',
//       image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800',
//       category: 'web',
//       technologies: ['React', 'Node.js', 'MongoDB', 'AI'],
//       featured: true,
//     },
//     {
//       id: 2,
//       title: 'FinFlow - Mobile Banking',
//       description: 'Secure mobile banking app with biometric authentication and real-time transaction monitoring.',
//       image: 'https://images.pexels.com/photos/4386476/pexels-photo-4386476.jpeg?auto=compress&cs=tinysrgb&w=800',
//       category: 'mobile',
//       technologies: ['React Native','Java', 'Firebase', 'Blockchain'],
//       featured: true,
//     },
//     {
//       id: 3,
//       title: 'SmartAnalytics Dashboard',
//       description: 'AI-powered business intelligence platform providing real-time insights and predictive analytics.',
//       image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
//       category: 'ai',
//       technologies: ['Python', 'TensorFlow', 'React', 'D3.js'],
//       featured: false,
//     },
//     {
//       id: 4,
//       title: 'StartupHub - Collaboration Tool',
//       description: 'All-in-one workspace for startup teams with project management, communication, and file sharing.',
//       image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
//       category: 'startup',
//       technologies: ['Vue.js', 'Express','Java', 'Socket.io', 'AWS'],
//       featured: false,
//     },
//     {
//       id: 5,
//       title: 'HealthConnect Telemedicine',
//       description: 'Telemedicine platform connecting patients with healthcare providers through secure video consultations.',
//       image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800',
//       category: 'web',
//       technologies: ['React', 'WebRTC', 'Node.js','Java', 'PostgreSQL'],
//       featured: false,
//     },
//     {
//       id: 6,
//       title: 'FoodieAI - Recipe Generator',
//       description: 'AI-powered mobile app that generates personalized recipes based on dietary preferences and available ingredients.',
//       image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
//       category: 'mobile',
//       technologies: ['Flutter', 'Python','Java', 'OpenAI', 'Firebase'],
//       featured: false,
//     },
//   ];
  
//   const filteredProjects = activeFilter === 'all' 
//     ? projects 
//     : projects.filter(project => project.category === activeFilter);
    
//   return (
//     <section id="portfolio" className="py-20 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           ref={ref}
//           initial={{ opacity: 0, y: 50 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Portfolio</h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Showcasing innovative solutions we've built for startups and growing businesses.
//           </p>
//         </motion.div>
        
//         {/* Filter Buttons */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           className="flex flex-wrap justify-center gap-4 mb-12"
//         >
//           {filters.map((filter) => (
//             <button
//               key={filter.id}
//               onClick={() => setActiveFilter(filter.id)}
//               className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
//                 activeFilter === filter.id
//                   ? 'bg-indigo-600 text-white shadow-lg'
//                   : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
//               }`}
//             >
//               {filter.label}
//             </button>
//           ))}
//         </motion.div>
        
//         {/* Projects Grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {filteredProjects.map((project, index) => (
//             <motion.div
//               key={project.id}
//               initial={{ opacity: 0, y: 50 }}
//               animate={inView ? { opacity: 1, y: 0 } : {}}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//               className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
//               onMouseEnter={() => setHoveredProject(project.id)}
//               onMouseLeave={() => setHoveredProject(null)}
//             >
//               {/* Image with Title Overlay */}
//               <div className="relative h-64 w-full aspect-square">
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="w-full h-full object-cover"
//                 />
                
//                 {/* Title Overlay - Always Visible */}
//                 <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
//                   <h3 className="text-xl font-bold text-white">
//                     {project.title}
//                   </h3>
//                 </div>
                
//                 {/* Featured Badge */}
//                 {project.featured && (
//                   <div className="absolute top-4 left-4">
//                     <span className="px-3 py-1 bg-indigo-600 text-white text-sm font-medium rounded-full">
//                       Featured
//                     </span>
//                   </div>
//                 )}
                
//                 {/* Hover Overlay - Shows Details */}
//                 <div 
//                   className={`absolute inset-0 bg-black/80 flex flex-col justify-between p-6 transition-opacity duration-300 ${
//                     hoveredProject === project.id ? 'opacity-100' : 'opacity-0 pointer-events-none'
//                   }`}
//                 >
//                   <div>
//                     <h3 className="text-xl font-bold text-white mb-3">
//                       {project.title}
//                     </h3>
//                     <p className="text-gray-200 mb-4 leading-relaxed">
//                       {project.description}
//                     </p>
//                   </div>
                  
//                   <div>
//                     {/* Technologies */}
//                     <div className="flex flex-wrap gap-2 mb-6">
//                       {project.technologies.map((tech, techIndex) => (
//                         <span
//                           key={techIndex}
//                           className="px-3 py-1 bg-indigo-900/50 text-indigo-200 text-sm rounded-full font-medium"
//                         >
//                           {tech}
//                         </span>
//                       ))}
//                     </div>
                    
//                     {/* Action Buttons */}
//                     <div className="flex space-x-4">
//                       <button className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-200">
//                         <ExternalLink className="h-5 w-5 text-white" />
//                       </button>
//                       <button className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-200">
//                         <Github className="h-5 w-5 text-white" />
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Portfolio;


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
  const [hoveredProject, setHoveredProject] = useState(null);

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'product', label: 'Product Development' },
    { id: 'uiux', label: 'UI/UX & Design' },
    { id: 'backend', label: 'Backend & DevOps' },
    { id: 'web', label: 'Web & Marketing' },
    { id: 'booth', label: 'Booth Rental' },
  ];

  const projects = [
    {
      id: 1,
      title: 'EventSphere - Booking Platform',
      description: 'A dynamic web and mobile platform for event management with real-time booth availability and booking.',
      image: 'https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'booth',
      technologies: ['React', 'Node.js', 'BoothBook', 'Stripe'],
      featured: true,
    },
    {
      id: 2,
      title: 'ShopSync - E-Commerce App',
      description: 'A scalable e-commerce application with seamless payment integration and responsive design.',
      image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'product',
      technologies: ['React', 'Next.js', 'Node.js', 'Stripe'],
      featured: true,
    },
    {
      id: 3,
      title: 'Design-pro - UI/UX Suite',
      description: 'A collaborative design platform for creating wireframes, prototypes, and high-fidelity mockups.',
      image: 'https://images.pexels.com/photos/196655/pexels-photo-196655.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'uiux',
      technologies: ['Figma', 'Sketch', 'Adobe XD', 'Prototyping'],
      featured: false,
    },
    {
      id: 4,
      title: 'CloudCore - Infrastructure Management',
      description: 'A robust DevOps solution for managing cloud deployments with CI/CD pipelines and containerization.',
      image: 'https://images.pexels.com/photos/171198/pexels-photo-171198.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'backend',
      technologies: ['AWS', 'Docker', 'Kubernetes', 'Jenkins'],
      featured: false,
    },
    {
      id: 5,
      title: 'GrowEasy - Marketing Hub',
      description: 'A marketing platform with SEO-optimized landing pages and performance analytics for startups.',
      image: 'https://images.pexels.com/photos/669996/pexels-photo-669996.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'web',
      technologies: ['WordPress', 'SEO', 'Google Analytics', 'Next.js'],
      featured: false,
    },
    {
      id: 6,
      title: 'ConnectApp - Mobile Networking',
      description: 'A cross-platform mobile app for professional networking with real-time chat and event integration.',
      image: 'https://images.pexels.com/photos/4974920/pexels-photo-4974920.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'product',
      technologies: ['React Native', 'Flutter', 'Firebase', 'Node.js'],
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
            Showcasing innovative solutions in product development, design, backend, marketing, and booth rental services.
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
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative h-64 w-full aspect-square">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <h3 className="text-xl font-bold text-white">
                    {project.title}
                  </h3>
                </div>
                {project.featured && (
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-indigo-600 text-white text-sm font-medium rounded-full">
                      Featured
                    </span>
                  </div>
                )}
                <div
                  className={`absolute inset-0 bg-black/80 flex flex-col justify-between p-6 transition-opacity duration-300 ${
                    hoveredProject === project.id ? 'opacity-100' : 'opacity-0 pointer-events-none'
                  }`}
                >
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-200 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  <div>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-indigo-900/50 text-indigo-200 text-sm rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex space-x-4">
                      <button className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-200">
                        <ExternalLink className="h-5 w-5 text-white" />
                      </button>
                      <button className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-200">
                        <Github className="h-5 w-5 text-white" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;