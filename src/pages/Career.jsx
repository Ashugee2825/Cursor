import React, { useState } from 'react';

const Career = () => {
  const [activeTab, setActiveTab] = useState('positions');
  
  const positions = [
    {
      title: "Frontend Developer",
      type: "Full-time",
      location: "Navi Mumbai",
      experience: "2+ years",
      description: "We are looking for a skilled Frontend Developer to join our team. You will be responsible for building user interfaces using React.js and ensuring high performance on both web and mobile applications."
    },
    {
      title: "UI/UX Designer",
      type: "Full-time",
      location: "Pune",
      experience: "3+ years",
      description: "Join our design team to create amazing user experiences. You should have a strong portfolio showcasing your design skills and experience with design tools like Figma, Adobe XD, or Sketch."
    },
    {
      title: "Digital Marketing Specialist",
      type: "Part-time",
      location: "Remote",
      experience: "1+ years",
      description: "We need a Digital Marketing Specialist to manage our clients' online presence. Responsibilities include SEO, social media management, and running paid advertising campaigns."
    },
    {
      title: "Backend Developer (Node.js)",
      type: "Full-time",
      location: "Navi Mumbai",
      experience: "3+ years",
      description: "Looking for an experienced Node.js developer to build scalable backend services. You should be proficient in RESTful API design, database management, and cloud services."
    }
  ];

  const internships = [
    {
      title: "Web Development Intern",
      duration: "3 months",
      location: "Navi Mumbai",
      description: "Learn frontend and backend development while working on real client projects. Ideal for students pursuing computer science or related fields."
    },
    {
      title: "Graphic Design Intern",
      duration: "2 months",
      location: "Pune",
      description: "Gain practical experience in creating visual content for digital and print media. Work under the guidance of our senior designers."
    },
    {
      title: "Digital Marketing Intern",
      duration: "3 months",
      location: "Remote",
      description: "Learn SEO, social media marketing, and content creation while working with our marketing team on live campaigns."
    }
  ];

  return (
    <div className="container my-5 py-5">
      <div className="text-center mb-5">
        <h1>Career Opportunities at IT Planet</h1>
        <p className="lead">Join our team of passionate professionals and grow your career</p>
      </div>
      
      <div className="row">
        <div className="col-lg-8 mx-auto">
          <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80" alt="Career at Ashutosh Planet" className="img-fluid rounded shadow mb-4" />
          <h1 className="text-center mb-4">Career at Ashutosh Planet</h1>
          <div className="card">
            <div className="card-body">
              <h3>About Ashutosh Kumar</h3>
              <ul>
                <li><b>मोबाइल:</b> <a href="tel:8340584879">+91 83405 84879</a></li>
                <li><b>ईमेल:</b> <a href="mailto:ashutoshkumargee@gmail.com">ashutoshkumargee@gmail.com</a></li>
                <li><b>Facebook:</b> <a href="https://www.facebook.com/ashu.don.3139?eav=AfYxRo5DnV0kX28cpOPdMH3TFYqr8JPmRq72chQCKMwYOJFZYvaKr2F8uDFdvd2M92c&paipv=0&_rdr" target="_blank">ashu.don.3139</a></li>
                <li><b>GitHub:</b> <a href="https://github.com/Ashugee2825" target="_blank">Ashugee2825</a></li>
                <li><b>LinkedIn:</b> <a href="https://www.linkedin.com/in/ashutosh-kumar-b48b1519b/" target="_blank">ashutosh-kumar-b48b1519b</a></li>
                <li><b>HackerRank:</b> <a href="https://www.hackerrank.com/ashutoshkumargee" target="_blank">ashutoshkumargee</a></li>
                <li><b>Sololearn:</b> <a href="https://www.sololearn.com/profile/15298175" target="_blank">sololearn.com/profile/15298175</a></li>
                <li><b>CodePen:</b> <a href="https://codepen.io/ashugee2825" target="_blank">ashugee2825</a></li>
                <li><b>Telegram:</b> <a href="https://t.me/Ashutosh_gee" target="_blank">Ashutosh_gee</a></li>
                <li><b>Microsoft Learn:</b> <a href="https://learn.microsoft.com/en-us/users/ashutosh-kumar/" target="_blank">ashutosh-kumar</a></li>
                <li><b>Twitter:</b> <a href="https://twitter.com/Ashutosh_kes" target="_blank">Ashutosh_kes</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <div className="row">
        <div className="col-lg-8 mx-auto">
          <div className="card">
            <div className="card-header bg-white">
              <ul className="nav nav-tabs card-header-tabs">
                <li className="nav-item">
                  <button 
                    className={`nav-link ${activeTab === 'positions' ? 'active' : ''}`} 
                    onClick={() => setActiveTab('positions')}
                  >
                    Open Positions
                  </button>
                </li>
                <li className="nav-item">
                  <button 
                    className={`nav-link ${activeTab === 'internships' ? 'active' : ''}`} 
                    onClick={() => setActiveTab('internships')}
                  >
                    Internships
                  </button>
                </li>
                <li className="nav-item">
                  <button 
                    className={`nav-link ${activeTab === 'apply' ? 'active' : ''}`} 
                    onClick={() => setActiveTab('apply')}
                  >
                    Apply Now
                  </button>
                </li>
              </ul>
            </div>
            
            <div className="card-body">
              {activeTab === 'positions' && (
                <div className="positions-tab">
                  <h3 className="mb-4">Current Openings</h3>
                  {positions.map((position, index) => (
                    <div key={index} className="card mb-3">
                      <div className="card-body">
                        <div className="d-flex justify-content-between">
                          <h4>{position.title}</h4>
                          <span className="badge bg-primary">{position.type}</span>
                        </div>
                        <div className="row mt-3">
                          <div className="col-md-6">
                            <p><strong>Location:</strong> {position.location}</p>
                          </div>
                          <div className="col-md-6">
                            <p><strong>Experience:</strong> {position.experience}</p>
                          </div>
                        </div>
                        <p>{position.description}</p>
                        <button 
                          className="btn btn-primary"
                          onClick={() => setActiveTab('apply')}
                        >
                          Apply Now
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              
              {activeTab === 'internships' && (
                <div className="internships-tab">
                  <h3 className="mb-4">Internship Opportunities</h3>
                  {internships.map((internship, index) => (
                    <div key={index} className="card mb-3">
                      <div className="card-body">
                        <h4>{internship.title}</h4>
                        <div className="row mt-3">
                          <div className="col-md-6">
                            <p><strong>Duration:</strong> {internship.duration}</p>
                          </div>
                          <div className="col-md-6">
                            <p><strong>Location:</strong> {internship.location}</p>
                          </div>
                        </div>
                        <p>{internship.description}</p>
                        <button 
                          className="btn btn-primary"
                          onClick={() => setActiveTab('apply')}
                        >
                          Apply Now
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              
              {activeTab === 'apply' && (
                <div className="apply-tab">
                  <h3 className="mb-4">Apply for a Position</h3>
                  <form>
                    <div className="mb-3">
                      <label className="form-label">Full Name</label>
                      <input type="text" className="form-control" required />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Email Address</label>
                      <input type="email" className="form-control" required />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Phone Number</label>
                      <input type="tel" className="form-control" required />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Position Applying For</label>
                      <select className="form-select" required>
                        <option value="">Select Position</option>
                        {positions.map((position, index) => (
                          <option key={index} value={position.title}>{position.title}</option>
                        ))}
                        {internships.map((internship, index) => (
                          <option key={index} value={internship.title}>{internship.title} (Internship)</option>
                        ))}
                      </select>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Resume/CV</label>
                      <input type="file" className="form-control" accept=".pdf,.doc,.docx" required />
                      <div className="form-text">PDF, DOC, or DOCX files only (Max 5MB)</div>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Cover Letter</label>
                      <textarea className="form-control" rows="4"></textarea>
                    </div>
                    <div className="mb-3 form-check">
                      <input type="checkbox" className="form-check-input" required />
                      <label className="form-check-label">I agree to the privacy policy and terms of service</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit Application</button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;