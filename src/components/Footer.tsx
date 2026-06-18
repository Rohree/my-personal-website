import React from 'react';
import { Mail, Linkedin, Github, Twitter } from 'lucide-react';
import profilePic from '../assets/profile-pic.png';

const SOCIAL = [
  { href: 'mailto:rorisang@hellorory.dev',                         icon: <Mail     className="w-4 h-4" />, label: 'Email'   },
  { href: 'https://www.linkedin.com/in/rorisang-petja-4b663931a/', icon: <Linkedin className="w-4 h-4" />, label: 'LinkedIn'},
  { href: 'https://github.com/rohree',                              icon: <Github   className="w-4 h-4" />, label: 'GitHub'  },
  { href: 'https://x.com',                                          icon: <Twitter  className="w-4 h-4" />, label: 'X'       },
];

const Footer: React.FC = () => (
  <footer className="bg-white dark:bg-gray-950 border-t border-gray-100 dark:border-gray-800 py-10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6">

        {/* identity */}
        <div className="flex items-center gap-3">
          <img src={profilePic} alt="Rorisang Petja" className="w-9 h-9 rounded-xl object-cover shrink-0" />
          <div>
            <p className="font-semibold text-gray-900 dark:text-white text-sm leading-tight">
              Rorisang Petja
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
              Founder · Tech Lead · Builder
            </p>
          </div>
        </div>

        {/* social icons */}
        <div className="flex items-center gap-2">
          {SOCIAL.map(s => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith('http') ? '_blank' : undefined}
              rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              aria-label={s.label}
              className="w-9 h-9 rounded-full flex items-center justify-center text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
            >
              {s.icon}
            </a>
          ))}
        </div>

        {/* copyright */}
        <p className="text-xs text-gray-400 dark:text-gray-600">
          © {new Date().getFullYear()} Rorisang Petja
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
