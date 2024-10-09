import React, { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { AppLabel } from "./components/AppLabel";
import { AppButton } from "./components/AppButton";
import { useNavigate } from "react-router-dom";

const StepOne = () => {
  const [passwordValue, setPasswordValue] = useState("");
  const [confirmPasswordValue, setConfirmPasswordValue] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [checkBtn, setCheckBtn] = useState(true);
  const navigate = useNavigate();

  const handlePasswordChange = (value) => {
    setPasswordValue(value);
    setPasswordError(!value); // Проверяем, пустой ли пароль
  };

  const handleConfirmPasswordChange = (value) => {
    setConfirmPasswordValue(value);
    setConfirmPasswordError(value !== passwordValue); // Проверяем, совпадает ли подтверждение пароля
  };

  useEffect(() => {
    setCheckBtn(!passwordValue || !confirmPasswordValue); // Проверяем, заполнены ли оба поля
  }, [passwordValue, confirmPasswordValue]);

  const handleButtonClick = () => {
    if (!checkBtn) {
      navigate("/StepOne"); 
    }
  };

  return (
    <div className="container">
      <div className="wrapper">
        <div className="welcome">
          <Header HeaderText='Войдите в свой аккаунт' />
          <form className="welcome__form" onSubmit={(e) => e.preventDefault()}>
            <AppLabel
              labelText='Введите пароль'
              inputPlaceholder='Пароль'
              errorText='Вы не ввели свой пароль'
              inputType="password"
              id="password"
              isRequired
              labelChange={handlePasswordChange}
              labelValue={passwordValue}
              hasError={passwordError}
            />
            <AppLabel
              labelText='Повторите пароль'
              inputPlaceholder='Пароль'
              errorText='Пароли не совпадают'
              inputType="password"
              id="confirm-password"
              isRequired
              labelChange={handleConfirmPasswordChange}
              labelValue={confirmPasswordValue}
              hasError={confirmPasswordError}
            />
            <AppButton
              buttonText="Авторизоваться"
              isDisabled={checkBtn}
              id="next-btn"
              buttonClick={handleButtonClick} // Добавляем обработчик нажатия
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default StepOne;
