import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import "./Cleaningservices.css";
import { Link } from "react-router-dom";
import home from "../Images/home img.jpg";
import home2 from "../Images/home2.jpg";
const Cleaningservices = () => {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <div className="services">
      <div className="content">
        <div className="page-wrapper">
          {/* header start */}
          <header className="header js-header">
            <div className="container">
              <div className="logo">
                <a href="#">
                  al bahar al bayan<span> Cleaning Services</span>
                </a>
              </div>

              <nav className="nav js-nav">
                <div className="rightSide">
                  <ul className="list" id={showLinks ? "hidden" : ""}>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/about">About</Link>
                    </li>
                    <li>
                      <Link to="/services">Services</Link>
                    </li>
                    <li>
                      {" "}
                      <Link to="/pricing">Pricing</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>
                  </ul>
                  <button onClick={() => setShowLinks(!showLinks)}>
                    <GiHamburgerMenu />
                  </button>
                </div>
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

                  <p>
                    Cleaning is the process of removing unwanted substances,
                    such as dirt, infectious agents, and other impurities, from
                    an object or environment. Cleaning occurs in many different
                    contexts and uses many different methods.
                  </p>
                  <div className="btn-wrap">
                    <a href="#about" className="btn">
                      know more
                    </a>
                  </div>
                </div>
                <div className="home-img">
                  <div className="home2">
                    <img src={home2} alt="img" />
                  </div>
                  <img src={home} alt="img" />
                </div>
              </div>
            </div>
          </section>
          {/*home section end*/}
        </div>
      </div>
    </div>
  );
};

export default Cleaningservices;
