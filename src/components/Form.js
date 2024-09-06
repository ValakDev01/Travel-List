import { useState } from "react";

export default function Form({ onAddItems }) {
	const [description, setDescription] = useState("");
	const [quantity, setQuantity] = useState(1);

	function handleSubmit(e) {
		e.preventDefault();

		if (!description) return;

		const newItem = { description, quantity, packed: false, id: Date.now() };

		// Here we're using our function from the App component to add a new object with data
		// from the form to our state array from the App component.

		onAddItems(newItem);

		setDescription("");
		setQuantity(1);
	}

	// This event handler triggers whenever the user selects a different option from the dropdown.
	// It updates the quantity state based on the selected value.

	// Array.from({ length: 20 }, (_, i) => i + 1): This generates an array of numbers from 1 to 20.
	// It's used to populate the dropdown options.

	// It iterates over each number in the array and creates an <option> element for each one.

	return (
		<form className="add-form" onSubmit={handleSubmit}>
			<h3>What do you need for your 😍 trip?</h3>
			<select
				value={quantity}
				onChange={(e) => setQuantity(Number(e.target.value))}
			>
				{Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
					<option value={num} key={num}>
						{num}
					</option>
				))}
			</select>
			<input
				type="text"
				placeholder="Item..."
				value={description}
				onChange={(e) => setDescription(e.target.value)}
			/>
			<button>Add</button>
		</form>
	);
}
