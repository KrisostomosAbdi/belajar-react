let counter = 0;

// export default function Row({ text }) {
//   counter++;
//   return (
//     <tr>
//       <td>{counter}</td>
//       <td>{text}</td>
//     </tr>
//   );
// }

export default function Row({ id, text }) {
  counter++;
  return (
    <tr>
      <td>{id}</td>
      <td>{text}</td>
    </tr>
  );
}
