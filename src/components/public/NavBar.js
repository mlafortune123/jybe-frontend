import React, { useState } from "react";
import "./navbar.css"
const Navbar = () => {

    return (
<div className="navigation-wrap">
  <a
    href="/"
    aria-current="page"
    className="logo-link w-nav-brand w--current"
    aria-label="home"
  >
    <img
      src="./6424bad5f9f3e680165958ab_Jybelogo23.JPG"
      width={200}
      height="Auto"
      alt=""
      className="logo-image"
    />
  </a>
  <div className="menu">
    <nav role="navigation" className="navigation-items w-nav-menu">
      <a
        href="/about"
        className="navigation-item w-nav-link"
      >
        About
      </a>
      <a
        href="/get_started"
        className="navigation-item w-nav-link"
      >
        Start Jybing
      </a>
      <a
        href="/contact"
        className="navigation-item w-nav-link"
      >
        Contact
      </a>
    </nav>
    <div
      className="menu-button w-nav-button"
      style={{ WebkitUserSelect: "text" }}
      aria-label="menu"
      role="button"
      tabIndex={0}
      aria-controls="w-nav-overlay-0"
      aria-haspopup="menu"
      aria-expanded="false"
    >
      <img
        src="./6424ac31892aff1dea961c09_menu-icon.png"
        width={22}
        alt=""
        className="menu-icon"
      />
    </div>
  </div>
  <a
    href="mailto:mail@business.com?subject=You%27ve%20got%20mail!"
    className="button cc-contact-us w-inline-block"
    style={{width:"200px"}}
  >
    <div>Contact us</div>
  </a>
</div>

    );
};

export default Navbar;