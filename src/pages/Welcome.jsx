import React from "react";
import { Header } from "./components/Header";
import { AppLabel } from "./components/AppLabel";
import { AppButton } from "./components/AppButton";

const Welcome = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="welcome">
          <Header HeaderText='Добро пожаловать в квиз от лучшего учебного центра' headerType="h1"/>
          <form className="welcome__form">
            <AppLabel
            labelText='Ваше имя'
            inputPlaceholder='Ваш ответ'
            errorText='Введите Ваше имя'
            inputType="text"
            id="username"
            isRequired
            hasError={true}
            /> 
            <AppLabel
            labelText="Ваш номер"
            inputPlaceholder="+998 9- --- -- -- "
            errorText='Введите Ваш номер телефона'
            inputType="tel"
            id="phone"
            hasError={true}
            />
            <AppButton
            buttonText="Далее"
            isDisabled
            id="next-btn"/>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
