import React from "react";
import PokeList from "./PokeList";
import "../stylesheet/App.css";

const url = "./data.json";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      pokemons: []
    };
    this.getPokemons = this.getPokemons.bind(this);
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

  render() {
    return (
      <div className="cards-wrapper">
        <h1>Mi lista de Pokemon</h1>
        <PokeList pokemons={this.state.pokemons} />
      </div>
    );
  }
}

export default App;
