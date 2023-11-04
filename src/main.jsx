import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import StatrRating from "./StatrRating";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    {/* <StatrRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Great", "Amazing"]}
      defaultRating={3}
    /> */}
  </React.StrictMode>
);
