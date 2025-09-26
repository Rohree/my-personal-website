import React from 'react';
import { useLocation } from 'react-router-dom';

const SEOHelmet: React.FC = () => {
  const location = useLocation();
  
  React.useEffect(() => {
    const baseTitle = "Rorisang Petja - Mid-level Software Developer";
    const baseDescription = "Experienced software developer specializing in React, Node.js, and full-stack development. Available for hire.";
    
    let title = baseTitle;
    let description = baseDescription;
    
    switch (location.pathname) {
      case '/projects':
        title = "Portfolio Projects - Rorisang Petja | React Developer";
        description = "View my software development projects including React, Node.js, and full-stack applications.";
        break;
      case '/resume':
        title = "Resume - Rorisang Petja | Software Developer CV";
        description = "Download or view Rorisang Petja's software developer resume and CV with experience in React, Node.js, SQL.";
        break;
      case '/contact':
        title = "Contact - Rorisang Petja | Hire Software Developer";
        description = "Get in touch with Rorisang Petja for software development opportunities. Available for full-time and contract work.";
        break;
    }
    
    document.title = title;
    
    // Update meta tags
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description;
      document.head.appendChild(meta);
    }
    
    // Add structured data for SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Rorisang Petja",
      "jobTitle": "Mid-level Software Developer",
      "description": description,
      "url": window.location.origin,
      "sameAs": [
        "https://github.com/alexjohnson",
        "https://linkedin.com/in/alexjohnson"
      ],
      "knowsAbout": [
        "JavaScript",
        "React",
        "Node.js",
        "SQL",
        "AWS",
        "Docker",
        "Full-Stack Development"
      ]
    };
    
    let ldScript = document.querySelector('script[type="application/ld+json"]');
    if (!ldScript) {
      ldScript = document.createElement('script');
      ldScript.type = 'application/ld+json';
      document.head.appendChild(ldScript);
    }
    ldScript.textContent = JSON.stringify(structuredData);
    
  }, [location]);
  
  return null;
};

export default SEOHelmet;