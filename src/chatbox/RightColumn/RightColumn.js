import React from "react";
import "./RightColumn.css";

const RightColumn = ({ questions, answers }) => {
  return (
    <>
      <div className="header">
        <p>
          myFitness Bot <br></br>
          {answers.length} messages
        </p>
      </div>
      <div className="results">
        {answers.map((answer, idx) => (
          <React.Fragment key={`msg-${idx}`}>
            <div className="msg-question" key={`question-${idx}`}>
              {questions[idx]}
            </div>
            <div className="msg-answer" key={`answer-${idx}`}>
              {answer}
            </div>
          </React.Fragment>
        ))}
      </div>
    </>
  );
};

export default RightColumn;
