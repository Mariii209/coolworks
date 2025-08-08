import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <div className="FooterInfo">
        <div className="FooterSection">
          <div className="LogoContainer">
            <img src="/logo.jpg" alt="" />
            <div>
              <h3>Cool Works</h3>
              <span>HVAC Experts</span>
            </div>
          </div>
          <p className="Description">
            Professional HVAC services you can trust. Licensed, insured, and
            committed to your comfort.
          </p>
          <a
            href="https://www.instagram.com/coolworks_hvac_experts/?hl=en"
            className="IG"
          >
            <i class="fa-brands fa-instagram"></i>
          </a>
        </div>
        <div className="FooterSection">
          <h4>Our Services</h4>

          <div className="ServicesContainer">
            <p>AC Installation</p>
            <p>Heating Repair</p>
            <p>Thermostat Setup</p>
            <p>Air Quality</p>
            <p>Mini Split Systems</p>
            <p>Emergency Service</p>
            <p>Maintenance Plans</p>
          </div>
        </div>

        <div className="FooterSection Us">
          <h4>Contact Us</h4>

          <div className="MoreUs">
            <a href="tel:2094500830">
              <i class="fa-solid fa-phone"></i>(209) 450-0830
            </a>

            <a href="mailto:humbertosanchez556@gmail.com">
              <i class="fa-regular fa-envelope"></i>
              humbertosanchez556@gmail.com
            </a>

            <a
              href="https://www.google.com/maps/search/?api=1&query=3009+McKittrick+Ct+Ceres+CA+95307"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fa-solid fa-location-dot"></i>
              3009 McKittrick Ct Ceres, CA 95307
            </a>
          </div>
        </div>

        <div className="FooterSection">
          <h4>Business Hours</h4>
          <div className="Hours">
            <div className="HourContainer">
              <p>Monday - Friday</p>
              <span>7:00 AM - 8:00 PM</span>
            </div>

            <div className="HourContainer">
              <p>Saturday</p>
              <span>8:00 AM - 6:00 PM</span>
            </div>

            <div className="HourContainer">
              <p>Sunday</p>
              <span>Emergency Only</span>
            </div>
          </div>
        </div>
      </div>
      <div className="Line"></div>
      <div className="MoreInfo">
        <p>© 2024 Cool Works HVAC Experts. All rights reserved.</p>
        <p>Licensed • Insured • Professional HVAC Services</p>
      </div>
    </div>
  );
}
