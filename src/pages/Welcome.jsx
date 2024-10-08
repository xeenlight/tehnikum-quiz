import React, { useContext, useEffect, useState } from "react";
import { Header } from "./components/Header";
import { AppLabel } from "./components/AppLabel";
import { AppButton } from "./components/AppButton";
import { useNavigate } from "react-router-dom";
import { ThemeContext, themes } from "../contexts/ThemeContext";

const Welcome = () => {
  const phoneRegex = /^\d{1,10}$/; // Проверка для номера телефона
  const nameRegex = /^[a-zA-Zа-яА-ЯёЁ]{1,20}$/; // Проверка для имени
  const [nameValue, setNameValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");
  const [nameError, setNameError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [checkBtn, setCheckBtn] = useState(true);
  const navigate = useNavigate(); 
  const {theme, toggleTheme} = useContext(ThemeContext)

  const handleNameClick = (value) => {
    setNameValue(value);
    setNameError(!nameRegex.test(value));
  };

  const handlePhoneClick = (value) => {
    const cleanedValue = value.replace(/\D/g, "");
    setPhoneValue(cleanedValue);
    setPhoneError(!phoneRegex.test(cleanedValue));
  };

  useEffect(() => {
    setCheckBtn(!(nameValue && phoneValue));
  }, [nameValue, phoneValue]);

  const handleButtonClick = () => {
    if (!checkBtn) {
      navigate("/RegistrationPage"); 
    }
  };

  return (
    <div className={`container ${theme === themes.dark && "_dark"}`}>
      <div className="wrapper">
        <div className="welcome">
          <button onClick={toggleTheme} style={{ marginBottom: "60px" }} margi>Смена темы</button>
          <Header HeaderText='Добро пожаловать в квиз от лучшего учебного центра' headerType="h1" />
          <form className="welcome__form">
            <AppLabel
              labelText='Ваше имя'
              inputPlaceholder='Ваш ответ'
              errorText='Введите Ваше имя'
              inputType="text"
              id="username"
              isRequired
              labelChange={handleNameClick}
              labelValue={nameValue}
              hasError={nameError}
              maxLength={20}
              isDarkTheme={theme === themes.dark}
            />
            <AppLabel
              labelText="Ваш номер"
              inputPlaceholder="+998 9- --- -- -- "
              errorText='Введите Ваш номер телефона'
              inputType="text"
              id="phone"
              labelChange={handlePhoneClick}
              labelValue={phoneValue}
              hasError={phoneError}
              maxLength={10}
              isDarkTheme={theme === themes.dark}
            />
            <AppButton
              buttonText="Далее"
              isDisabled={checkBtn}
              id="next-btn"
              buttonClick={handleButtonClick} // Изменил на новый обработчик
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
