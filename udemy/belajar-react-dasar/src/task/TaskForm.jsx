/* eslint-disable no-unused-vars */
import { useState } from "react"
import { useImmer } from "use-immer";


export default function TaskForm({setItems})
{
     const [item, setItem] = useState("");
    
        function handleChange(e){
            setItem(e.target.value);
        }
    
        function handleClick(e){
            e.preventDefault();
            // onSubmit(item);
            setItems((draft) => {
                draft.push(item);
            })
            setItem("");
        }
        return(
            <div>
                <h1>Create Task</h1>
                <form action="">
                    <input type="text" onChange={handleChange} />
                    <button onClick={handleClick}>ADD</button>
                </form>
            </div>
        )
}