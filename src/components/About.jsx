import React from "react";
import about from "../Images/about img.jpg";
import "./About.css";

const About = () => {
  return (
    <div className="services">
      <div className="content">
        <div className="page-wrapper">
          <section className="about section-padding" id="about">
            <div className="container">
              <div className="grid">
                <div className="about-img">
                  <div className="img-box">
                    <img src={about} alt="img" />
                    <div className="box box-1">
                      <span>2k</span>
                      <p>satisfied clients</p>
                    </div>
                  </div>
                </div>
                <div className="about-text">
                  <div className="section-title">
                    <span className="title">about us</span>
                    <h2 className="sub-title">we're cleaning services</h2>
                  </div>
                  <p>
                    The clients who hire a good housekeeping service need not
                    worry about a single cleaning task as everything is always
                    taken care of. Good housekeeping has the best most
                    professional cleaners who are dedicated to providing 100%
                    satisfaction without degrading the quality of service.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
