import React from "react";
import "./styles.scss";

const Btn = React.forwardRef((props, ref) => {
  const { submit, text, color, addClass, addId, onClick, disabled, children } =
    props;

  return (
    <button
      type={submit ? "submit" : "button"}
      id={addId}
      className={`btn ${color ? `btn--${color}` : ""} ${
        addClass ? addClass : ""
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
