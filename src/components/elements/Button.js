import PropTypes from "prop-types";
import React from "react";
// import { Add14 } from "./Add14";
// import { Add7 } from "./Add7";
// import { Arrow14 } from "./Arrow14";
// import { Arrow6 } from "./Arrow6";
import "./style.css";

export const Button = ({ type, size, icon, state, className, text = "Button text", onClick }) => {
  return (
    <div onClick={onClick} className={`button ${type} ${icon} ${size} ${state} ${className}`}>
      {/* {((icon === "only" && size === "lg" && state === "default") ||
        (icon === "only" && size === "md" && state === "default") ||
        (icon === "only" && size === "sm" && state === "default") ||
        (icon === "only" && state === "focus") ||
        (icon === "only" && state === "hover") ||
        (size === "xl" && state === "default")) && (
        <Add7
          className={`${size === "md" ? "class" : size === "sm" ? "class-2" : size === "xs" ? "class-3" : "class-4"}`}
        />
      )} */}

      {/* {size === "xs" && state === "default" && icon === "only" && <Add14 className="add" />} */}
      {["false", "left", "right"].includes(icon) && <div className="text">{text}</div>}
        <img src="/rightarrow.png" alt="rightarrow" />
    </div>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(["secondary", "circular", "inverted", "primary", "outlined"]),
  size: PropTypes.oneOf(["xl", "xs", "lg", "sm", "md"]),
  icon: PropTypes.oneOf(["false", "right", "only", "left"]),
  state: PropTypes.oneOf(["default", "hover", "focus"]),
  text: PropTypes.string
};
