import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  return (
    <div className="container my-5 py-5">
      <div className="row">
        <div className="col-lg-6 mb-5">
          <h1 className="mb-4">Contact Ashutosh Kumar</h1>
          <p className="lead">Have questions or ready to start a project? Get in touch with me!</p>
          
          <div className="row mt-5">
            <div className="col-md-12 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h4>Contact Details</h4>
                  <p>
                    <i className="fa fa-phone me-2"></i>
                    <a href="tel:+918340584879">+91 83405 84879</a>
                  </p>
                  <p>
                    <i className="fa fa-envelope me-2"></i>
                    <a href="mailto:ashutoshkumargee@gmail.com">ashutoshkumargee@gmail.com</a>
                  </p>
                  <p>
                    <i className="fa fa-map-marker me-2"></i>
                    Patna, Bihar, India
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-4">
            <h4>Business Hours</h4>
            <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
            <p>Saturday: 10:00 AM - 5:00 PM</p>
            <p>Sunday: Closed</p>
          </div>
        </div>
        
        <div className="col-lg-6">
          <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80" alt="Contact Ashutosh Kumar" className="img-fluid rounded shadow mb-4" />
          {/* TODO: Connect contact form to Node.js/MongoDB backend API */}
          <div className="card">
            <div className="card-body">
              <h3 className="mb-4">Send us a Message</h3>
              
              {submitSuccess && (
                <div className="alert alert-success">
                  Thank you for contacting us! We'll get back to you soon.
                </div>
              )}
              
              {submitError && (
                <div className="alert alert-danger">
                  There was an error submitting your message. Please try again.
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Your Name</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required 
                  />
                </div>
                
                <div className="row mb-3">
                  <div className="col-md-6">
                    <label className="form-label">Email Address</label>
                    <input 
                      type="email" 
                      className="form-control" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Phone Number</label>
                    <input 
                      type="tel" 
                      className="form-control" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                </div>
                
                <div className="mb-3">
                  <label className="form-label">Subject</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required 
                  />
                </div>
                
                <div className="mb-3">
                  <label className="form-label">Message</label>
                  <textarea 
                    className="form-control" 
                    rows="5"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="btn btn-primary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;