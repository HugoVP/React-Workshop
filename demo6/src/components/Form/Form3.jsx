import React, { useState } from "react";
import "./Form2.css";

function Form(props) {

    const [mouseOver, setMouseOver] = useState(false);

    const handleMouseOver = () => {
        setMouseOver(true);
    };

    const handleMouseOut = () => {
        setMouseOver(false);
    };

    return (
        <form className="form">
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            {!props.isRegistered && <input type="password" placeholder="Confirm Password" />}
            <button
                type="submit"
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
                style={{ backgroundColor: mouseOver ? "black" : "white" }}
            >
                {props.isRegistered ? "Login" : "Register"}
            </button>
        </form>
    );
}

export default Form;
