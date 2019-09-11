import React from "react";
import PokeList from "./PokeList";
import "../stylesheet/App.css";

function App() {
  return (
    <div className="cards-wrapper">
      <h1>Mi lista de Pokemon</h1>
      <PokeList className="cards" />
    </div>
  );
}

export default App;
