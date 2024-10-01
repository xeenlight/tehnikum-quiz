
import React from "react";

export const AppLabel = ({labelText, errorText, inputPlaceholder, inputType, id, labelValue, isRequired, labelChange, hasError, maxLength}) => {
    return(
        <label className={`input-wrapper ${hasError && "_error"}`} htmlFor={id}>
        {labelText}
        <input
          value={labelValue}
          required={isRequired}
          type={inputType}
          name={id}
          id={id}
          onChange={(e) => labelChange(e.target.value)}
          placeholder={inputPlaceholder}
          maxLength={maxLength}
        />
        {hasError &&  <span id="error-message">{errorText}</span>}
      </label>
    )
}