import React from "react"
import Form from "../Form/Form3";
import "./App2.css";

const isUserRegistered = true;
// const hours = new Date(2024, 1, 1, 18).getHours();
// console.log(hours)

function App() {
	return (
		<div className="container">
			<Form isRegistered={isUserRegistered} />
			{/* {hours > 18 ? <p>Why are you still working?</p> : null}
			{hours > 18 && <p>Why are wyou still working?</p>} */}
		</div>
	);
}

export default App
