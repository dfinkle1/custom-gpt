import React, { useState } from "react";
import "./SubmitForm.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";

const Submit = ({ onSubmit }) => {
  const [question, setQuestion] = useState("");
  // If sending a message remove the send button and show loading.
  const [loading, setLoading] = useState(false);

  // Take form data value and pass it into onSubmit, which is a passed down
  //function from Chatbox.
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

  //Allow the user to press enter to submit, alternatively they can also click send.
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <>
      <div className="submit-form">
        <form className="form-content" onSubmit={handleSubmit}>
          <div className="submit-wrapper">
            <select>
              <option value="Default">Default AI Chat</option>
              <option value="workout">Pick a muscle to workout</option>
              <option value="poem">Choose a poem topic</option>
              <option value="randomJoke">Tell me a random joke</option>
            </select>
            <textarea
              className="text-box"
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
                  icon={icon({ name: "paper-Plane" })}
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
