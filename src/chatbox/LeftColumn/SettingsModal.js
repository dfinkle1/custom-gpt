import React from "react";
import "./SettingsModal.css";

const SettingsModal = ({ isOpen, handleModal }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Settings</h2>
          <button className="close-button" onClick={handleModal}>
            X
          </button>
        </div>
        <div className="modal-body">
          <form action="">
            <input type="text" placeholder="OpenAI Api Key" value />
          </form>
        </div>
        <div className="modal-footer">
          <button className="modal-button">Save</button>
          <button className="modal-button">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default SettingsModal;
