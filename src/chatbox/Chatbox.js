import React from "react";
import RightColumn from "./RightColumn/RightColumn";
import LeftColumn from "./LeftColumn/LeftColumn";
import SubmitForm from "./SubmitButton/SubmitForm";
import useLocalStorage from "../hooks/localStorage";
import fetchChatCompletion from "../api/api";
import "./Chatbox.css";

const Chatbox = () => {
  // use localStorage hook. Converts JSON to array
  const [answers, setAnswer] = useLocalStorage("messages", []);
  const [questions, setQuestions] = useLocalStorage("questions", []);

  // Requests data from SubmitButton form, and pass it into api request.
  // take the response and set the question and the fetched answer to localStorage
  //we then pass the answers/questions into right column to display info
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
    <div className="Chatbox-container">
      <LeftColumn />
      <div className="column-right">
        <RightColumn answers={answers} questions={questions} />
        <SubmitForm onSubmit={handleSubmission} />
      </div>
    </div>
  );
};

export default Chatbox;
