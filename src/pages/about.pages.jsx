import {
  createBrowserRouter,
  Link,
  Navigate,
  RouterProvider,
  useNavigate,
  Outlet,
} from "react-router-dom";
import { useState } from "react";
import Card from "../components/card/card.component.jsx";

const About = () => {
  const navigate = useNavigate();
  const [showOutlet, setShowOutlet] = useState(false);

  const mainMarkup = (
    <div className="about">
      <button className="btn" onClick={() => navigate("..")}>
        Go to Homepage
      </button>
      {"          "}
      <button
        className="btn"
        onClick={() => {
          showOutlet ? navigate("./") : navigate("./show");
          setShowOutlet(!showOutlet);
        }}
      >
        Show special markup
      </button>
      {"          "}
      {showOutlet && <Outlet />}
      <h1>About Us</h1>
      <hr />
      <Card>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
        facere nesciunt, vitae illo, blanditiis eos odio, quibusdam voluptates
        possimus laboriosam sunt quam. Pariatur numquam consequuntur cum odit in
        dolores nisi autem cupiditate veritatis rerum officiis inventore, quis
        magni iure mollitia ullam facilis blanditiis architecto molestiae modi
        fugiat dolor! Voluptatem expedita repellendus impedit perferendis quasi
        in, doloremque modi cupiditate blanditiis ducimus consequuntur deserunt
        quidem repudiandae minus necessitatibus at, asperiores perspiciatis
        numquam reprehenderit libero facere nihil! At in assumenda officiis qui
        praesentium, ea dolorum fuga unde, inventore repudiandae, aliquam sed
        pariatur tempora consequuntur aliquid blanditiis nihil ad quae sint esse
        veniam labore!
      </Card>
    </div>
  );
  return <>{mainMarkup}</>;
};

export default About;
