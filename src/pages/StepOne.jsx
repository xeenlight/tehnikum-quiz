import React from "react";
import { Header } from "./components/Header";
import { AppLabel } from "./components/AppLabel";
import { AppButton } from "./components/AppButton";
import { Span } from "./components/Span";

const StepOne = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="single-input-quiz">
          <div className="indicator">
            <div className="indicator__text">
              <span className="indicator__description">
                <Span Span='Скидка за прохождение опроса'/>
              </span>
              <span className="indicator__value"><Span Span='15%'/></span>
            </div>
            <div className="indicator__progressbar">
              <div className="indicator__unit indicator__unit-1"></div>
              <div className="indicator__unit indicator__unit-2"></div>
              <div className="indicator__unit indicator__unit-3"></div>
              <div className="indicator__unit indicator__unit-4"></div>
            </div>
          </div>
          <div className="question">
          <Header HeaderText='1. Занимательный вопрос' headerType="h2"/>
          <AppLabel
            inputPlaceholder='Ваш ответ'
            errorText='Введите Ваш ответ'
            inputType="text"
            id="username"
            isRequired
            hasError={true}
            /> 
            <AppButton
            buttonText="Далее"
            isDisabled
            id="next-btn"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepOne;
