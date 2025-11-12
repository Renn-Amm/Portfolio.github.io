import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";

// 👇 Tell React Router that your app lives inside /Portfolio.github.io/
createRoot(document.getElementById("root")!).render(
  <BrowserRouter basename="/Portfolio.github.io">
    <App />
  </BrowserRouter>
);

