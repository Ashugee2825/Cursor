import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Website Development",
      description: "Transform your online presence with custom-built websites that showcase your brand and engage your audience.",
      link: "/website-development",
      icon: "https://cdn.pixabay.com/photo/2016/11/29/09/32/analysis-1861158_1280.jpg"
    },
    {
      id: 2,
      title: "Ecommerce Website Development",
      description: "Launch your online store and reach customers worldwide with our scalable and secure ecommerce solutions.",
      link: "/ecommerce-development",
      icon: "https://cdn.pixabay.com/photo/2017/01/10/19/05/ecommerce-1971200_1280.jpg"
    },
    {
      id: 3,
      title: "Mobile Application Development",
      description: "Stay ahead of the curve with intuitive and feature-rich mobile apps designed to elevate your business.",
      link: "/app-development",
      icon: "https://cdn.pixabay.com/photo/2015/01/08/18/25/startup-593341_1280.jpg"
    },
    {
      id: 4,
      title: "Web Hosting",
      description: "Secure and reliable hosting solutions tailored to your specific requirements, ensuring maximum uptime and performance.",
      link: "/web-hosting",
      icon: "https://cdn.pixabay.com/photo/2016/03/09/09/30/server-1245959_1280.jpg"
    },
    {
      id: 5,
      title: "Digital Marketing",
      description: "Amplify your brand reach and drive targeted traffic to your website through our strategic digital marketing services.",
      link: "/digital-marketing",
      icon: "https://cdn.pixabay.com/photo/2017/08/10/07/32/social-media-2617226_1280.jpg"
    },
    {
      id: 6,
      title: "Graphic Designing",
      description: "Bring your brand to life with visually stunning graphics and designs that leave a lasting impression.",
      link: "/graphic-designing",
      icon: "https://cdn.pixabay.com/photo/2015/01/08/18/25/entrepreneur-593358_1280.jpg"
    },
    {
      id: 7,
      title: "Printing Services",
      description: "Bring your ideas to life with high-quality prints and designs that make a lasting impact.",
      link: "/printing-services",
      icon: "https://cdn.pixabay.com/photo/2016/11/29/09/32/analysis-1861158_1280.jpg"
    },
    {
      id: 8,
      title: "Video Production",
      description: "Bring your vision to life with captivating videos and productions that leave a lasting impression.",
      link: "/video-production",
      icon: "https://cdn.pixabay.com/photo/2016/03/27/21/16/video-1284506_1280.jpg"
    }
  ];

  return (
    <div className="home2-service-section two scroll-margin mb-120" id="service-section">
      <div className="container">
        <div className="row mb-40">
          <div className="col-lg-12 wow animate fadeInDown">
            <div className="section-title5 two">
              <span className="sub-title5 two">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                  <path d="M3.7081 12.9544C3.41861 13.1128 3.09011 12.8352 3.14861 12.4808L3.7711 8.69694L1.12886 6.01223C0.882112 5.76104 1.01036 5.30186 1.34111 5.25226L5.0146 4.69548L6.6526 1.23399C6.80035 0.922003 7.2001 0.922003 7.34785 1.23399L8.98584 4.69548L12.6593 5.25226C12.9901 5.30186 13.1183 5.76104 12.8708 6.01223L10.2293 8.69694L10.8518 12.4808C10.9103 12.8352 10.5818 13.1128 10.2923 12.9544L6.9991 11.1497L3.7081 12.9544Z"></path>
                </svg>
                Our Services
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                  <path d="M3.7081 12.9544C3.41861 13.1128 3.09011 12.8352 3.14861 12.4808L3.7711 8.69694L1.12886 6.01223C0.882112 5.76104 1.01036 5.30186 1.34111 5.25226L5.0146 4.69548L6.6526 1.23399C6.80035 0.922003 7.2001 0.922003 7.34785 1.23399L8.98584 4.69548L12.6593 5.25226C12.9901 5.30186 13.1183 5.76104 12.8708 6.01223L10.2293 8.69694L10.8518 12.4808C10.9103 12.8352 10.5818 13.1128 10.2923 12.9544L6.9991 11.1497L3.7081 12.9544Z"></path>
                </svg>
              </span>
              <h2>Explore Our Services</h2>
            </div>
          </div>
        </div>

        <div className="row g-4">
          {services.map((service) => (
            <div key={service.id} className="col-lg-4 p-3">
              <div className="card it-planet-website-development-services">
                <div className="card-body p-2">
                  <center>
                    <img src={service.icon} className="img-fluid mb-3 rounded shadow" alt={service.title} style={{ maxHeight: '120px', objectFit: 'cover' }} />
                    <h2>{service.title}</h2>
                    <p>{service.description}</p>
                    <Link className="explore-btn" to={service.link}>
                      Learn More
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.1865 1.06237L0 11.2484L0.751627 12L10.9376 1.81347V8.85645H12V0H3.14355V1.06237H10.1865Z" />
                      </svg>
                    </Link>
                  </center>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;