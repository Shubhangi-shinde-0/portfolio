import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';

const Education: React.FC = () => {
  const education = [
    {
      degree: "Bachelor of Engineering in Computer Science",
      institution: "University of Technology",
      location: "Mumbai, India",
      period: "2021 - 2024",
      description: "Graduated with honors, specializing in software development and data structures. Participated in multiple hackathons and coding competitions.",
      achievements: [
        "Received Dean's List recognition for academic excellence",
        "Led development team for university's student portal",
        "Won first place in annual coding competition",
        "Published research paper on efficient algorithms"
      ]
    },
    {
      degree: "Full Stack Web Development Certification",
      institution: "Tech Academy",
      location: "Online",
      period: "2023",
      description: "Intensive 6-month program focused on modern web development technologies and practices. Created multiple real-world projects as part of the curriculum.",
      achievements: [
        "Developed e-commerce platform as capstone project",
        "Achieved perfect score on all assessments",
        "Mentored junior developers in cohort"
      ]
    }
  ];

  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto">
        <h2 className="section-heading">Education</h2>
        <p className="section-subheading">
          My academic journey and educational qualifications
        </p>

        <div className="max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <div 
              key={index} 
              className="card mb-8 relative border-l-4 border-primary-500 dark:border-primary-400 pl-6"
            >
              <div className="absolute -left-3 top-6 w-6 h-6 rounded-full bg-primary-500 dark:bg-primary-400 flex items-center justify-center">
                <GraduationCap className="h-3 w-3 text-white" />
              </div>

              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                    {edu.degree}
                  </h3>
                  <p className="text-lg text-primary-600 dark:text-primary-400">
                    {edu.institution}
                  </p>
                </div>
                <div className="flex items-center mt-2 md:mt-0 text-gray-600 dark:text-gray-400">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{edu.period}</span>
                </div>
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {edu.description}
              </p>
              
              <div className="mt-4">
                <h4 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">Key Achievements</h4>
                <ul className="list-disc pl-5 space-y-1">
                  {edu.achievements.map((achievement, i) => (
                    <li key={i} className="text-gray-600 dark:text-gray-400">
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;