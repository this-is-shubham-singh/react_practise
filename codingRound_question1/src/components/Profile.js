import React, { useState } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { addProfileDetails } from "../redux/features/DataSlice";

const Profile = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const data = useSelector((state) => state.dataApp.profile);
  // console.log(data);

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

    if (!nameValidation(data.name)) {
      toast.error("invalid name");
    } else if (data.age < 11 || data.age > 150) {
      toast.error("invalid age");
    } else {
      dispatch(
        addProfileDetails({ name: data.name, age: data.age, email: data.email })
      );
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
          onChange={(e) =>
            dispatch(addProfileDetails({ ...data, name: e.target.value }))
          }
          value={data.name}
        />
      </div>
      <div className="input-group">
        <label htmlFor="age">Age:</label>
        <input
          type="number"
          id="age"
          required
          value={data.age}
          onChange={(e) =>
            dispatch(addProfileDetails({ ...data, age: e.target.value }))
          }
        />
      </div>
      <div className="input-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          required
          value={data.email}
          onChange={(e) =>
            dispatch(addProfileDetails({ ...data, email: e.target.value }))
          }
        />
      </div>
      <div className="buttons">
        <input type="submit" className="btn" value="Next" />
      </div>
    </form>
  );
};

export default Profile;
