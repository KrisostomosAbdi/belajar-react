export default function AlertButton({text, onSmash}){
    function HandleClick(e){
        console.info(e);
    } 

    return(
        <button onClick={onSmash}>{text}</button>
    )
}