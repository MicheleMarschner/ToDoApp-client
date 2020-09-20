import React, { useState, useEffect } from 'react';

//creates reusable FloatingLabel Input Component with Error Message
export default function FloatingLabelInput({
  placeholder,
  name,
  value,
  callback,
  style,
  required = false,
}) {
  const [stateLabel, setStateLabel] = useState({ className: '' });
  const [stateError, setStateError] = useState({ className: '' });

  //determines if input contains a value and therefore a floating label or a placeholder is required
  useEffect(() => {
    value
      ? setStateLabel({ className: 'on' })
      : setStateLabel({ className: '' });
  }, [value]);

  //handles Input changes and transforms placeholder into floating label on top
  const handleInput = e => {
    if (e.target.value !== '') {
      setStateError({ className: '' });
      callback(e.target.name, e.target.value);
    } else {
      callback(e.target.name, e.target.value);
    }
  };

  //handles required input field by displaying red error message when left without a value
  const handleFocusOut = e => {
    if (required && e.target.value === '') {
      setStateError({ className: 'errorInput' });
    } else {
      setStateError({ className: '' });
    }
  };

  return (
    <div>
      <div className='floatingLabelInput'>
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
