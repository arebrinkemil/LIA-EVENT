import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/page";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default App;
