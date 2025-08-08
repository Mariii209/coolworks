import React from "react";
import "./Partners.css";

export default function Partners() {
  return (
    <div className="Partners">
      <div className="PartnersContainer">
        <h3>Authorized Equipment Partners</h3>
        <p className="PartnersDescription">
          We are authorized dealers for premium HVAC brands, ensuring you
          receive genuine equipment with full manufacturer warranties.
        </p>
        <div className="PartnersGrid">
          <div className="PartnerCard">
            <span>🏆</span>
            <h4>MIRAGE Systems</h4>
            <p>Premium mini split and multi-zone systems</p>
          </div>

          <div className="PartnerCard">
            <span>⭐</span>
            <h4>VENTUS Series</h4>
            <p>Energy-efficient inverter technology</p>
          </div>

          <div className="PartnerCard">
            <span>🔧</span>
            <h4>Galaxy Multi Zone</h4>
            <p>Advanced multi-room climate control</p>
          </div>

          <div className="PartnerCard">
            <span>✓</span>
            <h4>All Major Brands</h4>
            <p>Carrier, Trane, Lennox, and more</p>
          </div>
        </div>
      </div>
    </div>
  );
}
