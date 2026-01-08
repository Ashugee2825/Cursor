import React from 'react';

const Hero = () => {
  return (
    <section className="hero-section d-flex align-items-center" style={{ minHeight: '70vh', background: 'linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url(https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80) center/cover no-repeat' }}>
      <div className="container text-center text-white">
        <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" alt="Ashutosh Planet Hero" className="img-fluid rounded shadow mb-4 d-block mx-auto" style={{ maxWidth: '200px' }} />
        <h1 className="display-4 fw-bold mb-3">Ashutosh Planet</h1>
        <p className="lead mb-4">Professional Website, App Development & Digital Solutions by Ashutosh Kumar</p>
        <a href="#service-section" className="btn btn-primary btn-lg">Explore Services</a>
      </div>
    </section>
  );
};

export default Hero;