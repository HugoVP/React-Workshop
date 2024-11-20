import React from "react"
import Form from "../Form/Form2";
import "./App2.css";

const isUserRegistered = true;

function renderContent() {
	if (isUserRegistered === true) {
		return <h1>Registered</h1>;
	} else {
		return <Form />;
	}
}

function App() {
	return (
		<div className="container">
			{
				if (isUserRegistered === true) {
					return <h1>Hello</h1>;
				} else {
					return <Form />;
				}
			}
		</div>
	);
}

export default App
