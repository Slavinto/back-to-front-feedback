import { useState } from "react";
import Button from "../button/button.component.jsx";
import Card from "../card/card.component.jsx";

const FeedbackForm = () => {
  const [review, setReview] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleReviewInputChange = (e) => {
    setReview(e.target.value);
    !isTyping && setIsTyping(true);
  };

  return (
    <Card>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          isTyping && setIsTyping(false);
        }}
      >
        <h2>How would you rate our service?</h2>
        <input type="radio" name="rating" value="rating" />
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
            isDisabled={review.trim().length < 10}
          >
            Send
          </Button>
        </div>
        {isTyping && review.trim().length < 10 && (
          <div className="message">
            Review must be at least 10 symbols long.
          </div>
        )}
      </form>
    </Card>
  );
};

export default FeedbackForm;
