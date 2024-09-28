import React from "react";
import Modal from "react-modal";

import "./TaskInfo.scss";
import Input from "../../elements/Input/Input";

const TaskInfo = (props) => {
  const {
    modalIsOpen,
    closeModal,
    taskInfo,
    renameTask,
    addDesc,
    deadLineDate,
  } = props;
  const { id, task, desc } = taskInfo;

  const handleTaskChange = (e) => {
    renameTask(id, e.target.value);
  };

  const handleDescChange = (e) => {
    addDesc(id, e.target.value);
  };

  let taskDate;

  if (deadLineDate) {
    taskDate = new Date(deadLineDate).toLocaleDateString("ru-RU", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  } else {
    taskDate = "Дедлайн не указаан";
  }

  Modal.setAppElement("#root");

  return (
    <Modal
      portalClassName="task-info"
      className="task-info__modal"
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Task Inforamtion"
    >
      <button onClick={closeModal}>close</button>

      <Input
        onChange={handleTaskChange}
        className="input--transparent task-info__title"
        value={task}
      />
      <div className="task-info__block">
        <div className="task-info__block-title">Описание</div>
        <textarea
          className="input input--transparent task-info__desc"
          value={desc}
          onChange={handleDescChange}
          placeholder="О чём это задание?"
        ></textarea>
      </div>
    </Modal>
  );
};

export default TaskInfo;
