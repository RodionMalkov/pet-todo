import React from "react";
import "./Task.scss";
import Input from "../../elements/Input/Input";

const Task = (props) => {
  const { className, id, task, onClick, statusTask } = props;

  const handleTaskChange = (e) => {
    statusTask(id, e.target.checked);
  };

  return (
    <label аttrFor={id} className={`task ${className ? className : ""}`}>
      <Input
        type="checkbox"
        className="task__checkbox"
        id={id}
        onClick={onClick}
        onChange={handleTaskChange}
      />
      <span className="task__text">{task}</span>
    </label>
  );
};

export default Task;
