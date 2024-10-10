import React, { useEffect, useState, useContext } from "react"; // добавьте useContext
import { Header } from "./components/Header";
import { AppLabel } from "./components/AppLabel";
import { AppButton } from "./components/AppButton";
import { ProgressBar } from "./components/ProgressBar";
import { useNavigate } from "react-router-dom";
import { ThemeContext, themes } from "../contexts/ThemeContext"; // добавьте ThemeContext и themes

const StepOne = () => {
  const { theme } = useContext(ThemeContext); // используйте useContext для получения темы
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
    <div className={`container ${theme === themes.dark && "_dark"}`}>
      <div className="wrapper">
        <div className="single-input-quiz">
          <ProgressBar currentStep={1} percent="15%"/>
          <div className="question">
            <Header HeaderText='1. Занимательный вопрос' headerType="h1" />
            <AppLabel
              inputPlaceholder='Ваш ответ'
              errorText='Введите Ваш ответ'
              inputType="text"
              id="username"
              isRequired
              labelChange={handleClick}
              labelValue={nameValue}
              hasError={nameError}
              isDarkTheme={theme === themes.dark}
            />
            <AppButton
              buttonText="Далее"
              isDisabled={checkBtn}
              id="next-btn"
              buttonClick={handleButtonClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepOne;
