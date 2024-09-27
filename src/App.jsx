import React, { useState } from "react";
import AddTodo from "./modules/AddTodo/AddTodo";
import Container from "./modules/Container/Container";
import TodoList from "./modules/TodoList/TodoList";

const App = () => {
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      task: "Первая тестовая задача",
      deadline: new Date("2024-09-21"),
      desc: "Первая тестовая задача: описание",
    },
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

  const renameTask = (id, task) => {
    setTodoList(
      todoList.map((todo) => (todo.id === id ? { ...todo, task } : todo))
    );
  };

  const addDesc = (id, desc) => {
    setTodoList(
      todoList.map((todo) => (todo.id === id ? { ...todo, desc } : todo))
    );
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
          addDesc={addDesc}
          renameTask={renameTask}
        />
      </Container>
    </>
  );
};

export default App;
