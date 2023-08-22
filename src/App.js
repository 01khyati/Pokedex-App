import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Gen1 from "./Components/Gen1.js";
import CardDetails from "./Components/CardDetails";
import React, { useState } from "react";

function App() {
  const [generation, setgeneration] = useState([]);
  const [pokedata, setPokedata] = useState([]);
  const [onePokeData, setOnePokeData] = useState("");

  const pokemoData = async (name) => {
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    response = await response.json();
    console.log(response);
    setOnePokeData(response);
  };

  const handleGen = async (gen) => {
    let response = await fetch(`https://pokeapi.co/api/v2/generation/${gen}`);
    response = await response.json();
    setgeneration(response.pokemon_species);
    response.pokemon_species.map((data) => {
      getPokemonData(data.name);
    });
  };

  const getPokemonData = async (pokename) => {
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokename}`);
    response = await response.json();
    setPokedata((currentList) => [...currentList, response]);
  };

  const handleLoad = async () => {
    setPokedata([]);
  };

  return (
    <div className="App">
      {onePokeData ? (
        <CardDetails
          onePokeData={onePokeData}
          setOnePokeData={setOnePokeData}
        />
      ) : (
        <Gen1
          handleGen={handleGen}
          pokedata={pokedata}
          handleLoad={handleLoad}
          pokemoData={pokemoData}
        />
      )}
    </div>
  );
}

export default App;
