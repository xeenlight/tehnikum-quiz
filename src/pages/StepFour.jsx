import React, { useState, useContext } from "react"; // добавлен useContext
import { ProgressBar } from "./components/ProgressBar";
import { Header } from "./components/Header";
import { AppButton } from "./components/AppButton";
import { LavelVariant } from "./components/LavelVariant";
import { useLocation, useNavigate } from "react-router-dom";
import { ThemeContext, themes } from "../contexts/ThemeContext"; // добавлены ThemeContext и themes

const StepFour = () => {
  const { theme } = useContext(ThemeContext); // используйте useContext для получения темы

  const [course, setCourse] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const selectedCourse = location.state?.selectedCourse; 

  const handleButtonClick = () => {
    navigate("/Thanks", { state: { selectedCourse } }); 
  };

  const variants = [
    { id: "variant-1", variantName: "1" },
    { id: "variant-2", variantName: "2" },
    { id: "variant-3", variantName: "3" },
    { id: "variant-4", variantName: "4" },
    { id: "variant-5", variantName: "5" },
  ];

  const labelChange = (event) => {
    setCourse(event.target.value);
  };

  return (
    <div className={`container ${theme === themes.dark ? "_dark" : ""}`}>
      <div className="wrapper">
        <div className="emoji-quiz">
          <ProgressBar currentStep={4} percent="60%"/>
          <div className="question">
            <Header headerType="h1" HeaderText="4. Занимательный вопрос" isDarkTheme={theme === themes.dark} />
            <ul className="level-variants">
              {variants.map((elem) => (
                <LavelVariant
                  key={elem.id}
                  id={elem.id}
                  number={elem.variantName}
                  labelChange={labelChange}
                />
              ))}
            </ul>
            <AppButton
              buttonText="Далее"
              isDisabled={!course}
              buttonClick={handleButtonClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepFour;
