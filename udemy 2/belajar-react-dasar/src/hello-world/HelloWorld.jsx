import "./HelloWorld.css";

export default function HelloWorld() {
  const props = {
    text: "Title from spread syntax",
  };
  return (
    <div>
      <HeaderHelloWorld {...props} />
      {/* <HeaderHelloWorld text="HIDUP JOKOWI" /> */}
      <ParagraphHelloWorld />
    </div>
  );
}

function HeaderHelloWorld({ text = "HELLO WORLD 1" }) {
  // function HeaderHelloWorld({ text = "HELLO WORLD 1" }) {
  return (
    <h1
      className="title"
      // style={{
      //   color: "red",
      //   backgroundColor: "yellow",
      // }}
    >
      {text.toUpperCase()}
    </h1>
  );
}

function ParagraphHelloWorld() {
  // const style = {
  //   color: "blue",
  // };
  const text =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates iste reprehenderit, quae id excepturi eius repellendus, temporibus, nemo fuga reiciendis saepe qui quas doloremque. Enim quos ipsa accusantium nostrum pariatur";
  return (
    <p
      // style={style}
      className="content"
    >
      {text.toLocaleLowerCase()}
    </p>
  );
}

// export default HelloWorld;
