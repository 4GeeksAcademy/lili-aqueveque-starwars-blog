import React, { useContext } from "react";
//In React Router v6, the useParams hook is used to access the parameters in the URL.
import { useParams } from 'react-router-dom'; //because we used type in layout
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const About = () => {
	const { store, actions } = useContext(Context);
	const { type, id } = useParams();

	return (
		<div>
			<h2>About Page</h2>
			<p>Type: {type}</p>
			<p>ID: {id}</p>
			<br />
			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</div>
	);
};
