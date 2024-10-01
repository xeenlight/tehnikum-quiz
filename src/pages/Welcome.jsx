import React, { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { AppLabel } from "./components/AppLabel";
import { AppButton } from "./components/AppButton";

const Welcome = () => {
  const phoneRegex = /^\d{1,10}$/; // Обновляем регулярное выражение для проверки только цифр
  const nameRegex = /^[a-zA-Zа-яА-ЯёЁ]{1,20}$/;
  const [nameValue, setNameValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");
  const [nameError, setNameError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [checkBtn, setCheckBtn] = useState(true);

  const handleNameClick = (value) => {
    setNameValue(value);
    setNameError(!nameRegex.test(value)); // Проверка сразу при изменении
  };

  const handlePhoneClick = (value) => {
    // Удаляем все нецифровые символы из ввода
    const cleanedValue = value.replace(/\D/g, "");
    setPhoneValue(cleanedValue);
    setPhoneError(!phoneRegex.test(cleanedValue)); // Проверка сразу при изменении
  };

  useEffect(() => {
    setCheckBtn(!(nameValue && phoneValue));
  }, [nameValue, phoneValue]);

  return (
    <div className="container">
      <div className="wrapper">
        <div className="welcome">
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
            />
            <AppLabel
              labelText="Ваш номер"
              inputPlaceholder="+998 9- --- -- -- "
              errorText='Введите Ваш номер телефона'
              inputType="text" // Используем text, чтобы позволить вводить только цифры
              id="phone"
              labelChange={handlePhoneClick}
              labelValue={phoneValue}
              hasError={phoneError}
              maxLength={10}
            />
            <AppButton
              buttonText="Далее"
              isDisabled={checkBtn}
              id="next-btn"
              buttonClick={() => setNameError(!nameValue)}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
