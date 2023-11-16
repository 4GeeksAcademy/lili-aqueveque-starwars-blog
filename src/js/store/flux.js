const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			vehicles: [],
			favorites: [],
			loading: true, // Initialize loading property
		},
		actions: {
			//get people, planets and vehicles with respective endpoints:
			getAllData: async () => {
				try {
					const peopleResponse = await fetch("https://swapi.tech/api/people");
					const peopleData = await peopleResponse.json();
					console.log("People Data:", peopleData);

					// Fetch details for each person
					const detailedPeople = await Promise.all(
						peopleData.results.map(async (person) => {
							const personResponse = await fetch(person.url);
							return personResponse.json();
						})
					);
					console.log("Detailed People:", detailedPeople);
					setStore({ people: detailedPeople });

					const planetsResponse = await fetch("https://swapi.tech/api/planets");
					const planetsData = await planetsResponse.json();
					console.log("Planets Data:", planetsData);

					const detailedPlanets = await Promise.all(
						planetsData.results.map(async (planet) => {
							const planetResponse = await fetch(planet.url);
							return planetResponse.json();
						})
					);
					console.log("Detailed Planets:", detailedPlanets);
					setStore({ planets: detailedPlanets });

					const vehiclesResponse = await fetch("https://swapi.tech/api/vehicles");
					const vehiclesData = await vehiclesResponse.json();
					console.log("Vehicles Data:", vehiclesData);

					const detailedVehicles = await Promise.all(
						vehiclesData.results.map(async (vehicle) => {
							const vehicleResponse = await fetch(vehicle.url);
							return vehicleResponse.json();
						})
					)
					console.log("Detailed Vehicles:", detailedVehicles);
					setStore({ vehicles: detailedVehicles });
					setStore({ loading: false });
				} catch (error) {
					console.error('Error loading data:', error);
				}
			},

			getPeopleDetails: (id, setParam) => {
				const store = getStore();

				fetch(`https://www.swapi.tech/api/people/${id}`).then(resp => resp.json())
					.then(data => {
						setParam(data)
					})

					.catch(error => {
						console.log(error);
					});
			},

			getVehiclesDetails: (id, setParam) => {
				const store = getStore();

				fetch(`https://www.swapi.tech/api/vehicles/${id}`).then(resp => resp.json())
					.then(data => {
						setParam(data)
					})

					.catch(error => {
						console.log(error);
					});
			},

			getPlanetsDetails: (id, setParam) => {
				const store = getStore();

				fetch(`https://www.swapi.tech/api/planets/${id}`).then(resp => resp.json())
					.then(data => {
						setParam(data)
					})

					.catch(error => {
						console.log(error);
					});
			},


			addFavorite: (item) => {
				const store = getStore();
				const favorite = store.favorite.concat(item);
				setStore({ favorites: favorite });
				console.log(favorite);
			}





		}
	};
};

export default getState;
