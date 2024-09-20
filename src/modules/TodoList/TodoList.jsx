import React from "react";
import "./TodoList.scss";
import TodoItem from "../../components/TodoItem/TodoItem";

const TodoList = ({ todoList, removeTodo, addDeadline }) => {
  return (
    <div className="todo-list">
      {todoList.map((item) => (
        <TodoItem
          key={item.id}
          props={item}
          removeTodo={removeTodo}
          addDeadline={addDeadline}
        />
      ))}

      {!todoList.length ? <p>У вас нет планов</p> : null}
    </div>
  );
};

export default TodoList;
