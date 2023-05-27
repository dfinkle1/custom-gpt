import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { regular, solid } from "@fortawesome/fontawesome-svg-core/import.macro";

const LeftColumnChats = ({ chats, onChatClick, deleteChat }) => {
  const [confirmDelete, setConfirmDelete] = useState(false);

  const handleConfirmDelete = () => {
    setConfirmDelete((prevValue) => !prevValue);
  };

  return (
    <>
      {chats.map((chat) => (
        <div
          className="chat-room"
          key={chat.id}
          onClick={() => onChatClick(chat.id)}
        >
          Chat ID: {chat.title}
          <div>
            {confirmDelete && (
              <>
                <button className="chat-delete">
                  <FontAwesomeIcon
                    style={{ padding: "100%" }}
                    onClick={() => {
                      deleteChat(chat.id);
                      handleConfirmDelete();
                    }}
                    icon={solid("check")}
                  />
                </button>
                <button className="chat-cancel">
                  <FontAwesomeIcon
                    style={{ padding: "100%" }}
                    onClick={() => handleConfirmDelete()}
                    icon={solid("xmark")}
                  />
                </button>
              </>
            )}
            {!confirmDelete && (
              <button className="chat-trash">
                <FontAwesomeIcon
                  style={{ padding: "100%" }}
                  onClick={() => handleConfirmDelete()}
                  icon={regular("trash-can")}
                />
              </button>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default LeftColumnChats;
