import React, { useState } from 'react';
import { ExternalLink, Github, Layers } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  githubLink: string;
  demoLink: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "REST API Integration Dashboard",
      description: "A comprehensive dashboard that integrates multiple RESTful APIs to display data visualizations and analytics. Features include data filtering, sorting, and export functionality.",
      image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "frontend",
      technologies: ["React", "TypeScript", "Axios", "Chart.js", "TailwindCSS"],
      githubLink: "https://github.com",
      demoLink: "https://demo.com"
    },
    {
      id: 2,
      title: "Real-time Chat Application",
      description: "A full-featured chat application with real-time messaging, user authentication, and message history. Includes features like read receipts, typing indicators, and file sharing.",
      image: "https://images.pexels.com/photos/3182832/pexels-photo-3182832.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "fullstack",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
      githubLink: "https://github.com",
      demoLink: "https://demo.com"
    },
    {
      id: 3,
      title: "E-commerce Platform",
      description: "A complete e-commerce solution with product listings, shopping cart, checkout process, and user account management. Includes admin dashboard for inventory management.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "fullstack",
      technologies: ["React", "Redux", "Node.js", "MongoDB", "Stripe API"],
      githubLink: "https://github.com",
      demoLink: "https://demo.com"
    },
    {
      id: 4,
      title: "Task Management Application",
      description: "A Kanban-style task management tool with drag-and-drop functionality, task assignments, due dates, and project organization features.",
      image: "https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "frontend",
      technologies: ["React", "TypeScript", "React DnD", "Firebase", "Material UI"],
      githubLink: "https://github.com",
      demoLink: "https://demo.com"
    }
  ];

  const [filter, setFilter] = useState('all');
  
  const categories = ['all', 'frontend', 'fullstack', 'backend'];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto">
        <h2 className="section-heading">Projects</h2>
        <p className="section-subheading">
          A showcase of my recent work and personal projects
        </p>
        
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-gray-100 dark:bg-gray-700 p-1 rounded-lg">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors capitalize ${
                  filter === category
                    ? 'bg-white dark:bg-gray-600 shadow-sm text-primary-600 dark:text-primary-400'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="card group project-card overflow-hidden hover:border-primary-500 dark:hover:border-primary-400 border-2 border-transparent transition-all duration-300"
            >
              <div className="relative h-56 mb-6 overflow-hidden rounded-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="project-overlay absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity duration-300 flex items-end justify-start p-4">
                  <div className="flex space-x-2">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/90 rounded-full hover:bg-primary-500 hover:text-white transition-colors"
                      aria-label="View GitHub Repository"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/90 rounded-full hover:bg-primary-500 hover:text-white transition-colors"
                      aria-label="View Live Demo"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
              
              <span className="inline-block px-3 py-1 text-xs font-medium bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 rounded-full mb-3 capitalize">
                {project.category}
              </span>
              
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex space-x-3">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline flex items-center space-x-1"
                >
                  <Github className="h-4 w-4 mr-1" />
                  <span>Code</span>
                </a>
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary flex items-center space-x-1"
                >
                  <ExternalLink className="h-4 w-4 mr-1" />
                  <span>Live Demo</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;