import React, { useState, useEffect } from "react";

export default function GetBreeds() {
  let [breed, setBreed] = useState([]);

  useEffect(() => {
    fetch('https://catfact.ninja/breeds?limit=5')
      .then((res) => res.json())
      .then((res) => setBreed(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div>
        {breed.map((breedObj, index) => (
          <div key={index}>
            <h3>{breedObj.breed}</h3>
            <p>Country: {breedObj.country}</p>
            <p>Origin: {breedObj.origin}</p>
            <p>Coat: {breedObj.coat}</p>
            <p>Pattern: {breedObj.pattern}</p>
          </div>
        ))}
      </div>
    </>
  );
}
