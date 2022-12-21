import { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
// import initData from "../data/feedbackdata.js";

const FeedbackContext = createContext();
const initEditState = {
  item: {},
  isEditing: false,
};

export const FeedbackContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [feedbackEdit, setFeedbackEdit] = useState(initEditState);
  const [rating, setRating] = useState("");

  const nextId = uuidv4();

  useEffect(() => fetchData, []);

  const fetchData = async () => {
    const response = await fetch(
      "http://localhost:5000/feedback?_sort=id&_order=desc"
    );
    const data = await response.json();
    setData(data);
    setIsLoading(false);
  };

  const handleRatingInputChange = (e) => {
    const rating = e.target.value;
    setRating(rating);
  };

  const handleRemoveFeedbackItem = (id) => {
    window.confirm("Are you sure you want to remove this feedback?") &&
      setData(
        data.filter((item) => {
          return item.id !== id;
        })
      );
  };

  const handleAddFeedbackItem = (feedbackItem) => {
    if (
      !(
        +feedbackItem.rating > 0 &&
        +feedbackItem.rating < 10 &&
        feedbackItem.text.trim().length > 10
      )
    )
      return;
    if (!feedbackEdit.isEditing) {
      setData([feedbackItem, ...data]);
    } else {
      const newData = data.map((item) => {
        return item.id === feedbackItem.id ? feedbackItem : item;
      });
      setData(newData);
      setFeedbackEdit(initEditState);
    }
  };

  const handleEditFeedbackItem = (feedbackItem) => {
    setRating(feedbackItem.rating);
    setFeedbackEdit({
      item: feedbackItem,
      isEditing: true,
    });
  };

  return (
    <FeedbackContext.Provider
      value={{
        data,
        rating,
        setRating,
        handleRemoveFeedbackItem,
        handleAddFeedbackItem,
        handleEditFeedbackItem,
        handleRatingInputChange,
        nextId,
        feedbackEdit,
        isLoading,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
