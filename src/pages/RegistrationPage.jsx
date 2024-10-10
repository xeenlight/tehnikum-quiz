import React, { useEffect, useState, useContext } from "react"; // добавлен useContext
import { Header } from "./components/Header";
import { AppLabel } from "./components/AppLabel";
import { AppButton } from "./components/AppButton";
import { useNavigate } from "react-router-dom";
import { ThemeContext, themes } from "../contexts/ThemeContext"; // добавлено ThemeContext и themes

const StepOne = () => {
  const { theme } = useContext(ThemeContext); // используйте useContext для получения темы
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
      navigate("/StepOne"); // Измените путь на тот, который вам нужен
    }
  };

  return (
    <div className={`container ${theme === themes.dark ? "_dark" : ""}`}>
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
              isDarkTheme={theme === themes.dark}
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
              isDarkTheme={theme === themes.dark}
            />
            <AppButton
              buttonText="Авторизоваться"
              isDisabled={checkBtn}
              id="next-btn"
              buttonClick={handleButtonClick}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default StepOne;
