import React from 'react';
import CountUp from 'react-countup';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section className="about-section section-padding bg-light">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <img src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=600&q=80" alt="About Ashutosh Kumar" className="img-fluid rounded shadow" />
          </div>
          <div className="col-lg-6">
            <h2 className="mb-3">About Ashutosh Planet</h2>
            <p>मैं Ashutosh Kumar, एक पैशनेट फुल-स्टैक डेवलपर और डिजिटल क्रिएटर हूँ। मेरा मिशन है टेक्नोलॉजी से लोगों और बिज़नेस को आगे बढ़ाना।</p>
            <ul className="list-unstyled">
              <li><b>मोबाइल:</b> <a href="tel:8340584879">+91 83405 84879</a></li>
              <li><b>ईमेल:</b> <a href="mailto:ashutoshkumargee@gmail.com">ashutoshkumargee@gmail.com</a></li>
            </ul>
            <a href="https://github.com/Ashugee2825" className="btn btn-dark mt-3" target="_blank" rel="noopener noreferrer">My GitHub</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;