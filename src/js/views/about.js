import React, { useContext } from "react";
//In React Router v6, the useParams hook is used to access the parameters in the URL.
import { useParams } from 'react-router-dom'; //because we used type in layout
import { Link } from "react-router-dom";
import groguPlaceholder from '../../img/blog-grogu.jpg';

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const About = () => {
	const { store, actions } = useContext(Context);
	const { type, id } = useParams();
	let fields;



	if (type == 'characters') {
		fields = (
			<div>

				<div className="card mb-4 mx-auto" style={{ maxWidth: '1300px', backgroundColor: '#1D1E1F' }} >
					<div className="row g-0">
						<div className="col-md-4">
							<img src={groguPlaceholder} className="img-fluid rounded-start" alt="grogu" />
						</div>
						<div className="col-md-8">
							<div className="card-body">
								<h5 className="card-title" style={{ color: '#FCFCFD' }}>CHARACTER NAME</h5>
								<p className="card-text" style={{ color: '#B3B5B5' }}>A mysterious child pursued by bounty hunters on behalf of Imperial interests, the foundling Grogu found protection with the Mandalorian Din Djarin. Through their adventures and journeys through the galaxy, young Grogu is honing remarkable abilities. Although he previously trained as a Jedi, Grogu has chosen to return to Din's side and continues to share his adventures as they take a stand against the Imperial remnant.</p>
							</div>
						</div>
					</div>
				</div>



				<div className="container mt-4">
					<div className="row">
						{[...Array(6).keys()].map((index) => (
							<div key={index} className={`col-md-2${index < 5 ? ' mb-3' : ''}`} style={{ borderRight: index < 5 ? '1px solid grey' : 'none' }}>
								<div className="content">
									Type: {type}
									<h4>Column {index + 1}</h4>
									<p>Some text here</p>
								</div>
							</div>
						))}
					</div>
				</div>


			</div>
		)
	}
	else if (type == 'vehicles') {
		fields = (
			<div>

				<div className="card mb-4 mx-auto" style={{ maxWidth: '1300px', backgroundColor: '#1D1E1F' }} >
					<div className="row g-0">
						<div className="col-md-4">
							<img src={groguPlaceholder} className="img-fluid rounded-start" alt="grogu" />
						</div>
						<div className="col-md-8">
							<div className="card-body">
								<h5 className="card-title" style={{ color: '#FCFCFD' }}>VEHICLE NAME</h5>
								<p className="card-text" style={{ color: '#B3B5B5' }}>A mysterious child pursued by bounty hunters on behalf of Imperial interests, the foundling Grogu found protection with the Mandalorian Din Djarin. Through their adventures and journeys through the galaxy, young Grogu is honing remarkable abilities. Although he previously trained as a Jedi, Grogu has chosen to return to Din's side and continues to share his adventures as they take a stand against the Imperial remnant.</p>
							</div>
						</div>
					</div>
				</div>



				<div className="container mt-4">
					<div className="row">
						{[...Array(6).keys()].map((index) => (
							<div key={index} className={`col-md-2${index < 5 ? ' mb-3' : ''}`} style={{ borderRight: index < 5 ? '1px solid grey' : 'none' }}>
								<div className="content">
									Type: {type}
									<h4>Column {index + 1}</h4>
									<p>Some text here</p>
								</div>
							</div>
						))}
					</div>
				</div>


			</div>
		)
	}

	else if (type == 'planets') {
		fields = (
			<div>

				<div className="card mb-4 mx-auto" style={{ maxWidth: '1300px', backgroundColor: '#1D1E1F' }} >
					<div className="row g-0">
						<div className="col-md-4">
							<img src={groguPlaceholder} className="img-fluid rounded-start" alt="grogu" />
						</div>
						<div className="col-md-8">
							<div className="card-body">
								<h5 className="card-title" style={{ color: '#FCFCFD' }}>PLANET NAME</h5>
								<p className="card-text" style={{ color: '#B3B5B5' }}>A mysterious child pursued by bounty hunters on behalf of Imperial interests, the foundling Grogu found protection with the Mandalorian Din Djarin. Through their adventures and journeys through the galaxy, young Grogu is honing remarkable abilities. Although he previously trained as a Jedi, Grogu has chosen to return to Din's side and continues to share his adventures as they take a stand against the Imperial remnant.</p>
							</div>
						</div>
					</div>
				</div>



				<div className="container mt-4">
					<div className="row">
						{[...Array(6).keys()].map((index) => (
							<div key={index} className={`col-md-2${index < 5 ? ' mb-3' : ''}`} style={{ borderRight: index < 5 ? '1px solid grey' : 'none' }}>
								<div className="content">
									Type: {type}
									<h4>Column {index + 1}</h4>
									<p>Some text here</p>
								</div>
							</div>
						))}
					</div>
				</div>


			</div>
		)
	}

	return (
		<div>
			<h2 className="ms-5">About Page</h2>
			<p className="ms-5">Type: {type}</p>
			<p className="ms-5">ID: {id}</p>
			<div>{fields}</div>

			<Link to="/">
				<button className="btn btn-primary ms-5">Back home</button>
			</Link>
		</div>
	);
};
