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
      {reviews?.length === 0 && <p>We don't have any reviews for this movie</p>}
      {reviews.map(review => (
        <li key={review.id}>
          Author: {review.author}
          <p>{review.content}</p>
        </li>
      ))}
    </div>
  );
};

export default Reviews;
