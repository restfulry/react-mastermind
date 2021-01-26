import React, { Component } from "react";
import "./App.css";

import GameBoard from "./components/GameBoard/GameBoard";
import ColourPicker from "./components/ColourPicker/ColourPicker";
import GuessRow from "./components/GuessRow/GuessRow";
import GameTimer from "./components/GameTimer/GameTimer";
import NewGameButton from "./components/NewGameButton/NewGameButton";
import Footer from "./components/footer/footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">React Mastermind</header>
        <GameBoard guessRow={<GuessRow />} />
        <ColourPicker />
        <GameTimer />
        <NewGameButton />
        <Footer />
      </div>
    );
  }
}

export default App;
