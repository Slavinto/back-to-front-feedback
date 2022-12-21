import { useState, useContext, useEffect } from "react";

import Button from "../button/button.component.jsx";
import Card from "../card/card.component.jsx";
import Rating from "../rating/rating.component.jsx";
import FeedbackContext from "../../context/feedback.context.jsx";

const initRating = "";
const initReview = "";

const FeedbackForm = () => {
  const [review, setReview] = useState(initReview);
  const [isTyping, setIsTyping] = useState(false);
  const { handleAddFeedbackItem, feedbackEdit, nextId, setRating, rating } =
    useContext(FeedbackContext);

  const handleReviewInputChange = (e) => {
    setReview(e.target.value);
    !isTyping && setIsTyping(true);
  };

  const resetForm = () => {
    isTyping && setIsTyping(false);
    setRating(initRating);
    setReview(initReview);
  };

  useEffect(() => {
    feedbackEdit.isEditing &&
      setReview(feedbackEdit.item.text) &&
      setIsTyping(true);
  }, [feedbackEdit]);

  return (
    <Card>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleAddFeedbackItem({
            id: feedbackEdit.isEditing ? feedbackEdit.item.id : nextId,
            rating: +rating,
            text: review,
          });
          resetForm();
        }}
      >
        <h2>How would you rate our service?</h2>
        <Rating rating={+rating} />
        <div className="input-group">
          <input
            type="text"
            placeholder="Write a review"
            value={review}
            onChange={handleReviewInputChange}
          />
          <Button
            type="submit"
            version={"primary"}
            isDisabled={review.trim().length < 10 || rating === ""}
          >
            Send
          </Button>
        </div>
        {isTyping && review.trim().length < 10 && (
          <div className="message">
            Review must be at least 10 symbols long.
          </div>
        )}

        {rating === "" && isTyping && (
          <div className="message">Please select rating</div>
        )}
      </form>
    </Card>
  );
};

export default FeedbackForm;
