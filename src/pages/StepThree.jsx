import React, { useState, useContext } from "react"; // добавлен useContext
import { ProgressBar } from "./components/ProgressBar";
import { Header } from "./components/Header";
import { AppButton } from "./components/AppButton";
import { EmojiVariants } from "./components/EmojiVariants";
import { useLocation, useNavigate } from "react-router-dom";
import { ThemeContext, themes } from "../contexts/ThemeContext"; // добавлено ThemeContext и themes

const StepThree = () => {
  const { theme } = useContext(ThemeContext); // используйте useContext для получения темы

  const [emoji, setEmoji] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const selectedCourse = location.state?.selectedCourse; // Получаем выбранный курс

  const handleButtonClick = () => {
    navigate("/StepFour", { state: { selectedCourse } }); // Передаем курс на StepFour
  };

  const emojis = [
    {
      id: "variant-1",
      emojiImg: "https://i.ibb.co/g6MFJ4N/laugh.png",
      emojiText: "Ваш ответ 1",
      emojiAlt: "laugh",
    },
    {
      id: "variant-2",
      emojiImg: "https://i.ibb.co/djd40kT/hearts.png",
      emojiText: "Ваш ответ 2",
      emojiAlt: "hearts",
    },
    {
      id: "variant-3",
      emojiImg: "https://i.ibb.co/5c6QKr2/smirk.png",
      emojiText: "Ваш ответ 3",
      emojiAlt: "smirk",
    },
    {
      id: "variant-4",
      emojiImg: "https://i.ibb.co/02bLVpV/fright.png",
      emojiText: "Ваш ответ 4",
      emojiAlt: "fright",
    },
  ];

  return (
    <div className={`container ${theme === themes.dark ? "_dark" : ""}`}>
      <div className="wrapper">
        <div className="emoji-quiz">
          <ProgressBar currentStep={3} percent="45%"/>
          <div className="question">
            <Header headerType="h1" HeaderText="Занимательный вопрос" isDarkTheme={theme === themes.dark} />
            <ul className="emoji-variants">
              {emojis.map((elem) => (
                <EmojiVariants
                  id={elem.id}
                  emojiImg={elem.emojiImg}
                  emojiText={elem.emojiText}
                  emojiAlt={elem.emojiAlt}
                  key={elem.id}
                  labelChange={() => setEmoji(elem.emojiImg)} 
                />
              ))}
            </ul>
            <AppButton
              buttonText="Далее"
              id="next-btn"
              isDisabled={!emoji} 
              buttonClick={handleButtonClick} 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepThree;
