import React from "react";
import address from "../Images/address.png";
import phone from "../Images/phone.png";
import mail from "../Images/mail.png";
import "./Contact.css";
const Contact = () => {
  return (
    <div className="services">
      <div className="content">
        <div className="page-wrapper">
          <section className="contact section-padding" id="contact">
            <div className="container">
              <div className="section-title">
                <span className="title">contact us</span>
                <h2 className="sub-title">have any question</h2>
              </div>
              <div className="grid contact-grid">
                <div className="contact-info">
                  <div className="contact-info-item">
                    <img src={address} alt="img" />
                    <h3>Address</h3>
                    <p>
                      Office No 402 Lathifa Building Fridj Al Murar,Deira Dubai
                      -UAE
                    </p>
                  </div>
                  <div className="contact-info-item">
                    <img src={phone} alt="img" />
                    <h3>Call us</h3>
                    <p>0428402317</p>
                  </div>
                  <div className="contact-info-item">
                    <img src={mail} alt="img" />
                    <h3>Email us</h3>
                    <p>albaharalbayan@gmail.com</p>
                  </div>
                </div>
                <div className="contact-form">
                  <form>
                    <div className="input-box">
                      <input
                        type="text"
                        placeholder="Name"
                        className="input-control"
                        required
                      />
                    </div>
                    <div className="input-box">
                      <input
                        type="text"
                        placeholder="Email"
                        className="input-control"
                        required
                      />
                    </div>
                    <div className="input-box">
                      <input
                        type="text"
                        placeholder="Phone"
                        className="input-control"
                        required
                      />
                    </div>
                    <div className="input-box">
                      <textarea
                        type="text"
                        placeholder="Message"
                        className="input-control"
                        required
                      />
                    </div>
                    <div className="btn-wrap">
                      <button type="submit" className="btn">
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
export default Contact;
