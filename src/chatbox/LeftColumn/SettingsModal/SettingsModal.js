import React, { useState, useEffect } from "react";
import "./SettingsModal.css";

const SettingsModal = ({ isOpen, handleModal }) => {
  const [inputValue, setInputValue] = useState("");
  const [apiKey, setApiKey] = useState(null);

  useEffect(() => {
    const apiKey = localStorage.getItem("apiKey");
    if (apiKey) {
      setApiKey(apiKey);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("apiKey", apiKey);
  }, [apiKey]);

  const handleSubmit = (e) => {
    setApiKey(inputValue);
  };
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
          <form action="" onSubmit={handleSubmit}>
            <label htmlFor="api-key">Open AI Api-Key</label>
            <input
              type="password"
              placeholder="OpenAI Api Key"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button className="modal-button">Save</button>
          </form>
        </div>
        <div className="modal-footer">
          <></>
        </div>
      </div>
    </div>
  );
};

export default SettingsModal;
