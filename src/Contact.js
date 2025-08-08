import React from "react";
import Swal from "sweetalert2";
import "./Contact.css";
import Areas from "./Areas";
import Location from "./Location";

export default function Contact() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "40e0ce4e-b8b8-4db5-9c41-552060b42ebd");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        event.target.reset(); // Clear the form

        Swal.fire({
          title: "Message Sent!",
          text: "Thanks for reaching out. I'll get back to you soon!",
          icon: "success",
          confirmButtonColor: "#0F172B",
        });
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      Swal.fire({
        title: "Oops!",
        text: "Something went wrong. Please try again later.",
        icon: "error",
        confirmButtonColor: "#e89064",
      });
    }
  };
  return (
    <div className="Contact" id="schedule-service">
      <h2>Get In Touch</h2>
      <p className="ContactDescription">
        Ready to schedule service or have questions? We're here to help with all
        your HVAC needs.
      </p>
      <div className="ContactContainerInfo">
        <form className="Contact-form" onSubmit={onSubmit}>
          <input
            type="hidden"
            name="access_key"
            value="40e0ce4e-b8b8-4db5-9c41-552060b42ebd"
          ></input>

          <h4>Request Service</h4>
          <p>Fill out the form and we'll get back to you within 24 hours.</p>

          <div className="UserInfo">
            <input
              type="text"
              id="first-name"
              name="First Name"
              placeholder="First Name"
              required
            />
            <input
              type="text"
              id="last-name"
              name="Last Name"
              placeholder="Last Name"
              required
            />
          </div>

          <div className="UserInfo">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="your.email@example.com"
              required
            />
            <input
              type="tel"
              name="Phone Number"
              id="phone-number"
              placeholder="Phone Number"
              required
            />
          </div>

          <div className="Service">
            <input
              type="text"
              name="Service Address"
              id="service-address"
              placeholder="Service Address"
              required
            />
          </div>

          <div className="Message">
            <textarea
              id="services-needs"
              name="HVAC need"
              placeholder="Describe your HVAC needs..."
              required
            ></textarea>
          </div>

          <button type="submit">Get Quote</button>

          <span>Or call us directly at (209) 450-0830</span>
        </form>
        <div className="ContactSec">
          <div className="ContactInfo">
            <h4>Contact Information</h4>

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
              <i class="fa-solid fa-phone"></i>
              <div className="Info">
                <p>Mon-Fri: 7:00 AM - 8:00 PM</p>
                <span>Emergency service available 24/7</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Areas />
      <Location />
    </div>
  );
}
