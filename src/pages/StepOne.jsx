import React, { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { AppLabel } from "./components/AppLabel";
import { AppButton } from "./components/AppButton";
import { ProgressBar } from "./components/ProgressBar";



const StepOne = () => {

  const [nameValue, setNameValue ]=useState("")
  const [nameError, setNameError]=useState(false)
  const [checkBtn, setCheckBtn]=useState(true)

  const handleClick = (value) => {
    setNameValue(value);
    // Убираем ошибку, если есть текст
    if (value) {
      setNameError(false);
    } else {
      setNameError(true); // Активируем ошибку, если пусто
    }
  };

  useEffect(() =>{
    if(nameValue){
      setCheckBtn(false)
    }else{
      setCheckBtn(true)
    }
  }, [nameValue])
  
  return (
    <div className="container">
      <div className="wrapper">
        <div className="single-input-quiz">
        <ProgressBar/>
          <div className="question">
          <Header HeaderText='1. Занимательный вопрос' headerType="h2"/>
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
            buttonClick={() => setNameError(!nameValue)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepOne;
