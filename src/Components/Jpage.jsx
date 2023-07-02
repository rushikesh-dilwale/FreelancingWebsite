import React from 'react';

const JavaDevelopersPage = () => {
  const javaDevelopers = [
    {
      name: 'Sergei P.',
      hourlyRate: '$130',
      role: 'Java Developer',
      rating: '5.0/5',
      jobsCompleted: 7,
      skills: [
        'Java',
        'iOS Development',
        'Flutter',
        'Swift',
        'Objective-C',
        'Apple TV Application',
        'Kotlin',
        'SQL',
        'Python',
        'Fire OS',
        'iOS',
        'Android',
        'API Integration',
      ],
    },
    {
      name: 'Brian L.',
      hourlyRate: '$65',
      role: 'Java Developer',
      rating: '5.0/5',
      jobsCompleted: 36,
      skills: [
        'Java',
        'Java EE',
        'JavaScript',
        'jQuery',
        'HTML',
        'Spring Framework',
        'Adobe Experience Manager',
        'Java Servlet API',
        'Jakarta Server Pages',
        'CSS',
      ],
    },
    {
      name: 'Kyle M.',
      hourlyRate: '$100',
      role: 'Java Developer',
      rating: '5.0/5',
      jobsCompleted: 15,
      skills: [
        'Java',
        'Angular 6',
        'Mulesoft',
        'Dell Boomi',
        'HTML',
        'CSS',
        'JavaScript',
        'TypeScript',
        'Test-Driven Development',
      ],
    },
    {
      name: 'Oleksandr I.',
      hourlyRate: '$44',
      role: 'Java Developer',
      rating: '5.0/5',
      jobsCompleted: 54,
      skills: [
        'Java',
        'Android',
        'Mobile App Development',
        'Kotlin',
        'Flutter',
        'Android App Development',
        'Android SDK',
        'Smartphone',
        'Firebase',
      ],
    },
    {
      name: 'Scrob N.',
      hourlyRate: '$60',
      role: 'Java Developer',
      rating: '5.0/5',
      jobsCompleted: 9,
      skills: ['Java'],
    },
    {
      name: 'Dmitriy S.',
      hourlyRate: '$40',
      role: 'Java Developer',
      rating: '5.0/5',
      jobsCompleted: 2,
      skills: [
        'Java',
        'Android App Development',
        'Kotlin',
        'SQLite',
        'Mobile UI Design',
        'REST',
        'Android Studio',
        'Firebase',
        'Retrofit',
        'Coroutine',
      ],
    },
    {
      name: 'Benjamin C.',
      hourlyRate: '$16',
      role: 'Java Developer',
      rating: '4.6/5',
      jobsCompleted: 69,
      skills: [
        'Java',
        'AJAX',
        'C#',
        'C++',
        'CSS',
        'HTML5',
        'JavaScript',
        'jQuery',
        'JSON',
        'WordPress',
        'Angular',
      ],
    },
    {
      name: 'Thomas B.',
      hourlyRate: '$50',
      role: 'Java Developer',
      rating: '5.0/5',
      jobsCompleted: 10,
      skills: [
        'Java',
        'Unity',
        'Game Development',
        'HTML5',
        'GameMaker',
        'Game Asset',
        '2D Game Art',
        '3D Modeling',
        '3D Rigging',
        'C#',
        'eBay',
        'eBay API',
        'PC Game',
        'Kotlin',
        'Game Design',
      ],
    },
    {
      name: 'Oleksandr T.',
      hourlyRate: '$45',
      role: 'Java Developer',
      rating: '5.0/5',
      jobsCompleted: 16,
      skills: [
        'Java',
        'Android App Development',
        'HTML5',
        'Gradle',
        'Python',
        'Python Pandas',
        'PyTorch',
      ],
    },
    {
      name: 'Rafael Jose L.',
      hourlyRate: '$60',
      role: 'Java Developer',
      rating: '5.0/5',
      jobsCompleted: 4,
      skills: [
        'Java',
        'Spring Framework',
        'Scrum',
        'Agile Project Management',
        'Design Pattern',
        'Software Architecture & Design',
        'Leadership Skills',
        'HTML5',
        'JavaScript',
        'SAP Hybris',
        'API Integration',
        'React',
        'Web Application',
        'Business with 10-99 Employees',
      ],
    },
    {
      name: 'Mikheil P.',
      hourlyRate: '$40',
      role: 'Java Developer',
      rating: '5.0/5',
      jobsCompleted: 21,
      skills: [
        'Java',
        'User Interface Design',
        'SQL',
        'Game Development',
        'OpenGL',
        'MQTT',
        'Git',
        'JavaFX',
        'IntelliJ IDEA',
        'Desktop Application',
      ],
    },
    {
      name: 'Deepak S.',
      hourlyRate: '$15',
      role: 'Java Developer',
      rating: '5.0/5',
      jobsCompleted: 11,
      skills: [
        'Java',
        'Android',
        'Android Studio',
        'Android App Development',
        'Android Room Persistence',
        'RESTful API',
        'Kotlin',
        'React Native',
        'JavaScript',
      ],
    },
  ];

  return (
    <div>
      <h1>Java Developers</h1>
      <div className="developer-cards">
        {javaDevelopers.map((developer, index) => (
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

export default JavaDevelopersPage;
