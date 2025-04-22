import React from "react";
import "../App.css";

const Interest = () => {
  return (
    <div class="section">
      <h3>Coding Interests</h3>
      <label>
        <input type="checkbox" /> Frontend
      </label>
      <br />
      <label>
        <input type="checkbox" /> Backend
      </label>
      <br />
      <label>
        <input type="checkbox" /> DevOps
      </label>
      <br />
      <br />

      <label>
        Favorite Sport:
        <select>
          <option>Football</option>
          <option>Cricket</option>
          <option>Basketball</option>
          <option>Tennis</option>
        </select>
      </label>

      <div class="btns">
        <button>Prev</button>
        <button>Next</button>
      </div>
    </div>
  );
};

export default Interest;
