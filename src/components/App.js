import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

export default function App() {
	// This line initializes a state variable items which holds the list of items.
	// The useState([]) hook returns an array with two elements: the current state (items)
	// and a function (setItems) to update the state.

	const [items, setItems] = useState([]);

	// This function is responsible for adding a new item to the items array.
	// It takes an item object as an argument and updates the items state using the spread
	// operator (...) to create a new array with the existing items plus the new item.

	function handleAddItems(item) {
		setItems((items) => [...items, item]);
	}

	// This function deletes an item from the items array based on its id.
	// It uses the filter method to create a new array containing only the items whose id
	// does not match the provided id.

	function handleDeleteItem(id) {
		setItems((items) => items.filter((item) => item.id !== id));
	}

	// This function toggles the packed status of an item with the given id.
	// It utilizes the map method to iterate over each item in the items array. If the id
	// matches the provided id, it creates a new object with the packed status toggled;
	// otherwise, it returns the item unchanged.

	function handleToggleItem(id) {
		setItems((items) =>
			items.map((item) =>
				item.id === id ? { ...item, packed: !item.packed } : item
			)
		);
	}

	// This function clears the entire items list.
	// It displays a confirmation dialog to ensure the user wants to delete all items,
	// and if confirmed, it sets the items state to an empty array.

	function handleClearList() {
		const confirmed = window.confirm(
			"Are you sure you want to delete all items?"
		);

		if (confirmed) setItems([]);
	}

	// Additionally in this scenario, we use the lifting the state up approach. We have 2
	// separate components, which are responsible for getting data via form and the second
	// one which is responsible for displaying these data on the list. In this case, we need
	// to have one common place from which we can send these data to both components.

	return (
		<div className="app">
			<Logo />
			<Form onAddItems={handleAddItems} />
			<PackingList
				items={items}
				onDeleteItem={handleDeleteItem}
				onToggleItem={handleToggleItem}
				onClearList={handleClearList}
			/>
			<Stats items={items} />
		</div>
	);
}
