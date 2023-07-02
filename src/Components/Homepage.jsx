import React, { useState } from "react";

const Homepage = () => {
  return (
    <div>
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
      <div className="homepage-content">
        <h1>Welcome to our Freelancing Website</h1>

        <div className="data">
          <p className="para">
            <h2 className="green">
              How work
              <br />
              should work
            </h2>
            Forget the old rules.
            <br /> You can have the best people.
            <br />
            Right now. Right here.
            <div>
              <button className="cta-button">Get Started</button>
            </div>
          </p>
          <img
            src="https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload/c_scale,w_580,h_580,f_auto,q_auto,dpr_2.0/brontes/hero/globe@1x.jpg"
            alt="img"
          />
        </div>
      </div>
      <div className="main">
        <div className="sub">
          <h1>Why businesses turn to our site</h1>
          <ul>
            <h2>Proof of quality</h2>
            <p>
              Check any pro’s work samples, client reviews, and identity
              verification.
            </p>
            <h2>No cost until you hire</h2>
            <p>
              Interview potential fits for your job, negotiate rates, and only
              pay for work you approve.
            </p>
            <h2>Safe and secure</h2>
            <p>
              Focus on your work knowing we help protect your data and privacy.
              We’re here with 24/7 support if you need it.
            </p>
          </ul>
        </div>
        <img
          className="firstimg"
          src="https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload/c_scale,w_357,h_694,q_auto,dpr_2.0,f_auto/brontes/why-upwork/reaching-person@2x.png"
          alt="img"
        />
        <p>
          <h1 className="hh">We’re the world’s work marketplace</h1>
        </p>
      </div>

      <div className="subpage">
        <img
          className="imgpp"
          src="https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload//q_auto,dpr_2.0,f_auto/brontes/for-talents/find-great-work@2x.jpg"
          alt="img"
        />
        <div className="subpagedata">
          <h1 className="work">Find great work</h1>
          <p>
            Meet clients you’re excited to work with and take your career or
            business to new heights.
          </p>
        </div>
      </div>
      <div className="bg">
        <h1 className="bgdata">
          Suddenly it's all so doable.
          <br />
          <button className="bgbt">Join</button>
        </h1>
      </div>
      <div className="endmain">
        <ul>
          <h3>For Clients</h3>
          <p className="endp">
            {" "}
            How to Hire Talent Marketplace Project Catalog Talent Scout Hire an
            Agency Enterprise Any Hire Contract-to-Hire Direct Contracts Hire
            Worldwide Hire in the USA
          </p>
        </ul>
        <div >
          <ul>
            <h3 className="curs">For Talent</h3></ul>
            <ul>How to Find Work</ul>
            <ul>Direct Contracts</ul>
            <ul>Find Freelance Jobs Worldwide</ul>
            <ul>Find Freelance Jobs in the USA</ul>
          
        </div>
        <div>
         
           <ul> <h3>Resources</h3></ul>
            <ul> Help & Support</ul>
            <ul>Success Stories</ul>
            <ul> Upwork Reviews</ul>
            <ul>Resources</ul>
            <ul>Blog</ul>
            <ul>Community Affiliate </ul>
            <ul>  Program Free Business tools</ul>
          
        </div>
      </div>
    </div>
  );
};

export default Homepage;
