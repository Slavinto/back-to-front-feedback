import PropTypes from "prop-types";

const Stats = ({ data }) => {
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

Stats.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      // id: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    })
  ),
};

export default Stats;
