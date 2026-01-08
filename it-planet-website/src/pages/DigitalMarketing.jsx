import React from 'react';

const DigitalMarketing = () => {
  const services = [
    {
      title: "Search Engine Optimization (SEO)",
      description: "Improve your website's visibility on search engines and drive organic traffic.",
      features: ["Keyword Research", "On-Page Optimization", "Technical SEO", "Link Building", "Local SEO"]
    },
    {
      title: "Pay-Per-Click Advertising (PPC)",
      description: "Drive targeted traffic to your website with strategic paid advertising campaigns.",
      features: ["Google Ads", "Facebook Ads", "Instagram Ads", "LinkedIn Ads", "Remarketing"]
    },
    {
      title: "Social Media Marketing",
      description: "Build brand awareness and engage with your audience on social platforms.",
      features: ["Content Strategy", "Community Management", "Influencer Marketing", "Social Media Advertising", "Analytics & Reporting"]
    },
    {
      title: "Content Marketing",
      description: "Create valuable content that attracts and converts your target audience.",
      features: ["Blog Content", "Video Content", "Infographics", "E-books & Whitepapers", "Email Newsletters"]
    }
  ];

  const process = [
    { step: 1, title: "Strategy Development", description: "Defining goals, target audience, and KPIs" },
    { step: 2, title: "Implementation", description: "Executing campaigns across selected channels" },
    { step: 3, title: "Monitoring", description: "Tracking performance in real-time" },
    { step: 4, title: "Analysis", description: "Evaluating campaign effectiveness" },
    { step: 5, title: "Optimization", description: "Refining strategies based on data insights" },
    { step: 6, title: "Reporting", description: "Providing detailed performance reports" }
  ];

  return (
    <div className="container my-5 py-5">
      <div className="text-center mb-5">
        <h1>Digital Marketing Services</h1>
        <p className="lead">Grow your online presence and reach your target audience effectively</p>
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
          <div className="card mb-4">
            <div className="card-body">
              <h3>Our Digital Marketing Process</h3>
              <div className="timeline">
                {process.map((item) => (
                  <div className="timeline-item" key={item.step}>
                    <div className="timeline-step">{item.step}</div>
                    <div className="timeline-content">
                      <h5>{item.title}</h5>
                      <p>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="col-lg-6">
          <div className="card">
            <div className="card-body">
              <h3>Why Choose Our Digital Marketing Services</h3>
              <ul>
                <li><strong>Data-Driven Strategies:</strong> Decisions based on analytics and insights</li>
                <li><strong>Transparent Reporting:</strong> Clear and detailed performance metrics</li>
                <li><strong>Industry Expertise:</strong> Knowledge of the latest trends and algorithms</li>
                <li><strong>Customized Solutions:</strong> Tailored to your business objectives</li>
                <li><strong>ROI-Focused:</strong> Maximizing return on your marketing investment</li>
                <li><strong>Multi-Channel Approach:</strong> Integrated campaigns across platforms</li>
              </ul>
              
              <div className="mt-4">
                <h4>Tools We Use</h4>
                <div className="row">
                  <div className="col-md-6">
                    <ul>
                      <li>Google Analytics</li>
                      <li>Google Search Console</li>
                      <li>SEMrush</li>
                      <li>Ahrefs</li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <ul>
                      <li>Mailchimp</li>
                      <li>Hootsuite</li>
                      <li>Canva</li>
                      <li>Hotjar</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalMarketing;