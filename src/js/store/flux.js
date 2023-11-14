const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
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
			],
			///////////////////////// Characters (people) /////////////////////			
			allCharactersData: [],



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
					// Code that might throw an error
					const store = getStore()
					await fetch(`https://swapi.tech/api/people`)
						.then(res => res.json())
						.then(data => {
							if (store.charactersData.length == 0) {
								store.charactersData.push(data.results)
							}
						})
					setStore({ store: store.allCharactersData })
					setStore({ store: store.charactersData })

				} catch (e) {
					// Error handling code
					console.log("getAllCharactersData ERROR ==", e)
				}
			},








		}
	};
};

export default getState;
