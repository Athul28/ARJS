import { useState } from "react";

function App() {
  const images = ["img1.jpg", "img2.jpg", "img3.jpg",'img4.jpg'];
  const [index, setIndex] = useState(0);
  return (
    <div>
      <div className="container">
        <h1>React Image slider</h1>
        <button className="button-img" onClick={() => setIndex((index - 1) % images.length)}>
          prev
        </button>
        <img src={images[index]} alt="" height={300} width={400}/>
        <button className="button-img" onClick={() => setIndex((index + 1) % images.length)}>
          next
        </button>
      </div>
    </div>
  );
}

export default App;
