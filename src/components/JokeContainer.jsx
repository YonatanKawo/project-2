import React,{useState} from "react";
import '../style.css';
import JokeFilter from "./JokeFilter";
//import SearchBar from "./SearchBar";

export default function JokeContainer ({deleteJoke,jokes}) {
    const [filterBy, setFilterBy] = useState("All");
    
    function handleFilterChange (event) {
        setFilterBy(event.target.value);
    }

    // Filters jokes by their type
    const jokesToDisplay = jokes.filter((joke) => {
        if (filterBy === "All") {
            return true;
        } else {
            return joke.type === filterBy;
        }
        })
    
    // Deletes jokes identified by their id
    const jokeList = jokesToDisplay.map((joke) => (
        <JokeFilter key={joke.id} 
            id={joke.id}
            setup={joke.setup} 
            punchline={joke.punchline} 
            Delete={() => deleteJoke(joke.id)} />     
    ))

    return (
        <div className="jokes"> 
            <div className="filter">
                <select className="select" name="filter" onChange={handleFilterChange}>
                    <option value="All">Filter Joke Type...</option>
                    <option value="general">General</option>
                    <option value="programming">Programming</option>
                    <option value="knock-knock">Knock-Knock</option>
                </select>
            </div>
            {jokeList} 
        </div>
    )
}

////////////////////////////////////////
//         const config = {
//             method:"PATCH",
//             headers:{
//                 'content-Type':'application/json'
//             },
//             body:JSON.stringify({On:!isOn})
//         }
//         fetch(`http://localhost:3000/jokes/${id}`,config)
//         .then(res => res.json)
//         .then(setIsOn((isOn) => !isOn))
// }