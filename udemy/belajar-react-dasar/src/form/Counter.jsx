import { useState } from "react";

export default function Counter(){
    let [counter, setCounter] = useState(0);

        console.log("outside handleClick | counter " + counter);

    function handleClick(){
        // setCounter(counter + 1);
        setCounter( c => c + 1);
        setCounter( c => c + 1);
        setCounter( c => c + 1);
        console.log("inside handleClick | counter : " + counter);
    }

    return(
        <div>   
            <div>
                <button onClick={handleClick}>Increment </button>
            </div>
            <h1>Counter : {counter}</h1>

        </div>

    )
}