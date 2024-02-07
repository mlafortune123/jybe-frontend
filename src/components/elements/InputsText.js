import React from "react";
import "./style.css";
import "./InputsText.css";

export const InputsText = ({ label, name, value, onChange, className, type, width }) => {
  return (
    <div className={`inputs-text design-component-instance-node-2 ${width} `}>
      <div className={`frame-2 default ${className}`}>
        <div className="password-2">
        <input
            value={value}
            onChange={(e) => onChange(name ,e.target.value, type)}
            placeholder={label}
            type={type}
            style={{width:'100%'}}
          />
        </div>
      </div>
    </div>
  );
};