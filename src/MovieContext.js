import React, { useState, createContext } from "react";

//To intitiate context
export const MovieContext = createContext();

export const MovieProvider = (props) => {
  const [movies, setMovies] = useState([
    { name: "one", price: "$100", id: 113 },
    { name: "two", price: "$50", id: 123 },
    { name: "three", price: "$25", id: 133 },
  ]);

  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
};
