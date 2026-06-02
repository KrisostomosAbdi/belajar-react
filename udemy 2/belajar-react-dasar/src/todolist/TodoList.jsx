import Todo from "./Todo";

// export default function TodoList() {
//   return (
//     <ul>
//       <Todo isCompleted={true} isDeleted={true} text="Coba" />
//       <Todo isCompleted={false} text="Coba 1" />
//       <Todo isCompleted={true} text="Coba 2" />
//     </ul>
//   );
// }

export default function TodoList() {
  const data = [
    {
      id: 0,
      text: "Learn HTML",
      isCompleted: true,
    },
    {
      id: 1,
      text: "Learn CSS",
      isCompleted: true,
    },
    {
      id: 2,
      text: "Learn JS",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Learn PY",
      isCompleted: true,
    },
  ];

  //   const todos = data.map((todo) => {
  //     return <Todo {...todo} />;
  //   });
  //   return <ul>{todos}</ul>;

  return (
    <ul>
      {data.map((todo) => (
        <Todo key={todo.id} {...todo} />
      ))}
    </ul>
  );
}
