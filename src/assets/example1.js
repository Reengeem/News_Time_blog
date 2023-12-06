import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const getInfo = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => setData(response.data))
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getInfo();
  }, []);
  console.log(loading);
  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      {data.map((item) => (
        <div key={item.id}>
          <h1>{item.title}</h1>
          <p>{item.body}</p>
        </div>
      ))}
    </>
  );
}

export default App;
