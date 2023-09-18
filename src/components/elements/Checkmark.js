import PropTypes from "prop-types";
import React from "react";

export const Checkmark = ({ color = "#FF5874", className }) => {
  return (
    <svg
      className={`toggle-checkmark-1 ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 25 24"
      width="25"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect className="rect" fill="white" height="20" rx="10" width="20" x="2.87695" y="2" />
      <path
        className="path"
        clipRule="evenodd"
        d="M17.5834 8.79279C17.7709 8.98031 17.8762 9.23462 17.8762 9.49979C17.8762 9.76495 17.7709 10.0193 17.5834 10.2068L12.5834 15.2068C12.3959 15.3943 12.1415 15.4996 11.8764 15.4996C11.6112 15.4996 11.3569 15.3943 11.1694 15.2068L8.16938 12.2068C7.98723 12.0182 7.88643 11.7656 7.88871 11.5034C7.89099 11.2412 7.99616 10.9904 8.18157 10.805C8.36697 10.6196 8.61779 10.5144 8.87998 10.5121C9.14218 10.5098 9.39478 10.6106 9.58338 10.7928L11.8764 13.0858L16.1694 8.79279C16.3569 8.60532 16.6112 8.5 16.8764 8.5C17.1415 8.5 17.3959 8.60532 17.5834 8.79279Z"
        fill={color}
        fillRule="evenodd"
      />
    </svg>
  );
};

Checkmark.propTypes = {
  color: PropTypes.string,
};