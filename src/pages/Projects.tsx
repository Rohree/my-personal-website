import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Github } from 'lucide-react';
import wbss from "../assets/wb-sh.png"
import podss from "../assets/podcast.png"

const Projects: React.FC = () => {
  const projects = [
    {
      id: 'E-commerce-Website',
      title: 'E-commerce-Website',
      description: 'A full-stack e-commerce website with React, Node.js, and PostgreSQL featuring payment processing, and admin dashboard.',
      image: wbss,
      technologies: ['React', 'Tailwind', 'PostgreSQL', 'PayFast', 'Sanity'],
      githubUrl: 'https://github.com/Rohree/wb-website-v2',
      liveUrl: 'https://warehouseboys.co.za/',
      featured: true
    },
    {
      id: 'podcast-app',
      title: 'Podcast App ',
      description: 'This app fetches podcast data from a custom API and allows users to explore podcasts, filter them by genre, and dive into show details with seasons and episodes.',
      image: podss,
      technologies: ['React', 'Custom Api', 'TailwindCSS'],
      githubUrl: 'https://github.com/Rohree/CS20240139_wfo2407_d_Rorisang-Petja_DJS11.git',
      liveUrl: 'https://rorypodcastapp.netlify.app/',
      featured: true
    },
    {
      id: 'email-signature-generator',
      title: 'Email Signatire Generator',
      description: 'This is an email signature template generator tool made with HTML for companies to use during their team onboarding process.',
      image: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ3l4cWwwYTNxbGJvNHUyazkxdW9nZjhwazN1MG53dnByY2R5bTdoNyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/641phgC2h2qXe/giphy.gif',
      technologies: ['Html', 'Tailwind CSS', 'JavaScript'],
      githubUrl: 'https://github.com/Rohree/dunamis-email-generator',
      liveUrl: 'https://email-generator-dunamis.netlify.app/',
      featured: false
    },
    {
      id: 'djs01',
      title: 'Debugging Challenges',
      description: 'This challenge invites students to debug, refactor, and enhance JavaScript functions designed for determining the trajectory of a spacecraft. The initial functions are flawed and may result in incorrect calculations.',
      image: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzVvZ2ZnM3UwOXdjc2J6YnNtMmZrdDBqNHFsamVndmZyOWNhcDhndyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/XzXgeTP0VaJfG/giphy.gif',
      technologies: ['JavaScript'],
      githubUrl: 'https://github.com/Rohree/CS20240139_wfo2407_d_Rorisang-Petja_DJS01.git',
      liveUrl: null,
      featured: false
    },
    {
      id: 'chat-application',
      title: 'My Old CV Website',
      description: 'This website is built using ThreeJs to give the 3D effect in the background',
      image: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHpjd2h4eWdibDhrcG9lcHdoaXo5cGg1aHhueXFjZnM4bjYweTk3dCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/6jBKGwNyBZu5tkTzBs/giphy.gif',
      technologies: ['React', 'ThreeJs', 'CSS'],
      githubUrl: 'https://github.com/Rohree/hello-rory-dev',
      liveUrl: 'https://hello-rory-dev.netlify.app/',
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <div className="min-h-screen bg-gray-50 py-12 mt-24">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Portfolio Projects
          </h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of my software development work, featuring full-stack applications, 
            APIs, and modern web solutions built with cutting-edge technologies.
          </p>
        </div>

        {/* Featured Projects */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <Link
                      to={`/projects/${project.id}`}
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    >
                      View Details
                    </Link>
                    
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-semibold hover:bg-gray-50 transition-colors flex items-center space-x-2"
                    >
                      <Github className="h-4 w-4" />
                      <span>Code</span>
                    </a>
                    
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-semibold hover:bg-gray-50 transition-colors flex items-center space-x-2"
                      >
                        <ExternalLink className="h-4 w-4" />
                        <span>Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Other Projects */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">More Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-32 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="bg-gray-100 text-gray-500 px-2 py-1 rounded text-xs">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex space-x-2">
                    <Link
                      to={`/projects/${project.id}`}
                      className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                    >
                      Details
                    </Link>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-700 font-medium text-sm"
                    >
                      Code
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-gray-700 font-medium text-sm"
                      >
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Projects;