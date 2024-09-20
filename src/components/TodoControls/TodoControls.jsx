import React from "react";
import "./TodoControls.scss";
import BtnDate from "../../elemets/BtnDate/BtnDate";
import BtnRemove from "../../elemets/BtnRemove/BtnRemove";
import BtnInfo from "../../elemets/BtnInfo/BtnInfo";

const TodoControls = ({ onRemove, onDateClick }) => {
  return (
    <div className="todo-controls">
      <BtnDate onClick={onDateClick} />
      <BtnInfo />
      <BtnRemove onClick={onRemove} />
    </div>
  );
};

export default TodoControls;
