import React from "react";
import "./App.css";
import Header from "./Header";
import Profile from "./components/Profile";
import Interest from "./components/Interest";
import Settings from "./components/Settings";
import { Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

const App = () => {
  return (
    <div className="page">
      <div className="container">
        <ToastContainer position="top-right" autoClose={3000} />
        <Header />
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/interest" element={<Interest />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
