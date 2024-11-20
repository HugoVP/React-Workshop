import React from 'react';

const headerStyle = {
    color: "blue",
    fontSize: 64,
    // fontSize: "48px",
    border: "1px solid green",
};

headerStyle.color = "red"

export const App = () => {
    return (
        <div>
            <h1 class="header">Hello World 1!</h1>
            
            <h1 style={headerStyle}>Hello World 2!</h1>
            
            {/* <h1 style={{ color: "green", fontSize: 48, borderWidth: 1, borderStyle: "solid", borderColor: "violet" }}>Hello World 3!</h1> */}
            
            <h1 style={{
                color: "green",
                fontSize: 48,
                borderWidth: 1,
                borderStyle: "solid",
                borderColor: "violet"
            }}>
                Hello World 3!
            </h1>

            <h1 class="header" contentEditable>Hello World 1!</h1>
        </div>
    );
};
