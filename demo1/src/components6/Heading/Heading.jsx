import React from 'react';
import "./Heading.css";

export const Heading = () => {

    const date = new Date(1990, 1, 1, 0);
    const currentTime = date.getHours();
    console.log(currentTime);

    let greeting;

    const customStyle = {
        color: "",
    };

    if (currentTime < 12) {
        greeting = "Good morning";
        customStyle.color = "red";
    } else if (currentTime < 18) {
        greeting = "Good Afternoon";
        customStyle.color = "green";
    } else {
        greeting = "Good Night";
        customStyle.color = "blue";
    }
    
    return (
        <h1 className="greeting" style={customStyle}>{greeting}</h1>
    );
};
