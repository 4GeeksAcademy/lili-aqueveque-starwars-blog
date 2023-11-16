import React, { useContext, useEffect, useState } from "react";
//In React Router v6, the useParams hook is used to access the parameters in the URL.
import { useParams } from 'react-router-dom'; //because we used type in layout
import { Link } from "react-router-dom";
import groguPlaceholder from '../../img/blog-grogu.jpg';
import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const AboutVehicles = () => {
	const params = useParams();
	const { store, actions } = useContext(Context);

	const [param, setParam] = useState();

	useEffect(() => {
		actions.getVehiclesDetails(params.id, setParam);
	}, []);

	return (
		<div className="main-wrapper">
			{param && param.result.properties.name ? (

				<div>
					<div className="card mb-4 mx-auto mt-4" style={{ maxWidth: '1300px', backgroundColor: 'rgba(29, 30, 31, 0.6)' }} >
						<div className="row g-0">
							<div className="col-md-4">
								<img src={`https://starwars-visualguide.com/assets/img/vehicles/${param.result.uid}.jpg`} className="img-fluid rounded-start" alt="Star wars item" />
							</div>
							<div className="col-md-8">
								<div className="card-body">
									<h5 className="card-title" style={{ color: '#FCFCFD' }}>{param.result.properties.name}</h5>
									<p className="card-text" style={{ color: '#B3B5B5' }}>Sandcrawlers are huge treaded fortresses used by Jawas as transportation and shelter. The sand-pitted vehicles, many meters in height, are equipped with a magnetic suction tube for sucking droids and scrap into their cargo chambers.</p>
								</div>
							</div>
						</div>
					</div>



					<div className="container mt-4 justify-content-around mt-4 fs-6" style={{ display: 'flex', alignItems: 'center' }}>
						<div className="info" style={{ borderRight: '1px solid grey', flex: 1, textAlign: 'center' }}>
							<p className="info-title"><strong>Model</strong></p>
							<p className="info-title">{param.result.properties.model}</p>
						</div>
						<div className="info-div info" style={{ borderRight: '1px solid grey', flex: 1, textAlign: 'center' }}>
							<p className="info-title"><strong>Vehicle class</strong></p>
							<p className="info-title">{param.result.properties.vehicle_class}</p>
						</div>
						<div className="info-div info" style={{ borderRight: '1px solid grey', flex: 1, textAlign: 'center' }}>
							<p className="info-title"><strong>Length</strong></p>
							<p className="info-title">{param.result.properties.length}</p>
						</div>
						<div className="info-div info" style={{ borderRight: '1px solid grey', flex: 1, textAlign: 'center' }}>
							<p className="info-title"><strong>Crew</strong></p>
							<p className="info-title">{param.result.properties.crew}</p>
						</div>
						<div className="info-div info" style={{ borderRight: '1px solid grey', flex: 1, textAlign: 'center' }}>
							<p className="info-title"><strong>Max atmospheric speed</strong></p>
							<p className="info-title">{param.result.properties.max_atmosphering_speed}</p>
						</div>
						<div className="info-div info" style={{ flex: 1, textAlign: 'center' }}>
							<p className="info-title"><strong>Manufacturer</strong></p>
							<p className="info-title">{param.result.properties.manufacturer}</p>
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
