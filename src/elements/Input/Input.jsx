import React from "react";
import "./Input.scss";

const Input = React.forwardRef((props, ref) => {
  const {
    type,
    className,
    id,
    name,
    placeholder,
    value,
    onChange,
    required,
    onClick,
    onKeyDown,
    checked,
  } = props;

  return (
    <input
      type={type ? type : "text"}
      id={id}
      name={name}
      onChange={onChange}
      onKeyDown={onKeyDown}
      onClick={onClick}
      ref={ref}
      className={`input ${className ? className : ""}`}
      placeholder={placeholder}
      value={value}
      required={required ? true : false}
      checked={checked}
    />
  );
});

export default Input;
