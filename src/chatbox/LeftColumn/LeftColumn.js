import React, { useState } from "react";
import "./LeftColumn.css";
import SettingsModal from "./SettingsModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon, solid } from "@fortawesome/fontawesome-svg-core/import.macro";

const LeftColumn = ({ addChatRoom, chats, onChatClick }) => {
  const [isSettingsModalOpen, setSettingsModalOpen] = useState(false);

  const handleModal = () => {
    setSettingsModalOpen((prevValue) => !prevValue);
  };

  return (
    <>
      <SettingsModal isOpen={isSettingsModalOpen} handleModal={handleModal} />

      <div className="left-header-container">
        <div className="left-header">CustomGPT</div>
        <div className="add-chat" onClick={addChatRoom}>
          <FontAwesomeIcon
            icon={solid("plus")}
            style={{
              color: "#3881ff",
              border: "1px solid",
              borderRadius: "20px",
              padding: "5px",
            }}
          />
        </div>
      </div>

      {chats.map((chat) => (
        <li
          className={`chat-room`}
          key={chat.id}
          onClick={() => onChatClick(chat.id)}
        >
          Chat ID: {chat.title}
        </li>
      ))}

      <div className="left-column-footer">
        <a href="https://github.com/dfinkle1/custom-gpt" target="_blank">
          <FontAwesomeIcon
            icon={icon({ name: "github", style: "brands" })}
            size="xl"
          />
        </a>

        <div className="settings">
          <button className="settings-btn" onClick={handleModal}>
            <FontAwesomeIcon icon={icon({ name: "gear" })} size="xl" />
          </button>
        </div>
      </div>
    </>
  );
};

export default LeftColumn;
