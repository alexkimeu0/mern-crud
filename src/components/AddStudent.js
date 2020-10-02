import React from "react";
import axios from "axios";

import "./AddStudent.css";

class AddStudent extends React.Component {
	state = {
		firstname: "",
		lastname: "",
		place: "",
	};

	handleSubmit = (e) => {
		e.preventDefault();
		axios.post("http://localhost:5000/students", this.state).then((res) => {
			console.log(res.data);
		});

		const { name } = e.target;
		this.setState({ [name]: "" });
	};

	handleChange = (e) => {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	};

	render() {
		return (
			<div className="add">
				<h1 className="add__title">Add New Student</h1>

				<div className="add__form">
					<form onSubmit={(e) => this.handleSubmit(e)}>
						<input
							type="text"
							name="firstname"
							value={this.state.firstname}
							placeholder="First Name..."
							onChange={(e) => this.handleChange(e)}
							required
						/>
						<input
							type="text"
							name="lastname"
							value={this.state.lastname}
							placeholder="Last Name..."
							onChange={(e) => this.handleChange(e)}
							required
						/>
						<input
							type="text"
							name="place"
							value={this.state.place}
							placeholder="Location..."
							onChange={(e) => this.handleChange(e)}
							required
						/>
						<button>Submit</button>
					</form>
				</div>
			</div>
		);
	}
}

export default AddStudent;
