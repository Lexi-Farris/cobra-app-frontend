import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Carousel, initTE } from "tw-elements";
initTE({ Carousel }, true); // set second parameter to true if you want to use a debugger
import "tw-elements-react/dist/css/tw-elements-react.min.css";
import axios from "axios";

axios.defaults.baseURL =
  process.env.NODE_ENV === "development" ? "http://localhost:3000" : "https://cobra-pose-app-mefv.onrender.com";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
