// Crear un nuevo archivo App.jsx.
// Mostrar un unico h1 que diga "Good Morning" si la hora es entre media noche y medio dia (12 AM - 12 PM).
// O "Good Afternoon" si es entre las 12 PM y las 6 PM.
// O "Good Night" si es entre las 6 PM y la media noche (12AM).
// Aplica el estilo "heading" en el archivo styles.css.
// Cambia dinamicamente el el color del elemento h1 con un estilo en linea:
// "Good Morning" = red, "Good Afternoon" = green, "Good Night" = blue.

import React from 'react';
import { Heading } from './components6/Heading/Heading';

export const App = () => {
    return (
        <Heading />
    )
}
