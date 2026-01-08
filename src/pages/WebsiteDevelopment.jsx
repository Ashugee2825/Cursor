import React from 'react';

const WebsiteDevelopment = () => {
  const services = [
    {
      title: "Corporate Website Development",
      description: "Professional websites that showcase your brand identity and communicate your business value proposition effectively.",
      features: ["Responsive Design", "CMS Integration", "SEO-Friendly Structure", "Contact Forms", "Blog Integration"]
    },
    {
      title: "E-commerce Development",
      description: "Feature-rich online stores with secure payment gateways, inventory management, and seamless user experience.",
      features: ["Product Catalogs", "Shopping Cart", "Payment Gateway Integration", "Order Management", "User Accounts"]
    },
    {
      title: "Custom Web Applications",
      description: "Tailor-made solutions for your unique business processes and requirements.",
      features: ["CRM Systems", "ERP Solutions", "Booking Systems", "Custom Dashboards", "API Integration"]
    },
    {
      title: "WordPress Development",
      description: "Flexible and scalable websites using the world's most popular content management system.",
      features: ["Theme Customization", "Plugin Development", "WooCommerce", "Multilingual Sites", "Performance Optimization"]
    }
  ];

  

  return (
    <div className="container my-5 py-5">
      <div className="text-center mb-5">
        <h1>Professional Website Development Services</h1>
        <p className="lead">Transform your online presence with custom websites that drive results</p>
      </div>
      
      <div className="row">
        {services.map((service, index) => (
          <div className="col-lg-6 mb-4" key={index}>
            <div className="card h-100">
              <div className="card-body">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul>
                  {service.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="row mt-5">
        <div className="col-lg-6">
          <div className="card">
            <div className="card-body">
              <h3>Our Development Process</h3>
              <ol>
                <li><strong>Requirement Analysis:</strong> Understanding your business goals and target audience</li>
                <li><strong>Planning & Strategy:</strong> Creating a detailed project roadmap</li>
                <li><strong>Design & Prototyping:</strong> Crafting intuitive user interfaces</li>
                <li><strong>Development:</strong> Building with modern technologies</li>
                <li><strong>Testing & Quality Assurance:</strong> Ensuring flawless performance</li>
                <li><strong>Deployment & Launch:</strong> Going live with precision</li>
                <li><strong>Maintenance & Support:</strong> Ongoing optimization and updates</li>
              </ol>
            </div>
          </div>
        </div>
        
        <div className="col-lg-6">
          <div className="card">
            <div className="card-body">
              <h3>Technologies We Use</h3>
              <div className="row">
                <div className="col-md-6">
                  <h5>Frontend</h5>
                  <ul>
                    <li>HTML5, CSS3, JavaScript</li>
                    <li>React.js, Angular, Vue.js</li>
                    <li>Bootstrap, Tailwind CSS</li>
                    <li>jQuery, AJAX</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <h5>Backend</h5>
                  <ul>
                    <li>PHP, Python, Node.js</li>
                    <li>Laravel, Django, Express</li>
                    <li>MySQL, MongoDB</li>
                    <li>RESTful APIs, GraphQL</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebsiteDevelopment;