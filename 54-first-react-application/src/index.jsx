import "./style.css";
import { createRoot } from "react-dom/client";
import "./style.css";
import App from "./App.js";

const root = createRoot(document.querySelector("#root"));

const toto = "there";

root.render(
  <>
    <App clickersCount={4}>
      <h1>My First React App</h1>
      <h2>A fancy subtitle</h2>
      </App>
  </>
);
