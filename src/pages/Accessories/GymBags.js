import React from "react";
import logo2 from "../../image/logo2.jpg";
import "../../styles/pageCommon.css";

export default function GymBags() {
  return (
    <div className="page-container">
      <img src={logo2} alt="logo" className="page-logo" />
      <h2>Сумки для зала</h2>
      {/* Здесь можно добавить описание, фото товаров, кнопки и т.д. */}
    </div>
  );
}
