import React, { useEffect, useState } from "react";
import { ProgressBar } from "./components/ProgressBar";
import { Header } from "./components/Header";
import { AnswerLabel } from "./components/AnswerLabel";
import { AppButton } from "./components/AppButton";

const StepTwo = () => {
const [cousre, setCousre]= useState(null)

  const variants = [
    {
      id:"variant-1",
      courseName:"Frontend"
    },
    {
      id:"variant-2",
      courseName:"Python"
    },
    {
      id:"variant-3",
      courseName:"DATA-Analitics"
    },
    {
      id:"variant-4",
      courseName:"UX/UI"
    },
  ]

  return (
    <div className="container">
      <div className="wrapper">
        <div className="variants-quiz">
           <ProgressBar/>
          <div className="question">
            <Header headerType="h2" HeaderText="Какой курс вас интересует?"/>
            <ul className="variants">
             {
              variants.map((elem) => (
                <AnswerLabel
                id={elem.id}
                answerLabel={elem.courseName}
                key={elem.id}
                labelChange={() => setCousre(elem.courseName)}
                />
              ))
             }
            </ul>
            <AppButton
              buttonText="Далее"
              isDisabled={!cousre ? true : false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepTwo;
