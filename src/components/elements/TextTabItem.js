import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { OutlineArrowsAltArrowDown1 } from "./OutlineArrowsAltArrowDown1";
import { OutlineLikeStar1 } from "./OutlineLikeStar1";
import "./style.css";

export const TextTabItem = ({ property1, iconRight, iconLeft, className, text = "Active Text Tab" }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
    iconRight: iconRight,

    iconLeft: iconLeft,
  });

  return (
    <div
      className={`text-tab-item icon-right-${state.iconRight} property-1-${state.property1} icon-left-${state.iconLeft} ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onClick={() => {
        dispatch("click");
      }}
    >
      {state.iconLeft && (
        <OutlineLikeStar1 className="instance-node" color={state.property1 === "inactive" ? "#606970" : "#1A4AB1"} />
      )}

      <div className="active-text-tab">
        {state.property1 === "default" && <>{text}</>}

        {state.property1 === "inactive" && <>inactive Text Tab</>}

        {state.property1 === "hover" && <>hover Text Tab</>}
      </div>
      {state.iconRight && (
        <OutlineArrowsAltArrowDown1
          className="instance-node"
          color={state.property1 === "inactive" ? "#606970" : "#1A4AB1"}
        />
      )}
    </div>
  );
};

function reducer(state, action) {
  if (state.iconLeft === false && state.iconRight === false && state.property1 === "inactive") {
    switch (action) {
      case "mouse_enter":
        return {
          iconLeft: false,
          iconRight: false,
          property1: "hover",
        };
    }
  }

  if (state.iconLeft === false && state.iconRight === false && state.property1 === "hover") {
    switch (action) {
      case "mouse_leave":
        return {
          iconLeft: false,
          iconRight: false,
          property1: "inactive",
        };

      case "click":
        return {
          iconLeft: false,
          iconRight: false,
          property1: "default",
        };
    }
  }

  if (state.iconLeft === false && state.iconRight === true && state.property1 === "inactive") {
    switch (action) {
      case "mouse_enter":
        return {
          iconLeft: false,
          iconRight: true,
          property1: "hover",
        };
    }
  }

  if (state.iconLeft === false && state.iconRight === true && state.property1 === "hover") {
    switch (action) {
      case "mouse_leave":
        return {
          iconLeft: false,
          iconRight: true,
          property1: "inactive",
        };

      case "click":
        return {
          iconLeft: false,
          iconRight: true,
          property1: "default",
        };
    }
  }

  if (state.iconLeft === true && state.iconRight === false && state.property1 === "inactive") {
    switch (action) {
      case "mouse_enter":
        return {
          iconLeft: true,
          iconRight: false,
          property1: "hover",
        };
    }
  }

  if (state.iconLeft === true && state.iconRight === false && state.property1 === "hover") {
    switch (action) {
      case "mouse_leave":
        return {
          iconLeft: true,
          iconRight: false,
          property1: "inactive",
        };

      case "click":
        return {
          iconLeft: true,
          iconRight: false,
          property1: "default",
        };
    }
  }

  return state;
}

TextTabItem.propTypes = {
  property1: PropTypes.oneOf(["hover", "inactive", "default"]),
  iconRight: PropTypes.bool,
  iconLeft: PropTypes.bool,
  text: PropTypes.string,
};