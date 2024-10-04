import React, { useEffect, useState } from "react";
import { ProgressBar } from "./components/ProgressBar";
import { Header } from "./components/Header";

import { AppButton } from "./components/AppButton";
import { EmojiVariants } from "./components/EmojiVariants";
const StepThree = () => {
  const [emoji, setEmoji]= useState(null)

  const emojis = [
    {
      id:"variant-1",
      emojiImg:"./img/laugh.png",
      emojiText: "Ваш ответ 1",
      emojiAlt:"laugh"
    },
    {
      id:"variant-2",
      emojiImg:"./img/hearts.png",
      emojiText: "Ваш ответ 2",
      emojiAlt:"hearts"
    },
    {
      id:"variant-3",
      emojiImg:"./img/smirk.png",
      emojiText: "Ваш ответ 3",
      emojiAlt:"smirk"
    },
    {
      id:"variant-4",
      emojiImg:"./img/fright.png",
      emojiText: "Ваш ответ 4",
      emojiAlt:"fright"
    },
  ]

  return (
    <div className="container">
      <div className="wrapper">
        <div className="emoji-quiz">
        <ProgressBar/>
          <div className="question">
            <Header headerType="h2" HeaderText="Занимательный вопрос"/>
            <ul className="emoji-variants">
            {
              emojis.map((elem) => (
                <EmojiVariants
                id={elem.id}
                emojiImg={elem.emojiImg}
                emojiText={elem.emojiText}
                emojiAlt={elem.emojiAlt}
                key={elem.id}
                labelChange={() => setEmoji(elem.emojiImg)}
                />
              ))
             }
            </ul>
            <AppButton
              buttonText="Далее"
              id="next-btn"
              isDisabled={!emoji ? true : false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepThree;
