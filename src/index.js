import "bootswatch/dist/darkly/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/home/Home";
import Room from "./routes/room/Room";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/room/:id" element={<Room />} />
      </Routes>
    </Router>
  </>
);
