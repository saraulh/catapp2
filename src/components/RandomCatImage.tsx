import React, { useEffect, useState } from 'react';
import './RandomCatImage.css'

// definerer typen for API-responsen
interface CatImage {
  url: string;
}

const RandomCatImage = () => {
  // state for å lagre URL-en til kattebildet
  const [catImage, setCatImage] = useState<string | null>(null);

  // funksjon for å hente kattebilde fra API
  const fetchCatImage = async () => {
      const response = await fetch('https://api.thecatapi.com/v1/images/search');
      const result: CatImage[] = await response.json();
      setCatImage(result[0].url); // lagre URL-en til det første bildet
    
  };

  // useEffect som henter kattebildet når komponenten monteres
  useEffect(() => {
    fetchCatImage(); // henter kattebilde når komponenten først vises
  }, []);

  return (
    <div className="cat-image-container">
      {catImage ? (
        <img src={catImage} alt="A random cat" style={{ width: '300px', height: '300px', objectFit: 'cover' }} />
      ) : (
        <p>Loading cat image...</p>
      )}

      {/* Knapp for å hente et nytt bilde */}
      <button onClick={fetchCatImage}>Get New Cat Image</button>
    </div>
  );
};

export default RandomCatImage;
