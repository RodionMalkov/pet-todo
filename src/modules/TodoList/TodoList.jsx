import React from "react";
import "./TodoList.scss";
import TodoItem from "../../components/TodoItem/TodoItem";

const TodoList = (props) => {
  const {
    todoList,
    removeTodo,
    addDeadline,
    addDesc,
    renameTask,
    statusTask,
    listTitle,
    textEmpty,
  } = props;
  return (
    <div className="todo-list">
      <h2 className="todo-list__title">{listTitle}</h2>
      {todoList.map((item) => (
        <TodoItem
          key={item.id}
          taskInfo={item}
          removeTodo={removeTodo}
          addDeadline={addDeadline}
          addDesc={addDesc}
          renameTask={renameTask}
          statusTask={statusTask}
          todoList={todoList}
        />
      ))}

      {!todoList.length && <p>{textEmpty}</p>}
    </div>
  );
};

export default TodoList;
