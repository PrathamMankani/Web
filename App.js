import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/message")
      .then(res => res.json())
      .then(info => setData(info.msg));
  }, []);

  return <h2>{data}</h2>;
}

export default App;

// Libraries required: react, react-dom
