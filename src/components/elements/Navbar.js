import PropTypes from "prop-types";
import React from "react";
import { Button } from "./Button";
import { TextTabItem } from "./TextTabItem";
import "./style.css";

export const Navbar = ({
  className,
  logo = "https://anima-uploads.s3.amazonaws.com/projects/64e3ab5e179fd75deb1ba6bd/releases/64e3abf57f6aa148a586a050/img/logo-3.svg",
}) => {
  return (
    <div className={`navbar ${className}`}>
      <div className="frame">
        <img className="logo" alt="Logo" src={logo} />
        <div className="frame-2">
          <TextTabItem
            className="design-component-instance-node"
            iconLeft={false}
            iconRight={false}
            property1="default"
            text="Home"
          />
          <div className="inactive-text-tab-wrapper">
            <div className="inactive-text-tab">About</div>
          </div>
          <div className="inactive-text-tab-wrapper">
            <div className="inactive-text-tab">Start Jybing</div>
          </div>
          <div className="inactive-text-tab-wrapper">
            <div className="inactive-text-tab">Contact</div>
          </div>
        </div>
        <Button
            className="design-component-instance-node widthten"
            icon="false"
            size="lg"
            state="default"
            text="Contact Us"
            type="primary"
        />
      </div>
    </div>
  );
};

Navbar.propTypes = {
  logo: PropTypes.string,
};