import React, { useState } from "react";
import Movie from "./Movie";

const MovieList = () => {
  const [movies, setMovies] = useState([
    { name: "one", price: "$100", id: 113 },
    { name: "two", price: "$50", id: 123 },
    { name: "three", price: "$25", id: 133 },
  ]);

  return (
    <div>
      {movies.map((movie) => (
        <Movie name={movie.name} price={movie.price} id={movie.id}/>
      ))}
    </div>
  );
};

export default MovieList;
