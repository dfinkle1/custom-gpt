import React, { useEffect, useRef } from "react";
import "./RightColumn.css";

const Chat = ({ questions, answers, currentChat }) => {
  //  This forces the scroll bar to go to the bottom on chat openings.
  const containerRef = useRef(null);
  useEffect(() => {
    const container = containerRef.current;
    container.scrollTop = container.scrollHeight;
  }, []);

  // required to allow messages to load otherwise it would error out
  if (currentChat === null) {
    return <div>Loading...</div>;
  }

  const reversedAnswers = answers.slice().reverse();
  const reversedQuestions = questions.slice().reverse();
  return (
    <>
      <div className="results" ref={containerRef}>
        {reversedAnswers.map((answer, idx) => (
          <React.Fragment key={`msg-${idx}`}>
            <div className="msg-answer" key={`answer-${idx}`}>
              {answer}
            </div>
            <div className="msg-question" key={`question-${idx}`}>
              {reversedQuestions[idx]}
            </div>
          </React.Fragment>
        ))}
      </div>
    </>
  );
};

export default Chat;
