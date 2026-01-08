import React from 'react';
import { Link } from 'react-router-dom';

const ServiceLinks = () => {
  const locations = [
    "Navi Mumbai", "Mumbai", "Vashi", "Turbhe", "Koparkhairane", "Juinagar", 
    "Airoli", "Mape", "Thane", "Sanpada", "nerul", "seawood", "belapur", 
    "kharghar", "mansarovar", "khandeshwar", "panvel", "ulwe", "taloja"
  ];

  return (
    <div className="blogs-links p-4">
      {locations.map((location, index) => (
        <div className="box" key={index}>
          <Link to={`/website-development-in-${location.toLowerCase().replace(/\s+/g, '-')}`}>
            <h2>Website Development In {location}</h2>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ServiceLinks;