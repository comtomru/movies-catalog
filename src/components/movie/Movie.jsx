import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import Genres from '../genres/Genres';
import styles from './Movie.module.scss'

const Movie = ({ id, coverImg, title, genres }) => {
  return (
    <div className={styles.movie}>
      <Link to={`/movie/${id}`}><img src={coverImg} alt="medium_cover_image"/></Link>
      <Link to={`/movie/${id}`}><h3>{title}</h3></Link>
      <Genres genres={genres}/>
    </div>
  )
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie