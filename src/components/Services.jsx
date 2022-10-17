import React from "react";
import house from "../Images/house img.jpg";
import party from "../Images/party.jpg";
import school from "../Images/school.jpg";
import bathroom from "../Images/bathroom img.jpg";
import wind from "../Images/window.jpg";
import "./Cleaningservices.css";

const Services = () => {
  return ( 
    <section className="services section-padding" id="services">
    <div className="container">
      <div className="section-title">
        <span className="title">services</span>
        <h2 className="sub-title">what we do</h2>
      </div>
      <div className="grid">
        <div className="services-item">
          <div className="img-box">
            <img src={bathroom} alt="img" />
          </div>
          <h3>deep cleaning</h3>
        </div>
        <div className="services-item">
          <div className="img-box">
            <img src={school} alt="img" />
          </div>
          <h3>schools & hospitals cleaning</h3>
        </div>
        <div className="services-item">
          <div className="img-box">
            <img src={house} alt="img" />
          </div>
          <h3>residental cleaning</h3>
        </div>
        <div className="services-item">
          <div className="img-box">
            <img src={wind} alt="img" />
          </div>
          <h3>office cleaning</h3>
        </div>
        <div className="services-item">
          <div className="img-box">
            <img src={party} alt="img" />
          </div>
          <h3>party help</h3>
        </div>
      </div>
    </div>
  </section>
);
};
export default Services;