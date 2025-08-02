import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Linkedin, Twitter, Github } from 'lucide-react';

const Team = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const team = [
    {
      name: 'Arjun Sharma',
      role: 'CEO & Co-Founder',
      bio: 'Visionary leader with 8+ years in tech startups. Previously led product at two successful exits.',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
      },
    },
    {
      name: 'Priya Patel',
      role: 'CTO & Co-Founder',
      bio: 'Full-stack architect passionate about AI and scalable systems. Former senior engineer at Google.',
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
      },
    },
    {
      name: 'Rahul Kumar',
      role: 'Lead Developer',
      bio: 'Expert in modern web technologies with a passion for clean code and user experience.',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
      },
    },
    {
      name: 'Sneha Reddy',
      role: 'Head of Design',
      bio: 'Creative designer focused on user-centered design and building delightful digital experiences.',
      image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
      },
    },
  ];

  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The passionate minds behind Nimblix Technologies, dedicated to building innovative solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 text-center"
            >
              {/* Image */}
              <div className="relative mb-6">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden ring-4 ring-gray-100 group-hover:ring-indigo-200 transition-all duration-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                
                {/* Social Links Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 flex space-x-3">
                    <a
                      href={member.social.linkedin}
                      className="text-gray-600 hover:text-indigo-600 transition-colors duration-200"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a
                      href={member.social.twitter}
                      className="text-gray-600 hover:text-cyan-600 transition-colors duration-200"
                    >
                      <Twitter className="h-5 w-5" />
                    </a>
                    <a
                      href={member.social.github}
                      className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
              <p className="text-indigo-600 font-semibold mb-4">{member.role}</p>
              <p className="text-gray-600 leading-relaxed">{member.bio}</p>
            </motion.div>
          ))}
        </div>

        {/* Join Team CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-indigo-50 to-cyan-50 rounded-2xl p-8 border border-indigo-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Join Our Growing Team</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              We're always looking for talented individuals who share our passion for innovation and excellence. 
              Ready to make an impact?
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-indigo-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-indigo-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
            >
              View Open Positions
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;