import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github, Calendar, User } from 'lucide-react';
import ss1 from '../assets/ss1.png'
import ss2 from '../assets/ss2.png'
import ss3 from '../assets/ss3.png'
import pod from '../assets/podcast.png'
import pod1 from '../assets/pcs1.png'
import pod2 from '../assets/psc2.png'
import pod3 from '../assets/psc3.png'



const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // Mock project data - in a real app, this would come from an API
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const projectData: Record<string, any> = {
    'E-commerce-Website': {
      title: 'Warehouse Boys Website',
      description: 'A comprehensive full-stack e-commerce website designed to provide businesses with a complete online selling platform.',
      longDescription: `This e-commerce website was built to address the needs of small to medium-sized businesses looking to establish a strong online presence. The application features a modern, responsive design with a focus on user experience and conversion optimization.

The website includes comprehensive admin tools for inventory management, order processing, and customer relationship management. Payment processing is handled securely through PayFast integration, supporting multiple payment methods including credit cards and digital wallets.

The backend API is built with Node.js and Express, providing robust endpoints for product management, user authentication, and order processing. The database layer uses PostgreSQL with optimized queries for fast product searches and efficient order management.`,
      image:ss1,
      technologies: ['React', 'Node.js', 'PostgreSQL', 'PayFast', 'Google Maps Api', 'Sanity', 'Redis'],
      githubUrl: 'https://github.com/Rohree/wb-website-v2.git',
      liveUrl: 'https://warehouseboys.co.za/products',
      timeline: '2 months',
      role: 'Full-Stack Developer',
      challenges: [
        'Implementing secure payment processing with PayFast',
        'Optimizing database queries for large product catalogs',
        'Building responsive design that works across all devices',
        'Setting up the Google Maps Api to calculate how installation would cost'
      ],
      features: [
        'User authentication and authorization',
        'Product catalog with advanced filtering',
        'Shopping cart and checkout process',
        'Payment processing with PayFast',
        'Admin dashboard for inventory management',
        'Order tracking and history',
        'Responsive design for all devices',
        'User are charged for installation according to far they stay'
      ],
      screenshots: [
        ss1,
        ss2,
        ss3
      ]
    },
    'podcast-app': {
      title: 'Podcast App',
      description: 'A collaborative task management application with real-time updates and team collaboration features.',
      longDescription: `This app fetches podcast data from a custom API and allows users to explore podcasts, filter them by genre, and dive into show details with seasons and episodes. The application uses React with Context API for state management and Tailwind CSS for styling.

      The user interface is built with React and Tailwind CSS, providing a clean and intuitive experience that scales well. Displays a list of podcasts using the preview, allows users to select a genre to filter available podcasts it also displays detailed information about a selected podcast, including seasons and episodes.

      Firebase provides the backend infrastructure, handling real-time database updates, and file storage.`,
            image: pod,
      technologies: ['React', 'Firebase', 'Tailwind', 'WebSockets', 'TypeScript'],
      githubUrl: 'https://github.com/Rohree/CS20240139_wfo2407_d_Rorisang-Petja_DJS11',
      liveUrl: 'https://rorypodcastapp.netlify.app/',
      timeline: '1 week',
      role: 'Full-Stack Developer',
      challenges: [
        'Implementing real-time features',
        'Designing efficient data structure for nested task hierarchies',
        'Handling offline functionality and sync conflicts'
      ],
      features: [
        'Browse Previews: Displays a list of podcasts using the preview API.',
        'Filter by Genre: Allows users to select a genre to filter available podcasts.',
        'Detailed Show View: Displays detailed information about a selected podcast, including seasons and episodes.',
        'State Management: Centralized state using useContext.',
      ],
      screenshots: [
          pod1,
          pod2,
          pod3
      ]
    }
  };

  const project = projectData[id || ''];

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Project Not Found</h1>
          <Link to="/projects" className="text-blue-600 hover:text-blue-700">
            ← Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 mt-24">
      <div className="max-w-4xl mx-auto px-4">
        {/* Back Link */}
        <Link
          to="/projects"
          className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Projects
        </Link>

        {/* Project Header */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 object-cover"
          />
          
          <div className="p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <h1 className="text-4xl font-bold text-gray-900 mb-4 md:mb-0">
                {project.title}
              </h1>
              
              <div className="flex space-x-4">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-colors flex items-center space-x-2"
                >
                  <Github className="h-5 w-5" />
                  <span>View Code</span>
                </a>
                
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center space-x-2"
                  >
                    <ExternalLink className="h-5 w-5" />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>
            
            <p className="text-xl text-gray-600 mb-6">{project.description}</p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="flex items-center space-x-3">
                <Calendar className="h-5 w-5 text-gray-500" />
                <span className="text-gray-700">
                  <strong>Timeline:</strong> {project.timeline}
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <User className="h-5 w-5 text-gray-500" />
                <span className="text-gray-700">
                  <strong>Role:</strong> {project.role}
                </span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech: string, index: number) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Project Details */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-8">
            {/* Description */}
            <section className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Overview</h2>
              <div className="prose prose-gray max-w-none">
                {project.longDescription.split('\n\n').map((paragraph: string, index: number) => (
                  <p key={index} className="text-gray-700 mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>

            {/* Screenshots */}
            <section className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Screenshots</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {project.screenshots.map((screenshot: string, index: number) => (
                  <img
                    key={index}
                    src={screenshot}
                    alt={`${project.title} screenshot ${index + 1}`}
                    className="rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  />
                ))}
              </div>
            </section>
          </div>

          <div className="space-y-8">
            {/* Features */}
            <section className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Key Features</h3>
              <ul className="space-y-2">
                {project.features.map((feature: string, index: number) => (
                  <li key={index} className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Challenges */}
            <section className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Technical Challenges</h3>
              <ul className="space-y-2">
                {project.challenges.map((challenge: string, index: number) => (
                  <li key={index} className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{challenge}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;