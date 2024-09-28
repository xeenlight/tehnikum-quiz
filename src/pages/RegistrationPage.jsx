import React from "react";
import { Header } from "./components/Header";
import { AppLabel } from "./components/AppLabel";
import { AppButton } from "./components/AppButton";

const RegistrationPage  = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="welcome">
        <Header HeaderText='Войдите в свой аккаунт'/>
          <form className="welcome__form">
            <AppLabel
            labelText='Введите пароль'
            inputPlaceholder='Пароль'
            errorText='Вы не ввели свой пароль'
            inputType="Password"
            id="username"
            isRequired
            hasError={true}
            />
            <AppLabel
            labelText='Повторите пароль'
            inputPlaceholder='Пароль'
            errorText='Вы не ввели свой пароль'
            inputType="Password"
            id="username"
            isRequired
            hasError={true}
            />
            <AppButton
            buttonText="Авторизоваться"
            isDisabled
            id="next-btn"/>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage ;