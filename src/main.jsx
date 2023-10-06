import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { TaskConstextProvider } from "./Context/TaskContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TaskConstextProvider>
      <App />
    </TaskConstextProvider>
  </React.StrictMode>
);
