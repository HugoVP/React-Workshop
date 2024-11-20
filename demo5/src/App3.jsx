import React from "react";

let isDone = false;

function strike() {
    isDone = true;
}

function unStrike() {
    isDone = false;
}

function App() {
    return (
        <div>
            <p style={isDone ? { textDecoration: "line-through" } : null}>Buy Food</p>
            <button onClick={strike}>Change to strike through</button>
            <button onClick={unStrike}>Change back</button>
        </div>
    )
}

export default App