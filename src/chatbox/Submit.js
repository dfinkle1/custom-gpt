import React, { useState } from "react";
import "./Chat.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const Submit = ({ onSubmit }) => {
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      setLoading(true);
      await onSubmit(question);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <>
      <div className="send-message">
        <form onSubmit={handleSubmit}>
          <div className="submit-wrapper">
            <textarea
              className="question"
              name="question"
              id="question"
              cols="30"
              rows="10"
              placeholder="Ask a question"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              onKeyDown={handleKeyDown}
            ></textarea>
            <button type="submit" className="send-btn">
              {loading ? (
                <span>Loading...</span>
              ) : (
                <FontAwesomeIcon
                  icon={faPaperPlane}
                  size="xl"
                  style={{ color: "#3881ff" }}
                />
              )}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Submit;
