import React from "react";
import "./Professional.css";

export default function Professional() {
  return (
    <div className="Professional">
      <h3>Professional Excellence</h3>
      <p className="ProfessionalDescription">
        See the quality of our work, equipment, and professional service that
        sets Cool Works HVAC apart.
      </p>
      <div className="ProfessionalGrid">
        <div className="ProfessionalCard">
          <div className="ImgContainer">
            <img src="/first.jpg" alt="" />
          </div>
          <div className="Info">
            <div className="CardHeader">
              <i class="fa-solid fa-wrench Wrench"></i>
              <h4>Professional Service Work</h4>
            </div>
            <p>
              Our experienced technicians use advanced diagnostic equipment to
              ensure precise installation and repair of your HVAC systems.
            </p>
          </div>
        </div>

        <div className="ProfessionalCard">
          <div className="ImgContainer">
            <img src="/second.jpg" alt="" />
          </div>
          <div className="Info">
            <div className="CardHeader">
              <i class="fa-solid fa-cart-shopping Cart"></i>
              <h4>Quality Equipment Inventory</h4>
            </div>
            <p>
              We stock premium MIRAGE VENTUS systems and other top-brand
              equipment to provide you with reliable, energy-efficient
              solutions.
            </p>
          </div>
        </div>

        <div className="ProfessionalCard">
          <div className="ImgContainer">
            <img src="/third.jpg" alt="" />
          </div>
          <div className="Info">
            <div className="CardHeader">
              <i class="fa-solid fa-award Award"></i>
              <h4>Premium Brand Partners</h4>
            </div>
            <p>
              Authorized dealer of MIRAGE systems including Galaxy Multi Zone
              units, ensuring you get genuine, warrantied equipment.
            </p>
          </div>
        </div>
      </div>

      <div className="MoreInfo">
        <h3>Equipment We Install & Service</h3>
        <p className="ProfessionalDescription">
          We work with all major HVAC brands and specialize in both residential
          and commercial systems.
        </p>
        <div className="ProfessionalGrid">
          <div className="ProfessionalCard">
            <div className="ImgContainer">
              <img src="/four.jpg" alt="" className="FourImg" />
            </div>
            <div className="Info">
              <h4>Commercial & Residential Units</h4>
              <p>
                Professional installation and service of outdoor HVAC systems
                including heat pumps and condensers.
              </p>
            </div>
          </div>

          <div className="ProfessionalCard">
            <div className="ImgContainer">
              <img src="/five.jpg" alt="" className="FiveImg" />
            </div>
            <div className="Info">
              <h4>Mini Split Systems</h4>
              <p>
                Expert installation of ductless mini split systems for efficient
                zone-based climate control.
              </p>
            </div>
          </div>

          <div className="ProfessionalCard">
            <div className="ImgContainer">
              <img src="/six.jpg" alt="" className="SixImg" />
            </div>
            <div className="Info">
              <h4>Compact Indoor Units</h4>
              <p>
                Space-saving indoor units perfect for apartments, offices, and
                smaller residential spaces.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
