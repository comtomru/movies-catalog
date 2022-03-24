import { useEffect, useState } from "react";
import styles from "./Home.module.scss";
import Movie from "../components/movie/Movie";
import Navbar from "../components/navbar/Navbar";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=$8.8&sort_by=year`
    );
    const json = await response.json();
    setMovies(json.data.movies);
    setIsLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      <Navbar/>
      <div className={styles.container}>
        {isLoading ? (
          "Loading..."
        ) : (
          <>
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                coverImg={movie.medium_cover_image}
                title={movie.title}
                genres={movie.genres}
              />
            ))}
          </>
        )}
      </div>
    </>
  );
};

export default Home;
