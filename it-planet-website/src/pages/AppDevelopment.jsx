import React from 'react';

const AppDevelopment = () => {
  const services = [
    {
      title: "iOS App Development",
      description: "Native iOS applications built with Swift and Objective-C for optimal performance on Apple devices.",
      features: ["iPhone & iPad Apps", "Apple Watch Apps", "iOS SDK Integration", "App Store Submission"]
    },
    {
      title: "Android App Development",
      description: "Native Android applications using Java and Kotlin for seamless performance across all Android devices.",
      features: ["Material Design", "Google Play Integration", "Android SDK", "Device Compatibility"]
    },
    {
      title: "Cross-Platform Apps",
      description: "Single codebase applications that run on both iOS and Android using React Native and Flutter.",
      features: ["React Native", "Flutter", "Code Reusability", "Native-like Performance"]
    },
    {
      title: "Progressive Web Apps",
      description: "Web applications that deliver app-like experiences with offline functionality and push notifications.",
      features: ["Service Workers", "Web App Manifest", "Offline Capabilities", "App-like UI/UX"]
    }
  ];

  const process = [
    { step: 1, title: "Concept & Strategy", description: "Defining app objectives, target audience, and core features" },
    { step: 2, title: "UI/UX Design", description: "Creating intuitive user interfaces and seamless user experiences" },
    { step: 3, title: "Development", description: "Coding with modern frameworks and following best practices" },
    { step: 4, title: "Testing & QA", description: "Rigorous testing across devices and operating systems" },
    { step: 5, title: "Deployment", description: "App store submission and launch management" },
    { step: 6, title: "Maintenance", description: "Regular updates, feature additions, and performance optimization" }
  ];

  return (
    <div className="container my-5 py-5">
      <div className="text-center mb-5">
        <h1>Mobile App Development Services</h1>
        <p className="lead">Transform your ideas into powerful mobile experiences</p>
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
              <h3>Our Development Process</h3>
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
              <h3>Technologies We Use</h3>
              <div className="row">
                <div className="col-md-6">
                  <h5>Native Development</h5>
                  <ul>
                    <li>Swift & Objective-C (iOS)</li>
                    <li>Kotlin & Java (Android)</li>
                    <li>Xcode & Android Studio</li>
                    <li>Apple Human Interface Guidelines</li>
                    <li>Material Design Principles</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <h5>Cross-Platform</h5>
                  <ul>
                    <li>React Native</li>
                    <li>Flutter</li>
                    <li>Ionic</li>
                    <li>Xamarin</li>
                    <li>NativeScript</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4">
                <h5>Backend Integration</h5>
                <ul>
                  <li>Firebase</li>
                  <li>Node.js</li>
                  <li>RESTful APIs</li>
                  <li>GraphQL</li>
                  <li>Cloud Functions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDevelopment;