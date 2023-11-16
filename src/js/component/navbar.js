import React from "react";
import starWarsLogo from "../../img/logo-starwars-2.png";
import starWarsLogo3 from "../../img/logo-starwars-3.png";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";

export const Navbar = () => {
	return (
		<div>
			<nav className="navbar-image navbar navbar-expand-lg justify-content-between">
				<Link to="/">
					<img className="navbar-brand mb-0 h1 ms-5" src={starWarsLogo3} width="135px" />
				</Link>
				<div className="ml-auto">
					<Link to="/demo">
						<button className="btn favorites me-5" style={{ color: 'black', backgroundColor: '#F8AC0F' }}>Favorites</button>
					</Link>
				</div>
			</nav>
		</div>
	);
};
