import React, { useState } from "react";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: "Inception",
      description: "A mind-bending thriller by Christopher Nolan",
      posterURL: "https://example.com/inception.jpg",
      rating: 4.8,
    },
    {
      title: "Interstellar",
      description: "A journey through space and time",
      posterURL: "https://example.com/interstellar.jpg",
      rating: 4.7,
    },
  ]);

  const [filteredMovies, setFilteredMovies] = useState(movies);

  const filterByTitle = (title) => {
    setFilteredMovies(
      movies.filter((movie) =>
        movie.title.toLowerCase().includes(title.toLowerCase())
      )
    );
  };

  const filterByRating = (rating) => {
    setFilteredMovies(movies.filter((movie) => movie.rating >= rating));
  };

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
    setFilteredMovies([...movies, newMovie]);
  };

  return (
    <div className="App">
      <h1>My Favorite Movies</h1>
      <Filter filterByTitle={filterByTitle} filterByRating={filterByRating} />
      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default App;
