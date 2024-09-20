import React, { useState, useRef } from "react";
import "./AddTodo.scss";
import Btn from "../../elements/Btn/Btn";
import Input from "../../elements/Input/Input";

const AddTodo = ({ addTodo }) => {
  const [todoValue, setTodoValue] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const btnRef = useRef(null);

  const handleChange = (e) => {
    const value = e.target.value;
    setTodoValue(value);
    setBtnDisabled(value.trim() === "");
  };

  const handleClick = () => {
    if (todoValue.trim()) {
      addTodo(todoValue);
      setTodoValue("");
      setBtnDisabled(true);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !btnDisabled) {
      if (btnRef.current) {
        btnRef.current.click();
      }
    }
  };

  return (
    <div className="add-todo">
      <div className="add-todo__row add-todo__main">
        <Input
          value={todoValue}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          addClass="add-todo__input"
          placeholder="Что планируем?"
        />
        <Btn
          ref={btnRef}
          color="red"
          addClass="add-todo__btn"
          text="Добавить"
          disabled={btnDisabled}
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default AddTodo;
