import React from "react";
import "./RightColumn.css";

const RightHeader = ({ totalMessages }) => {
  if (totalMessages === null) {
    return <div>Loading...</div>;
  }
  const { answers } = totalMessages;

  return (
    <>
      <div className="header-container">
        <div className="header">
          myFitness Bot <br></br>
          {answers.length} messages
        </div>
      </div>
    </>
  );
};

export default RightHeader;
