import React from "react";
import PokeList from "./PokeList";
import "../stylesheet/App.css";

function App() {
  return (
    <div>
      <h1>Mi lista de Pokemon</h1>
      <PokeList className="cards-wrapper" />
    </div>
  );
}

export default App;
