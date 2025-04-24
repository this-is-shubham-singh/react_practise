import React, { useState } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Profile = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    age: "",
    email: "",
  });

  function nameValidation(value) {
    if (value.length < 3 || value.length > 100) {
      return false;
    }

    for (let i = 0; i < value.length; i++) {
      if (value[i] >= "a" && value[i] <= "z") {
        continue;
      } else if (value[i] >= "A" && value[i] <= "Z") {
        continue;
      } else {
        return false;
      }
    }

    return true;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted");
    console.log(data);

    if (!nameValidation(data.name)) {
      toast.error("invalid name");
    } else if (data.age < 11 || data.age > 150) {
      toast.error("invalid age");
    } else {
      navigate("/interest");
    }
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)} className="section" id="profile">
      <div className="input-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          required
          onChange={(e) => setData({ ...data, name: e.target.value })}
          value={data.name}
        />
      </div>
      <div className="input-group">
        <label htmlFor="age">Age:</label>
        <input
          type="number"
          id="age"
          required
          onChange={(e) => setData({ ...data, age: e.target.value })}
        />
      </div>
      <div className="input-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          required
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
      </div>
      <div className="buttons">
        <input type="submit" className="btn" value="Next" />
      </div>
    </form>
  );
};

export default Profile;
