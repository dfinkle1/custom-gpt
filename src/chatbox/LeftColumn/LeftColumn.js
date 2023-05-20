import React from "react";
import "./LeftColumn.css";

const LeftColumn = ({ addChatRoom }) => {
  return (
    <>
      <div className="left-header">
        <h1>Messages</h1>
      </div>
      <button onClick={addChatRoom}>Add Room</button>
    </>
  );
};

export default LeftColumn;
