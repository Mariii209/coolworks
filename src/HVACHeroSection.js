import React, { useState, useEffect } from "react";
import CheckIcon from "./SvgIcons/CheckIcon";
import WarrantyIcon from "./SvgIcons/WarrantyIcon";
import ThermometerIncon from "./SvgIcons/ThermometerIcon";
import "./HVACHeroSection.css";
import MainPhoto from "./MainImages/MainPhoto.jpg";
import SecondImage from "./MainImages/SecondImage.jpg";
import ThirdImage from "./MainImages/ThirdImage.jpg";

const images = [MainPhoto, SecondImage, ThirdImage];

export default function HVACHeroSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000); // change every 2 seconds

    return () => clearInterval(interval); // cleanup
  }, []);

  return (
    <div
      className="HVACHeroSection"
      style={{
        backgroundImage: `url(${images[index]})`,
      }}
    >
      <div className="HeroContent">
        <div className="Emergency">
          <i class="fa-regular fa-clock"></i>
          <p>24/7 Emergency Service</p>
        </div>
        <h1>Professional HVAC Services You Can Trust</h1>
        <p className="HeroDescription">
          Keep your home comfortable year-round with expert heating, cooling,
          and ventilation services. Licensed, insured, and ready to serve you.
        </p>
        <div className="HeroSectionButtons">
          <a href="/" className="ScheduleToday">
            Schedule Service Today
          </a>
          <a href="/" className="Estimate">
            Get Free Estimate
          </a>
        </div>
        <div className="HeroBenefits">
          <div className="HeroBenefit">
            <CheckIcon
              style={{ width: "18px", height: "18px", color: "#05DF72" }}
            />
            <p>Licensed & Insured</p>
          </div>
          <div className="HeroBenefit">
            <WarrantyIcon style={{ width: "18px", height: "18px" }} />
            <p>10-Year Warranty</p>
          </div>
          <div className="HeroBenefit">
            <ThermometerIncon style={{ width: "18px", height: "18px" }} />
            <p>Expert Technicians</p>
          </div>
        </div>
      </div>
      <div className="EmergencyServices">
        <h3>Emergency HVAC Services</h3>
        <ul>
          <li>
            <CheckIcon
              style={{ width: "18px", height: "18px", color: "#FFFFFF" }}
            />
            <span>AC Breakdown Repair</span>
          </li>
          <li>
            <CheckIcon
              style={{ width: "18px", height: "18px", color: "#FFFFFF" }}
            />
            <span>Heating System Failure</span>
          </li>
          <li>
            <CheckIcon
              style={{ width: "18px", height: "18px", color: "#FFFFFF" }}
            />
            <span>Thermostat Issues</span>
          </li>
          <li>
            <CheckIcon
              style={{ width: "18px", height: "18px", color: "#FFFFFF" }}
            />
            <span>Air Quality Problems</span>
          </li>
        </ul>
        <div className="Call">
          <a href="/">
            <p>Call Now:</p>
            <p>(209) 450-0830</p>
          </a>
        </div>
      </div>
    </div>
  );
}
