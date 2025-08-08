import React from "react";
import "./Location.css";

export default function Location() {
  return (
    <div className="Location">
      <h3>Visit Our Location</h3>
      <p className="LocationDescription">
        Our office is conveniently located in Ceres, CA. Stop by for
        consultations or emergency service dispatch.
      </p>

      <div className="LocationMapInfo">
        <iframe
          src="https://www.google.com/maps?q=3009+McKittrick+Ct,+Ceres,+CA+95307&output=embed"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map"
        ></iframe>
        <div className="ContactSec">
          <div className="ContactInfo">
            <h4>Our Office</h4>

            <div className="MoreInfo">
              <i class="fa-solid fa-location-dot"></i>
              <div className="Info">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=3009+McKittrick+Ct+Ceres+CA+95307"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  3009 McKittrick Ct
                </a>
                <span>Ceres, CA 95307</span>
              </div>
            </div>

            <div className="MoreInfo">
              <i class="fa-regular fa-clock"></i>
              <div className="Info">
                <p>Office Hours:</p>
                <span>Mon-Fri: 7AM-8PM </span>
                <span>Sat: 8AM-6PM </span>
                <span>Sun: Emergency Only</span>
              </div>
            </div>

            <div className="MoreInfo">
              <i class="fa-solid fa-phone"></i>
              <div className="Info">
                <a href="tel:2094500830">(209) 450-0830</a>
                <span>24/7 Emergency Line</span>
              </div>
            </div>

            <div className="MoreInfo">
              <i class="fa-regular fa-envelope"></i>
              <div className="Info">
                <a href="mailto:humbertosanchez556@gmail.com">
                  humbertosanchez556@gmail.com
                </a>
                <span>Email Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
