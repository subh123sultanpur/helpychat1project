import "./FooterStyles.css";

import React from "react";

import {
  FaHome,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <h4>
                <p>
                  <h4>Gla University,17km Stone,NH-2 </h4>
                </p>
                <p>
                  <h4>P.O.Chaumuhan,Mathura</h4>
                </p>
              </h4>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              1-800-123-4567
            </h4>
          </div>
          <div className="email">
            <FaMailBulk
              size={20}
              style={{ color: "white", marginRight: "2rem" }}
            />
            info@gla.ac.in
          </div>
        </div>
        <div className="right">
          <h4>About the university</h4>
          <p>
            <h4>
              {" "}
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
              atque ea quis molestias. Fugiat pariatur maxime quis culpa
              corporis vitae repudiandae aliquam voluptatem veniam, est atque
              cumque eum delectus sint!{" "}
            </h4>{" "}
          </p>

          <div className="social">
            <FaFacebook
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />

            <FaTwitter
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />

            <FaLinkedin
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
