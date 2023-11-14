import React, { useContext, useEffect } from 'react';
import { Context } from '../store/appContext';

export const Characters = () => {
    const { store, actions } = useContext(Context);


    return (
        <div>
            <h2 className="text-start mx-auto w-75 mb-4 mt-5">Characters</h2>
            <ul className="mx-auto w-75" style={{ listStyleType: "none", padding: 0, display: "flex", width: "100%", overflowX: "auto" }}>
                {store.people.map((person) => (
                    <li key={person.uid}>
                        <div className="card bg-dark" style={{ width: '18rem', marginRight: '2rem' }}>
                            <img src="https://static.wikia.nocookie.net/shaniverse/images/7/7f/Grogu.jpg/revision/latest?cb=20201222173404" className="card-img-top" alt="star wars item" />
                            <div className="card-body">
                                <h5 className="card-title">{person.name}</h5>
                                <p className="card-text">
                                    {person.uid}
                                </p>
                                <p className="card-text">weight: {person.mass}</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}


