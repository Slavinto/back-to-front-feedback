import FeedbackItem from "../feedback-item/feedback-item.component.jsx";

const FeedbackList = ({ data }) => {
  if (!data || data.length === 0) return <p>No feedback yet</p>;
  return (
    <div className="feedback-list">
      {data.map((feedbackObject) => {
        return <FeedbackItem key={feedbackObject.id} {...feedbackObject} />;
      })}
    </div>
  );
};

export default FeedbackList;
