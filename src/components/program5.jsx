import React, { useState } from "react";

export default function App() {
  const items = ["milk", "egg", "bread", "butter"];
  const [selectedItems, setSelectedItems] = useState([]);

  const handleChange = (e) => {
    const { value, checked } = e.target;
    console.log(value, checked);
    setSelectedItems((prev) =>
      checked ? [...prev, value] : prev.filter((item) => item != value)
    );
  };

  return (
    <div>
      <h1>Grocery Shopping list</h1>
      {items &&
        items.map((item) => (
          <div className="input-checkbox-container">
            <input type="checkbox" value={item} onChange={handleChange} />
            <p>{item}</p>
          </div>
        ))}
      <h2>Selected Items</h2>
      <ul>{selectedItems && selectedItems.map((item) => <li>{item}</li>)}</ul>
    </div>
  );
}
