import React, { useState, useEffect, useRef } from 'react';

interface Skill {
  name: string;
  level: number;
  category: string;
  color: string;
}

const Skills: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const skills: Skill[] = [
    // Frontend
    { name: 'JavaScript', level: 95, category: 'frontend', color: 'from-yellow-400 to-yellow-600' },
    { name: 'React.js', level: 90, category: 'frontend', color: 'from-blue-400 to-blue-600' },
    { name: 'Angular', level: 85, category: 'frontend', color: 'from-red-400 to-red-600' },
    { name: 'Vue.js', level: 80, category: 'frontend', color: 'from-green-400 to-green-600' },
    { name: 'HTML5/CSS3', level: 95, category: 'frontend', color: 'from-orange-400 to-orange-600' },
    { name: 'TypeScript', level: 85, category: 'frontend', color: 'from-blue-500 to-blue-700' },
    
    // Backend
    { name: 'Node.js', level: 85, category: 'backend', color: 'from-green-500 to-green-700' },
    { name: 'Express.js', level: 80, category: 'backend', color: 'from-gray-600 to-gray-800' },
    { name: 'MongoDB', level: 75, category: 'backend', color: 'from-green-600 to-green-800' },
    { name: 'Java', level: 70, category: 'backend', color: 'from-blue-700 to-blue-900' },
    
    // Tools
    { name: 'Git', level: 90, category: 'tools', color: 'from-orange-500 to-orange-700' },
    { name: 'Webpack', level: 75, category: 'tools', color: 'from-blue-300 to-blue-500' },
    { name: 'Docker', level: 70, category: 'tools', color: 'from-blue-600 to-blue-800' },
    { name: 'Figma', level: 85, category: 'tools', color: 'from-purple-500 to-purple-700' }
  ];

  const categories = ['frontend', 'backend', 'tools'];
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900" ref={sectionRef}>
      <div className="container mx-auto">
        <h2 className="section-heading">Technical Skills</h2>
        <p className="section-subheading">
          A comprehensive overview of my technical skills and expertise
        </p>

        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-gray-100 dark:bg-gray-800 p-1 rounded-lg">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                activeCategory === 'all'
                  ? 'bg-white dark:bg-gray-700 shadow-sm'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors capitalize ${
                  activeCategory === category
                    ? 'bg-white dark:bg-gray-700 shadow-sm'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredSkills.map((skill, index) => (
            <div key={skill.name} className="mb-4">
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                  {skill.name}
                </span>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  {skill.level}%
                </span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div
                  className={`h-2.5 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out skill-bar`}
                  style={{ 
                    width: visible ? `${skill.level}%` : '0%',
                    transitionDelay: `${index * 100}ms`
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;