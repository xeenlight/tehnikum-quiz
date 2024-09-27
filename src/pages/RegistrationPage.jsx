import React from "react";
import { Header } from "./components/Header";
import { AppLabel } from "./components/AppLabel";
import { AppButton } from "./components/AppButton";
import { AppLabelPhone } from "./components/AppLabelPhone";

const RegistrationPage  = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="welcome">
        <Header HeaderText='Войдите в свой аккаунт'/>
          <form className="welcome__form">
            <AppLabel UserName='Введите пароль' UserAnswer='Пароль' UserError='Введите свое имя' Password="Password"/>
            <AppLabelPhone UserPassworld='Повторите пароль' UserPassworldDouble="Пароль" Password="Password"/>
            <AppButton ButtonName="Авторизоваться"/>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage ;