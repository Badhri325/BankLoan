import React from "react";
import "./Services.css";
import ServiceCard from "../ServiceCard";

const Services = ({ serviceList }) => {
  console.log("service list in comp...", serviceList);

  const handleButtonClick =() =>{
    console.log("ApplyNow Button...",);
  }

  return (
    <section id="services" className="services_style">
      <div>
        <h2>High Performance Services For All Industries</h2>
      </div>
      <main>
        {serviceList?.map((service) => (
          <ServiceCard key={service.id} services={service} 
          onButtonClick={handleButtonClick}
          />
        ))}
      </main>
    </section>
  );
};

export default Services;
