import React from 'react';
import { Link } from 'react-router-dom';

const Clients = () => {
  const clients = [
    { id: 1, name: "Chembur", image: "/assets/img/website-development-in-chembur.png" },
    { id: 2, name: "Cheap Web Service", image: "/assets/img/cheap-web-service.png" },
    { id: 3, name: "Cheap Website Service", image: "/assets/img/cheap-website-service.png" },
    { id: 4, name: "Vashi", image: "/assets/img/website-development-in-vashi.png" },
    { id: 5, name: "Turbhe", image: "/assets/img/website-development-in-turbhe.png" },
    { id: 6, name: "Koparkhairane", image: "/assets/img/website-development-in-koparkhairane.png" },
    { id: 7, name: "Navi Mumbai", image: "/assets/img/website-development-in-navi-mumbai.png" },
    { id: 8, name: "Sanpada", image: "/assets/img/website-development-in-sanpada.png" },
    { id: 9, name: "Nerul", image: "/assets/img/website-develoment-in-nerul.png" },
    { id: 10, name: "Mumbai", image: "/assets/img/website-development-in-mumbai.png" },
    { id: 11, name: "Belapur", image: "/assets/img/website-development-in-belapur.png" },
    { id: 12, name: "Kharghar", image: "/assets/img/website-development-in-khargar.png" },
    { id: 13, name: "Panvel", image: "/assets/img/website-development-in-panvel.png" },
    { id: 14, name: "Airoli", image: "/assets/img/website-development-in-airoli.png" },
    { id: 15, name: "Turbhe MIDC", image: "/assets/img/website-development-turbhe-MIDC.png" },
    { id: 16, name: "Vashi", image: "/assets/img/web-development-vashi.png" },
    { id: 17, name: "Vashi", image: "/assets/img/web-design-vashi.png" }
  ];

  const clientLogos = [
    "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    "https://upload.wikimedia.org/wikipedia/commons/4/47/React.svg",
    "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg",
    "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg",
    "https://cdn.worldvectorlogo.com/logos/javascript-1.svg",
    "https://cdn.worldvectorlogo.com/logos/bootstrap-5-1.svg"
  ];

  return (
    <div className="partnership-area mb-120" id="partnership-section">
      <div className="container">
        <div className="row mb-40">
          <div className="col-lg-12 wow animate fadeInDown">
            <div className="section-title5 two">
              <span className="sub-title5 two">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                  <path d="M3.7081 12.9544C3.41861 13.1128 3.09011 12.8352 3.14861 12.4808L3.7711 8.69694L1.12886 6.01223C0.882112 5.76104 1.01036 5.30186 1.34111 5.25226L5.0146 4.69548L6.6526 1.23399C6.80035 0.922003 7.2001 0.922003 7.34785 1.23399L8.98584 4.69548L12.6593 5.25226C12.9901 5.30186 13.1183 5.76104 12.8708 6.01223L10.2293 8.69694L10.8518 12.4808C10.9103 12.8352 10.5818 13.1128 10.2923 12.9544L6.9991 11.1497L3.7081 12.9544Z"></path>
                </svg>
                Our Journey Success
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                  <path d="M3.7081 12.9544C3.41861 13.1128 3.09011 12.8352 3.14861 12.4808L3.7711 8.69694L1.12886 6.01223C0.882112 5.76104 1.01036 5.30186 1.34111 5.25226L5.0146 4.69548L6.6526 1.23399C6.80035 0.922003 7.2001 0.922003 7.34785 1.23399L8.98584 4.69548L12.6593 5.25226C12.9901 5.30186 13.1183 5.76104 12.8708 6.01223L10.2293 8.69694L10.8518 12.4808C10.9103 12.8352 10.5818 13.1128 10.2923 12.9544L6.9991 11.1497L3.7081 12.9544Z"></path>
                </svg>
              </span>
              <h2>Our Happy <span> Clients</span></h2>
            </div>
          </div>
        </div>
        <div className="row g-4">
          {clients.map(client => (
            <div key={client.id} className="col-lg-2 col-6 p-2">
              <div className="card">
                <div className="card-body p-3">
                  <img src={client.image} className="img-fluid" alt={client.name} />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="client-logos d-flex flex-wrap justify-content-center align-items-center gap-4">
          {clientLogos.map((logo, idx) => (
            <img key={idx} src={logo} alt={`Client ${idx + 1}`} className="client-logo img-fluid rounded shadow-sm" style={{ maxWidth: '120px', background: '#fff', padding: '10px' }} />
          ))}
        </div>
        <center>
          <Link to="/clients" className="primary-btn1 mt-4">View All Clients</Link>
        </center>
      </div>
    </div>
  );
};

export default Clients;