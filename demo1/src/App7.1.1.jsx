import React from 'react'
// import pi, { doublePi, triplePi } from './math7.1';
import * as _Math_ from "./math7.1.1"

console.log(_Math_)

export const App = () => {
    return (
        <ul>
            <li>{_Math_.default}</li>
            <li>{_Math_.doublePi()}</li>
            <li>{_Math_.triplePi()}</li>
        </ul>
    )
}
