import React, { useContext } from "react";
import starWarsLogo from "../../img/logo-starwars-2.png";
import starWarsLogo3 from "../../img/logo-starwars-3.png";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/navbar.css";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<div>
			<nav className="navbar-image navbar navbar-expand-lg justify-content-between">
				<Link to="/">
					<img className="navbar-brand mb-0 h1 ms-5" src={starWarsLogo3} width="135px" />
				</Link>
				<div className="ml-auto dropdown">

					<button className="inner-favorites favorites-cart" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
						<i className="far fa-star"></i><p className="favorite-box">&nbsp;Favorites&nbsp;&nbsp;</p>
						<p className=" favs-counter m-0"><strong>{store.favorites.length}</strong></p>
					</button>


					<ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton1">
						{(store.favorites && store.favorites.length > 0) ?
							store.favorites.map((item, index) => (
								<Link to={item && item.path ? ("/" + item.path + "/" + item.index) : ""} style={{ textDecoration: 'none' }}>
									<li key={item}>
										<a className="dropdown-item d-flex justify-content-between">{item}<i onClick={() => actions.deleteFavorite(index)} className="trash fas fa-trash-alt mt-1 ms-3"></i></a>
									</li>
								</Link>
							))
							: <li className="text-center">Add Favorites Here!</li>}
					</ul>


				</div>
			</nav >
		</div >
	);
};
