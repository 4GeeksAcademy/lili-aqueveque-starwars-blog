const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
		
			people: [],
			planets: [],
			vehicles: [],
			///////////////////////////edit later///////////////////////
			favorites:[],


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
					const peopleResponse = await fetch("https://swapi.dev/api/people");
					const peopleData = await peopleResponse.json();
					setStore({ people: peopleData.results });
			
					const planetsResponse = await fetch("https://swapi.dev/api/planets");
					const planetsData = await planetsResponse.json();
					setStore({ planets: planetsData.results });
			
					const vehiclesResponse = await fetch("https://swapi.dev/api/vehicles");
					const vehiclesData = await vehiclesResponse.json();
					setStore({ vehicles: vehiclesData.results });
				} catch (error) {
					console.error('Error loading data:', error);
				}
			},









		}
	};
};

export default getState;
