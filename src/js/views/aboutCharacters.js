import React, { useContext, useEffect, useState } from "react";
//In React Router v6, the useParams hook is used to access the parameters in the URL.
import { useParams } from 'react-router-dom'; //because we used type in layout
import { Link } from "react-router-dom";
import groguPlaceholder from '../../img/blog-grogu.jpg';
import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const AboutCharacters = () => {
	const params = useParams();
	const { store, actions } = useContext(Context);

	const [param, setParam] = useState();

	useEffect(() => {
		actions.getPeopleDetails(params.id, setParam);
	}, []);

	return (
		<div className="main-wrapper">
			{param && param.result.properties.name ? (

				<div>
					<div className="card mb-4 mx-auto mt-4" style={{ maxWidth: '1300px', backgroundColor: 'rgba(29, 30, 31, 0.6)' }} >
						<div className="row g-0">
							<div className="col-md-4">
								<img src={`https://starwars-visualguide.com/assets/img/characters/${param.result.uid}.jpg`} className="img-fluid rounded-start" alt="Star wars item" />
							</div>
							<div className="col-md-8">
								<div className="card-body">
									<h5 className="card-title" style={{ color: '#FCFCFD' }}>{param.result.properties.name}</h5>
									<p className="card-text" style={{ color: '#B3B5B5' }}>A mysterious child pursued by bounty hunters on behalf of Imperial interests, the foundling Grogu found protection with the Mandalorian Din Djarin. Through their adventures and journeys through the galaxy, young Grogu is honing remarkable abilities. Although he previously trained as a Jedi, Grogu has chosen to return to Din's side and continues to share his adventures as they take a stand against the Imperial remnant.</p>
								</div>
							</div>
						</div>
					</div>



					<div className="container mt-4 justify-content-around mt-4 fs-6" style={{ display: 'flex', alignItems: 'center' }}>
						<div className="info" style={{ borderRight: '1px solid grey', flex: 1, textAlign: 'center' }}>
							<p className="info-title"><strong>Hair Color</strong></p>
							<p className="info-title">{param.result.properties.hair_color}</p>
						</div>
						<div className="info-div info" style={{ borderRight: '1px solid grey', flex: 1, textAlign: 'center' }}>
							<p className="info-title"><strong>Birth Year</strong></p>
							<p className="info-title">{param.result.properties.birth_year}</p>
						</div>
						<div className="info-div info" style={{ borderRight: '1px solid grey', flex: 1, textAlign: 'center' }}>
							<p className="info-title"><strong>Gender</strong></p>
							<p className="info-title">{param.result.properties.gender}</p>
						</div>
						<div className="info-div info" style={{ borderRight: '1px solid grey', flex: 1, textAlign: 'center' }}>
							<p className="info-title"><strong>Height</strong></p>
							<p className="info-title">{param.result.properties.height}</p>
						</div>
						<div className="info-div info" style={{ borderRight: '1px solid grey', flex: 1, textAlign: 'center' }}>
							<p className="info-title"><strong>Skin Color</strong></p>
							<p className="info-title">{param.result.properties.skin_color}</p>
						</div>
						<div className="info-div info" style={{ flex: 1, textAlign: 'center' }}>
							<p className="info-title"><strong>Eye Color</strong></p>
							<p className="info-title">{param.result.properties.eye_color}</p>
						</div>
					</div>


				</div>

			) : ""}

			<Link to="/">
				<button className="btn btn-primary back-home">Back home</button>
			</Link>


		</div>
	);
};
