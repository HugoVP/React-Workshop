//1. Create a new React app.
//2. Create a App.jsx component.
//3. Create a Header.jsx component that renders a <header> element
//to show the Keeper App name in an <h1>.
//4. Create a Footer.jsx component that renders a <footer> element
//to show a copyright message in a <p> with a dynamically updated year.
//5. Create a Note.jsx component to show a <div> element with a
//<h1> for a title and a <p> for the content.
//6. Make sure that the final website is styled like the example shown here:
//https://l1pp6.csb.app/

import React from "react";
import Header from "./components/Header/Header";
import Note from "./components/Note/Note";
import Footer from "./components/Footer/Footer";
import notes from "./notes";

function App() {
    return (
        <div>
            <Header />
            {notes.map((noteItem) => (
                <Note
                    key={noteItem.key}
                    title={noteItem.title}
                    content={noteItem.content}
                />
            ))}
            <Footer />
        </div>
    );
};

export default App;
