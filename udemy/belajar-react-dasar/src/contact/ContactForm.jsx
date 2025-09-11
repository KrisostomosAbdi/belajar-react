/* eslint-disable no-unused-vars */

import { useState } from "react";
import { useImmer } from "use-immer";

const initialData = {
    name: "",
    message: ""
};

export default function ContactForm(){
    // const [contact, setContact] = useState(initialData);
    const [contact, setContact] = useImmer(initialData);

    function handleNameChange(e){
        // setContact({
        //     ...contact,
        //     name : e.target.value
        // })

        setContact(draft => {
            draft.name = e.target.value;
        })
    }

    function handleMessageChange(e){
        // setContact({
        //     ...contact,
        //     message: e.target.value
        // })
        setContact(draft => {
            draft.message = e.target.value;
        })
    }

    return(
        <div>
            <h1>Contact Form</h1>
            <form>
                <input type="text" placeholder="nama" value={contact.name} onChange={handleNameChange}/>
                <br />
                <input type="text" placeholder="message" value={contact.message} onChange={handleMessageChange}/>
            </form>
            
            <h1>Contact Detail</h1>
            <p>Name : {contact.name}</p>
            <p>Message : {contact.message}</p>
        </div>
    )
}