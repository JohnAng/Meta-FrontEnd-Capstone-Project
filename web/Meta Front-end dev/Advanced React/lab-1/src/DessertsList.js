function DessertsList(props) {
	// Implement the component here.
	const lowCaloriesDesserts = props.data
		.filter((dessert) => {
			const filterCondition = dessert.calories < 500;
			return filterCondition;
		})
		.sort((dessert1, dessert2) => {
			return dessert1.calories - dessert2.calories;
		})
		.map((dessert) => {
			const dessertFormat = `${dessert.name} - ${dessert.calories} cal`;
			return <li key={dessert.name}>{dessertFormat}</li>;
		});

	return <ul>{lowCaloriesDesserts}</ul>;
}

export default DessertsList;
