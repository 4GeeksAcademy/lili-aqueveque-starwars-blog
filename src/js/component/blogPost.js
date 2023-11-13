import React, { useState, useEffect } from "react";

export const BlogPost = ({ type }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://www.swapi.tech/api/${type}`);
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
    }, [type]);

    return (
        <div>
            <h2>{type.charAt(0).toUpperCase() + type.slice(1)}</h2>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <ul>
                    {data.map(item => (
                        <li key={item.uid}>{item.name}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};
