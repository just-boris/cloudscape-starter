import { createRoot } from "react-dom/client";
import { App } from "./app";
import "@cloudscape-design/global-styles/index.css";

createRoot(document.getElementById("root")!).render(<App />);
