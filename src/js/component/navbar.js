import React from "react";
import starWarsLogo from "../../img/Star-Wars-symbol.jpg";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-dark mb-3" style={{ backgroundColor: 'black' }}>
			<Link to="/">
				<img className="navbar-brand mb-0 h1 ms-5" src={starWarsLogo} width="90px" />
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn me-5" style={{ color: 'black', backgroundColor: 'yellow' }}>Check the Context in action</button>
				</Link>
			</div>
		</nav>
	);
};
