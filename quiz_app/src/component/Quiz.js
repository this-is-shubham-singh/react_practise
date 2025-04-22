import React, { useState } from "react";
import data from "../data";
import "../App.css";

const Quiz = () => {
  const [quizData, setQuizData] = useState(data);
  const [currentPage, setCurrentPage] = useState(0);
  const [answers, setAnswers] = useState(new Array(quizData.length).fill(0));
  const [showAnswer, setShowAnswer] = useState(false);
  const [totalScore, setTotalScore] = useState(0);

  const handleOptionClick = (index) => {
    if (index == quizData[currentPage].correctAns) {
      answers[currentPage] = 20;
    } else {
      answers[currentPage] = 0;
    }
  };

  const handleSubmit = () => {
    let sum = answers.reduce((acc, curr) => {
      return acc + curr;
    }, 0);

    setTotalScore(sum);

    setShowAnswer(true);
    setTimeout(() => {
      setShowAnswer(false);
    }, 5000);
  };

  return (
    <div className="quiz-box">
      {showAnswer ? <h2>score: {totalScore}</h2> : null}
      <div className="question">{quizData[currentPage].question}</div>

      {quizData[currentPage].answers.map((value, index) => {
        return (
          <div
            key={index}
            onClick={() => handleOptionClick(index)}
            className="option"
          >
            {value}
          </div>
        );
      })}

      <div className="buttons">
        {currentPage > 0 ? (
          <button
            className="btn"
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            Previous
          </button>
        ) : null}

        {currentPage < quizData.length - 1 ? (
          <button
            className="btn"
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            Next
          </button>
        ) : null}

        {currentPage == quizData.length - 1 ? (
          <button onClick={() => handleSubmit()} className="btn">
            Submit
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default Quiz;
