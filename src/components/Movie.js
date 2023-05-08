import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "./Movie.module.css";

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w500";

const Movie = () => {
  const [movies, setMovies] = useState([]);

  async function getMovie() {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=ko-KR`
      );
      console.log(response.data);
      setMovies(response.data.results);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h1>What's Popular</h1>
      <div style={{ display: "flex" }}>
        {movies.map((movie) => (
          <div key={movie.id} className={styles.MovieCard}>
            <img
              className={styles.MovieImage}
              src={`${IMG_BASE_URL}${movie.poster_path}`}
            />
            <h3>{movie.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movie;
