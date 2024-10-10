import React, { useContext } from "react"; // добавлен импорт useContext
import { useLocation } from "react-router-dom";
import { Header } from "./components/Header";
import { AppButton } from "./components/AppButton";
import { Paragraph } from "./components/Paragraph";
import { ThemeContext, themes } from "../contexts/ThemeContext"; // добавлены ThemeContext и themes

const Thanks = () => {
  const { theme } = useContext(ThemeContext); // используйте useContext для получения темы

  const location = useLocation();
  const selectedCourse = location.state?.selectedCourse; 

  const handleButtonClick = () => {
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"; 
  };

  return (
    <div className={`container ${theme === themes.dark ? "_dark" : ""}`}>
      <div className="wrapper">
        <div className="thanks">
          <img src="https://i.ibb.co/6yLYW8h/bell.png" alt="bell" />
          <Header headerType="h1" HeaderText="Спасибо за прохождение опроса!" />
          {selectedCourse && (
            <Paragraph ParagraphText={`Вы выбрали курс: ${selectedCourse}`} />
          )}
          <Paragraph ParagraphText="Получи свою скидку по ссылке ниже или другое блаблабла" />
          <AppButton
            buttonText="Получить ссылку"
            id="get-link"
            isDisabled={false} 
            buttonClick={handleButtonClick} 
          />
        </div>
      </div>
    </div>
  );
};

export default Thanks;
