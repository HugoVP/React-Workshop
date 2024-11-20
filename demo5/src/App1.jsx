import React from "react";

let isDone = true;

function App() {
    return (
        <div>
            <p style={isDone ? { textDecoration: "line-through" } : null}>Buy Food</p>
        </div>
    )
}

export default App
