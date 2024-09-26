
import React from "react";

export const AppLabel = ({UserName, UserAnswer, UserError, Password}) => {
    return(
        <label className="input-wrapper" htmlFor="username">
        {UserName}
        <input
          required
          type={Password}
          name="username"
          id="username"
          placeholder={UserAnswer}
        />
        <span id="error-message">
        {UserError}
        </span>
      </label>
    )
}