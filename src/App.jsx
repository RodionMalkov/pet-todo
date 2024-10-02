import React, { useState, useEffect } from "react";
import AddTodo from "./modules/AddTodo/AddTodo";
import Container from "./modules/Container/Container";
import TodoList from "./modules/TodoList/TodoList";

const App = () => {
  const [todoList, setTodoList] = useState([]);
  const [completedList, setCompletedList] = useState([]);
  const [favoritesList, setFavoritesList] = useState([]);

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

  const statusTask = (id, isComplited) => {
    // Найдём задачу в любом из списков (активные или завершённые)
    let task =
      todoList.find((todo) => todo.id === id) ||
      completedList.find((todo) => todo.id === id);

    if (!task) return; // Если задача не найдена, ничего не делаем

    task = { ...task, isComplited }; // Обновляем статус задачи

    if (isComplited) {
      // Перемещаем задачу в выполненные
      setCompletedList([...completedList, task]);
      setTodoList(todoList.filter((todo) => todo.id !== id)); // Удаляем из активных
    } else {
      // Возвращаем задачу в активные
      setTodoList([...todoList, task]);
      setCompletedList(completedList.filter((todo) => todo.id !== id)); // Удаляем из выполненных
    }
  };

  const addDeadline = (id, deadline) => {
    setTodoList(
      todoList.map((todo) => (todo.id === id ? { ...todo, deadline } : todo))
    );
  };

  const removeTodo = (id) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  useEffect(() => {
    setTodoList([
      {
        id: 1,
        task: "Завершить проект",
        deadline: new Date("2024-10-05"),
        desc: false,
        isImportant: false,
        isComplited: false,
        dateCreate: false,
        dateUpdate: false,
      },
      {
        id: 2,
        task: "Подготовить презентацию для квартального отчета",
        deadline: new Date("2024-10-15"),
        desc: "Собрать все данные по продажам, расходам и прибыли за третий квартал. Создать графики и диаграммы для визуализации. Написать выводы и рекомендации для следующего квартала. Обязательно согласовать с руководством основные моменты перед финальной версией. Презентация должна быть оформлена в корпоративном стиле, с акцентом на достижения команды.",
        isImportant: false,
        isComplited: false,
        dateCreate: false,
        dateUpdate: false,
      },
    ]);
  }, []);
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
          statusTask={statusTask}
          listTitle="В планах"
          textEmpty="Список дел пуст :'("
        />
        <TodoList
          todoList={completedList}
          removeTodo={removeTodo}
          addDeadline={addDeadline}
          addDesc={addDesc}
          renameTask={renameTask}
          statusTask={statusTask}
          listTitle="Завершенные задачи"
          textEmpty="У вас нет завершённых задач"
        />
      </Container>
    </>
  );
};

export default App;
