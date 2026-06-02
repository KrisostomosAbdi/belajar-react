import { createRoot } from "react-dom/client";
import HelloWorld from "./HelloWorld";
import { StrictMode } from "react";
import Container from "./Container";
import TodoList from "../todolist/TodoList";
import Table from "../table/Table";
import AlertButton from "../button/AlertButton";
import MyButton from "../button/MyButton";
import Toolbar from "../button/Toolbar";
import SearchForm from "../form/SearchForm";
import SayHelloForm from "../form/SayHelloForm";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Container>
      <HelloWorld />
      <TodoList />
      <Table />
      <AlertButton text="pria" message="solo" />
      <MyButton text="button 2" onSmash={() => alert("HIDOEP")} />
      <Toolbar
        onClick={(e) => {
          e.stopPropagation();
          alert("Toolbar is pressed");
        }}
      />
      <SearchForm />
      <SayHelloForm />
    </Container>
  </StrictMode>,
);
