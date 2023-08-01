import React from "react";
import "./Header.css";
import logo from "../../assets/images/logo.png";

function HeaderMobile() {
  return (
    <header className="header header-mobile">
      <img className="logo" src={logo} alt="logo" />
      {/* Your mobile-specific elements go here */}
    </header>
  );
}

export default HeaderMobile;
