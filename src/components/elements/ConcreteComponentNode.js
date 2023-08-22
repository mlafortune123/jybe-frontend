import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { StateSelectedLarger } from "./StateSelectedLarger";
import "./style.css";

export const ConcreteComponentNode = ({ stateProp, stateDefaultLargerClassName, rectangleClassName }) => {
  const [state, dispatch] = useReducer(reducer, {
    state: stateProp || "default-larger",
  });

  return (
    <>
      {state.state === "default-larger" && (
        <div
          className={`concrete-component-node ${stateDefaultLargerClassName}`}
          onClick={() => {
            dispatch("click");
          }}
        >
          <div className={`rectangle ${rectangleClassName}`} />
        </div>
      )}

      {state.state === "selected-larger" && <StateSelectedLarger className="state-selected" />}
    </>
  );
};

function reducer(state, action) {
  switch (action) {
    case "click":
      return {
        ...state,
        state: "selected-larger",
      };
  }

  return state;
}

ConcreteComponentNode.propTypes = {
  stateProp: PropTypes.oneOf(["selected-larger", "default-larger"]),
};