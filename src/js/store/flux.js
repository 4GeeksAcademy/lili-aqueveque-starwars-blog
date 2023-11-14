const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			///////////////////////// Characters (people) /////////////////////			
			charactersData: [],


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



			//get characters with people endpoint
			getAllCharactersData: async () => {
				try {
					const store = getStore();
					const response = await fetch(`https://swapi.tech/api/people`);
					const data = await response.json();
			
					// Assuming charactersData is the correct array
					if (store.charactersData.length === 0) {
						setStore({ ...store, charactersData: [...store.charactersData, ...data.results] });
					}
				} catch (e) {
					console.log("getAllCharactersData ERROR =", e);
				}
			},









		}
	};
};

export default getState;
