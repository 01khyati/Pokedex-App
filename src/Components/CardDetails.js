import { FaArrowLeft } from "react-icons/fa";
import About from "./Card/About";
import { useState } from "react";
import BaseStatus from "./Card/BaseStatus";
import Evolution from "./Card/Evolution";

export default function CardDetails(props) {
  const { onePokeData, setOnePokeData } = props;
  const [tab, setTab] = useState("about");
  const [active, setActive] = useState("about");

  return (
    <div>
      <div className="details-main-container">
        <div>
          <div className="card-container-1" id={onePokeData.types[0].type.name}>
            <i className="left-arrow" onClick={() => setOnePokeData("")}>
              {<FaArrowLeft />}
            </i>
            <div className="card1">
              <span className="id id1">#{onePokeData.id}</span>
              <div className="card-title1">
                <h2 className="name">{onePokeData.name}</h2>
                <div>
                  {onePokeData?.types.map((ty, index) => {
                    return (
                      <span className="poke-types1" key={index}>
                        {ty.type.name}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="card-container-2">
            <div className="poke-detail-img">
              <img
                src={
                  onePokeData?.sprites?.other?.dream_world?.front_default
                    ? onePokeData?.sprites?.other?.dream_world?.front_default
                    : onePokeData?.sprites?.other?.home?.front_default
                }
              />
            </div>
            <nav className="navbar">
              <ul>
                <li
                  className={`nav-link nav-link1 ${
                    active == "about" && "active"
                  }`}
                  onClick={() => {
                    setTab("about");
                    setActive("about");
                  }}
                >
                  About
                </li>
                <li
                  className={`nav-link nav-link1 ${
                    active == "base" && "active"
                  }`}
                  onClick={() => {
                    setTab("base");
                    setActive("base");
                  }}
                >
                  Base Status
                </li>
                {/* <li
                  className={`nav-link nav-link1 ${
                    active == "evolution" && "active"
                  }`}
                  onClick={() => {
                    setTab("evolution");
                    setActive("evolution");
                  }}
                >
                  Evolution
                </li> */}
              </ul>
            </nav>
            <hr />
            {tab == "about" && <About onePokeData={onePokeData} />}
            {tab == "base" && <BaseStatus onePokeData={onePokeData} />}
            {/* {tab == "evolution" && <Evolution onePokeData={onePokeData} />} */}
          </div>
        </div>
      </div>
    </div>
  );
}
