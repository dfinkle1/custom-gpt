import React from "react";
import useLocalStorage from "../utils/localStorage";
import fetchChatCompletion from "../api/api";
import Submit from "./Submit";
import "./Chat.css";

const Message = () => {
  const [answers, setAnswer] = useLocalStorage("messages", []);
  const [questions, setQuestions] = useLocalStorage("questions", []);
  console.log(answers);
  const handleSubmission = async (question) => {
    try {
      const response = await fetchChatCompletion(question);
      setAnswer((oldMessages) => [...oldMessages, response]);
      setQuestions((oldQuestions) => [...oldQuestions, question]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="column-left">Messages</div>
      <div className="column-right">
        <div className="header">
          <p>
            MyFitness Bot <br></br>
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
        <Submit onSubmit={handleSubmission} />
      </div>
    </>
  );
};

export default Message;
