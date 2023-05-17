import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "./Movie.module.css";

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w500";

const Movie = () => {
  const [movies, setMovies] = useState([]); // 20개의 영화 정보 저장되어있음
  const [searchText, setSearchText] = useState("");
  const [filterText, setFilterText] = useState("");

  async function getMovie() {
    try {
      const response = fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=ko-KR`
      )
        .then((response) => response.json())
        .then((data) => setMovies(data.results));
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getMovie();
  }, []);

  useEffect(() => {
    const debounce = setTimeout(() => {
      setFilterText(searchText);
    }, 300);
    return () => clearTimeout(debounce);
  }, [searchText]);

  console.log(movies);
  return (
    <div>
      <div className={styles.movieWrapper}>
        {movies
          .filter((item) => item.title.includes(filterText))
          .map((movie, index) => (
            <div key={index} className={styles.movieCard}>
              <img
                src={`${IMG_BASE_URL}${movie.poster_path}`}
                className={styles.movieImage}
              />
              <h1 className={styles.movieTitle}>{movie.title}</h1>
            </div>
          ))}
      </div>
      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.currentTarget.value)}
      />
    </div>
  );
};

export default Movie;

// async function getMovie() {
//   try {
//     const response = await axios.get(
//       `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=ko-KR`
//     );
//     console.log(response.data.results);
//     setMovies(response.data.results);
//   } catch (e) {
//     console.log(e);
//   }
// }
