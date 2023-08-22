import React from "react";

export const StateSelectedLarger = ({ className }) => {
  return (
    <svg
      className={`state-selected-larger ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect className="rect" fill="#9966FF" height="20" rx="4" width="20" x="2" y="2" />
      <path className="path" d="M8 11.5L11 14L16 9" stroke="white" strokeWidth="2" />
      <path
        className="path"
        clipRule="evenodd"
        d="M16.707 8.79279C16.8945 8.98031 16.9998 9.23462 16.9998 9.49979C16.9998 9.76495 16.8945 10.0193 16.707 10.2068L11.707 15.2068C11.5195 15.3943 11.2652 15.4996 11 15.4996C10.7349 15.4996 10.4806 15.3943 10.293 15.2068L7.29304 12.2068C7.11088 12.0182 7.01009 11.7656 7.01237 11.5034C7.01465 11.2412 7.11981 10.9904 7.30522 10.805C7.49063 10.6196 7.74144 10.5144 8.00364 10.5121C8.26584 10.5098 8.51844 10.6106 8.70704 10.7928L11 13.0858L15.293 8.79279C15.4806 8.60532 15.7349 8.5 16 8.5C16.2652 8.5 16.5195 8.60532 16.707 8.79279Z"
        fill="white"
        fillRule="evenodd"
      />
    </svg>
  );
};
