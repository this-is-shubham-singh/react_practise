import React from "react";
import "../App.css";

const Profile = () => {
  return (
    <div class="section visible">
      <label>
        Name: <input type="text" />
      </label>
      <br />
      <br />
      <label>
        Age: <input type="number" />
      </label>
      <br />
      <br />
      <label>
        Email: <input type="email" />
      </label>
      <div class="btns">
        <div></div>
        <button>Next</button>
      </div>
    </div>
  );
};

export default Profile;
