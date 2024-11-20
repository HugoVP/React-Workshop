import React from 'react';

const name = "Hugo Vazquez Paleo";
const favoriteNumber = 12;
const currentDate = new Date();

const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth() + 1;
const currentDay = currentDate.getDate();

console.log(currentDate);

export const App = () => {
    return (
        <div>
            <h1>Hello, {name}! Your favorite number is: {favoriteNumber}</h1>
            {/* <p>The current date is: {currentDate}</p> */}
            <p>The current date is: {currentDay}/{currentMonth}/{currentYear}</p>
            <p>The current date is : {currentDay + "/" + currentMonth + "/" + currentYear }</p>
            <p>{`The current date is: ${currentDay}/${currentMonth}/${currentYear}`}</p>
        </div>
    );
};
