import React, { useState, useContext } from "react";
import {MovieContext} from "./MovieContext"

const AddMovie = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const [Movies, setMovies] = useContext(MovieContext);

  const updateName = e => {
    setName(e.target.value);
  };

  const updatePrice = e => {
    setPrice(e.target.value);
  };

  const addMovie = e => {
      e.preventDefault();
      setMovies(prevMovies => [...prevMovies, {name: name, price: price}])

  }

  return (
    <div>
      <p> Please Add your movies here: </p>
      <form onSubmit={addMovie}>
        <input type="text" name="name" value={name} onChange={updateName} />
        <br />
        <br />
        <input type="text" name="price" value={price} onChange={updatePrice} />
        <br />
        <br />
        <button className="right">Submit</button>
      </form>
    </div>
  );
};

export default AddMovie;
