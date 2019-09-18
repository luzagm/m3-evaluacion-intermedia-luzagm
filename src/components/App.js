import React from "react";
import PokeList from "./PokeList";
import "../stylesheet/App.css";

const url = "./data.json";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      pokemons: [],
      filterPokemonByName: ""
    };
    this.getPokemons = this.getPokemons.bind(this);
    this.filterByName = this.filterByName.bind(this);
    this.getPokemons();
  }

  getPokemons() {
    fetch(url)
      .then(response => response.json())
      .then(data =>
        this.setState({
          pokemons: data
        })
      );
  }

  filterByName(ev) {
    this.setState({
      filterPokemonByName: ev.target.value
    });
  }

  render() {
    console.log(this.state.pokemons);
    let filterName = this.state.pokemons.filter(pokemon => {
      return pokemon.name
        .toUpperCase()
        .includes(this.state.filterPokemonByName.toUpperCase());
    });

    return (
      <div className="cards-wrapper">
        <h1>Mi lista de Pokemon</h1>
        <form>
          <label htmlFor="input-search">Buscar: </label>
          <input id="input-search" type="text" onChange={this.ffilterByName} />
        </form>
        <PokeList pokemons={filterName} />
      </div>
    );
  }
}

export default App;
