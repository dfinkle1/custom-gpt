import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

const LeftColumnHeader = ({ addChatRoom }) => {
  return (
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
  );
};

export default LeftColumnHeader;
