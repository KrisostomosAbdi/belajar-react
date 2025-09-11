import { useState } from "react";
import Counter from "./Counter";

export default function CounterApp(){
    const [show2, setShow2] = useState(true)

    function handleChange(e){
        setShow2(e.target.checked);
    }

    return(
        <div>
            {/* <Counter name="Gorou"/> */}
            {/* {show2 && <Counter name="Seth"/>} */}
            {/* {show2 ? <Counter name="Seth"/> : <Counter name="Gorou"/>} */}
            {/* {show2 ? <Counter name="Seth"/> : <p>Gorou</p>} */}
            {/* {show2 ? 
            ( 
                <div> <Counter name="Seth"/> </div>
            ) : (
                <section> <Counter name="Gorou"/> </section>
            )} */}

            {/* {show2 && <Counter name="Gorou"/>}
            {!show2 && <Counter name="Seth"/>} */}

            {show2 ? <Counter key="1" name="Gorou"/> : <Counter key="2" name="Seth"/>}

            <input type="checkbox" checked={show2} onChange={handleChange}/>Tampilkan counter 2
        </div>
    )
}