//import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Navigation } from './Navigation/Navigation';
import Home from 'pages/Home';
import Movies from 'pages/Movies';
import MovieDetails from 'pages/MovieDetails';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';
//import { SharedLayout } from './SharedLayout';

//const Home = lazy(() => import('../pages/Home'));
//const Movies = lazy(() => import('../pages/Movies'));
//const MovieDetails = lazy(() => import('../pages/MovieDetails'));
//const Reviews = lazy(() => import('../components/Reviews'));
//const Cast = lazy(() => import('../components/Cast'));

export const App = () => {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:id" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Routes>
    </div>
  );
};

/*//

const About = lazy(() => import('../pages/About'));
const Home = lazy(() => import('../pages/Home'));
const ProductDetails = lazy(() => import('../pages/ProductDetails'));
const Products = lazy(() => import('../pages/Products'));
const Mission = lazy(() => import('./Mission'));
const Team = lazy(() => import('./Team'));
const Reviews = lazy(() => import('./Reviews'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />}>
          <Route path="mission" element={<Mission />} />
          <Route path="team" element={<Team />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="products" element={<Products />} />
        <Route path="products/:id" element={<ProductDetails />} />
      </Route>
    </Routes>
  );
};*/
