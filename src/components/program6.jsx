import { useState } from "react";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSubmit = () => {
    if (username === "athul" && password === "1234") {
      setLoggedIn(true);
      setError("");
    } else {
      setLoggedIn(false);
      setError("Invalid username or password");
    }
  };

  return (
    <div>
      {loggedIn ? (
        <div>logged in as {username}</div>
      ) : (
        <div>
          <input type="text" onChange={(e) => setUsername(e.target.value)} />
          <input type="text" onChange={(e) => setPassword(e.target.value)} />
          <button onClick={handleSubmit}>Submit</button>
          {error && <div>{error}</div>}
        </div>
      )}
    </div>
  );
}

export default App;
