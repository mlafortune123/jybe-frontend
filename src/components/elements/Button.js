import PropTypes from "prop-types";
import React from "react";
import { Add14 } from "./Add14";
import { Add7 } from "./Add7";
import { Arrow14 } from "./Arrow14";
import { Arrow6 } from "./Arrow6";
import "./style.css";

export const Button = ({ type, size, icon, state, className, text = "Button text" }) => {
  return (
    <div className={`button ${type} ${icon} ${size} ${state} ${className}`}>
      {((icon === "only" && size === "lg" && state === "default") ||
        (icon === "only" && size === "md" && state === "default") ||
        (icon === "only" && size === "sm" && state === "default") ||
        (icon === "only" && state === "focus") ||
        (icon === "only" && state === "hover") ||
        (size === "xl" && state === "default")) && (
        <Add7
          className={`${size === "md" ? "class" : size === "sm" ? "class-2" : size === "xs" ? "class-3" : "class-4"}`}
        />
      )}

      {size === "xs" && state === "default" && icon === "only" && <Add14 className="add" />}

      {icon === "left" && (
        <Arrow14
          className={`${["lg", "md"].includes(size) && "class-2"} ${["sm", "xs"].includes(size) && "class-3"}`}
          color={
            (state === "focus" && type === "outlined") ||
            (state === "focus" && type === "secondary") ||
            (state === "hover" && type === "outlined") ||
            (state === "hover" && type === "secondary")
              ? "#0F3380"
              : state === "default" && ["outlined", "secondary"].includes(type)
              ? "#1A4AB1"
              : type === "primary"
              ? "white"
              : undefined
          }
        />
      )}

      {["false", "left", "right"].includes(icon) && <div className="text">{text}</div>}

      {icon === "right" && (
        <Arrow6
          className={`${["sm", "xs"].includes(size) ? "class-3" : "class-2"}`}
          color={
            state === "default" && ["outlined", "secondary"].includes(type)
              ? "#1A4AB1"
              : type === "primary"
              ? "white"
              : "#0F3380"
          }
        />
      )}
    </div>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(["secondary", "circular", "inverted", "primary", "outlined"]),
  size: PropTypes.oneOf(["xl", "xs", "lg", "sm", "md"]),
  icon: PropTypes.oneOf(["false", "right", "only", "left"]),
  state: PropTypes.oneOf(["default", "hover", "focus"]),
  text: PropTypes.string,
};
