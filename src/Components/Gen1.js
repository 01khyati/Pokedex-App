import React, { useEffect, useState } from "react";

export default function Gen1(props) {
  const { handleGen, pokedata, handleLoad, pokemoData } = props;

  const gen = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII"];

  return (
    <div>
      <div className="main-container">
        <h1 className="heading">
          P<i></i>
          kédex
        </h1>

        {/* Generation nav */}
        <div className="nav-gen">
          <h2 className="select-gen">Select Generation:</h2>
          <div className="gen-table">
            {gen.map((gen, index) => {
              return (
                <a
                  className="nav-link"
                  onClick={() => {
                    handleLoad();
                    handleGen(index + 1);
                  }}
                >
                  {gen}
                </a>
              );
            })}
          </div>
        </div>

        {/* cards */}
        <div className="card-main-container">
          {pokedata
            .sort((a, b) => (a.id > b.id ? 1 : -1))
            .map((data, index) => {
              return (
                <div
                  className="card"
                  key={index}
                  id={data.types[0].type.name}
                  onClick={() => pokemoData(data.name)}
                >
                  <div className="cardflex card-title">
                    <h2 className="name">{data.name}</h2>
                    <div>
                      {data.types.map((ty, index) => {
                        return (
                          <span className="poke-types" key={index}>
                            {ty.type.name}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                  <span className="id">#{data.id}</span>
                  <div className="cardflex">
                    <img
                      src={
                        data.sprites.other.dream_world.front_default
                          ? data.sprites.other.dream_world.front_default
                          : data.sprites.other.home.front_default
                      }
                    />
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
