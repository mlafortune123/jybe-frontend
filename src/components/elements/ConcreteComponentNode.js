import PropTypes from "prop-types";
import "./style.css";

export const ConcreteComponentNode = ({ stateDefaultLargerClassName, rectangleClassName, onClick, isChecked }) => {
  return isChecked ? (
    <svg
      className={`toggle-checkmark`}
      fill="none"
      height="25"
      viewBox="0 0 24 25"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <rect className="rect" fill="#1A4AB1" height="20" rx="10" width="20" x="2" y="2.23883" />
      <path
        className="path"
        clipRule="evenodd"
        d="M16.7074 9.03162C16.8949 9.21914 17.0002 9.47345 17.0002 9.73862C17.0002 10.0038 16.8949 10.2581 16.7074 10.4456L11.7074 15.4456C11.5199 15.6331 11.2656 15.7384 11.0004 15.7384C10.7352 15.7384 10.4809 15.6331 10.2934 15.4456L7.29341 12.4456C7.11125 12.257 7.01045 12.0044 7.01273 11.7422C7.01501 11.48 7.12018 11.2292 7.30559 11.0438C7.491 10.8584 7.74181 10.7532 8.00401 10.7509C8.2662 10.7487 8.5188 10.8495 8.70741 11.0316L11.0004 13.3246L15.2934 9.03162C15.4809 8.84415 15.7352 8.73883 16.0004 8.73883C16.2656 8.73883 16.5199 8.84415 16.7074 9.03162Z"
        fill="white"
        fillRule="evenodd"
      />
    </svg>
  ) : (
    <div
      className={`concrete-component-node ${stateDefaultLargerClassName}`}
      onClick={onClick}
    >
      <div className={`rectangle ${rectangleClassName}`} />
    </div>
  );
};

ConcreteComponentNode.propTypes = {
  initialState: PropTypes.bool, // Pass true for initially checked and false for initially unchecked
  stateDefaultLargerClassName: PropTypes.string,
  rectangleClassName: PropTypes.string,
};