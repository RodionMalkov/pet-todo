import React, { useState, useRef } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import "./TodoItem.scss";
import TodoControls from "../TodoControls/TodoControls";
import TaskInfo from "../../modules/TaskInfo/TaskInfo";
import Task from "../Task/Task";

const TodoItem = (props) => {
  const {
    taskInfo,
    removeTodo,
    addDeadline,
    addDesc,
    renameTask,
    statusTask,
    todoList,
  } = props;

  const { id, task, deadline, desc, isComplited } = taskInfo;

  const [deadLineDate, setDeadLine] = useState(
    deadline ? new Date(deadline) : null
  );
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const datePickerRef = useRef(null);

  const handleRemove = () => {
    removeTodo(id);
  };

  const handleDateChange = (date) => {
    setDeadLine(date);
    addDeadline(id, date);
    datePickerRef.current.setOpen(false);
  };

  const handleBtnDateClick = () => {
    datePickerRef.current.setOpen(true);
  };

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="todo-item">
      <div className="todo-item__cell todo-item__num">{id}</div>
      <div className="todo-item__cell todo-item__about">
        <Task
          className="todo-item__task"
          id={id}
          task={task}
          statusTask={statusTask}
          isComplited={isComplited}
        />
        {desc && <span className="todo-item__desc">{desc}</span>}
      </div>
      <DatePicker
        wrapperClassName="todo-item__cell todo-item__date"
        className="todo-item__date-input"
        selected={deadLineDate}
        onChange={handleDateChange}
        placeholderText="Укажите дедлайн"
        dateFormat="dd.MM.yyyy"
        ref={datePickerRef}
      />
      <TodoControls
        openModal={openModal}
        onRemove={handleRemove}
        onDateClick={handleBtnDateClick}
      />
      <TaskInfo
        closeModal={closeModal}
        modalIsOpen={modalIsOpen}
        taskInfo={taskInfo}
        deadLineDate={deadLineDate}
        addDesc={addDesc}
        renameTask={renameTask}
      />
    </div>
  );
};

export default TodoItem;
