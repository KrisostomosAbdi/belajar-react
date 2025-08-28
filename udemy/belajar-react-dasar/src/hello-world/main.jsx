import {createRoot} from "react-dom/client";
import HelloWorld from "./HelloWorld";
import { StrictMode } from "react";
import Container from './Container.jsx'
import ToDoList from "../todolist/todolist.jsx";
import Table from "../table/Table.jsx";

createRoot(document.getElementById("root"))
    .render(
        <StrictMode>
            <Container>
                <HelloWorld/>
                <ToDoList/>
                <Table/>
            </Container>
        </StrictMode>
    );