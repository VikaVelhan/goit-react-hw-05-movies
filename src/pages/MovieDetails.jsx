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
    <div>
      <h1>MovieDetails</h1>
      <button onClick={handleGoBack}>Go back</button>
      <img src={BASE_IMG_URL + movieData.poster_path} alt="" />
      <NavLink to="cast" state={{ from: location.state.from }}>
        Cast
      </NavLink>
      <NavLink to="reviews" state={{ from: location.state.from }}>
        Reviews
      </NavLink>
      <Outlet />
    </div>
  );
};

export default MovieDetails;
