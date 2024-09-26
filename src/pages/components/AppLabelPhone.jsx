import React from "react";

export const AppLabelPhone = ({UserPassworld, UserPassworldDouble, Password}) =>{
    return(
        <label className="input-wrapper" htmlFor="username">
        {UserPassworld}
        <input
          required
          type={Password}
          name="phone"
          id="phone"
          placeholder={UserPassworldDouble}
          pattern="^(?:\+998)?(?:\d{2})?(?:\d{7})$"
        />
        <span id="error-message">Введите номер в правильном формате</span>
      </label>
    )
}