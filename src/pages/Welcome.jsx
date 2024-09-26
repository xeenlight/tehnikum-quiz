import React from "react";
import { Header } from "./components/Header";
import { AppLabel } from "./components/AppLabel";
import { AppButton } from "./components/AppButton";
import { AppLabelPhone } from "./components/AppLabelPhone";

const Welcome = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="welcome">
          <Header HeaderText='Добро пожаловать в квиз от лучшего учебного центра'/>
          <form className="welcome__form">
            <AppLabel UserName='Ваше имя' UserAnswer='Ваш ответ' UserError='Введите номер в правильном формате например' Password="name"/> 
            <AppLabelPhone UserPassworld="Ваш номер" UserPassworldDouble="+998 9- --- -- -- " Password="tel"/>
            <AppButton ButtonName="Далее"/>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
