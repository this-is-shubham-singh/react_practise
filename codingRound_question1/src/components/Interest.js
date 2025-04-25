import React, { useState } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { addInterestDetails } from "../redux/features/DataSlice";

const Interest = () => {
  const navigate = useNavigate();

  const interestData = useSelector((state) => state.dataApp.interest);
  // console.log(interestData);
  const dispatch = useDispatch();

  function handleSubmit() {
    if (
      !interestData.frontend &&
      !interestData.backend &&
      !interestData.fullstack
    ) {
      toast.error("select a coding interest");
    } else if (interestData.favSport == "") {
      toast.error("select a favorite sport");
    } else {
      dispatch(
        addInterestDetails({
          frontend: interestData.frontend,
          backend: interestData.backend,
          fullstack: interestData.fullstack,
          favSport: interestData.favSport,
        })
      );
      navigate("/settings");
    }
  }

  return (
    <div className="section" id="interest">
      <h2>Coding Interests</h2>
      <div className="checkbox-group">
        <label>
          <input
            type="checkbox"
            checked={interestData.frontend}
            onChange={(e) =>
              dispatch(
                addInterestDetails({
                  ...interestData,
                  frontend: e.target.checked,
                })
              )
            }
          />{" "}
          Frontend
        </label>
        <label>
          <input
            type="checkbox"
            checked={interestData.backend}
            onChange={(e) =>
              dispatch(
                addInterestDetails({
                  ...interestData,
                  backend: e.target.checked,
                })
              )
            }
          />{" "}
          Backend
        </label>
        <label>
          <input
            type="checkbox"
            checked={interestData.fullstack}
            onChange={(e) =>
              dispatch(
                addInterestDetails({
                  ...interestData,
                  fullstack: e.target.checked,
                })
              )
            }
          />{" "}
          Fullstack
        </label>
      </div>
      <div className="input-group">
        <label htmlFor="sports">Favorite Sport:</label>
        <select
          id="sports"
          onChange={(e) =>
            dispatch(
              addInterestDetails({
                ...interestData,
                favSport: e.target.checked,
              })
            )
          }
          value={interestData.favSport}
        >
          <option>-- Select from options -- </option>
          <option>Football</option>
          <option>Basketball</option>
          <option>Cricket</option>
          <option>Tennis</option>
        </select>
      </div>
      <div className="buttons">
        <button className="btn" onClick={() => navigate("/")}>
          Previous
        </button>
        <button className="btn" onClick={() => handleSubmit()}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Interest;
