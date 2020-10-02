import React from "react";
import axios from "axios";

import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";

import "./Student.css";

const Student = ({ students }) => {
	const handleDelete = (id) => {
		axios.delete(`http://localhost:5000/student/${id}`).then((res) => {
			alert("Student Deleted Successfully!");
		});
	};

	return (
		<div className="student__list">
			<table>
				<thead>
					<th>First Name</th>
					<th>Last Name</th>
					<th>Location</th>
					<th>Action</th>
				</thead>
				{students.map((student) => (
					<tr>
						<td>{student.firstname}</td>
						<td>{student.lastname}</td>
						<td>{student.place}</td>
						<td>
							<IconButton>
								<EditIcon className="student__edit" />
							</IconButton>

							<IconButton>
								<DeleteIcon
									onClick={() => handleDelete(student._id)}
									className="student__delete"
								/>
							</IconButton>
						</td>
					</tr>
				))}
			</table>
		</div>
	);
};

export default Student;
