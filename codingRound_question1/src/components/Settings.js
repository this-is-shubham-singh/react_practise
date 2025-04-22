import React from "react";
import "../App.css";

const Settings = () => {
  return (
    <div class="section">
      <label>
        <input type="radio" name="theme" /> Light
      </label>
      <br />
      <label>
        <input type="radio" name="theme" /> Dark
      </label>
      <div class="btns">
        <button>Prev</button>
        <button>Submit</button>
      </div>
    </div>
  );
};

export default Settings;
