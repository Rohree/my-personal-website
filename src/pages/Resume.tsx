import React from 'react';
import { Download, MapPin, Mail, Phone, ExternalLink } from 'lucide-react';
import jsPDF from "jspdf";
import html2canvas from "html2canvas";



const Resume: React.FC = () => {
  const handleDownloadPDF = async () => {
    const resumeElement = document.querySelector("#resume-content") as HTMLElement | null; // target the resume wrapper
    if (!resumeElement) return;

    const canvas = await html2canvas(resumeElement);
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("Rorisang_Petja_Resume.pdf");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 mt-24">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Resume</h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <button
            onClick={handleDownloadPDF}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center space-x-2"
          >
            <Download className="h-5 w-5" />
            <span>Download PDF</span>
          </button>
        </div>

        {/* Resume Content */}
        <div id='resume-content' className="bg-white shadow-lg rounded-lg p-8 md:p-12">
          {/* Personal Info */}
          <header className="text-center mb-8 pb-8 border-b border-gray-200">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Rorisang Petja</h1>
            <h2 className="text-2xl text-blue-600 font-semibold mb-4">Full-Stack Software Developer</h2>
            
            <div className="flex flex-wrap justify-center gap-6 text-gray-600">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>rorisang@hellorory.dev</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>(+27) 72 659 4405 </span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Pretoria, South Africa</span>
              </div>
              <div className="flex items-center space-x-2">
                <ExternalLink className="h-4 w-4" />
                <span>github.com/rohree</span>
              </div>
            </div>
          </header>

          {/* Professional Summary */}
          <section className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b border-blue-600 pb-2">
              Professional Summary
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Passionate and results-driven Mid-level Software Developer with 4+ years of experience 
              in full-stack web development. Expertise in React, Node.js, and modern JavaScript 
              frameworks with a strong background in building scalable web applications. Proven track 
              record of delivering high-quality software solutions in fast-paced environments across 
              fintech, e-commerce, and mining industries.
            </p>
          </section>

          {/* Experience */}
          <section className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b border-blue-600 pb-2">
              Professional Experience
            </h3>
            
            <div className="space-y-6">
              <div>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900">Software Developer</h4>
                    <p className="text-blue-600 font-medium">YelaH.co.za</p>
                  </div>
                  <p className="text-gray-500">January 2022 - Present</p>
                </div>
                <ul className="text-gray-700 space-y-1 ml-4">
                  <li>• Developed and maintained React-based web applications serving 10,000+ daily active users</li>
                  <li>• Built RESTful APIs using Node.js and Express, improving system response time by 40%</li>
                  <li>• Collaborated with cross-functional teams to deliver 15+ features using Agile methodologies</li>
                  <li>• Implemented automated testing with Jest and Cypress, increasing code coverage to 85%</li>
                </ul>
              </div>

              <div>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900">Junior Software Developer</h4>
                    <p className="text-blue-600 font-medium">Akiba Digital</p>
                  </div>
                  <p className="text-gray-500">2020 - December 2021</p>
                </div>
                <ul className="text-gray-700 space-y-1 ml-4">
                  <li>• Implemented responsive web designs using HTML, CSS, and JavaScript</li>
                  <li>• Participated in code reviews and helped maintain coding standards across the team</li>
                  <li>• Integrated third-party APIs including Stripe for payment processing and SendGrid for emails</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Education */}
          <section className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b border-blue-600 pb-2">
              Education
            </h3>
            <div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900">Certificate Of Completion</h4>
                  <p className="text-blue-600 font-medium">CodeSpace 6 month full-time Program</p>
                </div>
                <p className="text-gray-500">2025</p>
              </div>
              <p className="text-gray-700 ml-4">Relevant Coursework: Data Structures, Algorithms, Dynamic JavaScript, Database Systems</p>
            </div>
          </section>

          {/* Technical Skills */}
          <section className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b border-blue-600 pb-2">
              Technical Skills
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Frontend Technologies</h4>
                <p className="text-gray-700">JavaScript, TypeScript, React, Next.js, HTML5, CSS3, Tailwind CSS, Material-UI</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Backend Technologies</h4>
                <p className="text-gray-700">Node.js, Express.js, RESTful APIs, GraphQL, Microservices</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Databases</h4>
                <p className="text-gray-700">PostgreSQL, MongoDB, Redis, SQL</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Tools & Platforms</h4>
                <p className="text-gray-700">Git, Docker, AWS, Jest, Cypress, Webpack, npm/yarn</p>
              </div>
            </div>
          </section>

          {/* Certifications */}
          <section className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b border-blue-600 pb-2">
              Certifications
            </h3>
            <div className="space-y-2">
              <div className="flex flex-col md:flex-row md:justify-between">
                <p className="text-gray-900 font-medium">CodeSpace Certification of Complition</p>
                <p className="text-gray-500">2024</p>
              </div>
              <div className="flex flex-col md:flex-row md:justify-between">
                <p className="text-gray-900 font-medium">React Developer Certification - Meta</p>
                <p className="text-gray-500">2024</p>
              </div>
            </div>
          </section>

          {/* Projects */}
          <section>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b border-blue-600 pb-2">
              Notable Projects
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-semibold text-gray-900">E-Commerce Platform</h4>
                <p className="text-gray-700">Full-stack application with React, Node.js, PostgreSQL, and Payfast integration</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900">Task Management App</h4>
                <p className="text-gray-700">Real-time collaborative tool built with React, Firebase, and WebSocket technology</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900">Weather Dashboard</h4>
                <p className="text-gray-700">Responsive weather application with location-based forecasts and interactive charts</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Resume;