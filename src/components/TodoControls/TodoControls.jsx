import React from "react";
import "./TodoControls.scss";
import BtnDate from "../../elements/BtnDate/BtnDate";
import BtnRemove from "../../elements/BtnRemove/BtnRemove";
import BtnInfo from "../../elements/BtnInfo/BtnInfo";

const TodoControls = ({ onRemove, onDateClick, openModal }) => {
  return (
    <div className="todo-controls">
      <BtnDate onClick={onDateClick} />
      <BtnInfo onClick={openModal} />
      <BtnRemove onClick={onRemove} />
    </div>
  );
};

export default TodoControls;
