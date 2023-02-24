import { useEffect, useState } from 'react';
import { fetchDayTrend } from '../services/apiService';
import MoviesList from 'components/MoviesList/MoviesList';
import Loader from 'components/Loader/Loader';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { results } = await fetchDayTrend();

        setMovies(results); //results деструктуризація із resp.data
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);
  if (!isLoading) {
    <div>
      <h1>
        <Loader />
      </h1>
    </div>;
  }
  return (
    <div>
      <h1>Home</h1>
      <MoviesList movies={movies} />
    </div>
  );
};

export default Home;
