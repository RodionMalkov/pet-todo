import React from "react";
import AddTodo from "./components/AddTodo/AddTodo";
import Container from "./modules/Container/Container";

function App() {
  return (
    <>
      <Container>
        <AddTodo />
      </Container>
    </>
  );
}

export default App;
