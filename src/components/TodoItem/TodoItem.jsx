import React, { useState, useRef } from "react";
import "./TodoItem.scss";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TodoControls from "../TodoControls/TodoControls";

const TodoItem = ({ props, removeTodo, addDeadline }) => {
  const { id, task, deadline } = props;
  const [startDate, setStartDate] = useState(
    deadline ? new Date(deadline) : null
  );
  const [isOpen, setIsOpen] = useState(false);
  const btnDateRef = useRef(null);

  const handleRemove = () => {
    removeTodo(id);
  };

  const handleDateChange = (date) => {
    setStartDate(date);
    addDeadline(id, date);
    setIsOpen(false);
  };

  const handleBtnDateClick = () => {
    setIsOpen(true);
    btnDateRef.current?.focus();
  };

  return (
    <div className="todo-item">
      <div className="todo-item__cell todo-item__num">{id}</div>
      <div className="todo-item__cell todo-item__task">{task}</div>
      <DatePicker
        selected={startDate}
        onChange={handleDateChange}
        wrapperClassName="my-custom-wrapper"
        className="todo-item__cell todo-item__date"
        placeholderText="Укажите дедлайн"
        dateFormat="dd.MM.yyyy"
        fixedHeight
        open={isOpen}
        onClickOutside={() => setIsOpen(false)}
      />
      <TodoControls onRemove={handleRemove} onDateClick={handleBtnDateClick} />
    </div>
  );
};

export default TodoItem;
