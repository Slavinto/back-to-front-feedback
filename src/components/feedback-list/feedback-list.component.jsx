import PropTypes from "prop-types";

import FeedbackItem from "../feedback-item/feedback-item.component.jsx";

const FeedbackList = ({ data, onRemoveFeedbackItem }) => {
  if (!data || data.length === 0) return <p>No feedback yet</p>;
  return (
    <div className="feedback-list">
      {data.map((feedbackObject) => {
        return (
          <FeedbackItem
            key={feedbackObject.id}
            {...feedbackObject}
            onRemoveFeedbackItem={onRemoveFeedbackItem}
          />
        );
      })}
    </div>
  );
};

FeedbackList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
  onRemoveFeedbackItem: PropTypes.func.isRequired,
};

export default FeedbackList;
