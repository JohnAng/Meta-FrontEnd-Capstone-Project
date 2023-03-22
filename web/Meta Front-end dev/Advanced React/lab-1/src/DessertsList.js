function DessertsList(props) {
	// Implement the component here.
	const listDesserts = props.data
		.filter((dessert) => {
			const filterCondition = dessert.calories <= 500;
			return filterCondition;
		})
		.sort((dessert1, dessert2) => {
			return dessert1.calories - dessert2.calories;
		})
		.map((dessert) => {
			const itemText = `${dessert.name} - ${dessert.calories} cal`;
			return <li key={dessert.name}>{itemText}</li>;
		});

	return (
		<ul>
			<li>{listDesserts}</li>
		</ul>
	);
}

export default DessertsList;
