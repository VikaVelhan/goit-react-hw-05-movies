import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCastInfo } from 'services/apiService';
import { BASE_IMG_URL } from 'services/constans';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetchCastInfo(id).then(setCast);
  }, [id]);
  return (
    <div>
      <h1>Cast</h1>
      {cast.map(actor => (
        <li key={actor.id}>
          <img src={BASE_IMG_URL + actor.profile_path} alt="" width="150" />
          {actor.name}
          <p>Character:{actor.character}</p>
        </li>
      ))}
    </div>
  );
};

export default Cast;
