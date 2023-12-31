import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import { Link } from "react-router-dom";
import groguPlaceholder from '../../img/blog-grogu.jpg';
import "../../styles/characters.css";

export const Vehicles = () => {
    const { store, actions } = useContext(Context);
    const { loading, vehicles } = store; // Destructure loading from store


    return (
        <div>
            <h1 className="text-start mx-auto w-75 mb-4 mt-5 group-title">Vehicles</h1>
            {loading ? (
                <div className="spinner-border text-warning" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            ) : (
                <ul className="mx-auto w-75 h-scrollbar vehicles-scrollbar" style={{ listStyleType: "none", padding: 0, display: "flex", width: "100%", overflowX: "auto" }}>
                    {vehicles.map((vehicle) => (

                        <li key={vehicle.uid}>
                            <div className="card" style={{ width: '18rem', marginRight: '2rem', backgroundColor: 'rgba(29, 30, 31, 0.6)' }}>
                                <img src={`https://starwars-visualguide.com/assets/img/vehicles/${vehicle.result.uid}.jpg`}
                                    onError={(e) => {
                                        e.target.src = groguPlaceholder; // Use the variable directly, not inside curly braces
                                    }}
                                    className="card-img-top" alt="star wars vehicle" />
                                <div className="card-body" style={{ height: '250px' }}>
                                    <h5 className="card-title">{vehicle.result.properties.name}</h5>
                                    <p className="card-text">model: {vehicle.result.properties.model}</p>
                                    <p className="card-text">length: {vehicle.result.properties.length}</p>
                                    <p className="card-text">passengers: {vehicle.result.properties.passengers}</p>
                                    <Link to={'/aboutVehicles/' + vehicle.result.uid}>
                                        <span className="btn learn-more" style={{ color: 'black', backgroundColor: '#F8AC0F' }}>Learn more!</span>
                                    </Link>
                                    <button onClick={() => { !store.favorites.includes(vehicle.result.properties.name) ? actions.addFavorite(vehicle.result.properties.name) : "" }} type="button" className={`btn heart-button ${store.favorites.includes(vehicle.result.properties.name) ? "btn-light" : "btn-outline-light"}`}><i className="far fa-heart"></i></button>
                                </div>
                            </div>
                        </li>


                    ))}
                </ul>
            )}
        </div>
    )
}