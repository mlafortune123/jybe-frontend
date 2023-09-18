import React from "react";

export const EmptyCheck = ({ className }) => {
  return (
    <svg
      className={`check-mark-3 ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 25 24"
      width="25"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        clipRule="evenodd"
        d="M12.5 1.25C6.56294 1.25 1.75 6.06294 1.75 12C1.75 17.9371 6.56294 22.75 12.5 22.75C18.4371 22.75 23.25 17.9371 23.25 12C23.25 6.06294 18.4371 1.25 12.5 1.25ZM3.25 12C3.25 6.89137 7.39137 2.75 12.5 2.75C17.6086 2.75 21.75 6.89137 21.75 12C21.75 17.1086 17.6086 21.25 12.5 21.25C7.39137 21.25 3.25 17.1086 3.25 12Z"
        fill="#9BA6B0"
        fillRule="evenodd"
      />
    </svg>
  );
};