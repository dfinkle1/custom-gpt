import React, { useState } from "react";
import "./LeftColumn.css";

const LeftColumn = ({ addChatRoom, chats, onChatClick, currentChat }) => {
  return (
    <>
      <div className="left-header">
        <h1>Messages</h1>
      </div>
      <button onClick={addChatRoom}>Add Room</button>

      <ul>
        {chats.map((chat) => (
          <li
            className="chat-room"
            key={chat.id}
            onClick={() => onChatClick(chat.id)}
          >
            Chat ID: {chat.id}
          </li>
        ))}
      </ul>
      {/* <div>{currentChat && <p>{currentChat.answers.length}</p>}</div> */}
    </>
  );
};

export default LeftColumn;
