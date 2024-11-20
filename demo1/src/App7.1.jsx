import React from 'react'
import pi, { doublePi, triplePi } from './math7.1';

export const App = () => {
    return (
        <ul>
            <li>{pi}</li>
            <li>{doublePi()}</li>
            <li>{triplePi()}</li>
        </ul>
    )
}
