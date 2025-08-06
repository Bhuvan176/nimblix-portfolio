// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import { Code, Smartphone, Cloud, Brush, Server, Globe, Calendar } from 'lucide-react';

// const Services = () => {
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   // State for availability checker
//   const [selectedDate, setSelectedDate] = useState('');
//   const [availabilityMessage, setAvailabilityMessage] = useState('');

//   const services = [
//     {
//       icon: Code,
//       title: 'Product Development Services',
//       description: 'Comprehensive development of websites, APIs, and mobile applications tailored to your business needs.',
//       technologies: ['React', 'Next.js', 'Node.js', 'TypeScript', 'Python', 'Java', 'Flutter'],
//       gradient: 'from-blue-500 to-cyan-500',
//     },
//     {
//       icon: Brush,
//       title: 'UI/UX & Design Services',
//       description: 'Crafting intuitive and visually appealing designs with Figma, prototyping, and wireframing.',
//       technologies: ['Figma', 'Sketch', 'Adobe XD', 'React JS', 'Prototyping', 'Wireframing'],
//       gradient: 'from-purple-500 to-pink-500',
//     },
//     {
//       icon: Server,
//       title: 'Backend & DevOps Services',
//       description: 'Robust backend solutions with cloud deployment (AWS, Azure, GCP) and DevOps (CI/CD, containerization).',
//       technologies: ['Java','Python','AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'Jenkins'],
//       gradient: 'from-green-500 to-teal-500',
//     },
//     {
//       icon: Globe,
//       title: 'Web & Marketing Support Services',
//       description: 'Building company portfolio websites, landing pages for promotions, and optimizing for SEO and performance.',
//       technologies: ['WordPress', 'SEO', 'Google Analytics', 'Landing Page Optimization'],
//       gradient: 'from-orange-500 to-red-500',
//     },
//     {
//       icon: Calendar,
//       title: 'Booth Rental & Availability',
//       description: 'Seamless booth rental services for events or salons, with real-time availability checking and booking.',
//       technologies: ['BoothBook', 'Calendar API', 'Stripe', 'Custom CRM'],
//       gradient: 'from-indigo-500 to-purple-500',
//     },
//     {
//       icon: Smartphone,
//       title: 'Mobile Development',
//       description: 'Native and cross-platform mobile apps that deliver exceptional user experiences.',
//       technologies: ['React Native', 'Flutter', 'iOS','Java','Python', 'Android'],
//       gradient: 'from-gray-600 to-gray-800',
//     },
//   ];

//   // Mock availability check function (replace with API call in production)
//   const checkAvailability = (e) => {
//     e.preventDefault();
//     if (!selectedDate) {
//       setAvailabilityMessage('Please select a date.');
//       return;
//     }
//     // Mock logic: Assume booths are available except on weekends
//     const date = new Date(selectedDate);
//     const isWeekend = date.getDay() === 0 || date.getDay() === 6;
//     setAvailabilityMessage(
//       isWeekend
//         ? 'Sorry, booths are fully booked on weekends.'
//         : 'Booths are available on the selected date!'
//     );
//   };

//   return (
//     <section id="services" className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           ref={ref}
//           initial={{ opacity: 0, y: 50 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Comprehensive technology solutions designed to accelerate your startup's growth and success.
//           </p>
//         </motion.div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {services.map((service, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 50 }}
//               animate={inView ? { opacity: 1, y: 0 } : {}}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//               className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-gray-200"
//             >
//               <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
//                 <service.icon className="h-8 w-8 text-white" />
//               </div>
//               <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
//               <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
//               <div className="flex flex-wrap gap-2">
//                 {service.technologies.map((tech, techIndex) => (
//                   <span
//                     key={techIndex}
//                     className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full font-medium"
//                   >
//                     {tech}
//                   </span>
//                 ))}
//               </div>
//               <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-cyan-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//             </motion.div>
//           ))}
//         </div>
//         {/* CTA Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.8, delay: 0.8 }}
//           className="text-center mt-16"
//         >
//           <div className="bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-2xl p-8 text-white">
//             <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
//             <p className="text-indigo-100 mb-6 max-w-2xl mx-auto">
//               Let's discuss how we can help bring your ideas to life with our innovative technology solutions.
//             </p>
//             <a
//               href="#contact"
//               className="inline-flex items-center px-8 py-3 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300"
//             >
//               Get Started Today
//             </a>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Services;


import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Smartphone, Cloud, Brush, Server, Globe, Calendar } from 'lucide-react';

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedDate, setSelectedDate] = useState('');
  const [availabilityMessage, setAvailabilityMessage] = useState('');

  const services = [
    {
      icon: Code,
      title: 'Product Development Services',
      description: 'Comprehensive development of websites, APIs, and mobile applications tailored to your business needs.',
      technologies: ['React', 'Next.js', 'Node.js', 'TypeScript', 'Python', 'Java', 'Flutter'],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Brush,
      title: 'UI/UX & Design Services',
      description: 'Crafting intuitive and visually appealing designs with Figma, prototyping, and wireframing.',
      technologies: ['Figma', 'Sketch', 'Adobe XD', 'React JS', 'Prototyping', 'Wireframing'],
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: Server,
      title: 'Backend & DevOps Services',
      description: 'Robust backend solutions with cloud deployment (AWS, Azure, GCP) and DevOps (CI/CD, containerization).',
      technologies: ['Java','Python','AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'Jenkins'],
      gradient: 'from-green-500 to-teal-500',
    },
    {
      icon: Globe,
      title: 'Web & Marketing Support Services',
      description: 'Building company portfolio websites, landing pages for promotions, and optimizing for SEO and performance.',
      technologies: ['WordPress', 'SEO', 'Google Analytics', 'Landing Page Optimization'],
      gradient: 'from-orange-500 to-red-500',
    },
    {
      icon: Calendar,
      title: 'Booth Rental & Availability',
      description: 'Seamless booth rental services for events or salons, with real-time availability checking and booking.',
      technologies: ['BoothBook', 'Calendar API', 'Stripe', 'Custom CRM'],
      gradient: 'from-indigo-500 to-purple-500',
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile apps that deliver exceptional user experiences.',
      technologies: ['React Native', 'Flutter', 'iOS','Java','Python', 'Android'],
      gradient: 'from-gray-600 to-gray-800',
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to accelerate your startup's growth and success.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-white rounded-2xl p-8 shadow-lg transition-all duration-300 border border-gray-100 
                hover:shadow-xl hover:-translate-y-1 hover:border-gray-500"
            >
              <div
                className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-xl flex items-center justify-center mb-6 
                  group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 group-hover:shadow-md`}
              >
                <service.icon className="h-8 w-8 text-white group-hover:scale-105 transition-transform duration-200" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors duration-200">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              <div className="flex flex-wrap gap-2">
                {service.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full font-medium 
                      group-hover:bg-indigo-100 group-hover:text-indigo-800 transition-colors duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div
                className={`absolute inset-0 bg-gradient-to-r ${service.gradient} rounded-2xl opacity-0 
                  group-hover:opacity-10 transition-opacity duration-300`}
              ></div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-2xl p-8 text-white transition-all duration-300 group">
            <h3 className="text-2xl font-bold mb-4 group-hover:text-cyan-200 transition-colors duration-200">
              Ready to Start Your Project?
            </h3>
            <p className="text-indigo-100 mb-6 max-w-2xl mx-auto">
              Let's discuss how we can help bring your ideas to life with our innovative technology solutions.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-3 bg-white text-indigo-600 font-semibold rounded-lg 
                transition-all duration-300 group-hover:bg-cyan-100 group-hover:text-indigo-800 
                group-hover:shadow-lg group-hover:scale-105"
            >
              Get Started Today
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;