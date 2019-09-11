import React from "react";
import "../stylesheet/pokemon.css";

class Pokemon extends React.Component {
  render() {
    let pokemonTypeList = this.props.pokemonType.map(power => {
      return <li className="pokemon-list-item">{power}</li>;
    });

    return (
      <div className="pokemon-card">
        <img src={`${this.props.pokemonImage}`} className="pokemon-image"></img>

        <h2 className="pokemon-name">{this.props.pokemonName}</h2>

        <ul className="pokemon-type">{pokemonTypeList}</ul>
      </div>
    );
  }
}

export default Pokemon;
