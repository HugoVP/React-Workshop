import React from 'react';
import { add, subtract, multiply, divide } from "./Calculator8.1";

export const App = () => {
  return (
    <ul>
        <li>Add: 2 + 5 = {add(2, 5)}</li>
        <li>Subtract: 7 - 5 = {subtract(7, 5)}</li>
        <li>Multiply: 3 * 9 = {multiply(3, 9)} </li>
        <li>Divide: 8 / 2 = {divide(8, 2)}</li>
    </ul>
  )
}
