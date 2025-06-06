import React, { useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import Typewriter from 'typewriter-effect';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-900 dark:to-gray-800 z-0"></div>
      
      <div className="container mx-auto z-10 pt-20">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-3/5 mb-10 md:mb-0 animate-slideUp">
            <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">Hello, I am</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-white">
              Shinde
            </h1>
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-gray-800 dark:text-gray-100 h-16">
              <Typewriter
                options={{
                  strings: ['Frontend Developer', 'React Specialist', 'UI/UX Enthusiast', 'MERN Stack Developer'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-2xl">
              Building beautiful, responsive web applications with modern technologies. 
              Passionate about creating intuitive user interfaces and exceptional digital experiences.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                duration={500}
                className="btn btn-primary px-6 py-3"
              >
                Get In Touch
              </Link>
              <Link
                to="projects"
                spy={true}
                smooth={true}
                duration={500}
                className="btn btn-outline px-6 py-3"
              >
                View Projects
              </Link>
            </div>
            <div className="flex mt-8 space-x-4">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com/in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:shinde@example.com"
                className="text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 transition-colors"
                aria-label="Email"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="md:w-2/5 animate-fadeIn">
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 blur-xl opacity-20 animate-pulse"></div>
              <img
                src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Shinde"
                className="rounded-full w-full h-full object-cover border-4 border-white dark:border-gray-800 shadow-xl"
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className="text-gray-500 dark:text-gray-400 cursor-pointer"
          >
            <ArrowDown className="h-6 w-6" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;