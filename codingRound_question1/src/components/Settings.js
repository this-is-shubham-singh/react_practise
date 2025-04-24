import React, { useState } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Settings = () => {
  const navigate = useNavigate();
  // const mode = useSelector((state) => state.dataApp.settings.mode);

  const [mode, setMode] = useState("light");

  function handleSubmit() {
    console.log(mode);

    navigate("");
  }

  return (
    <div className="section" id="settings">
      <div className="radio-group">
        <label>
          <input
            type="radio"
            name="theme"
            value="dark"
            onChange={(e) => setMode(e.target.value)}
          />{" "}
          Dark
        </label>
        <label>
          <input
            type="radio"
            name="theme"
            value="light"
            onChange={(e) => setMode(e.target.value)}
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
