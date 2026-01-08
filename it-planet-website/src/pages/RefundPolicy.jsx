import React from 'react';

const RefundPolicy = () => {
  return (
    <div className="container my-5 py-5">
      <div className="row">
        <div className="col-lg-8 mx-auto">
          <h1 className="text-center mb-4">Refund Policy</h1>
          
          <div className="card">
            <div className="card-body">
              <p className="text-muted">Last Updated: January 1, 2024</p>
              
              <h3 className="mt-4">1. Overview</h3>
              <p>
                At IT Planet Software Solution, we strive to provide the best services to our clients. 
                This Refund Policy outlines the circumstances under which we may issue a refund for our services.
              </p>
              
              <h3 className="mt-4">2. Service-Based Refunds</h3>
              <p>
                Since we provide custom services, refunds are handled on a case-by-case basis. 
                We do not offer refunds for services that have already been provided, except under the following circumstances:
              </p>
              <ul>
                <li>If the service was not delivered as described in the project agreement</li>
                <li>If the service was not delivered within the agreed timeframe and the delay was not caused by the client</li>
                <li>If there is a mutual agreement for cancellation before the work has commenced</li>
              </ul>
              
              <h3 className="mt-4">3. Digital Products</h3>
              <p>
                For digital products such as website templates, themes, or plugins:
              </p>
              <ul>
                <li>Refunds are available within 14 days of purchase if the product has not been downloaded</li>
                <li>Once a digital product has been downloaded, no refunds will be issued</li>
                <li>Refunds will not be provided if the product does not meet your expectations or requirements</li>
              </ul>
              
              <h3 className="mt-4">4. Hosting Services</h3>
              <p>
                For our hosting services:
              </p>
              <ul>
                <li>Refunds are available within 30 days of initial purchase</li>
                <li>No refunds will be issued for renewals or after the initial 30-day period</li>
                <li>Refunds are not available for domain registrations or SSL certificates</li>
              </ul>
              
              <h3 className="mt-4">5. How to Request a Refund</h3>
              <p>
                To request a refund, please contact us at:
              </p>
              <p>
                Email: <a href="mailto:support@itplanet.in">support@itplanet.in</a><br />
                Phone: <a href="tel:+919766397512">+91 97663 97512</a>
              </p>
              <p>
                Please include your order number, reason for refund request, and any relevant documentation.
              </p>
              
              <h3 className="mt-4">6. Processing Time</h3>
              <p>
                Approved refunds will be processed within 7-10 business days. The refund will be issued through the original method of payment.
              </p>
              
              <h3 className="mt-4">7. Changes to This Policy</h3>
              <p>
                We reserve the right to modify this refund policy at any time. Changes will be posted on this page.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;