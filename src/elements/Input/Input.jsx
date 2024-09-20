import React from "react";
import "./Input.scss";

const Input = React.forwardRef((props, ref) => {
  const {
    type,
    addClass,
    addId,
    addName,
    placeholder,
    value,
    onChange,
    required,
    onClick,
    onKeyDown,
  } = props;

  return (
    <input
      type={type ? type : "text"}
      id={addId}
      name={addName}
      onChange={onChange}
      onKeyDown={onKeyDown}
      onClick={onClick}
      ref={ref}
      className={`input ${addClass ? addClass : ""}`}
      placeholder={placeholder}
      value={value}
      required={required ? true : false}
    />
  );
});

export default Input;
