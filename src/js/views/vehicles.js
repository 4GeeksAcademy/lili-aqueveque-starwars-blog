import React, { useState, useEffect } from 'react';

const url = 'https://www.swapi.tech/api/vehicles';

export const Vehicles = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${url}`);
                const result = await response.json();

                // Check if the result contains a "results" property and it's an array
                if (result.results && Array.isArray(result.results)) {
                    setData(result.results);
                } else {
                    console.error('Invalid data format:', result);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h2 className="text-start mx-auto w-75 mb-4 mt-5">Vehicles</h2>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <ul className="mx-auto w-75" style={{ listStyleType: "none", padding: 0, display: "flex", width: "100%", overflowX: "auto" }}>
                    {data.map(item => (


                        <li key={item.uid}>
                            <div className="card bg-dark" style={{ width: '18rem', marginRight: '2rem' }}>
                                <img src="https://qph.cf2.quoracdn.net/main-qimg-1580491beab4d3867080e27563819ff4-lq" className="card-img-top" alt="star wars item" />
                                <div className="card-body">
                                    <h5 className="card-title">{item.name}</h5>
                                    <p className="card-text">
                                        {item.uid}
                                    </p>
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