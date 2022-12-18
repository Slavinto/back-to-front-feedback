import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";

import FeedbackItem from "../feedback-item/feedback-item.component.jsx";

const FeedbackList = ({ data, onRemoveFeedbackItem }) => {
  if (!data || data.length === 0) return <p>No feedback yet</p>;
  return (
    <div className="feedback-list">
      <AnimatePresence>
        {data.map((feedbackObject) => {
          return (
            <motion.div
              key={feedbackObject.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <FeedbackItem
                key={feedbackObject.id}
                {...feedbackObject}
                onRemoveFeedbackItem={onRemoveFeedbackItem}
              />
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
};

FeedbackList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      // id: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
  onRemoveFeedbackItem: PropTypes.func.isRequired,
};

export default FeedbackList;
