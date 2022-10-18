import React from "react";
import "./Pricing.css";

const Pricing = () => {
  return (
    <div className="services">
      <div className="content">
        <div className="page-wrapper">
          <section className="pricing section-padding" id="pricing">
            <div className="container">
              <div className="section-title">
                <span className="title">pricing</span>
                <h2 className="sub-title">our pricing plans</h2>
              </div>
              <div className="grid ">
                {/* basic plan start */}
                <div className="pricing-item">
                  <div className="pricing-header">
                    <h3>basic</h3>
                    <div className="price">
                      <span>$299</span>
                    </div>
                  </div>
                  <div className="pricing-body">
                    <ul>
                      <li>deep cleaning</li>
                      <li>school & hospital cleaning</li>
                      <li>residential cleaning</li>
                      <li>office cleaning</li>
                      <li>party help</li>
                    </ul>
                  </div>
                  <div className="pricing-footer">
                    <a href="#" className="btn">
                      get started
                    </a>
                  </div>
                </div>
                {/* basic plan end */}
                {/* standard plan start */}
                <div className="pricing-item">
                  <div className="pricing-header">
                    <h3>standard</h3>
                    <div className="price">
                      <span>$499</span>
                    </div>
                  </div>
                  <div className="pricing-body">
                    <ul>
                      <li>deep cleaning</li>
                      <li>school & hospital cleaning</li>
                      <li>residential cleaning</li>
                      <li>office cleaning</li>
                      <li>party help</li>
                    </ul>
                  </div>
                  <div className="pricing-footer">
                    <a href="#" className="btn">
                      get started
                    </a>
                  </div>
                </div>
                {/* standard plan end */}
                {/* premium plan start */}
                <div className="pricing-item">
                  <div className="pricing-header">
                    <h3>premium</h3>
                    <div className="price">
                      <span>$899</span>
                    </div>
                  </div>
                  <div className="pricing-body">
                    <ul>
                      <li>deep cleaning</li>
                      <li>school & hospital cleaning</li>
                      <li>residential cleaning</li>
                      <li>office cleaning</li>
                      <li>party help</li>
                    </ul>
                  </div>
                  <div className="pricing-footer">
                    <a href="#" className="btn">
                      get started
                    </a>
                  </div>
                </div>
                {/* premium plan end */}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
export default Pricing;
