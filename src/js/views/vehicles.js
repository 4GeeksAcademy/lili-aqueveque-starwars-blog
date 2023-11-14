import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import { Link } from "react-router-dom";
import groguPlaceholder from '../../img/blog-grogu.jpg';

export const Vehicles = () => {
    const { store, actions } = useContext(Context);
    const { loading, vehicles } = store; // Destructure loading from store


    return (
        <div>
            <h2 className="text-start mx-auto w-75 mb-4 mt-5">Vehicles</h2>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <ul className="mx-auto w-75" style={{ listStyleType: "none", padding: 0, display: "flex", width: "100%", overflowX: "auto" }}>
                    {vehicles.map((vehicle) => (

                        <li key={vehicle.uid}>
                            <div className="card bg-dark" style={{ width: '18rem', marginRight: '2rem' }}>
                                <img src={`https://starwars-visualguide.com/assets/img/vehicles/${vehicle.result.uid}.jpg`}
                                    onError={(e) => {
                                        e.target.src = groguPlaceholder; // Use the variable directly, not inside curly braces
                                    }}
                                    className="card-img-top" alt="star wars vehicle" />
                                <div className="card-body">
                                    <h5 className="card-title">{vehicle.result.properties.name}</h5>
                                    <p className="card-text">model: {vehicle.result.properties.model}</p>
                                    <p className="card-text">length: {vehicle.result.properties.length}</p>
                                    <p className="card-text">passengers: {vehicle.result.properties.passengers}</p>
                                    <Link to={'/about/vehicles/' + vehicle.result.uid}>
                                        <span className="btn btn-primary learn-more">Learn more!</span>
                                    </Link>
                                </div>
                            </div>
                        </li>


                    ))}
                </ul>
            )}
        </div>
    )
}