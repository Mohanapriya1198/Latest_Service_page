import React from "react";

import "./Cleaningservices.css";
import { Link } from "react-router-dom";
import home from "../Images/home img.jpg";
const Cleaningservices = () => {
  return (
    <div className="services">
      <div className="content">
        <div className="page-wrapper">
          {/* header start */}
          <header className="header js-header">
            <div className="container">
              <div className="logo">
                <a href="#">
                  al bahar al bayan<span>Building Cleaning Services</span>
                </a>
              </div>
              {/* <button type="button" className="nav-toggle js-nav-toggler">
                <span></span>
              </button> */}
              <nav className="nav js-nav">
                <ul className="list">
                  <li><Link to="/">Home</Link></li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li><Link to="/services">Services</Link></li>
                  <li> <Link to="/pricing">Pricing</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                </ul>
              </nav>
            </div>
          </header>
          {/* header end */}

          {/* home section start */}
          <section className="home" id="home">
            <div className="container">
              <div className="grid">
                <div className="home-text">
                  <h1>need cleaning services</h1>
                  <p>wbhjwshowijwojjwsiojqwio</p>
                  <div className="btn-wrap">
                    <a href="#about" className="btn">
                      know more
                    </a>
                  </div>
                </div>
                <div className="home-img">
                  <img src={home} alt="img" />
                </div>
              </div>
            </div>
          </section>
          {/*home section end*/}
          {/* about section start */}
          {/* <section className="about section-padding" id="about">
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
          </section> */}
          {/* about section end */}
          
          {/*footer start 
          <footer className="footer">
            
          </footer>
  footer end */}
        </div>
      </div>
    </div>
  );
};

export default Cleaningservices;
