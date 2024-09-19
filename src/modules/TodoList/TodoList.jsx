import React from "react";
import "./styles.scss";
import TodoItem from "../../components/TodoItem/TodoItem";

const TodoList = ({ todoList, removeTodo }) => {
  return (
    <div className="todo-list">
      {todoList.map((item) => (
        <TodoItem key={item.id} props={item} removeTodo={removeTodo} />
      ))}
      {!todoList.length ? <p>У вас нет планов</p> : null}
    </div>
  );
};

export default TodoList;
