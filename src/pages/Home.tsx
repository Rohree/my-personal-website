import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Download, ExternalLink } from "lucide-react";
import SkillsSection from "../components/SkillsSection";
import aboutme from "../assets/aboutme.png";

const Home: React.FC = () => {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Background */}
     

      {/* Hero Section */}
      <section className="h-screen flex items-center pt-32 md:pt-40 w-full z-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Rorisang Petja
          </h1>
          <h2 className="text-2xl md:text-3xl text-blue-600 font-semibold mb-6">
            Full-stack Software Developer
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto">
            Building scalable web applications with React, Node.js, and SQL
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/projects"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
            >
              <span>View My Work</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
            >
              Let's Connect
            </Link>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section
        className="py-20 bg-white relative z-10"
        aria-labelledby="about-heading"
      >
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 id="about-heading" className="text-4xl font-bold text-gray-900 mb-8">
              About Me
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8" />
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={aboutme}
                alt="Portrait of Rorisang Petja, full-stack developer"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div>
              <p className="text-lg text-gray-700 mb-6">
                I'm a passionate software developer with 4+ years of experience
                building modern web applications. I specialize in full-stack
                development with a focus on React, Node.js, and cloud
                technologies.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                I've worked across various industries including fintech,
                e-commerce, and healthcare, helping businesses scale their
                digital presence and improve user experiences through clean,
                maintainable code.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                When I'm not coding, I enjoy contributing to open-source
                projects, mentoring junior developers, and staying up-to-date
                with the latest technology trends.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/resume"
                  className="bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-colors flex items-center justify-center space-x-2"
                >
                  <Download className="h-5 w-5" />
                  <span>Download Resume</span>
                </Link>
                <a
                  href="https://github.com/rorisangpetja"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-gray-800 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 hover:text-white transition-colors flex items-center justify-center space-x-2"
                >
                  <ExternalLink className="h-5 w-5" />
                  <span>View GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <SkillsSection />

      {/* CTA Section */}
      <section
        className="py-20 bg-gray-900 relative z-10"
        aria-labelledby="cta-heading"
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 id="cta-heading" className="text-4xl font-bold text-white mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            I'm currently available for full-time opportunities and exciting
            projects.
          </p>
          <Link
            to="/contact"
            className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center space-x-2"
          >
            <span>Get In Touch</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Home;
