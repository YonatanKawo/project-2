import React, {useState}from "react";
import '../style.css';

export default function JokeFilter({id,setup,punchline,Delete}) {
    const [isOn, setIsOn] = useState(false);
    const [countLike, setCountLike] = useState(0)
    const [countDislike, setCountDislike] = useState(0)

    const like= '👍';
    const disLike = '👎';

    // Count likes when clicked
    function handleLikeClick (){
        setCountLike(countLike + 1)
    }

    // Count dislikes when clicked
    function handleDisLikeClick (){
        setCountDislike(countDislike + 1)
    }

    // Displays the punchline jokes when clicked
    function handleClick () {
        setIsOn(isOn => !isOn)
    }
    
    return (
        <div className="card">
            <h3>{setup}</h3>
            <h4 className="answer"onClick={handleClick}> 
                {isOn ? punchline: "Answer"}</h4>
            <div className="button">
                <button className="delete"
                onClick={Delete}> Delete </button> 
                <button className="like" onClick={handleLikeClick}> {like} {countLike}</button>
                <button className="disLike" onClick={handleDisLikeClick}> {disLike} {countDislike}</button>
            </div>
            
        </div>  
    )
}
/*********** PATCH ***********/
// function handleClick (){ 
// fetch(`http://localhost:3000/jokes/${joke.id}`,{
        // method: "PATCH",
        // headers: {
        //     'Content-Type': 'application/json'
        // },
        // body: JSON.stringify({On:!isOn}) })
// .then(res => res.json())
// .then(data => {
//         console.log(data,'Yonatan')
//         setIsOn(!isOn)
// })
// }
/*********** DELETE ***************** */

    // persist changes on server - deletes joke from db.json
    // function handleDelete() { 
    //     fetch(`http://localhost:3000/jokes/${id}`, {
    //         method: "DELETE"
    //     } )
    //     Delete(id)
    // }