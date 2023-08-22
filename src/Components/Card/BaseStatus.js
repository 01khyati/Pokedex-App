import React from "react";

export default function BaseStatus(props) {
  const { onePokeData } = props;
  return (
    <div>
      <div className="tab">
        <table>
          <tbody>
            <tr>
              <td>HP</td>
              <td className="td2">{onePokeData.stats[0].base_stat}</td>
            </tr>
            <tr>
              <td>Attack</td>
              <td className="td2">{onePokeData.stats[1].base_stat}</td>
            </tr>
            <tr>
              <td>Defense</td>
              <td className="td2">{onePokeData.stats[2].base_stat}</td>
            </tr>
            <tr>
              <td>Sp.Atk</td>
              <td className="td2">{onePokeData.stats[3].base_stat}</td>
            </tr>
            <tr>
              <td>Sp.Def</td>
              <td className="td2">{onePokeData.stats[4].base_stat}</td>
            </tr>
            <tr>
              <td>Speed</td>
              <td className="td2">{onePokeData.stats[5].base_stat}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
