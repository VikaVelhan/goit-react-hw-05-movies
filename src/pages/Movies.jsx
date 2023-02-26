import { useEffect } from 'react';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMovieByQuery } from '../services/apiService';
import MoviesList from '../components/MoviesList/MoviesList';
import Notiflix from 'notiflix';
import css from './Movies.module.css';

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
        if (results.length === 0) {
          Notiflix.Notify.failure('Please, enter a valid value.');

          return;
        }
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
      <form onSubmit={handleSubmit} className={css.Form_search}>
        <input
          type="text"
          value={query}
          onChange={handleChange}
          className={css.Input_search}
        />
        <button type="submit" className={css.Button_search}>
          Search
        </button>
      </form>
      <MoviesList movies={movies} />
    </div>
  );
};

export default Movies;
