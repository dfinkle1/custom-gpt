import React, { useEffect, useRef } from "react";
import "./RightColumn.css";

const Chat = ({ questions, answers }) => {
  const containerRef = useRef(null);
  useEffect(() => {
    const container = containerRef.current;
    container.scrollTop = container.scrollHeight;
  }, []);

  return (
    <>
      <div className="results" ref={containerRef}>
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

export default Chat;
