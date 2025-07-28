import React from "react";
import logo2 from "../../image/logo2.jpg";
import "../../styles/pageCommon.css";

export default function Towels() {
  return (
    <div className="page-container">
      <img src={logo2} alt="logo" className="page-logo" />
      <h2>Полотенца</h2>
    </div>
  );
}
