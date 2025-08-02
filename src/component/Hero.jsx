import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-indigo-50 via-white to-cyan-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-indigo-200 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-cyan-200 rounded-full opacity-60 animate-bounce"></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-amber-200 rounded-full opacity-60 animate-ping"></div>
        <div className="absolute bottom-20 right-40 w-24 h-24 bg-purple-200 rounded-full opacity-60 animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center justify-center lg:justify-start mb-6"
            >
              <Sparkles className="h-6 w-6 text-indigo-600 mr-2" />
              <span className="text-indigo-600 font-semibold">Innovative Startup</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
            >
              Building the
              <span className="bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent"> Future </span>
              of Technology
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-600 mb-8 leading-relaxed"
            >
              We're a dynamic startup transforming ideas into powerful digital solutions. 
              From cutting-edge web applications to AI-powered platforms, we deliver innovation that drives growth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                href="#portfolio"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-indigo-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-indigo-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                View Our Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-3 border-2 border-indigo-600 text-indigo-600 font-semibold rounded-lg hover:bg-indigo-600 hover:text-white transition-all duration-300"
              >
                Let's Talk
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full h-96 lg:h-[500px]">
              {/* Floating Cards */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-10 left-10 bg-white p-6 rounded-xl shadow-xl border border-gray-100"
              >
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-3">
                  <span className="text-indigo-600 font-bold">AI</span>
                </div>
                <h3 className="font-semibold text-gray-900">Machine Learning</h3>
                <p className="text-sm text-gray-600">Smart Solutions</p>
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                className="absolute top-32 right-10 bg-white p-6 rounded-xl shadow-xl border border-gray-100"
              >
                <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-3">
                  <span className="text-cyan-600 font-bold">WEB</span>
                </div>
                <h3 className="font-semibold text-gray-900">Web Apps</h3>
                <p className="text-sm text-gray-600">Modern & Fast</p>
              </motion.div>

              <motion.div
                animate={{ y: [-5, 15, -5] }}
                transition={{ duration: 4, repeat: Infinity, delay: 2 }}
                className="absolute bottom-20 left-20 bg-white p-6 rounded-xl shadow-xl border border-gray-100"
              >
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-3">
                  <span className="text-amber-600 font-bold">APP</span>
                </div>
                <h3 className="font-semibold text-gray-900">Mobile Apps</h3>
                <p className="text-sm text-gray-600">Cross-Platform</p>
              </motion.div>

              {/* Central Element */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-full flex items-center justify-center"
              >
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="text-white font-bold text-lg"
                >
                  NIMBLIX
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-gray-400 rounded-full mt-2"
          ></motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;