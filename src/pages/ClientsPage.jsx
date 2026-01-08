import React from 'react';

const ClientsPage = () => {
  // Sample client data (should be replaced with actual data)
  const clients = [
    { id: 1, name: "Client 1", category: "Website Development", location: "Navi Mumbai", image: "/assets/img/client1.png" },
    { id: 2, name: "Client 2", category: "App Development", location: "Mumbai", image: "/assets/img/client2.png" },
    // Add more clients...
  ];

  const categories = [
    "All",
    "Website Development",
    "App Development",
    "Digital Marketing",
    "Graphic Design",
    "E-commerce"
  ];

  const [selectedCategory, setSelectedCategory] = React.useState("All");

  // Filter clients by category
  const filteredClients = selectedCategory === "All" 
    ? clients 
    : clients.filter(client => client.category === selectedCategory);

  return (
    <div className="container my-5 py-5">
      <div className="text-center mb-5">
        <h1>Our Esteemed Clients</h1>
        <p className="lead">We've had the privilege of working with amazing businesses across various industries</p>
      </div>
      
      <div className="text-center mb-4">
        <div className="btn-group" role="group">
          {categories.map((category, index) => (
            <button
              key={index}
              type="button"
              className={`btn ${selectedCategory === category ? 'btn-primary' : 'btn-outline-primary'}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      
      <div className="row g-4">
        {filteredClients.map(client => (
          <div key={client.id} className="col-lg-3 col-md-4 col-sm-6">
            <div className="card h-100">
              <div className="card-body text-center">
                <img 
                  src={client.image} 
                  alt={client.name} 
                  className="img-fluid mb-3"
                  style={{ maxHeight: "80px" }}
                />
                <h5>{client.name}</h5>
                <p className="text-muted mb-1">{client.category}</p>
                <p className="text-muted">{client.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-5">
        <h3>Become Our Next Success Story</h3>
        <p className="lead">Let's work together to achieve your business goals</p>
        <a href="/contact" className="btn btn-primary btn-lg">Contact Us</a>
      </div>
    </div>
  );
};

export default ClientsPage;