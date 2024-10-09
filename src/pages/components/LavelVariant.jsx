import React from "react";

export const LavelVariant = ({ id, number, labelChange }) => {
  return (
    <li className="variant-wrapper">
      <input 
        required
        type="radio"
        name="variant" 
        id={id}
        value={number}
        onChange={labelChange} 
      />
      <label htmlFor={id}>{number}</label>
    </li>
  );
};
