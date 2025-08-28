import { createRoot } from "react-dom/client";
import HelloWorld from "./HelloWorld";
import { StrictMode } from "react";
import Container from "./Container.jsx";
import ToDoList from "../todolist/todolist.jsx";

import Toolbar from "../button/Toolbar.jsx";
import AlertButton from "../button/alertButton.jsx";
import SearchForm from "../form/SearchForm.jsx";
import SayHelloForm from "../form/SayHelloForm.jsx";
import Counter from "../form/Counter.jsx";

import Table from "../table/Table.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Container>
      <HelloWorld />
      <ToDoList />

      <AlertButton text="Click me!" onSmash={() => alert("Smashed!")} />
      {/* <alertButton text="Click me!" message="Clicked!"></alertButton> */}

      <Toolbar
        onClick={(e) => {
          e.stopPropagation();
          alert("Toolbar is clicked!");
        }}
      />

      <SearchForm />
      <SayHelloForm />
      <Counter />

      <Table />
    </Container>
  </StrictMode>
);
