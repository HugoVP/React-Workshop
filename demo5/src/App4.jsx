import React, { useState } from "react";

function App() {
    const state = useState(false);
    console.log(state);

    function strike() {
        state[1](true);
    }
    
    function unStrike() {
        state[1](false);
    }

    return (
        <div>
            <p style={state[0] ? { textDecoration: "line-through" } : null}>Buy Food</p>
            <button onClick={strike}>Change to strike through</button>
            <button onClick={unStrike}>Change back</button>
        </div>
    )
}

export default App
