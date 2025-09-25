import React from 'react';
import { 
  Code2, 
  Database, 
  Cloud, 
  Smartphone, 
  Users, 
  MessageSquare,
  Target,
  Zap
} from 'lucide-react';

const SkillsSection: React.FC = () => {
  const technicalSkills = [
    {
      category: 'Frontend Development',
      icon: <Code2 className="h-6 w-6" />,
      skills: [
        { name: 'JavaScript/TypeScript', level: 90 },
        { name: 'React/Next.js', level: 85 },
        { name: 'HTML/CSS', level: 90 },
        { name: 'Tailwind CSS', level: 80 }
      ]
    },
    {
      category: 'Backend Development',
      icon: <Database className="h-6 w-6" />,
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'SQL/PostgreSQL', level: 80 },
        { name: 'REST APIs', level: 85 },
        { name: 'GraphQL', level: 70 }
      ]
    },
    {
      category: 'Cloud & DevOps',
      icon: <Cloud className="h-6 w-6" />,
      skills: [
        { name: 'AWS', level: 75 },
        { name: 'Docker', level: 70 },
        { name: 'CI/CD', level: 75 },
        { name: 'Git', level: 90 }
      ]
    },
    {
      category: 'Mobile & Tools',
      icon: <Smartphone className="h-6 w-6" />,
      skills: [
        { name: 'React Native', level: 65 },
        { name: 'Webpack/Vite', level: 75 },
        { name: 'Jest/Testing', level: 80 },
        { name: 'Figma', level: 70 }
      ]
    }
  ];

  const softSkills = [
    {
      name: 'Problem Solving',
      icon: <Target className="h-8 w-8 text-blue-600" />,
      description: 'Breaking down complex problems into manageable solutions'
    },
    {
      name: 'Team Collaboration',
      icon: <Users className="h-8 w-8 text-green-600" />,
      description: 'Working effectively in cross-functional teams'
    },
    {
      name: 'Communication',
      icon: <MessageSquare className="h-8 w-8 text-purple-600" />,
      description: 'Explaining technical concepts to various stakeholders'
    },
    {
      name: 'Adaptability',
      icon: <Zap className="h-8 w-8 text-orange-600" />,
      description: 'Quickly learning new technologies and methodologies'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Technical Skills & Expertise</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive overview of my technical proficiencies and soft skills developed through years of hands-on experience.
          </p>
        </div>

        {/* Technical Skills */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {technicalSkills.map((category, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="text-blue-600 mr-3">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{category.category}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-gray-500 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Core Competencies</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {softSkills.map((skill, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
                <div className="flex justify-center mb-4">
                  {skill.icon}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{skill.name}</h4>
                <p className="text-gray-600 text-sm">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;