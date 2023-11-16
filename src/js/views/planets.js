import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import { Link } from "react-router-dom";
import groguPlaceholder from '../../img/blog-grogu.jpg';
import "../../styles/characters.css";

export const Planets = () => {
    const { store, actions } = useContext(Context);
    const { loading, planets } = store; // Destructure loading from store

    return (
        <div>
            <h1 className="text-start mx-auto w-75 mb-4 mt-5 group-title">Planets</h1>
            {loading ? (
                <div className="spinner-border text-warning" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            ) : (
                <ul className="mx-auto w-75 h-scrollbar planets-scrollbar" style={{ listStyleType: "none", padding: 0, display: "flex", width: "100%", overflowX: "auto" }}>
                    {planets.map(planet => (


                        <li key={planet.uid}>
                            <div className="card" style={{ width: '18rem', marginRight: '2rem', backgroundColor: 'rgba(29, 30, 31, 0.6)' }}>
                                <img
                                    src={`https://starwars-visualguide.com/assets/img/planets/${planet.result.uid}.jpg`}
                                    onError={(e) => {
                                        e.target.src = groguPlaceholder; // Use the variable directly, not inside curly braces
                                    }}
                                    className="card-img-top" alt="star wars planet"
                                />
                                <div className="card-body" style={{ height: '260px' }}>
                                    <h5 className="card-title">{planet.result.properties.name}</h5>
                                    <p className="card-text">climate: {planet.result.properties.climate}</p>
                                    <p className="card-text">terrain: {planet.result.properties.terrain}</p>
                                    <p className="card-text">orbital period: {planet.result.properties.orbital_period}</p>
                                    <Link to={'/aboutPlanets/' + planet.result.uid}>
                                        <span className="btn learn-more" style={{ color: 'black', backgroundColor: '#F8AC0F' }}>Learn more!</span>
                                    </Link>
                                    <button onClick={() => { !store.favorites.includes(planet.result.properties.name) ? actions.addFavorite(planet.result.properties.name) : "" }} type="button" className={`btn heart-button ${store.favorites.includes(planet.result.properties.name) ? "btn-light" : "btn-outline-light"}`}><i className="far fa-heart"></i></button>
                                </div>
                            </div>
                        </li>


                    ))}
                </ul>
            )}
        </div>
    )
}