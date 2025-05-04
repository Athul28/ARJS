import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState();
  const fetchData = async () => {
    const res = await fetch(
      "https://random-data-api.com/api/users/random_user"
    );
    const data = await res.json();
    setUser(data);
    console.log(data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <h1>User Information</h1>
      {user && (
        <div>
          <p>
            Name {user.first_name} {user.last_name}
          </p>
          <p>Email: {user.email}</p>
        </div>
      )}
    </div>
  );
}

export default App;
