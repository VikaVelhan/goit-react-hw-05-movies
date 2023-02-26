import { useEffect } from 'react';
import { fetchMovieById } from '../services/apiService';
import {
  useParams,
  NavLink,
  Outlet,
  useNavigate,
  useLocation,
} from 'react-router-dom';
import { useState } from 'react';
import { BASE_IMG_URL } from 'services/constans';
import Loader from '../components/Loader/Loader';
import css from './MovieDetails.module.css';

const MovieDetails = () => {
  const [movieData, setMovieData] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    fetchMovieById(id).then(resp => {
      setMovieData(resp);
    });
  }, [id]);

  const handleGoBack = () => {
    navigate(location.state.from);
  };

  if (!movieData) {
    return (
      <div>
        <h1>
          <Loader />
        </h1>
      </div>
    );
  }
  return (
    <div className={css.MovieDetails_page}>
      <button onClick={handleGoBack} className={css.Button_back}>
        Go back
      </button>
      <div className={css.MovieDetails}>
        <img src={BASE_IMG_URL + movieData.poster_path} alt="" />
        <div className={css.MovieDetails_info}>
          <h2>
            {movieData.title}(
            {movieData.release_date
              ? movieData.release_date.substring(0, 4)
              : ''}
            )
          </h2>
          <p>
            User Score: {''}
            {movieData.vote_average
              ? Math.fround(movieData.vote_average * 10).toFixed(0)
              : ''}
            %
          </p>
          <h3>Overview</h3>
          <p>{movieData.overview}</p>
          <h4>Genres</h4>
          <p>
            {movieData.genres
              ? movieData.genres.map(genre => genre.name).join('')
              : ''}
          </p>
        </div>
      </div>
      <div>
        <h4>Additional information</h4>
        <ul>
          <li className={css.Details}>
            <NavLink
              to="cast"
              state={{ from: location.state.from }}
              className={css.Details}
            >
              Cast
            </NavLink>
          </li>
          <li className={css.Details}>
            <NavLink
              to="reviews"
              state={{ from: location.state.from }}
              className={css.Details}
            >
              Reviews
            </NavLink>
          </li>
        </ul>

        <Outlet />
      </div>
    </div>
  );
};

export default MovieDetails;
