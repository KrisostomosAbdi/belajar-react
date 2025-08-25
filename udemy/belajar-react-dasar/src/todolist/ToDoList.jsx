import Todo from "./ToDo.jsx";

export default function ToDoList(){
    const data = [
        {
            "id": 0,
            "text": "Gorou",
            "isCompleted" : true
        },
        {
            "id": 1,
            "text": "Seth",
            "isCompleted" : true
        },
        {
            "id": 2,
            "text": "Test",
            "isCompleted" : true,
            "isDeleted" : true
        },
        {
            "id": 3,
            "text": "Lycaon",
            "isCompleted" : true
        },
    ]

    // const todos = data.map((todo) => {
    //     return <Todo {...todo}/>
    // })

    const todos = data.map((todo) => ( <Todo key={todo.id} {...todo}/>))

    return(
        <ul>
            {todos}
        </ul>
    )
    // return(
    //     <ul>
    //         <Todo isCompleted={true} text="Gorou"/>
    //         <Todo isCompleted={true} text="Seth"/>
    //         <Todo isCompleted={false} text="Test" isDeleted={true}/>
    //         <Todo isCompleted={true} text="Lycaon"/>
    //     </ul>
    // )
}