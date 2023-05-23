import React from "react";
import Chat from "./Chat";
import "./RightColumn.css";

const RightColumn = ({ question, answer }) => {
  if (answer === null) {
    return <div>Loading...</div>;
  }
  const { answers, questions } = answer;
  console.log(answers, questions);
  return (
    <>
      <div className="header">
        <p>
          myFitness Bot <br></br>
          {answers.length} messages
        </p>
      </div>
      <Chat questions={questions} answers={answers} />
    </>
  );
};

export default RightColumn;
