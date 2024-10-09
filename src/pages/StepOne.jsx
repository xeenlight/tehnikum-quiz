import React, { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { AppLabel } from "./components/AppLabel";
import { AppButton } from "./components/AppButton";
import { ProgressBar } from "./components/ProgressBar";
import { useNavigate } from "react-router-dom";

const StepOne = () => {
  const [nameValue, setNameValue] = useState("");
  const [nameError, setNameError] = useState(false);
  const [checkBtn, setCheckBtn] = useState(true);
  const navigate = useNavigate();

  const handleClick = (value) => {
    setNameValue(value);
    setNameError(!value); 
  };

  const handleButtonClick = () => {
    if (!checkBtn) {
      navigate("/StepTwo"); 
    }
  };

  useEffect(() => {
    setCheckBtn(!nameValue); 
  }, [nameValue]);

  return (
    <div className="container">
      <div className="wrapper">
        <div className="single-input-quiz">
          <ProgressBar currentStep={1} percent="15%"/>
          <div className="question">
            <Header HeaderText='1. Занимательный вопрос' headerType="h2" />
            <AppLabel
              inputPlaceholder='Ваш ответ'
              errorText='Введите Ваш ответ'
              inputType="text"
              id="username"
              isRequired
              labelChange={handleClick}
              labelValue={nameValue}
              hasError={nameError}
            />
            <AppButton
              buttonText="Далее"
              isDisabled={checkBtn}
              id="next-btn"
              buttonClick={handleButtonClick} // Используем новый обработчик
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepOne;
