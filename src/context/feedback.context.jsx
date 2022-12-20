import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import initData from "../data/feedbackdata.js";

const FeedbackContext = createContext();
const initEditState = {};

export const FeedbackContextProvider = ({ children }) => {
  const [data, setData] = useState(initData);
  const [feedbackEdit, setFeedbackEdit] = useState(initEditState);
  const nextId = uuidv4();

  const handleRemoveFeedbackItem = (id) => {
    window.confirm("Are you sure you want to remove this feedback?") &&
      setData(
        data.filter((item) => {
          return item.id !== id;
        })
      );
  };

  const handleAddFeedbackItem = (feedbackItem) => {
    console.log(feedbackItem);
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
      console.log(newData);
      setData(newData);
      setFeedbackEdit(initEditState);
    }
  };

  const handleEditFeedbackItem = (feedbackItem) => {
    setFeedbackEdit({
      item: feedbackItem,
      isEditing: true,
    });
    // const { id, rating, text } = feedbackItem;
    // console.log(id, rating, text);
  };

  return (
    <FeedbackContext.Provider
      value={{
        data,
        handleRemoveFeedbackItem,
        handleAddFeedbackItem,
        handleEditFeedbackItem,
        nextId,
        feedbackEdit,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
