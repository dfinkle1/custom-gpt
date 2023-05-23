import React, { useEffect, useRef } from "react";
import "./RightColumn.css";

const Chat = ({ questions, answers, currentChat }) => {
  const containerRef = useRef(null);
  useEffect(() => {
    const container = containerRef.current;
    container.scrollTop = container.scrollHeight;
  }, []);
  if (currentChat === null) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div className="results" ref={containerRef}>
        {answers.map((answer, idx) => (
          <React.Fragment key={`msg-${idx}`}>
            <div className="msg-answer" key={`answer-${idx}`}>
              {answer}
            </div>
            <div className="msg-question" key={`question-${idx}`}>
              {questions[idx]}
            </div>
          </React.Fragment>
        ))}
      </div>
    </>
  );
};

export default Chat;
