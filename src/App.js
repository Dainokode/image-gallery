import React, { useEffect, useState } from "react";
import Card from "./components/Card";
import "./styles/main.scss";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");

  // api key
  const key = "18478867-ed92091f7153f3b3ef17f3f3d";

  useEffect(() => {
    const fetchPhotos = async () => {
      let response = await fetch(`https://pixabay.com/api/?key=${key}&q=&image_type=photo&pretty=true
      `);
      let data = await response.json();
      setImages(data);
      setIsLoading(false);
    };

    fetchPhotos();
  }, []);

  return (
    <div className="container">
      <Card />
    </div>
  );
}

export default App;
