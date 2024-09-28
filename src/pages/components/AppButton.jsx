import React from "react";

export const AppButton = ({buttonText, buttonType, isDisabled}) => {
    return(
        <button
        disabled = {isDisabled}
        type={buttonType === "submit" ? "submit" : "button"}
        id="next-btn">
        {buttonText}
      </button>

    )
}