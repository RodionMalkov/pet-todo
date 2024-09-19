import React, { useState } from "react";
import AddTodo from "./modules/AddTodo/AddTodo";
import Container from "./modules/Container/Container";
import TodoList from "./modules/TodoList/TodoList";

function App() {
  const [todoList, setTodoList] = useState([]);

  const addTodo = (text) => {
    const newTodo = {
      id: todoList.length > 0 ? todoList.at(-1).id + 1 : 1,
      dataCreate: new Date(),
      text,
    };
    setTodoList([...todoList, newTodo]);
  };

  const removeTodo = (id) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <Container>
        <AddTodo addTodo={addTodo} />
        <TodoList todoList={todoList} removeTodo={removeTodo} />
      </Container>
    </>
  );
}

export default App;
