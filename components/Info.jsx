import React from "react";
import ReactDOM from "react-dom";

export default function Info() {
  return (
    <div className="info-container">
      <img src="../images/person.jpg" className="person-img" alt="" />
      <h1 className="info-name">Bryan Aung</h1>
      <h3 className="info-job">Web Developer</h3>
      <p className="info-website">bryan.aung.website</p>
      <button className="btn btn-email">
        <i class="fa-solid fa-envelope"></i>Email
      </button>
      <button className="btn btn-linkedin">
        <i class="fa-brands fa-linkedin"></i>LinkedIn
      </button>
    </div>
  );
}
