import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./Detail.module.scss";
import Navbar from "../components/navbar/Navbar";

const Detail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getMovie = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
    );
    const json = await response.json();
    setMovie(json.data.movie);
    setIsLoading(false);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <>
      <Navbar/>
      <div className={styles.container}>
        {isLoading ? (
          "Loading..."
        ) : (
          <div>
            <div className={styles.movie}>
              <div className={styles.top_info}>
                <div className={styles.info_left}>
                  <h1 className={styles.title}>{movie.title}</h1>
                  <span className={styles.year}>{movie.year}</span>
                </div>
                <div className={styles.info_right}>
                  <div className={styles.imdb_rating}>IMDb RATING</div>
                  <div className={styles.rating}>{movie.rating}/10</div>
                </div>
              </div>

              <div className={styles.center_info}>
                <div className={styles.img}>
                  <img src={movie.medium_cover_image} alt={movie.title} />
                </div>
                <div className={styles.description}>
                  <div className={styles.genres}>
                    {movie.genres.map((g, i) => (
                      <span className={styles.genre} key={i}>
                        {g}
                      </span>
                    ))}
                  </div>
                  <div>
                    <h4>Description:</h4>
                    <p>{movie.description_full}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Detail;
