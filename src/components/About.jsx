import React from "react";
import about from "../Images/about img.jpg";

const About = () => {
  return (
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
            <p>vhdgwhvdwhguwgyuegdyrgfyugryggrgr</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
