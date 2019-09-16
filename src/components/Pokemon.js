import React from "react";
import PropTypes from "prop-types";
import "../stylesheet/pokemon.css";

class Pokemon extends React.Component {
  render() {
    let pokemonTypeList = this.props.pokemonType.map((power, id) => {
      return (
        <li className="pokemon-list-item" key={id}>
          {power}
        </li>
      );
    });

    return (
      <div className="pokemon-card">
        <img
          src={`${this.props.pokemonImage}`}
          alt={this.props.pokemonName}
          className="pokemon-image"
        ></img>

        <h2 className="pokemon-name">{this.props.pokemonName}</h2>

        <ul className="pokemon-type">{pokemonTypeList}</ul>
      </div>
    );
  }
}

Pokemon.propTypes = {
  pokemonName: PropTypes.string,
  pokemonTyp: PropTypes.string
};

export default Pokemon;
