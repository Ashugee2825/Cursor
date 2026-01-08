import React from 'react';

const GraphicDesigning = () => {
  const services = [
    {
      title: "Brand Identity Design",
      description: "Create a memorable brand identity that resonates with your audience.",
      features: ["Logo Design", "Business Cards", "Letterheads", "Brand Guidelines", "Brand Style Guides"]
    },
    {
      title: "Marketing Materials",
      description: "Design compelling marketing collateral that drives engagement and conversions.",
      features: ["Brochures", "Flyers", "Posters", "Banners", "Signage"]
    },
    {
      title: "Digital Graphics",
      description: "Eye-catching visuals for your digital platforms and campaigns.",
      features: ["Social Media Graphics", "Email Templates", "Web Banners", "Infographics", "Presentations"]
    },
    {
      title: "Packaging Design",
      description: "Create packaging that stands out on shelves and communicates your brand values.",
      features: ["Product Packaging", "Labels", "Box Design", "Shopping Bags", "Packaging Mockups"]
    }
  ];

  const process = [
    { step: 1, title: "Discovery", description: "Understanding your brand and objectives" },
    { step: 2, title: "Research", description: "Analyzing industry trends and competitors" },
    { step: 3, title: "Concept Development", description: "Creating initial design concepts" },
    { step: 4, title: "Design Creation", description: "Developing the selected concept" },
    { step: 5, title: "Revisions", description: "Refining based on your feedback" },
    { step: 6, title: "Delivery", description: "Providing final files in required formats" }
  ];

  return (
    <div className="container my-5 py-5">
      <div className="text-center mb-5">
        <h1>Professional Graphic Design Services</h1>
        <p className="lead">Transform your brand with visually stunning designs that make an impact</p>
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
              <h3>Our Design Process</h3>
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
              <h3>Design Tools & Technologies</h3>
              <div className="row">
                <div className="col-md-6">
                  <h5>Adobe Creative Suite</h5>
                  <ul>
                    <li>Photoshop</li>
                    <li>Illustrator</li>
                    <li>InDesign</li>
                    <li>After Effects</li>
                    <li>Premiere Pro</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <h5>Other Tools</h5>
                  <ul>
                    <li>Figma</li>
                    <li>Sketch</li>
                    <li>Canva</li>
                    <li>CorelDRAW</li>
                    <li>Procreate</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-4">
                <h4>Why Choose Our Design Services</h4>
                <ul>
                  <li>Creative and experienced design team</li>
                  <li>Custom solutions tailored to your brand</li>
                  <li>Quick turnaround times</li>
                  <li>Unlimited revisions until you're satisfied</li>
                  <li>High-quality deliverables in multiple formats</li>
                  <li>Consistent brand messaging across all materials</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GraphicDesigning;