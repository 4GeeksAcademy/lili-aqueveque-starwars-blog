import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import { Link } from "react-router-dom";
import groguPlaceholder from '../../img/blog-grogu.jpg';
import "../../styles/characters.css";

export const Characters = () => {
    const { store, actions } = useContext(Context);
    const { loading, people } = store; // Destructure loading from store


    return (
        <div>
            <h1 className="text-start mx-auto w-75 mb-4 mt-5 group-title">Characters</h1>
            {loading ? (
                <div className="spinner-border text-warning" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            ) : (
                <ul className="mx-auto w-75 h-scrollbar characters-scrollbar" style={{ listStyleType: "none", padding: 0, display: "flex", width: "100%", overflowX: "auto" }}>
                    {people.map((person) => (

                        <li key={person.uid}>
                            <div className="card" style={{ width: '18rem', marginRight: '2rem', backgroundColor: 'rgba(29, 30, 31, 0.6)' }}>
                                <img src={`https://starwars-visualguide.com/assets/img/characters/${person.result.uid}.jpg`}
                                    onError={(e) => {
                                        e.target.src = groguPlaceholder; // Use the variable directly, not inside curly braces
                                    }}
                                    className="card-img-top" alt="star wars character" />
                                <div className="card-body">
                                    <h5 className="card-title">{person.result.properties.name}</h5>
                                    <p className="card-text">weight: {person.result.properties.mass}</p>
                                    <p className="card-text">height: {person.result.properties.height}</p>
                                    <p className="card-text">birth year: {person.result.properties.birth_year}</p>
                                    <Link to={'/aboutCharacters/' + person.result.uid}>
                                        <span className="btn learn-more" style={{ color: 'black', backgroundColor: '#F8AC0F' }}>Learn more!</span>
                                    </Link>
                                    <button onClick={() => {
                                        !store.favorites.includes(person.result.properties.name) ?
                                            actions.addFavorite(person.result.properties.name) : ""
                                    }} type="button" className={`btn heart-button ${store.favorites.includes(person.result.properties.name) ? "btn-light" : "btn-outline-light"}`}><i className="far fa-heart"></i></button>
                                </div>
                            </div>
                        </li>

                    ))}
                </ul>
            )}
        </div>



    );
}


