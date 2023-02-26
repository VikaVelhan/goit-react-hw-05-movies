import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCastInfo } from 'services/apiService';
import { BASE_IMG_URL } from 'services/constans';
import css from './Cast.module.css';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetchCastInfo(id).then(setCast);
  }, [id]);
  return (
    <div>
      {cast.map(actor => (
        <li key={actor.id} className={css.Cast_list}>
          <img src={BASE_IMG_URL + actor.profile_path} alt="" width="100" />
          <p>{actor.name}</p>
          <p>Character:{actor.character}</p>
        </li>
      ))}
    </div>
  );
};

export default Cast;
