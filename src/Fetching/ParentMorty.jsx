import React, { useState, useEffect } from "react";
import CardMorty from "./CardMorty";
import { CardColumns } from "reactstrap";

const ParentMorty = () => {
  const fetchUrl = "https://rickandmortyapi.com/api/character/";
  const [results, setResults] = useState([]);

  function handleClick() {
    fetch(fetchUrl)
      .then((res) => res.json())
      .then((jsonData) => {
        console.log(jsonData.results);
        setResults(jsonData.results);
      });
  }

  useEffect(() => {
    handleClick();
  }, []);

  function displayCards() {
    return results.map((result, index) => (
      <CardMorty key={index} character={result} />
    ));
  }

  return (
    <div>
      {/* <button onClick={handleClick}> Click Here</button> */}
      <CardColumns>{displayCards()}</CardColumns>
    </div>
  );
};

export default ParentMorty;
