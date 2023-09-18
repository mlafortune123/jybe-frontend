import PropTypes from "prop-types";
import React from "react";
import "./style.css";
import "./SelectField.css";

export const SelectField = ({
  property1,
  className,
  text = "placeholder text",
  frame = "https://anima-uploads.s3.amazonaws.com/projects/64e3ab5e179fd75deb1ba6bd/releases/64ee7c544c339b0ef858e2ac/img/frame-123-2.svg",
}) => {
  return (
    <div className={`select-field ${className}`}>
      <div className={`field property-1-${property1}`}>
        <div className="typing-2">
          {property1 === "typing" && <>typing|</>}

          {property1 === "default" && <>{text}</>}

          {property1 === "focus" && (
            <>
              <p className="span-wrapper">
                <span className="text-wrapper-3">|</span>
              </p>
              <p className="span-wrapper">
                <span className="text-wrapper-4">focus</span>
              </p>
            </>
          )}
        </div>
        <img
          className="select-field-img"
          alt="Frame"
          src={
            property1 === "default"
              ? frame
              : "https://anima-uploads.s3.amazonaws.com/projects/64e3ab5e179fd75deb1ba6bd/releases/64ee7c544c339b0ef858e2ac/img/frame-123-3.svg"
          }
        />
      </div>
      {property1 === "typing" && (
        <div className="selection-dropdown">
          <div className="selection-item">
            <div className="text-2">selection item</div>
          </div>
          <div className="div-wrapper">
            <div className="text-3">selection item</div>
          </div>
          <div className="div-wrapper">
            <div className="text-3">selection item</div>
          </div>
        </div>
      )}
    </div>
  );
};

SelectField.propTypes = {
  property1: PropTypes.oneOf(["typing", "focus", "default"]),
  text: PropTypes.string,
  frame: PropTypes.string,
};
