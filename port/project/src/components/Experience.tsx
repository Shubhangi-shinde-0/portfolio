import React from 'react';
import { Calendar, Briefcase } from 'lucide-react';

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  responsibilities: string[];
}

const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      title: "Senior Frontend Developer",
      company: "TechSolutions Inc.",
      location: "Mumbai, India",
      period: "2022 - Present",
      description: "Leading frontend development for enterprise applications, focusing on React and Angular projects. Mentoring junior developers and implementing best practices.",
      responsibilities: [
        "Architected and implemented responsive web applications using React, Redux, and TypeScript",
        "Led the migration from Angular.js to Angular 12, resulting in 40% performance improvement",
        "Implemented comprehensive testing strategy using Jest and Cypress",
        "Collaborated with design team to create and maintain component library",
        "Conducted code reviews and mentored junior developers"
      ]
    },
    {
      title: "Frontend Developer",
      company: "WebCraft Studios",
      location: "Pune, India",
      period: "2020 - 2022",
      description: "Worked on various client projects, implementing modern frontend solutions using React, Vue.js, and other technologies.",
      responsibilities: [
        "Developed and maintained multiple client websites using React, Vue.js, and vanilla JavaScript",
        "Implemented responsive designs adhering to accessibility standards",
        "Created reusable components and established coding standards",
        "Optimized web performance to improve Core Web Vitals metrics",
        "Integrated REST APIs and implemented state management solutions"
      ]
    },
    {
      title: "Web Development Intern",
      company: "InnoTech Solutions",
      location: "Bangalore, India",
      period: "2019 - 2020",
      description: "Assisted in the development of web applications and gained hands-on experience with frontend technologies.",
      responsibilities: [
        "Developed UI components using HTML, CSS, and JavaScript",
        "Assisted senior developers in implementing new features",
        "Fixed bugs and improved existing codebase",
        "Participated in code reviews and team meetings"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto">
        <h2 className="section-heading">Work Experience</h2>
        <p className="section-subheading">
          My professional journey and career highlights
        </p>

        <div className="max-w-4xl mx-auto mt-16 relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-600 transform md:translate-x-px"></div>
          
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className={`mb-12 relative ${
                index % 2 === 0 ? 'md:pr-10 md:text-right md:ml-auto' : 'md:pl-10 md:text-left md:mr-auto'
              } ${
                index % 2 === 0 ? 'md:ml-0 ml-10 text-left' : 'md:mr-0 ml-10 text-left'
              }`}
            >
              <div className={`md:hidden absolute left-[-34px] top-0 w-7 h-7 bg-primary-500 rounded-full flex items-center justify-center z-10`}>
                <Briefcase className="h-3 w-3 text-white" />
              </div>
              
              <div className={`hidden md:flex absolute ${
                index % 2 === 0 ? 'right-[-34px]' : 'left-[-34px]'
              } top-0 w-7 h-7 bg-primary-500 rounded-full items-center justify-center z-10`}>
                <Briefcase className="h-3 w-3 text-white" />
              </div>
              
              <div className={`md:w-1/2 ${
                index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'
              }`}>
                <div className="card">
                  <div className={`flex flex-col ${index % 2 === 0 ? 'md:items-end' : 'md:items-start'} mb-3`}>
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 rounded-full mb-2">
                      {exp.company}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {exp.title}
                    </h3>
                  </div>
                  
                  <div className={`flex items-center text-sm text-gray-600 dark:text-gray-400 mb-4 ${
                    index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'
                  }`}>
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{exp.period}</span>
                    <span className="mx-2">•</span>
                    <span>{exp.location}</span>
                  </div>
                  
                  <p className={`text-gray-700 dark:text-gray-300 mb-4 ${
                    index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                  }`}>
                    {exp.description}
                  </p>
                  
                  <div className={`mt-4 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <h4 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">Key Responsibilities</h4>
                    <ul className={`list-disc ${
                      index % 2 === 0 ? 'md:pl-0 md:list-inside pl-5' : 'pl-5'
                    } space-y-1`}>
                      {exp.responsibilities.map((responsibility, i) => (
                        <li key={i} className="text-gray-600 dark:text-gray-400">
                          {responsibility}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;