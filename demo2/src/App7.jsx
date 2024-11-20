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

            {contacts.map(function (contact) {
                return (
                    <Card
                        key={contact.id}
                        name={contact.name}
                        img={contact.imgURL}
                        tel={contact.phone}
                        email={contact.email}
                    />
                );
            })}
        </div>
    )
}

export default App
