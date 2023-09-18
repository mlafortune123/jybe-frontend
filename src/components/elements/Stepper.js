import PropTypes from "prop-types";
import React from "react";
import { BlueCheck } from "./BlueCheck";
import "./style.css";
import "./Stepper.css";
export const Stepper = ({
  property1,
  className,
  vector = "https://anima-uploads.s3.amazonaws.com/projects/64e3ab5e179fd75deb1ba6bd/releases/64ee7c544c339b0ef858e2ac/img/vector-303-4.svg",
  icon = <BlueCheck className="stepper-check-mark" />,
  img = "https://anima-uploads.s3.amazonaws.com/projects/64e3ab5e179fd75deb1ba6bd/releases/64ee7c544c339b0ef858e2ac/img/vector-303-5.svg",
  text = "STEP 1",
  text1 = "Google Account",
  vector1 = "https://anima-uploads.s3.amazonaws.com/projects/64e3ab5e179fd75deb1ba6bd/releases/64ee7c544c339b0ef858e2ac/img/vector-303-6.svg",
}) => {
  return (
    <div className={`stepper ${className}`}>
      <div className="stepper-frame">
        {icon}
        <img
          className="stepper-vector"
          alt="Vector"
          src={property1 === "in-progress" ? img : property1 === "pending" ? vector1 : vector}
        />
      </div>
      <div className="stepper-div">
        <div className="stepper-step">{text}</div>
        <div className="stepper-google-account">{text1}</div>
        <div className={`stepper-completed-2 ${property1}`}>
          {property1 === "completed" && <>Completed</>}

          {property1 === "in-progress" && <>in-progress</>}

          {property1 === "pending" && <>Pending</>}
        </div>
      </div>
    </div>
  );
};

Stepper.propTypes = {
  property1: PropTypes.oneOf(["pending", "completed", "in-progress"]),
  vector: PropTypes.string,
  img: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
  vector1: PropTypes.string,
};