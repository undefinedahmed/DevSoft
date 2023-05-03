import React from "react";
import { NavLink } from "react-router-dom";
function Card(props) {
  return (
    <div class="card" style={{ width: "18rem" }}>
      <img
        style={{ width: "100%", height: "auto" }}
        src={props.imgSrc}
        alt="Card image here"
      />
      <div class="card-body">
        <h5 class="card-title">{props.title}</h5>
        <p class="card-text">{props.text}</p>
        <NavLink to="/contact" className="btn btn-outline-primary">
          Contact Us
        </NavLink>
      </div>
    </div>
  );
}

export default Card;
