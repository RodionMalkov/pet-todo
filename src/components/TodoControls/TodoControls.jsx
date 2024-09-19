import React from "react";
import "./styles.scss";
import BtnDate from "../../elemets/BtnDate/BtnDate";
import BtnRemove from "../../elemets/BtnRemove/BtnRemove";

const TodoControls = (props) => {
  return (
    <div className="todo-controls">
      <BtnDate />
      <BtnRemove onClick={props.onClick} />
    </div>
  );
};

export default TodoControls;
