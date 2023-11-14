const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {

			people: [],
			planets: [],
			vehicles: [],
			///////////////////////////edit later///////////////////////
			favorites: [],
			loading: true, // Initialize loading property


			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]


		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},



			//get people, planets and vehicles with respective endpoints:
			getAllData: async () => {
				try {
					const peopleResponse = await fetch("https://swapi.tech/api/people");
					const peopleData = await peopleResponse.json();

					// Fetch details for each person
					const detailedPeople = await Promise.all(
						peopleData.results.map(async (person) => {
							const personResponse = await fetch(person.url);
							return personResponse.json();
						})
					);
					setStore({ people: detailedPeople });

					const planetsResponse = await fetch("https://swapi.tech/api/planets");
					const planetsData = await planetsResponse.json();

					const detailedPlanets = await Promise.all(
						planetsData.results.map(async (planet) => {
							const planetResponse = await fetch(planet.url);
							return planetResponse.json();
						})
					)

					setStore({ planets: detailedPlanets });

					const vehiclesResponse = await fetch("https://swapi.tech/api/vehicles");
					const vehiclesData = await vehiclesResponse.json();

					const detailedVehicles = await Promise.all(
						vehiclesData.results.map(async (vehicle) => {
							const vehicleResponse = await fetch(vehicle.url);
							return vehicleResponse.json();
						})
					)

					setStore({ vehicles: detailedVehicles });
					setStore({ loading: false });
				} catch (error) {
					console.error('Error loading data:', error);
				}
			},









		}
	};
};

export default getState;
