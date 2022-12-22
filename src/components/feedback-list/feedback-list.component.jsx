import { motion, AnimatePresence } from "framer-motion";
import { useContext } from "react";

import FeedbackItem from "../feedback-item/feedback-item.component.jsx";
import FeedbackContext from "../../context/feedback.context.jsx";
import Spinner from "../spinner/spinner.component.jsx";
import Card from "../card/card.component.jsx";

const FeedbackList = () => {
  const { data, isLoading } = useContext(FeedbackContext);

  if ((!data || data.length === 0) && !isLoading) return <p>No feedback yet</p>;

  const markup = (
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
              <FeedbackItem key={feedbackObject.id} {...feedbackObject} />
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );

  return isLoading ? (
    <Card>
      <Spinner />
    </Card>
  ) : (
    markup
  );
};

export default FeedbackList;
