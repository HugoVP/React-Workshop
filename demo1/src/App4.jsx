// Crear un nuevo archivo App.jsx.
// Mostrar un unico h1 que diga "Good Morning" si la hora es entre media noche y medio dia (12 AM - 12 PM).
// O "Good Afternoon" si es entre las 12 PM y las 6 PM.
// O "Good Night" si es entre las 6 PM y la media noche (12AM).
// Aplica el estilo "heading" en el archivo styles.css.
// Cambia dinamicamente el el color del elemento h1 con un estilo en linea:
// "Good Morning" = red, "Good Afternoon" = green, "Good Night" = blue.

import React from 'react';

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

export const App = () => {
    return (
        <h1 className="greeting" style={customStyle}>{greeting}</h1>
    )
}

