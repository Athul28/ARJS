import { useState } from "react";
// import "./App.css";

function App() {
  const items = ["apple", "orange", "banana", "grapes", "pineapple"];

  const [searchTerm, setSearchTerm] = useState("");

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="main-container">
      <div className="container">
        <h1>Search Filter</h1>
        <input type="text" onChange={(e) => setSearchTerm(e.target.value)} />
        <ul>{filteredItems && filteredItems.map((item) => <li>{item}</li>)}</ul>
      </div>
    </div>
  );
}

export default App;
