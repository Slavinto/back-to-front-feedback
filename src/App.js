import { useState } from "react";

import Header from "./components/header/header.component.jsx";
import initData from "./data/feedbackdata.js";
import FeedbackList from "./components/feedback-list/feedback-list.component.jsx";

const App = () => {
  const [data, setData] = useState(initData);
  return (
    <>
      <Header innerText="This is header component text." />
      <div className="container">
        <FeedbackList data={data} />
      </div>
    </>
  );
};

export default App;
