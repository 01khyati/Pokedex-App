import React from "react";

export default function About(props) {
  const { onePokeData } = props;

  return (
    <div>
      <div className="tab">
        <table>
          <tbody>
            <tr>
              <td>Species</td>
              <td className="td2">
                {onePokeData?.types.map((ty, index) => {
                  return (
                    <span className="species-data" key={index}>
                      {ty.type.name},
                    </span>
                  );
                })}
              </td>
            </tr>
            <tr>
              <td>Height</td>
              <td className="td2">{onePokeData.height * 10}cm</td>
            </tr>
            <tr>
              <td>Weight</td>
              <td className="td2">{onePokeData.weight / 10}kg</td>
            </tr>
            <tr>
              <td>Abilities</td>
              <td className="td2">
                {onePokeData?.abilities.map((ab, index) => {
                  return (
                    <span className="species-data" key={index}>
                      {ab.ability.name},
                    </span>
                  );
                })}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
