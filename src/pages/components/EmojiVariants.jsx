
import React from "react";

export const EmojiVariants = ({id, emojiImg, emojiAlt, emojiText, labelChange}) => {
    return(
<li className="variant-wrapper">
                <input
                required
                type="radio"
                name="variant"
                id={id}
                onChange={labelChange}/>


                <label htmlFor={id}>
                  <img src={emojiImg} alt={emojiAlt} />
                  <p>{emojiText}</p>
                </label>


</li>
    )
}