import React from "react";
import CheckIcon from "./SvgIcons/CheckIcon";
import "./Areas.css";

export default function Areas() {
  return (
    <div className="Areas">
      <div className="ServiceHeader">
        <i class="fa-solid fa-location-dot"></i>
        <h4>Service Areas</h4>
      </div>
      <p className="AreaDescription">
        We proudly serve the following areas throughout Central California:
      </p>
      <ul>
        <li>
          <CheckIcon
            style={{ width: "14px", height: "14px", color: "#05DF72" }}
          />
          Modesto
        </li>
        <li>
          <CheckIcon
            style={{ width: "14px", height: "14px", color: "#05DF72" }}
          />
          Merced
        </li>
        <li>
          <CheckIcon
            style={{ width: "14px", height: "14px", color: "#05DF72" }}
          />
          Ripon
        </li>
        <li>
          <CheckIcon
            style={{ width: "14px", height: "14px", color: "#05DF72" }}
          />
          Livingston
        </li>
        <li>
          <CheckIcon
            style={{ width: "14px", height: "14px", color: "#05DF72" }}
          />
          Stockton
        </li>
        <li>
          <CheckIcon
            style={{ width: "14px", height: "14px", color: "#05DF72" }}
          />
          Oakdale
        </li>
        <li>
          <CheckIcon
            style={{ width: "14px", height: "14px", color: "#05DF72" }}
          />
          Atwater
        </li>
        <li>
          <CheckIcon
            style={{ width: "14px", height: "14px", color: "#05DF72" }}
          />
          Gustine
        </li>
        <li>
          <CheckIcon
            style={{ width: "14px", height: "14px", color: "#05DF72" }}
          />
          Lodi
        </li>
        <li>
          <CheckIcon
            style={{ width: "14px", height: "14px", color: "#05DF72" }}
          />
          Riverbank
        </li>
        <li>
          <CheckIcon
            style={{ width: "14px", height: "14px", color: "#05DF72" }}
          />
          Patterson
        </li>
        <li>
          <CheckIcon
            style={{ width: "14px", height: "14px", color: "#05DF72" }}
          />
          Newman
        </li>
        <li>
          <CheckIcon
            style={{ width: "14px", height: "14px", color: "#05DF72" }}
          />
          Manteca
        </li>
        <li>
          <CheckIcon
            style={{ width: "14px", height: "14px", color: "#05DF72" }}
          />
          Ceres
        </li>
        <li>
          <CheckIcon
            style={{ width: "14px", height: "14px", color: "#05DF72" }}
          />
          Los Banos
        </li>
        <li>
          <CheckIcon
            style={{ width: "14px", height: "14px", color: "#05DF72" }}
          />
          Bay Area
        </li>
        <li>
          <CheckIcon
            style={{ width: "14px", height: "14px", color: "#05DF72" }}
          />
          Tracy
        </li>
        <li>
          <CheckIcon
            style={{ width: "14px", height: "14px", color: "#05DF72" }}
          />
          Lathrop
        </li>
        <li>
          <CheckIcon
            style={{ width: "14px", height: "14px", color: "#05DF72" }}
          />
          Waterford
        </li>
        <li>
          <CheckIcon
            style={{ width: "14px", height: "14px", color: "#05DF72" }}
          />
          Sacramento
        </li>
        <li>
          <CheckIcon
            style={{ width: "14px", height: "14px", color: "#05DF72" }}
          />
          Turlock
        </li>
        <li>
          <CheckIcon
            style={{ width: "14px", height: "14px", color: "#05DF72" }}
          />
          Escalon
        </li>
        <li>
          <CheckIcon
            style={{ width: "14px", height: "14px", color: "#05DF72" }}
          />
          Hughson
        </li>
        <li>
          <CheckIcon
            style={{ width: "14px", height: "14px", color: "#05DF72" }}
          />
          Fresno
        </li>
      </ul>
      <div className="AskYourArea">
        <i class="fa-solid fa-phone"></i>
        <div className="CallForArea">
          <p>Don't see your area?</p>
          <span>
            Call us at <span className="Color">(209) 450-0830 </span> to check
            availability in your location.
          </span>
        </div>
      </div>
    </div>
  );
}
