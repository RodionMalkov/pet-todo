import React from "react";
import "./Task.scss";
import Input from "../../elements/Input/Input";

const Task = (props) => {
  const { className, id, task, onClick } = props;

  return (
    <label аttrFor={id} className={`task ${className ? className : ""}`}>
      <Input
        type="checkbox"
        className="task__checkbox"
        id={id}
        onClick={onClick}
      />
      <span className="task__text">{task}</span>
    </label>
  );
};

export default Task;
