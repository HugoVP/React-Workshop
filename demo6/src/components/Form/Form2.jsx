import React from "react";
import "./Form2.css";

function Form(props) {
    return (
        <form className="form">
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Confirm Password" />
            <button type="submit">Register</button>
        </form>
    );
}

export default Form;
