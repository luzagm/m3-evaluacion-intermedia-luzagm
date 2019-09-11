import React from "react";
import Pokemon from "./Pokemon";
import "../stylesheet/pokemon.css";

class PokeList extends React.Component {
  render() {
    let pokemonList = this.props.pokemons.map(pokemonItem => {
      return (
        <Pokemon
          pokemonImage={pokemonItem.url}
          pokemonName={pokemonItem.name}
          pokemonType={pokemonItem.types}
        />
      );
    });
    return <div>{pokemonList}</div>;
  }
}

export default PokeList;
