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
  const datePickerRef = useRef(null);

  const handleRemove = () => {
    removeTodo(id);
  };

  const handleDateChange = (date) => {
    setStartDate(date);
    addDeadline(id, date);
    datePickerRef.current.setOpen(false);
  };

  const handleBtnDateClick = () => {
    datePickerRef.current.setOpen(true);
  };

  return (
    <div className="todo-item">
      <div className="todo-item__cell todo-item__num">{id}</div>
      <div className="todo-item__cell todo-item__task">{task}</div>
      <DatePicker
        selected={startDate}
        onChange={handleDateChange}
        className="todo-item__cell todo-item__date"
        placeholderText="Укажите дедлайн"
        dateFormat="dd.MM.yyyy"
        ref={datePickerRef}
      />
      <TodoControls onRemove={handleRemove} onDateClick={handleBtnDateClick} />
    </div>
  );
};

export default TodoItem;
