import React from "react";
import Modal from "react-modal";

import "./TaskInfo.scss";

const TaskInfo = ({
  modalIsOpen,
  closeModal,
  TaskInfo,
  deadLineDate,
  addDesc,
  renameTask,
}) => {
  Modal.setAppElement("#root");
  const { id, task, desc } = TaskInfo;

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

  return (
    <Modal
      portalClassName="task-info"
      className="task-info__modal"
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Task Inforamtion"
    >
      <input
        className="input input--transparent task-info__title"
        value={task}
        onChange={handleTaskChange}
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
