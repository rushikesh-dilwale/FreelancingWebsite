import React from 'react';
// import { Link } from 'react-router-dom';

const ServicesPage = () => {
  const services = [
    {
      title: 'Development & IT',
      rating: '4.85/5',
      skills: '1853 skills'
    },
    {
      title: 'AI Services',
      rating: '4.8/5',
      skills: '294 skills'
    },
    {
      title: 'Design & Creative',
      rating: '4.91/5',
      skills: '968 skills'
    },
    {
      title: 'Sales & Marketing',
      rating: '4.77/5',
      skills: '392 skills'
    },
    {
      title: 'Writing & Translation',
      rating: '4.92/5',
      skills: '505 skills'
    },
    {
      title: 'Admin & Customer Support',
      rating: '4.77/5',
      skills: '508 skills'
    },
    {
      title: 'Finance & Accounting',
      rating: '4.79/5',
      skills: '214 skills'
    },
    {
      title: 'Engineering & Architecture',
      rating: '4.85/5',
      skills: '650 skills'
    }
  ];

  return (



    
    <div>
     
        {/* <Link to="/services/development-it">Development & IT</Link> */}
         <nav className="navbar">
        <div className="navbar-brand">
          <a href="/">Freelancing Site</a>
        </div>
        <div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="/">Home</a>
            </li>
            <li className="nav-item">
              <a href="/about">About</a>
            </li>
            <li className="nav-item">
              <a href="/services">Services</a>
            </li>
            
            <li className="nav-item">
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
       
      </nav>



      <h1>Services</h1>

      <div className="service-cards">
        {services.map(service => (
          <div className="service-card" key={service.title}>
             
            <h2>{service.title}</h2>
            <p>{service.rating}</p>
            <p>{service.skills}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
