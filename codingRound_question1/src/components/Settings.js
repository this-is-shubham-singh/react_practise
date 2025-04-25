import React, { useEffect, useState } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Settings = () => {
  const navigate = useNavigate();

  const [currentMode, setCurrentMode] = useState();
  const pageData = useSelector((state) => state.dataApp);

  function handleSubmit() {
    console.log(pageData);
  }

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    setCurrentMode(localTheme);
  }, []);

  function setTheme(e) {
    localStorage.setItem("theme", e.target.value);

    setCurrentMode(e.target.value);

    document.documentElement.setAttribute("data-theme", e.target.value);
  }

  return (
    <div className="section" id="settings">
      <div className="radio-group">
        <label>
          <input
            type="radio"
            name="theme"
            value="dark"
            checked={currentMode == "dark"}
            onChange={(e) => setTheme(e)}
          />{" "}
          Dark
        </label>
        <label>
          <input
            type="radio"
            name="theme"
            value="light"
            checked={currentMode == "light"}
            onChange={(e) => setTheme(e)}
          />{" "}
          Light
        </label>
      </div>
      <div className="buttons">
        <button className="btn" onClick={() => navigate("/interest")}>
          Previous
        </button>
        <button className="btn" onClick={() => handleSubmit()}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Settings;
