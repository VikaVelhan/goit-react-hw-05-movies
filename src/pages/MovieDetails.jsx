import { useEffect } from 'react';
import { fetchMovieById } from '../services/apiService';
import { useParams, NavLink } from 'react-router-dom';
import { useState } from 'react';
import { BASE_IMG_URL } from 'services/constans';

const MovieDetails = () => {
  const [movieData, setMovieData] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    fetchMovieById(id).then(resp => {
      setMovieData(resp);
    });
  }, [id]);
  if (!movieData) {
    return (
      <div>
        <h1>Loding data...</h1>
      </div>
    );
  }
  return (
    <div>
      <h1>MovieDetails</h1>
      <button>Go back</button>
      <img src={BASE_IMG_URL + movieData.poster_path} alt="" />
      <NavLink to="cast">Cast</NavLink>
      <NavLink to="reviews">Reviews</NavLink>
    </div>
  );
};

export default MovieDetails;
