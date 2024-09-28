import React, { useState } from "react";
import AddTodo from "./modules/AddTodo/AddTodo";
import Container from "./modules/Container/Container";
import TodoList from "./modules/TodoList/TodoList";

const App = () => {
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      task: "Завершить проект",
      deadline: new Date("2024-10-05"),
    },
    {
      id: 2,
      task: "Подготовить презентацию для квартального отчета",
      deadline: new Date("2024-10-15"),
      desc: "Собрать все данные по продажам, расходам и прибыли за третий квартал. Создать графики и диаграммы для визуализации. Написать выводы и рекомендации для следующего квартала. Обязательно согласовать с руководством основные моменты перед финальной версией. Презентация должна быть оформлена в корпоративном стиле, с акцентом на достижения команды.",
    },
  ]);

  const addTodo = (task) => {
    const newTodo = {
      id: todoList.length > 0 ? todoList.at(-1).id + 1 : 1,
      task,
      dataCreate: new Date(),
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
