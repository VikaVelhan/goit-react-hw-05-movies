import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviewsInfo } from 'services/apiService';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetchReviewsInfo(id).then(setReviews);
  }, [id]);
  return (
    <div>
      <h1>Reviews</h1>
      {reviews.map(review => (
        <li key={review.id}></li>
      ))}
    </div>
  );
};

export default Reviews;
