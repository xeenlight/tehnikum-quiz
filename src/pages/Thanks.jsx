import React from "react";
import { useLocation } from "react-router-dom";
import { Header } from "./components/Header";
import { AppButton } from "./components/AppButton";
import { Paragraph } from "./components/Paragraph";

const Thanks = () => {
  const location = useLocation();
  const selectedCourse = location.state?.selectedCourse; 

  const handleButtonClick = () => {
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"; 
  };

  return (
    <div className="container">
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
