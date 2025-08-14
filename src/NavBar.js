import React, { useState } from "react";
import "./NavBar.css";

export default function NavBar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="NavBar">
      <nav className="NavBarInfo">
        <img src="/logo.jpg" alt="" />
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
              <i className="fa-solid fa-screwdriver-wrench"></i> Services
            </li>
            <li>
              <i className="fa-regular fa-star"></i> Reviews
            </li>
            <li>
              <i className="fa-regular fa-envelope"></i> Contact
            </li>
          </ul>

          {/* Contact Info */}
          <p className="MenuSectionTitle">Contact Info</p>
          <ul>
            <li>
              <i className="fa-solid fa-phone"></i> (209) 450-0830
            </li>
            <li>
              <i className="fa-solid fa-envelope"></i> humbertos550@icloud.com
            </li>
            <li>
              <i className="fa-solid fa-location-dot"></i> 3009 McKittrick Ct,
              Ceres, CA
            </li>
          </ul>

          {/* Footer Button */}
          <div className="MenuFooter">
            <button className="EmergencyBtn">Book Emergency Service</button>
          </div>
        </div>
      </div>
    </div>
  );
}
