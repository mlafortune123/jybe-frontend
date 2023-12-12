import PropTypes from "prop-types";
import React from "react";
import { Button } from "./Button";
// import { TextTabItem } from "./TextTabItem";
import { useAuth0 } from '@auth0/auth0-react';
import "./style.css";

export const Navbar = () => {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();
  return (
    <div className={`navbar navbar-instance`}>
      <div className="frame">
        <a href="/" style={{display:"flex"}} >
          <img className="logo" alt="Logo" src='/logo.svg' />
        </a>
        <div className="frame-2">
          <a
            href="/"
            className={`nav-item ${window.location.pathname == "/" ? "selected-tab" : "inactive-text-tab-wrapper"}`}>
            Home
          </a>
          <a
            href="/howitworks"
            className={`nav-item ${window.location.pathname == "/howitworks" ? "selected-tab" : "inactive-text-tab-wrapper"}`}>
            How it works
          </a>
          {window.location.pathname != "/" &&
          <a
            onClick={() => loginWithRedirect({openUrl: () => window.location.replace("/userinfo")})}
            className={`nav-item ${window.location.pathname == "/userinfo" ? "selected-tab" : "inactive-text-tab-wrapper"}`}>
              Start Jybing
            </a>}
          <a onClick={() => window.open("mailto:michaeltiller@jybe.ca")} className={`nav-item ${window.location.pathname == "/contact" ? "selected-tab" : "inactive-text-tab-wrapper"}`}>
            Contact
          </a>
        </div>
        <Button
          className="design-component-instance-node"
          icon="false"
          size="lg"
          state="default"
          text={isAuthenticated ? "Log Out" : "Log In"}
          type="primary"
          onClick={isAuthenticated ? () => logout({
            logoutParams: {
              returnTo: window.location.origin
            }
          }) : loginWithRedirect}
        />
      </div>
    </div>
  );
};

Navbar.propTypes = {
  logo: PropTypes.string,
};