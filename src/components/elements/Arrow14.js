import PropTypes from "prop-types";
import React from "react";

export const Arrow14 = ({ color = "#1A4AB1", className }) => {
  return (
    <svg
      className={`arrow-14 ${className}`}
      fill="none"
      height="21"
      viewBox="0 0 20 21"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        clipRule="evenodd"
        d="M12.9067 4.19213C13.1688 4.41677 13.1992 4.81133 12.9745 5.07341L8.32317 10.5L12.9745 15.9266C13.1992 16.1887 13.1688 16.5832 12.9067 16.8079C12.6447 17.0325 12.2501 17.0021 12.0255 16.7401L7.02546 10.9067C6.82485 10.6727 6.82485 10.3273 7.02546 10.0933L12.0255 4.25992C12.2501 3.99784 12.6447 3.96749 12.9067 4.19213Z"
        fill={color}
        fillRule="evenodd"
      />
    </svg>
  );
};

Arrow14.propTypes = {
  color: PropTypes.string,
};
