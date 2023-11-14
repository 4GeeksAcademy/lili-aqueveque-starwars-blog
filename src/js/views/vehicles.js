import React, { useContext } from 'react';
import { Context } from '../store/appContext';

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
                                <img src="https://qph.cf2.quoracdn.net/main-qimg-1580491beab4d3867080e27563819ff4-lq" className="card-img-top" alt="star wars item" />
                                <div className="card-body">
                                    <h5 className="card-title">{vehicle.result.properties.name}</h5>
                                    <p className="card-text">model: {vehicle.result.properties.model}</p>
                                    <p className="card-text">length: {vehicle.result.properties.length}</p>
                                    <p className="card-text">passengers: {vehicle.result.properties.passengers}</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </li>


                    ))}
                </ul>
            )}
        </div>
    )
}