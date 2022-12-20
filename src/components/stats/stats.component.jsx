import { useContext } from "react";

import FeedbackContext from "../../context/feedback.context.jsx";

const Stats = () => {
  const { data } = useContext(FeedbackContext);
  const numberOfReviews = data.length;
  const avgRating = (
    data.reduce((acc, item) => item.rating + acc, 0) / numberOfReviews
  )
    .toFixed(1)
    .replace(/[.,]0$/, "");
  return (
    <div className="feedback-stats">
      <h4>Reviews: {numberOfReviews}</h4>
      <h4>Average rating: {isNaN(avgRating) ? 0 : avgRating}</h4>
    </div>
  );
};

export default Stats;
