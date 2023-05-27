import React from "react";
import Chat from "./Chat";
import RightHeader from "./RightHeader";
import "./RightColumn.css";

const RightColumn = ({ currentChat }) => {
  if (currentChat === null) {
    return <div>Loading...</div>;
  }

  // currentChat is parsed from localStorage in Chatbox.js
  // we are now destructuring the answers array, and questions array from the object.
  const { answers, questions } = currentChat;

  return (
    <>
      <RightHeader totalMessages={currentChat} />
      <Chat questions={questions} answers={answers} />
    </>
  );
};

export default RightColumn;
