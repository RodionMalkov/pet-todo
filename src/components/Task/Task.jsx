import React, { useEffect, useState } from "react";
import "./Task.scss";
import Input from "../../elements/Input/Input";

const Task = (props) => {
  const { className, id, task, statusTask, isComplited } = props;

  const handleTaskChange = (e) => {
    const isChecked = e.target.checked;
    statusTask(id, isChecked);
  };

  return (
    <label htmlFor={id} className={`task ${className ? className : ""}`}>
      <Input
        type="checkbox"
        className="task__checkbox"
        id={id}
        onChange={handleTaskChange}
        checked={isComplited}
      />
      <span className={`task__text ${isComplited ? "completed" : ""}`}>
        {task}
      </span>
    </label>
  );
};

export default Task;
