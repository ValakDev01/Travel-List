import { useState } from "react";
import Item from "./Item";

export default function PackingList({
	items,
	onDeleteItem,
	onToggleItem,
	onClearList,
}) {
	const [sortBy, setSortBy] = useState("input");

	let sortedItems;

	// sortedItems variable: This variable holds the sorted list of items based on the selected sorting criterion.

	// If sortBy is "input", sortedItems is assigned the original items array as no sorting is applied.

	// If sortBy is "description", sortedItems is assigned a new array obtained by sorting the items array alphabetically
	// based on the description property.

	// If sortBy is "packed", sortedItems is assigned a new array obtained by sorting the items array based on the packed
	// property. Items marked as packed (packed: true) will appear before items marked as unpacked (packed: false).

	// .slice() method: It is used to create a shallow copy of the items array before sorting to avoid mutating the original array.
	// .sort() method: It sorts the array based on the provided sorting function.

	// Sorting Functions:

	// When sorting by description, localeCompare() is used to compare the description strings.

	// When sorting by packed status, subtraction (Number(a.packed) - Number(b.packed)) is used to sort the items based on
	// their packed status. This ensures that items marked as packed appear before items marked as unpacked.

	if (sortBy === "input") sortedItems = items;

	if (sortBy === "description")
		sortedItems = items
			.slice()
			.sort((a, b) => a.description.localeCompare(b.description));

	if (sortBy === "packed")
		sortedItems = items
			.slice()
			.sort((a, b) => Number(a.packed) - Number(b.packed));

	// Here we use our state array from the App component.

	return (
		<div className="list">
			<ul>
				{sortedItems.map((item) => (
					<Item
						item={item}
						onDeleteItem={onDeleteItem}
						onToggleItem={onToggleItem}
						key={item.id}
					/>
				))}
			</ul>

			<div className="actions">
				<select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
					<option value="input">Sort by input order</option>
					<option value="description">Sort by description</option>
					<option value="packed">Sort by packed status</option>
				</select>
				<button onClick={onClearList}>Clear list</button>
			</div>
		</div>
	);
}
