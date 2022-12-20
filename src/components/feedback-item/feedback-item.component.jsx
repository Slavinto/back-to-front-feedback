import Card from "../card/card.component.jsx";
import { FaTimes, FaEdit } from "react-icons/fa";
import { useContext } from "react";

import FeedbackContext from "../../context/feedback.context.jsx";

function FeedbackItem({ id, rating, text }) {
  const { handleRemoveFeedbackItem, handleEditFeedbackItem } =
    useContext(FeedbackContext);
  const feedback = { id, rating, text };
  return (
    <Card>
      <div className="num-display">{rating}</div>
      <div className="text-display">{text}</div>
      <button className="close" onClick={() => handleRemoveFeedbackItem(id)}>
        <FaTimes color="purple" />
      </button>
      <button className="edit">
        <FaEdit
          color="darkred"
          onClick={() => handleEditFeedbackItem(feedback)}
        />
      </button>
    </Card>
  );
}

export default FeedbackItem;
