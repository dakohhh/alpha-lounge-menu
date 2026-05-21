import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./lib/image-slot";
import "./styles/alpha.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
