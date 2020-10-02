import React from "react";
import "./App.css";
import AddStudent from "./components/AddStudent";
import ListStudent from "./components/ListStudent";

const App = () => {
	return (
		<div className="app">
			<div className="app__container">
				<AddStudent />
				<ListStudent />
			</div>
		</div>
	);
};

export default App;
