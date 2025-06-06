import React from 'react';
import { Code, Rocket, Users, BookOpen } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto">
        <h2 className="section-heading">About Me</h2>
        <p className="section-subheading">
          Passionate frontend developer with a keen eye for design and a commitment to creating seamless user experiences.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Hello! I'm <span className="font-semibold text-primary-600 dark:text-primary-400">Shinde</span>, a dedicated frontend developer based in India. I specialize in building exceptional digital experiences that combine aesthetics with functionality.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              With a bachelor's degree in Computer Science and several years of experience in frontend development, I've developed a deep understanding of creating responsive, user-friendly web applications using modern technologies.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              My goal is to build products that not only look visually appealing but also provide intuitive user experiences. I enjoy solving complex problems and turning ideas into reality through code.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="card group hover:border-primary-500 hover:-translate-y-1 transition-all duration-300">
              <Code className="h-8 w-8 text-primary-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Clean Code</h3>
              <p className="text-gray-600 dark:text-gray-400">Writing maintainable, efficient, and well-documented code is my top priority.</p>
            </div>
            
            <div className="card group hover:border-primary-500 hover:-translate-y-1 transition-all duration-300">
              <Rocket className="h-8 w-8 text-secondary-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Optimization</h3>
              <p className="text-gray-600 dark:text-gray-400">Creating fast, responsive applications with optimized performance.</p>
            </div>
            
            <div className="card group hover:border-primary-500 hover:-translate-y-1 transition-all duration-300">
              <Users className="h-8 w-8 text-accent-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Collaboration</h3>
              <p className="text-gray-600 dark:text-gray-400">Working effectively with teams to deliver high-quality products.</p>
            </div>
            
            <div className="card group hover:border-primary-500 hover:-translate-y-1 transition-all duration-300">
              <BookOpen className="h-8 w-8 text-primary-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Continuous Learning</h3>
              <p className="text-gray-600 dark:text-gray-400">Always staying updated with the latest technologies and trends.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;