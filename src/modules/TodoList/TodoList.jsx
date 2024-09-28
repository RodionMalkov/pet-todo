import React from "react";
import "./TodoList.scss";
import TodoItem from "../../components/TodoItem/TodoItem";

const TodoList = (props) => {
  const { todoList, removeTodo, addDeadline, addDesc, renameTask } = props;
  return (
    <div className="todo-list">
      {todoList.map((item) => (
        <TodoItem
          key={item.id}
          taskInfo={item}
          removeTodo={removeTodo}
          addDeadline={addDeadline}
          addDesc={addDesc}
          renameTask={renameTask}
        />
      ))}

      {!todoList.length && <p>У вас нет планов</p>}
    </div>
  );
};

export default TodoList;
