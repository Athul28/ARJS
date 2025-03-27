import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState();
  const [imageUrl, setImageUrl] = useState("");
  const fetchData = async () => {
    const res = await fetch(
      "https://random-data-api.com/api/users/random_user"
    );
    const data = await res.json();
    setUser(data);
    console.log(data);
  };

  const fetchImage = async () => {
    const res = await fetch("https://picsum.photos/300");
    console.log(res.url);
    setImageUrl(res.url);
  };

  useEffect(() => {
    fetchData();
    fetchImage();
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
      {imageUrl && <img src={imageUrl} alt="image" />}
    </div>
  );
}

export default App;
