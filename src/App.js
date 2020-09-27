import React, { useEffect, useState } from "react";
import Card from "./components/Card";
import SearchInput from "./components/SearchInput";
import "./styles/main.scss";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");

  // api key
  const key = "18478867-ed92091f7153f3b3ef17f3f3d";

  useEffect(() => {
    const fetchPhotos = async () => {
      let response = await fetch(`https://pixabay.com/api/?key=${key}&q=${term}&image_type=photo&pretty=true
      `);
      let data = await response.json();
      setImages(data.hits);
      setIsLoading(false);
    };

    fetchPhotos();
  }, [term]);

  return (
    <div className="container">
      <SearchInput searchText={(text) => setTerm(text)} />
      {isLoading ? (
        <h1 className="loading">Loading...</h1>
      ) : (
        <div className="grid">
          {images.map((image) => {
            return <Card key={image.id} image={image} />;
          })}
        </div>
      )}
    </div>
  );
}

export default App;
