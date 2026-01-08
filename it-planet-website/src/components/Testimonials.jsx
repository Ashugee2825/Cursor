import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "Web Developer",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      text: "Ashutosh Planet ने मेरी वेबसाइट को एकदम प्रोफेशनल बना दिया! Highly recommended."
    },
    {
      name: "Priya Singh",
      role: "Entrepreneur",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      text: "बहुत ही शानदार सर्विस और सपोर्ट! Ashutosh Kumar का काम बहुत अच्छा है।"
    },
    {
      name: "Amit Verma",
      role: "Startup Founder",
      image: "https://randomuser.me/api/portraits/men/65.jpg",
      text: "Responsive design और quick delivery. Definitely recommend Ashutosh Planet!"
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section className="testimonialSection gradiantBlock mb-50">
      <div className="container overflow-hidden">
        <div className="row">
          <div className="col-lg-12 mb-70 d-flex flex-wrap gap-3 align-items-center justify-content-between">
            <div className="section-title5 wow animate fadeInLeft">
              <span className="sub-title5 two">
                Client Testimonial
              </span>
              <h2>Inspiring Words from <span>Our Clients </span></h2>
            </div>
            <a href="/contact" className="details-button wow animate fadeInRight">
              Become a Client
              <svg viewBox="0 0 13 20">
                <polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5"></polyline>
              </svg>
            </a>
          </div>
        </div>
        
        <div className="testimCarousel animateThis fadeIn">
          <Slider {...settings}>
            {testimonials.map(testimonial => (
              <div key={testimonial.name} className="testimHolder">
                <div className="testimBox">
                  <div className="testimDots"></div>
                  <div className="testimContentBox d-flex align-items-center justify-content-center">
                    <div className="testimContent">
                      <div className="content">
                        <div className="author-img me-3">
                          <img src={testimonial.image} alt={testimonial.name} className="img-fluid rounded-circle shadow" />
                        </div>
                        <p>{testimonial.text}</p>
                        <div className="author-name-desig">
                          <div className="content">
                            <h6>{testimonial.name}</h6>
                            <p>{testimonial.role}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="testimDots"></div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;