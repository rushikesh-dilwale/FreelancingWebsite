import React from 'react';

const AboutPage = () => {
  const websiteName = <strong>Freelancer Hub</strong>;
  const websiteDescription = <strong>Connecting freelancers and clients worldwide</strong>;
  const founder = <strong>Rushikesh Dilwale</strong>;
  const yearFounded = <strong>2023</strong>;
  const totalFreelancers = <strong>5000</strong>;
  const totalClients = <strong>1000</strong>;

  return (
    <div className="about-page">
      <h2>About Us</h2>
      <p>
        Welcome to {websiteName} - {websiteDescription}. We are a platform that brings together talented freelancers and clients from around the globe. 
        Since our establishment in {yearFounded}, we have been dedicated to creating opportunities and empowering individuals in the freelance industry.
      </p>
      <p>
        Our mission is to connect clients with the right freelancers, making it easier for businesses to find the perfect talent for their projects, and for freelancers 
        to showcase their skills and expertise. With a community of over {totalFreelancers} freelancers and {totalClients} clients, we offer a diverse range of 
        services across various industries.
      </p>
      <p>
        At {websiteName}, we believe in the power of collaboration, flexibility, and innovation. Our platform provides a seamless and secure environment for freelancers 
        and clients to connect, collaborate, and succeed together. Whether you're a freelancer looking for your next gig or a client in need of top-notch talent, 
        we've got you covered.
      </p>
      <p>
        Join us today and be part of the {websiteName} community. Together, let's unlock the potential of freelancing and create amazing opportunities worldwide.
      </p>
      <p>
        Founder: {founder}
      </p>
    </div>
  );
};

export default AboutPage;
