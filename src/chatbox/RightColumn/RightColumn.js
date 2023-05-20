import React, { useEffect, useRef } from "react";
import Chat from "./Chat";
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
      <Chat questions={questions} answers={answers} />
    </>
  );
};

export default RightColumn;
