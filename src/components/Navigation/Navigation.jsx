import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

export const Navigation = () => {
  return (
    <div className={css.Navigation}>
      <NavLink to="/" className={css.Navigation_link}>
        Home
      </NavLink>
      <NavLink to="movies" className={css.Navigation_link}>
        Movies
      </NavLink>
    </div>
  );
};
