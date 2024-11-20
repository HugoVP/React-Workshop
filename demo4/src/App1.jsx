import React from "react"

function App() {
	return (
		<div className="container">
			<h1>Registered</h1>
			<form className="form">
				<input type="text" placeholder="Username" />
				<input type="password" placeholder="Password" />
				<input type="password" placeholder="Confirm Password" />
				<button type="submit">Register</button>
			</form>
		</div>
	);
}

export default App
