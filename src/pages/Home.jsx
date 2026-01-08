import React from 'react';

const profileImg = 'https://drive.google.com/uc?export=view&id=1mxOVP2I3IvPFIGkjkO67fUb9FfsDYHYV';
const gallery1 = 'https://photos.app.goo.gl/ZPiDcRtv6owtoLRp9';
const gallery2 = 'https://photos.app.goo.gl/JG5nciJupXZy5CcNA';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section d-flex align-items-center" style={{ minHeight: '70vh', background: 'linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)), url(https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80) center/cover no-repeat' }}>
        <div className="container text-center text-white py-5">
          <img src={profileImg} alt="Ashutosh Kumar" className="img-fluid rounded-circle shadow mb-3" style={{ maxWidth: '160px', border: '4px solid #fff' }} />
          <h1 className="display-5 fw-bold mb-2">Ashutosh Kumar</h1>
          <p className="lead mb-3">👋 Hello, I'm Ashutosh Kumar, a passionate Computer Science & Engineering graduate from Patna, India.<br />I love building innovative solutions in software, web, and IoT. Always learning, always growing!</p>
          <div className="mb-3">
            <a href="tel:+918340584879" className="btn btn-primary mx-2">Call: +91 8340584879</a>
            <a href="mailto:ashutoshkumargee@gmail.com" className="btn btn-outline-light mx-2">Email</a>
            <a href="https://www.linkedin.com/in/ashutosh-kumar-b48b1519b/" className="btn btn-info mx-2" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com/Ashugee2825" className="btn btn-dark mx-2" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://drive.google.com/file/d/1mxOVP2I3IvPFIGkjkO67fUb9FfsDYHYV/view?usp=sharing" className="btn btn-success mx-2" target="_blank" rel="noopener noreferrer">Resume</a>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4 text-center mb-4 mb-lg-0">
              <img src={profileImg} alt="Ashutosh Kumar" className="img-fluid rounded shadow" style={{ maxWidth: '220px' }} />
            </div>
            <div className="col-lg-8">
              <h2>About Me</h2>
              <p>Hello, I'm Ashutosh Kumar, a passionate Computer Science & Engineering graduate from Patna, India, with a deep interest in creating innovative solutions through software development, web development, and IoT. My experience spans a wide range of technologies, and I'm constantly looking to learn and grow within the tech world.</p>
              <ul className="list-unstyled">
                <li><b>Mobile:</b> <a href="tel:+918340584879">+91 8340584879</a></li>
                <li><b>Email:</b> <a href="mailto:ashutoshkumargee@gmail.com">ashutoshkumargee@gmail.com</a></li>
                <li><b>Location:</b> Chhoti Pahari, near Govt. School, Patna-7, INDIA</li>
              </ul>
              <div className="d-flex flex-wrap gap-2 mt-2">
                <a href="https://www.linkedin.com/in/ashutosh-kumar-b48b1519b/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary btn-sm">LinkedIn</a>
                <a href="https://github.com/Ashugee2825" target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark btn-sm">GitHub</a>
                <a href="https://unstop.com/u/Ashutosh_keshri" target="_blank" rel="noopener noreferrer" className="btn btn-outline-secondary btn-sm">Unstop</a>
                <a href="https://www.hackerrank.com/ashutoshkumargee" target="_blank" rel="noopener noreferrer" className="btn btn-outline-success btn-sm">HackerRank</a>
                <a href="https://codepen.io/ashugee2825/pens/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-info btn-sm">CodePen</a>
                <a href="https://www.sololearn.com/en/profile/15298175" target="_blank" rel="noopener noreferrer" className="btn btn-outline-warning btn-sm">Sololearn</a>
                <a href="https://leetcode.com/u/ashutoshkumargee/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-danger btn-sm">LeetCode</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="section-padding">
        <div className="container">
          <h2 className="mb-4 text-center">Education</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5>CDAC NOIDA</h5>
                  <p>Post Graduate Diploma In Advanced Computing<br /><small>03/2024 – 02/2025</small></p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5>Dept. CSEE, NITTTR BHOPAL</h5>
                  <p>Full Stack Web Development Using Java Technologies & MySQL<br /><small>06/2023 – 10/2024</small></p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5>B.Tech, Computer Science And Engineering</h5>
                  <p>IPS College Of Technology Management, Gwalior (M.P)<br /><small>07/2019 – 05/2023</small><br />Score: 85%</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5>Intermediate In Science</h5>
                  <p>T.P.S College, Patna-7<br /><small>06/2016 – 05/2018</small></p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5>High School Certificate</h5>
                  <p>Keshav Saraswati Vidya Mandir, Saink School, Patna<br /><small>03/2012—04/2016</small><br />Score: 7.8 CGPA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="section-padding bg-light">
        <div className="container">
          <h2 className="mb-4 text-center">Work Experience</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5>NITTTR Bhopal</h5>
                  <p>Software Developer Trainee<br /><small>06/2023 – 10/2024</small></p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5>American India Foundation, BlackRock</h5>
                  <p>Data Analytics<br /><small>11/2022 – 05/2023</small></p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5>IPS CTM, Gwalior</h5>
                  <p>Junior Assistant<br /><small>07/2019 – 05/2023</small></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section-padding">
        <div className="container">
          <h2 className="mb-4 text-center">Technical Skills</h2>
          <div className="row g-4">
            <div className="col-md-6">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5>Programming Languages</h5>
                  <p>C, C++, Python, JavaScript, Java, Core Java, Advance Java, OOPs, R Language</p>
                  <h5>Web Development</h5>
                  <p>HTML, CSS, JavaScript, React.js, Bootstrap, Angular, Node.js, REST API, Redux</p>
                  <h5>Databases</h5>
                  <p>MySQL, DBMS, MongoDB, PostgreSQL, Oracle, SQL</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5>Libraries & Frameworks</h5>
                  <p>OpenCV, NumPy, Pandas, Scikit-Learn, TensorFlow, Spring Boot, Hibernate, Maven, J2EE, JSP, Servlet</p>
                  <h5>Tools & Cloud</h5>
                  <p>Git, GitHub, Docker, Linux, RedHat, Google Cloud, Salesforce, Figma, Postman, Apache Tomcat, cPanel, Selenium IDE, JIRA, Scrum, AWS (Basic)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects/Portfolio Section */}
      <section className="section-padding bg-light">
        <div className="container">
          <h2 className="mb-4 text-center">Portfolio & Projects</h2>
          <div className="row g-4">
            <div className="col-md-6">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5>Food Ordering Restaurant Website</h5>
                  <p>MERN Stack | Online food ordering and delivery platform for local restaurants.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5>School WebPages</h5>
                  <p>PHP, cPanel | Responsive websites for education details and student dashboards.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5>Home Automation</h5>
                  <p>IoT, Arduino | Garden lights, temperature, and water tank control using sensors.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5>Lakeside Hotel Booking System</h5>
                  <p>Responsive web-based hotel booking with real-time room availability and admin panel.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5>Monthly Progress Report System</h5>
                  <p>Web-based platform for seamless data submission and report generation. <a href="https://erp.nitttrbpl.ac.in/annualrpt/user/login/partiLogin.jsp" target="_blank" rel="noopener noreferrer">View Project</a></p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5>PhD and PG Admission Portal</h5>
                  <p>Online portal for PhD and PG admission, streamlining application management. <a href="https://erp.nitttrbpl.ac.in/admphd/user/login/partiLogin.jsp" target="_blank" rel="noopener noreferrer">View Project</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <div className="container">
          <h2 className="mb-4 text-center">Contact</h2>
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="card shadow-sm">
                <div className="card-body text-center">
                  <h5>Let's Connect!</h5>
                  <p><b>Mobile:</b> <a href="tel:+918340584879">+91 8340584879</a></p>
                  <p><b>Email:</b> <a href="mailto:ashutoshkumargee@gmail.com">ashutoshkumargee@gmail.com</a></p>
                  <p><b>LinkedIn:</b> <a href="https://www.linkedin.com/in/ashutosh-kumar-b48b1519b/" target="_blank" rel="noopener noreferrer">ashutosh-kumar-b48b1519b</a></p>
                  <p><b>GitHub:</b> <a href="https://github.com/Ashugee2825" target="_blank" rel="noopener noreferrer">Ashugee2825</a></p>
                  <p><b>Address:</b> Chhoti Pahari, near Govt. School, Patna-7, INDIA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;