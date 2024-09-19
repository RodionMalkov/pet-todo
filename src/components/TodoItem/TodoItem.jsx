import React from "react";
import "./styles.scss";
import BtnRemove from "../../elemets/BtnRemove/BtnRemove";
import BtnDate from "../../elemets/BtnDate/BtnDate";
import TodoControls from "../TodoControls/TodoControls";

const TodoItem = ({ props, removeTodo }) => {
  const { id, text, dataCreate, deadline } = props;

  const handleRemove = () => {
    removeTodo(id);
  };

  return (
    <div className="todo-item">
      <div className="todo-item__num">{id}</div>
      <div className="todo-item__text">{text}</div>
      {!deadline ? "Дата не указана" : null}
      <TodoControls onClick={handleRemove} />
    </div>
  );
};

export default TodoItem;
