import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import Header from "./components/header/header.component.jsx";
import initData from "./data/feedbackdata.js";
import FeedbackList from "./components/feedback-list/feedback-list.component.jsx";
import Stats from "./components/stats/stats.component.jsx";
import FeedbackForm from "./components/feedback-form/feedback-form.component.jsx";

const App = () => {
  const [data, setData] = useState(initData);

  const handleRemoveFeedbackItem = (id) => {
    window.confirm("Are you sure you want to remove this feedback?") &&
      setData(
        data.filter((item) => {
          return item.id !== id;
        })
      );
  };

  const handleAddFeedbackItem = (feedbackItem) => {
    +feedbackItem.rating > 0 &&
      +feedbackItem.rating < 10 &&
      feedbackItem.text.trim().length > 10 &&
      setData([feedbackItem, ...data]);
  };
  console.log(data);
  return (
    <>
      <Header innerText="This is header component text." />
      <div className="container">
        <FeedbackForm nextId={uuidv4()} onSubmit={handleAddFeedbackItem} />
        <Stats data={data} />
        <FeedbackList
          data={data}
          onRemoveFeedbackItem={handleRemoveFeedbackItem}
        />
      </div>
    </>
  );
};

export default App;
