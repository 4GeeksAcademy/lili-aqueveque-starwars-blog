import React, { useContext, useEffect, useState } from "react";
//In React Router v6, the useParams hook is used to access the parameters in the URL.
import { useParams } from 'react-router-dom'; //because we used type in layout
import { Link } from "react-router-dom";
import groguPlaceholder from '../../img/blog-grogu.jpg';
import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const AboutPlanets = () => {
	const params = useParams();
	const { store, actions } = useContext(Context);

	const [param, setParam] = useState();

	useEffect(() => {
		actions.getPlanetsDetails(params.id, setParam);
	}, []);

	return (
		<div className="main-wrapper">
			{param && param.result.properties.name ? (

				<div>
					<div className="card mb-4 mx-auto mt-4" style={{ maxWidth: '1300px', backgroundColor: 'rgba(29, 30, 31, 0.6)' }} >
						<div className="row g-0">
							<div className="col-md-4">
								<img src={`https://starwars-visualguide.com/assets/img/planets/${param.result.uid}.jpg`}
									onError={(e) => {
										e.target.src = groguPlaceholder; // Use the variable directly, not inside curly braces
									}} className="img-fluid rounded-start" alt="Star wars item" />
							</div>
							<div className="col-md-8">
								<div className="card-body">
									<h5 className="card-title" style={{ color: '#FCFCFD' }}>{param.result.properties.name}</h5>
									<p className="card-text" style={{ color: '#B3B5B5' }}>Coruscant is the vibrant heart and capital of the galaxy during the age of the Empire, featuring a diverse mix of cultures and citizens spread over hundreds of levels. Once the home of the main Jedi Temple -- the central hub of Jedi training and learning for over a thousand generations and the repository of the Jedi Archives -- these traditions ended when the planet bore witness to Order 66.</p>
								</div>
							</div>
						</div>
					</div>



					<div className="container mt-4 justify-content-around mt-4 fs-6" style={{ display: 'flex', alignItems: 'center' }}>
						<div className="info" style={{ borderRight: '1px solid grey', flex: 1, textAlign: 'center' }}>
							<p className="info-title"><strong>Diameter</strong></p>
							<p className="info-title">{param.result.properties.diameter}</p>
						</div>
						<div className="info-div info" style={{ borderRight: '1px solid grey', flex: 1, textAlign: 'center' }}>
							<p className="info-title"><strong>Rotation period</strong></p>
							<p className="info-title">{param.result.properties.rotation_period}</p>
						</div>
						<div className="info-div info" style={{ borderRight: '1px solid grey', flex: 1, textAlign: 'center' }}>
							<p className="info-title"><strong>Gravity</strong></p>
							<p className="info-title">{param.result.properties.gravity}</p>
						</div>
						<div className="info-div info" style={{ borderRight: '1px solid grey', flex: 1, textAlign: 'center' }}>
							<p className="info-title"><strong>Population</strong></p>
							<p className="info-title">{param.result.properties.population}</p>
						</div>
						<div className="info-div info" style={{ borderRight: '1px solid grey', flex: 1, textAlign: 'center' }}>
							<p className="info-title"><strong>Climate</strong></p>
							<p className="info-title">{param.result.properties.climate}</p>
						</div>
						<div className="info-div info" style={{ flex: 1, textAlign: 'center' }}>
							<p className="info-title"><strong>Surface water</strong></p>
							<p className="info-title">{param.result.properties.surface_water}</p>
						</div>
					</div>


				</div>

			) : ""}

			<Link to="/">
				<button className="btn btn-primary ms-5 back-home">Back home</button>
			</Link>


		</div>
	);
};
