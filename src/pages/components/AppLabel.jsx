import React from "react";

export const AppLabel = ({
  labelText,
  errorText,
  inputPlaceholder,
  inputType,
  id,
  labelValue,
  isRequired,
  labelChange,
  hasError,
  maxLength,
  isDarkTheme // Добавленный пропс
}) => {
  return (
    <label className={`input-wrapper ${hasError && "_error"}`} htmlFor={id}>
      {labelText}
      <input
        value={labelValue}
        required={isRequired}
        type={inputType}
        name={id}
        id={id}
        onChange={(e) => labelChange(e.target.value)}
        placeholder={inputPlaceholder}
        maxLength={maxLength}
        style={{
          width: "100%",
          padding: "12px 0",
          borderBottom: "1px solid #aeb4c2",
          backgroundColor: isDarkTheme ? "#22222a" : "#fff", // Меняем фон в зависимости от темы
          color: isDarkTheme ? "#fff" : "#000" // Меняем цвет текста
        }}
      />
      {hasError && <span id="error-message">{errorText}</span>}
    </label>
  );
};
