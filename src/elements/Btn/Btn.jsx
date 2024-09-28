import React from "react";
import "./Btn.scss";

const Btn = React.forwardRef((props, ref) => {
  const { submit, text, color, className, addId, onClick, disabled, children } =
    props;

  return (
    <button
      type={submit ? "submit" : "button"}
      id={addId}
      className={`btn ${color ? `btn--${color}` : ""} ${
        className ? className : ""
      }`}
      disabled={disabled}
      onClick={onClick}
      ref={ref}
    >
      {text ? text : ""}
      {children}
    </button>
  );
});

export default Btn;
