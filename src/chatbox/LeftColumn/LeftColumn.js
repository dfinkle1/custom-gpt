import React, { useState } from "react";
import "./LeftColumn.css";
import SettingsModal from "./SettingsModal/SettingsModal";
import LeftColumnHeader from "./LeftColumnHeader/LeftColumnHeader";
import LeftColumnChats from "./LeftColumnChats/LeftColumnChats";
import LeftColumnFooter from "./LeftColumnFooter/LeftColumnFooter";

const LeftColumn = ({ addChatRoom, chats, onChatClick, deleteChat }) => {
  const [isSettingsModalOpen, setSettingsModalOpen] = useState(false);
  const handleModal = () => {
    setSettingsModalOpen((prevValue) => !prevValue);
  };

  return (
    <>
      <span>In development</span>
      <SettingsModal isOpen={isSettingsModalOpen} handleModal={handleModal} />
      <LeftColumnHeader addChatRoom={addChatRoom} />
      <LeftColumnChats
        chats={chats}
        onChatClick={onChatClick}
        deleteChat={deleteChat}
      />
      <LeftColumnFooter handleModal={handleModal} />
    </>
  );
};

export default LeftColumn;
