import React from "react";
import MovieList from "./MovieList";
import Nav from "./Nav";
import AddMovie from "./AddMovie";

import { MovieProvider } from "./MovieContext";

import "./App.css";

function App() {
  return (
    <MovieProvider>
      <div className="App">
        <Nav /> <hr />
        <AddMovie />
        <br />
        <hr />
        <MovieList />
      </div>
    </MovieProvider>
  );
}

export default App;
