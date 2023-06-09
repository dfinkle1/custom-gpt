import React, { useEffect, useState } from "react";
import RightColumn from "./RightColumn/RightColumn";
import LeftColumn from "./LeftColumn/LeftColumn";
import SubmitForm from "./PromptColumn/SubmitForm";
import fetchChatCompletion from "../api/api";
import { v4 as uuidv4 } from "uuid";
import "./Chatbox.css";

const Chatbox = () => {
  const tempChat = {
    id: uuidv4(),
    title: "new chat",
    questions: [],
    answers: [],
  };
  // parses localStorage, and sets all chatRooms into an array
  const [chatRooms, setChatRooms] = useState([]);
  // on click method is used to set the current chat being used. User clicks a chat
  // , and thats the main chat on screen.
  const [currentChat, setCurrentChat] = useState(null);

  //gather chatroom information on mount from local storage
  useEffect(() => {
    const current = localStorage.getItem("currentChat");
    if (current) {
      setCurrentChat(JSON.parse(current));
    } else {
      setCurrentChat(tempChat);
      setChatRooms([tempChat]);
    }
    const storedChatRooms = localStorage.getItem("chatRooms");
    if (storedChatRooms) {
      setChatRooms(JSON.parse(storedChatRooms));
    }
  }, []);

  //adds a new chatRoom to localStorage if the state changes on chatRooms
  useEffect(() => {
    localStorage.setItem("chatRooms", JSON.stringify(chatRooms));
  }, [chatRooms]);

  //
  useEffect(() => {
    localStorage.setItem("currentChat", JSON.stringify(currentChat));
  }, [currentChat]);

  // handleCurrent  onClick method to set the currentChatRoom
  const handleCurrent = (current) => {
    console.log(current);
    const selectedChat = chatRooms.find((chat) => chat.id === current);
    const { questions, answers, title } = selectedChat;
    setCurrentChat({
      id: current,
      title: title,
      questions: [...questions],
      answers: [...answers],
    });
  };

  // Requests data from SubmitButton form, and pass it into api request.
  // take the response and set the question and the fetched answer to localStorage
  //we then pass the answers/questions into right column to display info
  const handleSubmission = async (topic, question) => {
    try {
      const response = await fetchChatCompletion(topic, question);
      setCurrentChat((prevChat) => ({
        ...prevChat,
        title: prevChat.title,
        questions: [...prevChat.questions, question],
        answers: [...prevChat.answers, response],
      }));
      // updates all chatrooms with the new information of the one we just asked a question to
      setChatRooms((prevChatRooms) => {
        const updatedChatRooms = [...prevChatRooms];
        const chatRoomIndex = chatRooms.findIndex(
          (chat) => chat.id === currentChat.id
        );
        if (chatRoomIndex !== -1) {
          const updatedChatRoom = {
            ...updatedChatRooms[chatRoomIndex],
            questions: [...updatedChatRooms[chatRoomIndex].questions, question],
            answers: [...updatedChatRooms[chatRoomIndex].answers, response],
          };
          updatedChatRooms[chatRoomIndex] = updatedChatRoom;
        }

        return updatedChatRooms;
      });
    } catch (error) {
      console.error(error);
    }
  };
  // A button to add a new chat room.
  const addChatRoom = () => {
    const newChat = {
      id: uuidv4(),
      title: "new chat",
      questions: [],
      answers: [],
    };
    const updatedChatRooms = [...chatRooms, newChat];
    setChatRooms(updatedChatRooms);
    localStorage.setItem("chatRooms", JSON.stringify(updatedChatRooms));
  };

  const deleteChat = (chatId) => {
    console.log(chatId);
    const newChatRooms = chatRooms.filter((chat) => chat.id !== chatId);
    setChatRooms(newChatRooms);
  };

  return (
    <div className="Chatbox-container">
      <div className="column-left">
        <LeftColumn
          addChatRoom={addChatRoom}
          chats={chatRooms}
          onChatClick={handleCurrent}
          currentChat={currentChat}
          deleteChat={deleteChat}
        />
      </div>
      <div className="column-right">
        <RightColumn currentChat={currentChat} />
        <SubmitForm onSubmit={handleSubmission} />
      </div>
    </div>
  );
};

export default Chatbox;
