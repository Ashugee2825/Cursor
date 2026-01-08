import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="home4-footer-section style-2">
        <div className="container-fluid p-0">
          <div className="row g-0">
            <div className="col-xl-12">
              <div className="home4-footer-wrap">
                <div className="footer-top" style={{ background: "linear-gradient(90deg, #e0e7ff 0%, #f8fafc 100%)" }}>
                  <div className="row g-lg-4 gy-5 justify-content-center">
                    <div className="col-md-3">
                      <div className="footer-widget">
                        <div className="footer-logo">
                          <Link to="/" className="logo-dark">
                            <img src="/assets/img/w_logo.png" style={{ height: "40px" }} alt="Ashutosh Planet Logo" />
                          </Link>
                        </div>
                        <div className="social-area">
                          <h6 style={{ color: "#fff" }}>Follow me</h6>
                          <ul className="social-list">
                            <li>
                              <a href="https://www.facebook.com/ashu.don.3139?eav=AfYxRo5DnV0kX28cpOPdMH3TFYqr8JPmRq72chQCKMwYOJFZYvaKr2F8uDFdvd2M92c&paipv=0&_rdr" target="_blank" rel="noopener noreferrer">
                                <i className="bi bi-facebook"></i>
                                <span>Facebook</span>
                              </a>
                            </li>
                            <li>
                              <a href="https://www.sololearn.com/profile/15298175" target="_blank" rel="noopener noreferrer">
                                <i className="bi bi-code-slash"></i>
                                <span>Sololearn</span>
                              </a>
                            </li>
                            <li>
                              <a href="https://github.com/Ashugee2825" target="_blank" rel="noopener noreferrer">
                                <i className="bi bi-github"></i>
                                <span>GitHub</span>
                              </a>
                            </li>
                            <li>
                              <a href="https://www.linkedin.com/in/ashutosh-kumar-b48b1519b/" target="_blank" rel="noopener noreferrer">
                                <i className="bi bi-linkedin"></i>
                                <span>LinkedIn</span>
                              </a>
                            </li>
                            <li>
                              <a href="https://www.hackerrank.com/ashutoshkumargee" target="_blank" rel="noopener noreferrer">
                                <i className="bi bi-award"></i>
                                <span>HackerRank</span>
                              </a>
                            </li>
                            <li>
                              <a href="https://codepen.io/ashugee2825" target="_blank" rel="noopener noreferrer">
                                <i className="bi bi-pen"></i>
                                <span>CodePen</span>
                              </a>
                            </li>
                            <li>
                              <a href="https://t.me/Ashutosh_gee" target="_blank" rel="noopener noreferrer">
                                <i className="bi bi-telegram"></i>
                                <span>Telegram</span>
                              </a>
                            </li>
                            <li>
                              <a href="https://learn.microsoft.com/en-us/users/ashutosh-kumar/" target="_blank" rel="noopener noreferrer">
                                <i className="bi bi-microsoft"></i>
                                <span>Microsoft Learn</span>
                              </a>
                            </li>
                            <li>
                              <a href="https://twitter.com/Ashutosh_kes" target="_blank" rel="noopener noreferrer">
                                <i className="bi bi-twitter"></i>
                                <span>Twitter</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="footer-widget">
                        <div className="widget-title">
                          <h4>About</h4>
                        </div>
                        <div className="menu-container">
                          <ul className="widget-list">
                            <li><Link to="/about-us">About Me</Link></li>
                            <li><Link to="/career">Career</Link></li>
                            <li><Link to="/clients">Clients</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="footer-widget">
                        <div className="widget-title">
                          <h4>Contact</h4>
                        </div>
                        <p>
                          <a href="tel:8340584879">
                            <b><i className="fa fa-phone" aria-hidden="true"></i> +91 83405 84879</b>
                          </a>
                          <br />
                          <span>
                            <b><i className="fa fa-envelope" aria-hidden="true"></i></b> ashutoshkumargee@gmail.com
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="footer-widget">
                        <div className="widget-title">
                          <h4>Location</h4>
                        </div>
                        <p>
                          <span>
                            <b><i className="fa fa-map-marker" aria-hidden="true"></i></b> Patna, Bihar, India
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="footer-bottom" style={{ background: "#f3f4f6", borderTop: '1px solid #e5e7eb' }}>
                  <div className="copyright-area" style={{ color: '#222' }}>
                    <p>Copyright 2024 Ashutosh Planet | All Rights Reserved</p>
                  </div>
                  <div className="footer-bottom-right">
                    <ul>
                      <li><Link to="/refund-policy">Refund Policy</Link></li>
                      <li><Link to="/terms-and-conditions">Terms & Conditions</Link></li>
                      <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
    </footer >
  );
};

export default Footer;