import React from "react";
import "./BtnRemove.scss";

const BtnRemove = React.forwardRef((props, ref) => {
  const { className, addId, onClick } = props;

  return (
    <button
      type="button"
      id={addId}
      className={`btn-remove ${className ? className : ""}`}
      onClick={onClick}
      ref={ref}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 -960 960 960"
        width="24px"
        fill="#5f6368"
      >
        <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
      </svg>
    </button>
  );
});

export default BtnRemove;
