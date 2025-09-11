import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Task from "./task";
import TaskNew from "./TaskNew";

createRoot(document.getElementById("root"))
    .render(
        <StrictMode>
            {/* <Task/> */}
            <TaskNew/>
        </StrictMode>
    )