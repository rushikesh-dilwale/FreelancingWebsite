import React from 'react';

const DevelopmentITPage = () => {
  const developers = [
    { name: 'Java Developers', rating: 4.8 },
    { name: 'PHP Developers', rating: 4.8 },
    { name: 'JavaScript Developers', rating: 4.8 },
    { name: 'iOS Developers', rating: 4.7 },
    { name: 'QA Engineers', rating: 4.9 },
    { name: 'Data Scientists', rating: 4.9 },
    { name: 'Infrastructure Engineers', rating: 4.9 },
    { name: 'SQL Developers', rating: 4.8 },
  ];

  return (
    <div>
      <h1>Development & IT</h1>
      <div className="developer-cards">
        {developers.map((developer, index) => (
          <div key={index} className="developer-card">
            <h2>{developer.name}</h2>
            <p>{developer.rating}/5 average rating</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DevelopmentITPage;
