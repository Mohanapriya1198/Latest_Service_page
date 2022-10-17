import React from "react";
import address from "../Images/address.png";
import phone from "../Images/phone.png";
import mail from "../Images/mail.png";
import "./Cleaningservices.css";
const Contact = () => {
  return (
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
                     P.O.Box:62456, Shop No.12, Dasti Building 5,AI
                     Karama,U.A.E.
                   </p>
                 </div>
                 <div className="contact-info-item">
                   <img src={phone} alt="img" />
                   <h3>Call us</h3>
                   <p>050 460 0646</p>
                   <p>052 376 2629</p>
                 </div>
                 <div className="contact-info-item">
                   <img src={mail} alt="img" />
                   <h3>Email us</h3>
                   <p>newemerald30@gmail.com</p>
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
    );
};
export default Contact;