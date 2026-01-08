import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Close mobile menu when route changes
  useEffect(() => {
    setShowMenu(false);
  }, [location]);

  return (
    <header className={`header-area style-1 ${scrolled ? 'header-sticky' : ''}`}>
      <div className="container d-flex flex-nowrap align-items-center justify-content-between">
        <div className="company-logo">
          <Link to="/" className="logo-dark">
            <img src="/assets/img/IT_PlanteLogo.png" alt="Ashutosh Planet Logo" style={{ height: "40px" }} />
          </Link>
        </div>
        {/* Desktop Menu */}
        <div className="main-menu d-lg-flex d-none">
          <ul className="menu-list">
            <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
            <li><Link to="/about-us" className={location.pathname === '/about-us' ? 'active' : ''}>About Us</Link></li>
            <li className="menu-item-has-children">
              <a href="#" className={location.pathname.startsWith('/services') ? 'active' : ''}>Services</a>
              <ul className="sub-menu">
                <li><Link to="/website-development" className={location.pathname === '/website-development' ? 'active' : ''}>Website Development</Link></li>
                <li><Link to="/app-development" className={location.pathname === '/app-development' ? 'active' : ''}>App Development</Link></li>
                <li><Link to="/digital-marketing" className={location.pathname === '/digital-marketing' ? 'active' : ''}>Digital Marketing</Link></li>
                <li><Link to="/graphic-designing" className={location.pathname === '/graphic-designing' ? 'active' : ''}>Graphic Designing</Link></li>
              </ul>
            </li>
            <li className="menu-item-has-children">
              <a href="#" className={location.pathname.startsWith('/courses') ? 'active' : ''}>Courses</a>
              <ul className="sub-menu">
                <li><Link to="/mern-stack-course" className={location.pathname === '/mern-stack-course' ? 'active' : ''}>MERN Stack</Link></li>
                <li><Link to="/website-development-course" className={location.pathname === '/website-development-course' ? 'active' : ''}>Website Development</Link></li>
                <li><Link to="/reactjs-course" className={location.pathname === '/reactjs-course' ? 'active' : ''}>ReactJS/Native</Link></li>
              </ul>
            </li>
            <li><Link to="/career" className={location.pathname === '/career' ? 'active' : ''}>Career</Link></li>
            <li><Link to="/clients" className={location.pathname === '/clients' ? 'active' : ''}>Our Clients</Link></li>
            <li><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact Us</Link></li>
          </ul>
        </div>
        {/* Mobile menu toggle and contact button */}
        <div className="nav-right d-flex justify-content-end align-items-center">
          <div className="sidebar-and-btn">
            <div className="sidebar-btn d-lg-none" onClick={() => setShowMenu(!showMenu)}>
              <div className="menu-toggle">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <a href="tel:9766397512" className="primary-btn5 d-lg-flex d-none">
              <i className="fa fa-phone" aria-hidden="true"></i> &nbsp;+91 97663 97512
            </a>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {showMenu && (
        <div className="sidebar-menu">
          <div className="sidebar-menu-top-area">
            <div className="container d-flex align-items-center justify-content-between">
              <div className="sidebar-menu-logo">
                <Link to="/" className="logo-dark">
                  <img src="/assets/img/IT_PlanteLogo.png" alt="IT Planet Logo" style={{ height: "40px" }} />
                </Link>
              </div>
              <div className="sidebar-menu-close" onClick={() => setShowMenu(false)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 18 18">
                  <path fillRule="evenodd" clipRule="evenodd" d="M18 0L11.1686 8.99601L18 18L9.0041 11.1605L0 18L6.83156 8.99601L0 0L9.0041 6.83156L18 0Z"></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row g-lg-4 gy-5">
              <div className="col-lg-8">
                <div className="sidebar-menu-wrap">
                  <ul className="main-menu">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about-us">About Us</Link></li>
                    <li className="menu-item-has-children">
                      <a>Services</a>
                      <ul className="sub-menu-list">
                        <li><Link to="/website-development">Website Development</Link></li>
                        <li><Link to="/app-development">App Development</Link></li>
                        <li><Link to="/digital-marketing">Digital Marketing</Link></li>
                        <li><Link to="/graphic-designing">Graphic Designing</Link></li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <a>Courses</a>
                      <ul className="sub-menu-list">
                        <li><Link to="/mern-stack-course">MERN Stack</Link></li>
                        <li><Link to="/website-development-course">Website Development</Link></li>
                        <li><Link to="/reactjs-course">ReactJS/Native</Link></li>
                      </ul>
                    </li>
                    <li><Link to="/career">Career</Link></li>
                    <li><Link to="/clients">Our Clients</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;