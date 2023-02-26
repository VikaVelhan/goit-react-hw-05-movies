import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviewsInfo } from 'services/apiService';
import css from './Reviews.module.css';
const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetchReviewsInfo(id).then(setReviews);
  }, [id]);
  return (
    <div className={css.Reviews}>
      {reviews?.length === 0 && <p>We don't have any reviews for this movie</p>}
      {reviews.map(review => (
        <li key={review.id} className={css.Reviews_title}>
          Author: {review.author}
          <p className={css.Reviews_content}>{review.content}</p>
        </li>
      ))}
    </div>
  );
};

export default Reviews;
