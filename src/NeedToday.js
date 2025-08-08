import React from "react";
import "./NeedToday.css";

export default function NeedToday() {
  return (
    <div className="NeedToday">
      <div className="TodayContainer">
        <h3>Need HVAC Service Today?</h3>
        <p className="TodayDescription">
          Don't wait for your HVAC system to break down. Contact Cool Works HVAC
          Experts for professional installation, repair, and maintenance
          services.
        </p>
        <div className="TodayLinks">
          <a href="#schedule-service">
            <i class="fa-regular fa-clock"></i>
            <span>Schedule Service</span>
          </a>
          <a href="tel:2094500830">
            <i class="fa-solid fa-truck"></i>
            <span>Call (209) 450-0830</span>
          </a>
        </div>
        <div class="Line"></div>
        <div className="TodayInfo">
          <div className="InfoContainer">
            <p>24/7</p>
            <span>Emergency Service</span>
          </div>

          <div className="InfoContainer">
            <p>10+</p>
            <span>Years Experience</span>
          </div>

          <div className="InfoContainer">
            <p>100%</p>
            <span>Satisfaction Guaranteed</span>
          </div>
        </div>
      </div>
    </div>
  );
}
