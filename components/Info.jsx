import React from "react";
import ReactDOM from "react-dom";

export default function Info() {
  return (
    <div className="info-container">
      <img
        src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
        className="person-img"
        alt=""
      />
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
