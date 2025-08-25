import "./HelloWorld.css";

// function HelloWorld(){
//     return(
//         <div>
//             <HeaderHelloWorld teks="Von Lycaon"/>
//             <ParagraphHelloWorld/>
//         </div>
//     );
// }


function HelloWorld(){
    const props = {
        teks: "Spread Syntax"
    }
    return(
        <div>
            <HeaderHelloWorld {...props}/>
            <ParagraphHelloWorld/>
        </div>
    );
}

// function HeaderHelloWorld(){
//     const text = "Hello World";
//     const style = {
//         color: "blue"
//     };
//     return(
//         <h1 style={style}>{text}</h1>
//     );
// }

// function HeaderHelloWorld(props){
//     // const text = "Hello World";
//     const style = {
//         color: "blue"
//     };
//     return(
//         <h1 style={style}>{props.text}</h1>
//     );
// }

// destructuring
function HeaderHelloWorld({teks = "kosong"}){
    // const text = "Hello World";
    // const style = {
    //     color: "blue"
    // };
    return(
        // <h1 style={style}>{teks}</h1>
        <h1 className="title">{teks}</h1>
    );
}

function ParagraphHelloWorld(){
    const text = "Belajar React";
    // const style = {
    //     color: "green"
    // }
    return(
        // <p style={style}>{text.toLowerCase()}</p>
        <p className="content">{text.toLowerCase()}</p>
    );
}
export default HelloWorld