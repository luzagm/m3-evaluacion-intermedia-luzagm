import React from "react";

class Pokemon extends React.Component {
  render() {
    let pokemonPowersList = this.props.pokemonPower.map(power => {
      return <li>{power}</li>;
    });

    return (
      <div>
        <img src={`${this.props.pokemonImage}`}></img>
        <h2>{this.props.pokemonName}</h2>
        <ul>{pokemonPowersList}</ul>
      </div>
    );
  }
}

export default Pokemon;
