import PropTypes from "prop-types";
import React from "react";
import { Button } from "./Button";
import { TextTabItem } from "./TextTabItem";
import "./style.css";

export const Navbar = () => {
  return (
    <div className={`navbar navbar-instance`}>
      <div className="frame">
        <a href="/"  >
          <img className="logo" alt="Logo" src='/logo.svg' />
        </a>
        <div className="frame-2">
          <a
            href="/"
            className={window.location.pathname == "/" ? "selected-tab" : "inactive-text-tab-wrapper"}>
            Home
          </a>
          <a
            //href="/about"
            className={window.location.pathname == "/about" ? "selected-tab" : "inactive-text-tab-wrapper"}>
            About
          </a>
          <a
            //href="/start_jybing"
            className={window.location.pathname == "/userinfo" ? "selected-tab" : "inactive-text-tab-wrapper"}>
            Start Jybing
          </a>
          <a onClick={() => window.open("mailto:michaeltiller@jybe.ca")} className={window.location.pathname == "/contact" ? "selected-tab" : "inactive-text-tab-wrapper"}>
            Contact
          </a>
        </div>
        <Button
          className="design-component-instance-node widthten"
          icon="false"
          size="lg"
          state="default"
          text="Contact Us"
          type="primary"
          onClick={() => window.open("mailto:michaeltiller@jybe.ca")}
        />
      </div>
    </div>
  );
};

Navbar.propTypes = {
  logo: PropTypes.string,
};