import React from "react";
import "./App.css";
import StarRating from "./StarRating";
import { Routes, Route } from "react-router-dom";
import Section from "./components/Section";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<StarRating />} />
      <Route path="/section" element={<Section />} />
      <Route path="/footer" element={<Footer />} />
      <Route path="/header" element={<Header />} />
    </Routes>
  );
};

export default App;
