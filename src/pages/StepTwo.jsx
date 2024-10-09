import React, { useState } from "react";
import { ProgressBar } from "./components/ProgressBar";
import { Header } from "./components/Header";
import { AnswerLabel } from "./components/AnswerLabel";
import { AppButton } from "./components/AppButton";
import { useNavigate } from "react-router-dom";

const StepTwo = () => {
  const [course, setCourse] = useState(null);
  const navigate = useNavigate();

  const handleButtonClick = () => {
    if (course) {
      navigate("/StepThree", { state: { selectedCourse: course } }); // Передаем выбранный курс
    }
  };
  

  const variants = [
    { id: "variant-1", courseName: "Frontend" },
    { id: "variant-2", courseName: "Python" },
    { id: "variant-3", courseName: "DATA-Analitics" },
    { id: "variant-4", courseName: "UX/UI" },
  ];

  return (
    <div className="container">
      <div className="wrapper">
        <div className="variants-quiz">
          <ProgressBar currentStep={2} percent="30%" />
          <div className="question">
            <Header headerType="h2" HeaderText="Какой курс вас интересует?" />
            <ul className="variants">
              {variants.map((elem) => (
                <AnswerLabel
                  id={elem.id}
                  answerLabel={elem.courseName}
                  key={elem.id}
                  labelChange={() => setCourse(elem.courseName)}
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

export default StepTwo;
