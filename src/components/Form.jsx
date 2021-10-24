import React,{useState} from 'react'
import '../style.css';

export default function Form({addJoke}) {
    const [joke,setJoke] = useState({
        setup: "",
        punchline: " ",
    });

    const handleChange = event => {
        setJoke({
            ...joke,
            [event.target.name]:event.target.value
        })
    }

    const handleSubmit = event => {
        event.preventDefault();
        // persist joke on server
        fetch ('http://localhost:3000/jokes', {
            method: 'POST',        // POST request - handles submitting form data 
            headers: {             // add joke to db.json
                'Content-Type': 'application/json',
            },
            body:JSON.stringify(joke),
        })
            .then(res => res.json())
            .then(addJoke)
    }

    return (
        <div className="form">
            <h2>Add Your Favorite Joke</h2>
            <form className="jokeAddForm" onSubmit={handleSubmit}>

                <label className="setupLabel" htmlFor="setup"> Setup </label>
                <input className="setupInput" 
                    type="text" 
                    name="setup" 
                    value={joke.setup} 
                    onChange={handleChange}/> 

                <label className="punchlineLabel" htmlFor="punchline"> Punchline </label>
                <input className="punchlineInput" 
                    type="text" 
                    name="punchline" 
                    value={joke.punchline} 
                    onChange={handleChange}/> 
                
                <input className="submit" 
                    type="submit" 
                    value='Create Joke'/> 

            </form>
        </div>  
    )
}

// Create — POST
// Read/Retrieve — GET
// Update — PUT/PATCH
        // PUT - replaces an item
        // PATCH - modifies an item
// Delete — DELETE