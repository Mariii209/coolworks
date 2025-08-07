import React from "react";
import CheckIcon from "./SvgIcons/CheckIcon";
import ThermoIcon from "./SvgIcons/ThermoIcon";
import "./Services.css";

export default function Services() {
  return (
    <div className="Services">
      <h2>Our HVAC Services</h2>
      <p className="ServiceDescription">
        Professional heating, ventilation, and air conditioning services for
        residential and commercial properties throughout Central California.
      </p>
      <div className="ServiceSection">
        <div className="ServiceCard">
          <i class="fa-solid fa-snowflake Snow"></i>
          <h4>Air Conditioning Installation & Repair</h4>
          <p>
            Professional AC installation, repair, and maintenance services to
            keep your home cool and comfortable year-round.
          </p>
          <ul>
            <li>
              <CheckIcon
                style={{ width: "14px", height: "14px", color: "#05DF72" }}
              />
              <span>Emergency 24/7 Service</span>
            </li>
            <li>
              <CheckIcon
                style={{ width: "14px", height: "14px", color: "#05DF72" }}
              />
              <span>Licensed Technicians</span>
            </li>
            <li>
              <CheckIcon
                style={{ width: "14px", height: "14px", color: "#05DF72" }}
              />
              <span>Warranty Included</span>
            </li>
          </ul>
        </div>

        <div className="ServiceCard">
          <i class="fa-solid fa-fire Fire"></i>
          <h4>Heating System Services</h4>
          <p>
            Complete heating solutions including furnace installation, repair,
            and maintenance for optimal winter comfort.
          </p>
          <ul>
            <li>
              <CheckIcon
                style={{ width: "14px", height: "14px", color: "#05DF72" }}
              />
              <span>Energy Efficient Systems</span>
            </li>
            <li>
              <CheckIcon
                style={{ width: "14px", height: "14px", color: "#05DF72" }}
              />
              <span>Same-Day Service</span>
            </li>
            <li>
              <CheckIcon
                style={{ width: "14px", height: "14px", color: "#05DF72" }}
              />
              <span>Free Estimates</span>
            </li>
          </ul>
        </div>

        <div className="ServiceCard">
          <i class="fa-solid fa-wind Air"></i>
          <h4>Mini Split Installation & Repair</h4>
          <p>
            Expert mini split system installation and repair services for
            efficient zone-based climate control.
          </p>
          <ul>
            <li>
              <CheckIcon
                style={{ width: "14px", height: "14px", color: "#05DF72" }}
              />
              <span>Ductless Solutions</span>
            </li>
            <li>
              <CheckIcon
                style={{ width: "14px", height: "14px", color: "#05DF72" }}
              />
              <span>Energy Savings</span>
            </li>
            <li>
              <CheckIcon
                style={{ width: "14px", height: "14px", color: "#05DF72" }}
              />
              <span>Quiet Operation</span>
            </li>
          </ul>
        </div>

        <div className="ServiceCard">
          <ThermoIcon />
          <h4>Thermostat Installation & Setup</h4>
          <p>
            Smart and programmable thermostat installation to optimize your
            home's energy efficiency and comfort.
          </p>
          <ul>
            <li>
              <CheckIcon
                style={{ width: "14px", height: "14px", color: "#05DF72" }}
              />
              <span>Smart Home Integration</span>
            </li>
            <li>
              <CheckIcon
                style={{ width: "14px", height: "14px", color: "#05DF72" }}
              />
              <span>Energy Monitoring</span>
            </li>
            <li>
              <CheckIcon
                style={{ width: "14px", height: "14px", color: "#05DF72" }}
              />
              <span>Remote Control</span>
            </li>
          </ul>
        </div>

        <div className="ServiceCard">
          <i class="fa-solid fa-gear Gear"></i>
          <h4>HVAC Maintenance</h4>
          <p>
            Comprehensive maintenance programs to keep your HVAC system running
            efficiently and prevent costly repairs.
          </p>
          <ul>
            <li>
              <CheckIcon
                style={{ width: "14px", height: "14px", color: "#05DF72" }}
              />
              <span>Seasonal Tune-ups</span>
            </li>
            <li>
              <CheckIcon
                style={{ width: "14px", height: "14px", color: "#05DF72" }}
              />
              <span>Filter Replacement</span>
            </li>
            <li>
              <CheckIcon
                style={{ width: "14px", height: "14px", color: "#05DF72" }}
              />
              <span>System Optimization</span>
            </li>
          </ul>
        </div>

        <div className="ServiceCard">
          <i class="fa-solid fa-wrench Wrench"></i>
          <h4>Emergency HVAC Repair</h4>
          <p>
            24/7 emergency HVAC repair services to restore comfort to your home
            when you need it most.
          </p>
          <ul>
            <li>
              <CheckIcon
                style={{ width: "14px", height: "14px", color: "#05DF72" }}
              />
              <span>24/7 Availability</span>
            </li>
            <li>
              <CheckIcon
                style={{ width: "14px", height: "14px", color: "#05DF72" }}
              />
              <span>Rapid Response</span>
            </li>
            <li>
              <CheckIcon
                style={{ width: "14px", height: "14px", color: "#05DF72" }}
              />
              <span>Upfront Pricing</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
