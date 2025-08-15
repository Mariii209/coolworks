import React, { useState } from "react";
import "./NavBar.css";

export default function NavBar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="NavBar">
      <nav className="NavBarInfo">
        <div className="MainLogoInfo">
          <img src="/logo.jpg" alt="" />
          <div className="BusinessName">
            <h2>Cool Work</h2>
            <p>HVAC Expert</p>
          </div>
        </div>

        <div className="LinksContainer">
          <a href="#servies">Services</a>
          <a href="#reviews">Reviews</a>
          <a href="#schedule-service">Contact</a>
        </div>

        <div className="BookingContainer">
          <a href="tel:2094500830" className="PhomeInfo">
            <i className="fa-solid fa-phone"></i>
            <p>(209) 450-0830</p>
          </a>
          <a href="#schedule-service" className="BookNow">
            Book Now
          </a>
        </div>

        <button
          className="MenuToggle"
          onClick={() => setShowMenu(true)}
          aria-label="Open menu"
        >
          <i className="fa-solid fa-bars"></i>
        </button>
      </nav>

      {/* Overlay background */}
      {showMenu && (
        <div className="OverLay" onClick={() => setShowMenu(false)} />
      )}

      {/* Side drawer menu */}
      <div className={`SideMenu ${showMenu ? "Show" : ""}`}>
        <button
          className="CloseBtn"
          onClick={() => setShowMenu(false)}
          aria-label="Close menu"
        >
          <i className="fa-solid fa-xmark"></i>
        </button>

        {/* Header */}
        <div className="MenuHeader">
          <img src="/logo.jpg" alt="" />
          <div className="HeadinTitle">
            <h3>Cool Works</h3>
            <p>HVAC Experts</p>
            <span>24/7 Emergency Service</span>
          </div>
        </div>
        <div className="NavContactInfo">
          {/* Navigation */}
          <p className="MenuSectionTitle">Navigation</p>
          <ul>
            <li>
              <a href="#servies" onClick={() => setShowMenu(false)}>
                <i className="fa-solid fa-screwdriver-wrench"></i>
                <p>Services</p>
              </a>
            </li>
            <li>
              <a href="#reviews" onClick={() => setShowMenu(false)}>
                <i className="fa-regular fa-star"></i>
                <p>Reviews</p>
              </a>
            </li>
            <li>
              <a href="#schedule-service" onClick={() => setShowMenu(false)}>
                <i className="fa-regular fa-envelope"></i>
                <p>Contact</p>
              </a>
            </li>
          </ul>

          {/* Contact Info */}
          <p className="MenuSectionTitle">Contact Info</p>
          <ul>
            <li>
              <a href="tel:2094500830" onClick={() => setShowMenu(false)}>
                <i className="fa-solid fa-phone"></i>
                <p>(209) 450-0830</p>
              </a>
            </li>
            <li>
              <a
                href="mailto:humbertosanchez556@gmail.com"
                onClick={() => setShowMenu(false)}
              >
                <i className="fa-solid fa-envelope"></i>
                <p>humbertos550@icloud.com</p>
              </a>
            </li>
            <li>
              <a
                href="https://www.google.com/maps/search/?api=1&query=3009+McKittrick+Ct+Ceres+CA+95307"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setShowMenu(false)}
              >
                <i className="fa-solid fa-location-dot"></i>{" "}
                <p>3009 McKittrick Ct, Ceres, CA</p>
              </a>
            </li>
          </ul>

          {/* Footer Button */}
          <div className="MenuFooter">
            <a href="#schedule-service" onClick={() => setShowMenu(false)}>
              <button className="EmergencyBtn">Book Emergency Service</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
