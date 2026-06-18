import React from 'react';
import { useLocation } from 'react-router-dom';

const SEOHelmet: React.FC = () => {
  const location = useLocation();

  React.useEffect(() => {
    const defaults = {
      title: 'Rorisang Petja — Founder · Tech Lead · Builder',
      description: 'Founder of Shobbable and Tech Lead at Yelah. I design, build, and launch digital products that help businesses grow.',
    };

    const routes: Record<string, { title: string; description: string }> = {
      '/contact': {
        title: 'Contact — Rorisang Petja',
        description: "Let's build something together. Reach out to discuss startups, products, or engineering.",
      },
      '/resume': {
        title: 'Resume — Rorisang Petja',
        description: 'Resume and work history of Rorisang Petja — Founder, Tech Lead, and Product Engineer.',
      },
    };

    const page = routes[location.pathname] ?? defaults;
    document.title = page.title;

    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', page.description);

    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Rorisang Petja',
      jobTitle: 'Founder & Tech Lead',
      description: defaults.description,
      url: window.location.origin,
      sameAs: [
        'https://github.com/rohree',
        'https://www.linkedin.com/in/rorisang-petja-4b663931a/',
      ],
      knowsAbout: [
        'React', 'TypeScript', 'Node.js', 'Firebase', 'AWS',
        'Product Design', 'Startup Building', 'eCommerce',
      ],
    };

    let ld = document.querySelector<HTMLScriptElement>('script[type="application/ld+json"]');
    if (!ld) {
      ld = document.createElement('script');
      ld.type = 'application/ld+json';
      document.head.appendChild(ld);
    }
    ld.textContent = JSON.stringify(structuredData);
  }, [location]);

  return null;
};

export default SEOHelmet;
