import React from "react";
import data from "../constants/services.json";

const ServicesContainer = () => {
  return (
    <div className="service container section" id="services">
      <h1> Services </h1>
      <div className="services-container">
        {data.map((item, i) => (
          <div key={item.id} className="service-box box">
            <img src={item.icon} alt="img" className="icon" />
            <h3> {item.service} </h3>
            <p> {item.description} </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesContainer;
