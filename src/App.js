import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";

import Header from "./components/header/header.component.jsx";
import FeedbackList from "./components/feedback-list/feedback-list.component.jsx";
import Stats from "./components/stats/stats.component.jsx";
import FeedbackForm from "./components/feedback-form/feedback-form.component.jsx";
import About from "./pages/about.pages.jsx";
import AboutIconLink from "./components/about-icon-link/about-icon-link.component.jsx";
import Card from "./components/card/card.component.jsx";
import { FeedbackContextProvider } from "./context/feedback.context.jsx";

const App = () => {
  const feedbackComponent = (
    <FeedbackContextProvider>
      <Link to="./about">
        <AboutIconLink />
      </Link>
      <Header innerText="Feedback UI" />
      <div className="container">
        <FeedbackForm />
        <Stats />
        <FeedbackList />
      </div>
    </FeedbackContextProvider>
  );

  const elToShow = (
    <Card>
      <Link to="/">Home</Link>
    </Card>
  );

  const router = createBrowserRouter([
    {
      path: "/",
      element: feedbackComponent,
    },
    {
      path: "about",
      element: <About />,
      children: [
        {
          path: "show",
          element: elToShow,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
