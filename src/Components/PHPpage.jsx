import React, { useEffect } from 'react';

const PHPDevelopersPage = () => {
    
  const phpDevelopers = [
    {
      name: 'Ihor I.',
      hourlyRate: '$43',
      role: 'PHP Developer',
      rating: '5.0/5',
      jobsCompleted: 35,
      skills: [
        'PHP',
        'WordPress',
        'JavaScript',
        'Joomla',
        'Kohana',
        'jQuery',
        'MySQL Programming',
        'HTML5',
        'CSS 3',
        'SOAP',
      ],
    },
    {
      name: 'Gabriel G.',
      hourlyRate: '$33',
      role: 'PHP Developer',
      rating: '5.0/5',
      jobsCompleted: 15,
      skills: [
        'PHP',
        'WordPress',
        'e-Commerce',
        'Web Development',
        'WordPress Development',
        'Business with 1-9 Employees',
        'MySQL',
        'JavaScript',
        'HTML',
        'WooCommerce',
        'WordPress Theme',
        'WordPress Plugin',
        'HTML5',
        'CSS',
        'Website Redesign',
        'WordPress',
      ],
    },
    {
      name: 'Rance E.',
      hourlyRate: '$75',
      role: 'PHP Developer',
      rating: '4.9/5',
      jobsCompleted: 5,
      skills: [
        'PHP',
        'HTML',
        'JavaScript',
        'jQuery',
        'MySQL',
        'WordPress',
        'Google Analytics',
        'CSS',
        'Magento',
        'Web Design',
      ],
    },
    {
      name: 'Daniel H.',
      hourlyRate: '$60',
      role: 'PHP Developer',
      rating: '5.0/5',
      jobsCompleted: 33,
      skills: ['PHP', 'WordPress', 'CSS 3', 'HTML5', 'JavaScript', 'jQuery'],
    },
    {
      name: 'Gagandeep S.',
      hourlyRate: '$20',
      role: 'PHP Developer',
      rating: '5.0/5',
      jobsCompleted: 5,
      skills: [
        'PHP',
        'API',
        'CodeIgniter',
        'Laravel',
        'Web Development',
        'React',
        'React Native',
        'AngularJS',
        'JavaScript',
      ],
    },
    {
      name: 'Biruk A.',
      hourlyRate: '$50',
      role: 'PHP Developer',
      rating: '4.9/5',
      jobsCompleted: 60,
      skills: [
        'PHP',
        'JavaScript',
        'Python',
        'Laravel',
        'Django',
        'Angular',
        'React',
        'Android',
        'Node.js',
        'DevOps',
        'GitHub',
        'Express.js',
        'Socket.io',
        'Graphic Design',
        'Automated Deployment Pipeline',
      ],
    },
    {
      name: 'Fernando R.',
      hourlyRate: '$16',
      role: 'PHP Developer',
      rating: '5.0/5',
      jobsCompleted: 45,
      skills: [
        'PHP',
        'MySQL',
        'JavaScript',
        'HTML',
        'Google Maps API',
        'Website Development',
        'Yii',
        'Laravel',
      ],
    },
  ];

  return (
    <div>
      <h1>PHP Developers</h1>
      <div className="developer-cards">
        {phpDevelopers.map((developer, index) => (
          <div key={index} className="developer-card">
            <h2>{developer.name}</h2>
            <p>Hourly Rate: {developer.hourlyRate}</p>
            <p>{developer.role}</p>
            <p>
              {developer.rating} ({developer.jobsCompleted} jobs)
            </p>
            <div className="skills">
              <p>Trophy Icon</p>
              {developer.skills.map((skill, index) => (
                <span key={index}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PHPDevelopersPage;









