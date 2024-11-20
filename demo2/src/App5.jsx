import React from "react";
import Card from "./components/Card5/Card5";
import "./App2.css";
import contacts from "./contacts4";
import Avatar from "./components/Avatar5/Avatar";

function App() {
    return (
        <div>
            <h1>My Contacts</h1>

            <Avatar img="https://pbs.twimg.com/profile_images/1531686608717721602/_Iw3bvTr_400x400.jpg" />

            <Card
                name={contacts[0].name}
                img={contacts[0].imgURL}
                tel={contacts[0].phone}
                email={contacts[0].email}
            />
            <Card
                name={contacts[1].name}
                img={contacts[1].imgURL}
                tel={contacts[1].phone}
                email={contacts[1].email}
            />
            <Card
                name={contacts[2].name}
                img={contacts[2].imgURL}
                tel={contacts[2].phone}
                email={contacts[2].email}
            />
        </div>
    )
}

export default App
