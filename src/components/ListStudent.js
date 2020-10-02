import React, { useEffect, useState } from "react";
import Student from "./Student";

import axios from "axios";

import "./ListStudent.css";

const ListStudent = () => {
	const [students, setStudents] = useState([]);

	useEffect(() => {
		axios.get("http://localhost:5000/").then((res) => {
			setStudents(res.data);
		});
	}, [students]);

	return (
		<div className="students">
			<h1>Students</h1>
			<Student students={students} />
		</div>
	);
};

export default ListStudent;
