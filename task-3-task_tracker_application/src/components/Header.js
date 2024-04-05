import React from "react";
import Logo from "../assets/company_logo.png";

export const Header = () => {
  return (
    <center>
      <header>
        <div className="logo">
          <img src={Logo} alt="Task Tracker logo" />
          <span>Task Tracker</span>
        </div>
      </header>
    </center>
  );
};
