import React from "react";
import Modal from "react-modal";

import "./TaskInfo.scss";

const TaskInfo = ({ modalIsOpen, closeModal, TaskInfo, deadLineDate }) => {
  Modal.setAppElement("#root");
  const { id, task } = TaskInfo;

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
      {id} - {taskDate} - {task}
    </Modal>
  );
};

export default TaskInfo;
