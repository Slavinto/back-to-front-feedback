import Card from "../card/card.component.jsx";
import PropTypes from "prop-types";
import { FaTimes } from "react-icons/fa";

function FeedbackItem({ id, rating, text, onRemoveFeedbackItem }) {
  return (
    <Card>
      <div className="num-display">{rating}</div>
      <div className="text-display">{text}</div>
      <div className="close" onClick={() => onRemoveFeedbackItem(id)}>
        <FaTimes color="purple" />
      </div>
    </Card>
  );
}

FeedbackItem.propTypes = {
  id: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  onRemoveFeedbackItem: PropTypes.func.isRequired,
};

export default FeedbackItem;
