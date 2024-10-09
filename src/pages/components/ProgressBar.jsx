
import React from "react";

export const ProgressBar = ({currentStep, percent}) => {
  const variants = [1, 2, 3, 4]
    return(
        <div className="indicator">
        <div className="indicator__text">
          <span className="indicator__description">
            Скидка за прохождение опроса:
          </span>
          <span className="indicator__value">{percent}</span>
        </div>
        <div className="indicator__progressbar">
           {variants.map((elem, idx) =>(
            <div key={idx}
            className={`indicator__unit indicator__unit-1 ${currentStep>idx && "_active"} `}></div>
           ))}
        </div>
      </div>
    )
}