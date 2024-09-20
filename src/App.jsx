import React, { useState } from "react";
import AddTodo from "./modules/AddTodo/AddTodo";
import Container from "./modules/Container/Container";
import TodoList from "./modules/TodoList/TodoList";

const App = () => {
  const [todoList, setTodoList] = useState([
    // { id: 1, task: "first", deadline: new Date("2024-09-21") },
  ]);

  const addTodo = (task) => {
    const newTodo = {
      id: todoList.length > 0 ? todoList.at(-1).id + 1 : 1,
      dataCreate: new Date(),
      deadline: null,
      task,
    };
    setTodoList([...todoList, newTodo]);
  };

  const addDeadline = (id, deadline) => {
    setTodoList(
      todoList.map((todo) => (todo.id === id ? { ...todo, deadline } : todo))
    );
  };

  const removeTodo = (id) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <Container>
        <AddTodo addTodo={addTodo} />
        <TodoList
          todoList={todoList}
          removeTodo={removeTodo}
          addDeadline={addDeadline}
        />
      </Container>
    </>
  );
};

export default App;
