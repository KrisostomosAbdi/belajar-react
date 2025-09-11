import { useImmer } from "use-immer";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

export default function TaskNew(){
    const [items, setItems] = useImmer([]);

    // function handleOnSubmit(item){
    //     setItems((draft) => {
    //         draft.push(item);
    //     })
    // }

    return(
        <div>
            <TaskForm setItems={setItems}/>
            {/* <TaskForm onSubmit={handleOnSubmit}/> */}
            <TaskList items={items}/>
        </div>
    )
}