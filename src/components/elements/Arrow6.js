import PropTypes from "prop-types";
import React from "react";

export const Arrow6 = ({ color = "#0F3380", className }) => {
  return (
    <svg
      className={`arrow-6 ${className}`}
      fill="none"
      height="30"
      viewBox="0 0 20 20"
      width="30"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        clipRule="evenodd"
        d="M7.09327 3.6921C7.35535 3.46746 7.74991 3.49781 7.97455 3.75989L12.9745 9.59322C13.1752 9.82728 13.1752 10.1727 12.9745 10.4067L7.97455 16.24C7.74991 16.5021 7.35535 16.5325 7.09327 16.3078C6.83119 16.0832 6.80084 15.6886 7.02548 15.4265L11.6768 9.99997L7.02548 4.57338C6.80084 4.3113 6.83119 3.91674 7.09327 3.6921Z"
        fill={color}
        fillRule="evenodd"
      />
    </svg>
  );
};

Arrow6.propTypes = {
  color: PropTypes.string,
};
