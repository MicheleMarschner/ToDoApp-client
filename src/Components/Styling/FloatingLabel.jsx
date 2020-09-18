import React, { useState } from "react";
// create a floating label input

export default function FloatingLabelInput({
  placeholder,
  name,
  value,
  callback,
  style,
  required = false,
}) {
  const [stateLabel, setStateLabel] = useState({ className: "" });
  const [stateError, setStateError] = useState({ className: "" });
  
    const handleInput = (e) => {
    if (e.target.value !== "") {
      setStateLabel({ className: "on" });
      setStateError({ className: "" });
      callback(e.target.name, e.target.value);
    } else {
      setStateLabel({ className: "" });
      callback(e.target.name, e.target.value);
    }
  };

  const handleFocusOut = (e) => {
    if (required && e.target.value === "") {
      setStateError({ className: "errorInput" });
    } else {
      setStateError({ className: "" });
    }
  };

  return (
    <div>
      <div className="floatingLabelInput">
        {stateError.className && (
          <label className={stateError.className}>* Please enter {name}</label>
        )}
        <label className={stateLabel.className}>{placeholder}</label>
        <input
          className={`${stateError.className} form-control rounded-pill`}
          placeholder={placeholder}
          onChange={handleInput}
          name={name}
          value={value}
          style={style}
          onBlur={handleFocusOut}
          required={required}
        />
      </div>
    </div>
  );
}
