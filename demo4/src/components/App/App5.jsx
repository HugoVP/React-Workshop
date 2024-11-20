import React from "react"
import Form from "../Form/Form2";
import "./App2.css";

const isUserRegistered = true;
const hours = new Date(2024, 1, 1, 18).getHours();
console.log(hours)

function App() {
	return (
		<div className="container">
			{isUserRegistered ? <h1>Registered</h1> : <Form />}
			{hours > 18 ? <p>Why are you still working?</p> : null}
			{hours > 18 && <p>Why are wyou still working?</p>}
		</div>
	);
}

export default App
