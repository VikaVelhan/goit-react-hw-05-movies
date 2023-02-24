import { useEffect } from 'react';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMovieByQuery } from '../services/apiService';
import MoviesList from '../components/MoviesList/MoviesList';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const searchQuery = searchParams.get('query');

  const handleChange = ({ target: { value } }) => {
    setQuery(value);
  };

  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    (async () => {
      try {
        const { results } = await fetchMovieByQuery(searchQuery);
        setMovies(results);
      } catch (error) {
        console.log(error);
      } finally {
        setQuery(searchQuery);
      }
    })();
  }, [searchQuery]);

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams({ query });
  };

  return (
    <div>
      <h1>Movies</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={query} onChange={handleChange} />
        <button type="submit">Search</button>
      </form>
      <MoviesList movies={movies} />
    </div>
  );
};

export default Movies;
