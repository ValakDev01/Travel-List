export default function Item({ item, onDeleteItem, onToggleItem }) {
	// Props:

	// item: Represents an individual item in the packing list. It contains properties like id, description,
	// quantity, and packed.

	// onDeleteItem: A callback function that is triggered when the delete button (❌) is clicked. It passes
	// the id of the item to be deleted.

	// onToggleItem: A callback function that is triggered when the checkbox is toggled. It passes the id of
	// the item whose packed status needs to be toggled.

	// Structure:

	// The Item component is rendered within an <li> element, representing a list item.
	// It consists of:
	// A checkbox input element (<input type="checkbox">) representing the packed status of the item. Its
	// value is set to the packed property of the item. When the checkbox is toggled, it triggers the onToggleItem
	// callback with the id of the item.

	// A <span> element containing the description and quantity of the item. If the item is marked as packed
	// (item.packed is true), its text is rendered with a line-through style.

	// A delete button (<button>) represented by a cross (❌). When clicked, it triggers the onDeleteItem
	// callback with the id of the item to be deleted.

	// Styling:
	// If an item is marked as packed (item.packed is true), its description is styled with a line-through
	// to visually indicate that it has been packed.

	return (
		<li>
			<input
				type="checkbox"
				value={item.packed}
				onChange={() => onToggleItem(item.id)}
			/>
			<span style={item.packed ? { textDecoration: "line-through" } : {}}>
				{item.quantity} {item.description}
			</span>
			<button onClick={() => onDeleteItem(item.id)}>❌</button>
		</li>
	);
}
