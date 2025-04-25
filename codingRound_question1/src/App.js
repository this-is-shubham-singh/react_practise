import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Profile from "./components/Profile";
import Interest from "./components/Interest";
import Settings from "./components/Settings";
import { Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import { useSelector } from "react-redux";

const App = () => {
  useEffect(() => {
    const currentTheme = localStorage.getItem("theme");
    document.documentElement.setAttribute("data-theme", currentTheme);
  }, []);

  const data = useSelector((state) => state.dataApp);
  console.log(data.profile);
  console.log(data.interest);

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
