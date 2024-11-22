import React, { useState } from "react";

function App() {

    const [name, setName] = useState("");

    const [heading, setHeading] = useState("");

    function handleChange (event) {
        // console.log("Change");
        // console.log(event.target.value);
        setName(event.target.value);
    }

    function handleClick() {
        setHeading(name);
    }

    return (
        <div className="container">
            <h1>Hello {heading}</h1>
            <input
                type="text"
                placeholder="What's your name?"
                onChange={handleChange}
                value={name}
            />
            <button onClick={handleClick}>Submit</button>
        </div>
    )
}

export default App
