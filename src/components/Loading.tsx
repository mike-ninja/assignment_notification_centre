import React from "react";
import logo from "../logo.svg";

export default function Loading() {
  return (
    <div className="spinning-logo-container">
      <img src={logo} alt="Logo" className="spinning-logo" />
    </div>
  );
}
