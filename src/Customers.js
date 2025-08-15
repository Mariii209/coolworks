import React from "react";
import "./Customers.css";

export default function Customers() {
  return (
    <div className="Customers" id="reviews">
      <h2>What Our Customers Say</h2>
      <p className="CustomersDescription">
        Don't just take our word for it. Here's what homeowners throughout the
        area are saying about our HVAC services.
      </p>
      <div className="ReviewContainer">
        <div className="ReviewCard">
          <div className="Stars">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </div>
          <p className="ReviewDescription">
            "Cool Works HVAC saved the day when our AC broke during a heatwave.
            They arrived within 2 hours and fixed it perfectly. Professional,
            courteous, and reasonably priced!"
          </p>
          <div className="Line"></div>
          <div className="ReviewInfo">
            <div className="PersonInfo">
              <p className="Name">Sarah Johnson</p>
              <p className="City">Fresno</p>
            </div>
            <p className="Service">Emergency AC Repair</p>
          </div>
        </div>

        <div className="ReviewCard">
          <div className="Stars">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </div>
          <p className="ReviewDescription">
            "Had them install a new smart thermostat and service our heating
            system. The technician was knowledgeable and explained everything
            clearly. Highly recommend!"
          </p>
          <div className="Line"></div>
          <div className="ReviewInfo">
            <div className="PersonInfo">
              <p className="Name">Mike Rodriguez</p>
              <p className="City">Sacramento</p>
            </div>
            <p className="Service">Thermostat Installation</p>
          </div>
        </div>

        <div className="ReviewCard">
          <div className="Stars">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </div>
          <p className="ReviewDescription">
            "We've been using Cool Works for maintenance for 3 years now.
            They're always on time, thorough, and have prevented several major
            issues. Great peace of mind!"
          </p>
          <div className="Line"></div>
          <div className="ReviewInfo">
            <div className="PersonInfo">
              <p className="Name">Jennifer Chen</p>
              <p className="City">Ceres</p>
            </div>
            <p className="Service">Preventive Maintenance</p>
          </div>
        </div>

        <div className="ReviewCard">
          <div className="Stars">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </div>
          <p className="ReviewDescription">
            "Excellent service from start to finish. They installed our new HVAC
            system efficiently and cleaned up perfectly. The pricing was fair
            and transparent."
          </p>
          <div className="Line"></div>
          <div className="ReviewInfo">
            <div className="PersonInfo">
              <p className="Name">David Thompson</p>
              <p className="City">Merced</p>
            </div>
            <p className="Service">HVAC Installation</p>
          </div>
        </div>

        <div className="ReviewCard">
          <div className="Stars">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </div>
          <p className="ReviewDescription">
            "Fast response time and expert diagnosis. Fixed our heating issue
            quickly and gave us tips to prevent future problems. Will definitely
            call them again!"
          </p>
          <div className="Line"></div>
          <div className="ReviewInfo">
            <div className="PersonInfo">
              <p className="Name">Lisa Martinez</p>
              <p className="City">Lodi</p>
            </div>
            <p className="Service">Heating Repair</p>
          </div>
        </div>

        <div className="ReviewCard">
          <div className="Stars">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </div>
          <p className="ReviewDescription">
            "Professional team that knows their stuff. They improved our indoor
            air quality dramatically with a new filtration system. Couldn't be
            happier!"
          </p>
          <div className="Line"></div>
          <div className="ReviewInfo">
            <div className="PersonInfo">
              <p className="Name">Robert Kim</p>
              <p className="City">Modesto</p>
            </div>
            <p className="Service">Air Quality Improvement</p>
          </div>
        </div>
      </div>
    </div>
  );
}
