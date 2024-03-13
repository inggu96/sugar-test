import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("No root element found");
}

const root = createRoot(rootElement);
if (!rootElement) {
  throw new Error("No root element found");
}

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
