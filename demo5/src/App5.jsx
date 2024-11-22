import React, { useState } from "react";

function App() {
    const [done, setDone] = useState(false);

    const [red, green, blue] = [255, 255, 255];

    console.log(red, green, blue);
    
    function strike() {
        setDone(true);
    }
    
    function unStrike() {
        setDone(false);
    }

    return (
        <div>
            <p style={done ? { textDecoration: "line-through" } : null}>Buy Food</p>
            <button onClick={strike}>Change to strike through</button>
            <button onClick={unStrike}>Change back</button>
        </div>
    )
}

export default App
