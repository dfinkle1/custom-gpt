import React, { useEffect, useState } from "react";
import RightColumn from "./RightColumn/RightColumn";
import LeftColumn from "./LeftColumn/LeftColumn";
import SubmitForm from "./SubmitButton/SubmitForm";
import useLocalStorage from "../hooks/localStorage";
import fetchChatCompletion from "../api/api";
import { v4 as uuidv4 } from "uuid";
import "./Chatbox.css";

const Chatbox = () => {
  // use localStorage hook. Converts JSON to array
  const [answers, setAnswer] = useLocalStorage("messages", []);
  const [questions, setQuestions] = useLocalStorage("questions", []);
  const [chatRooms, setChatRooms] = useState([]);

  useEffect(() => {
    const storedChatRooms = localStorage.getItem("chatRooms");
    if (storedChatRooms) {
      setChatRooms(JSON.parse(storedChatRooms));
    }
  }, []);

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

  const addChatRoom = () => {
    const newChat = {
      id: uuidv4(),
      messages: [],
    };
    const updatedChatRooms = [...chatRooms, newChat];
    setChatRooms(updatedChatRooms);
    localStorage.setItem("chatRooms", JSON.stringify(updatedChatRooms));
  };
  useEffect(() => {
    localStorage.setItem("chatRooms", JSON.stringify(chatRooms));
  }, [chatRooms]);

  return (
    <div className="Chatbox-container">
      <div className="column-left">
        <LeftColumn addChatRoom={addChatRoom} />
      </div>
      <div className="column-right">
        <RightColumn answers={answers} questions={questions} />
        <SubmitForm onSubmit={handleSubmission} />
      </div>
    </div>
  );
};

export default Chatbox;
