import React, { useState } from "react";

function App() {

    const [name, setName] = useState("Hugo");

    function handleChange (event) {
        // console.log("Change");
        // console.log(event.target.value);
        setName(event.target.value);
    }

    return (
        <div className="container">
            <h1>Hello {name}</h1>
            <input
                type="text"
                placeholder="What's your name?"
                onChange={handleChange}
                value={name}
            />
            <button>Submit</button>
        </div>
    )
}

export default App
