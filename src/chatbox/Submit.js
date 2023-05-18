import React, { useState } from "react";
import "./Chat.css";

const Submit = ({ onSubmit }) => {
  const [question, setQuestion] = useState("");
  const [result, setResult] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      await onSubmit(question);
    } catch (error) {
      console.error(error);
      setResult("An error occurred during the request.");
    }
  }

  return (
    <>
      <div className="send-message">
        <form onSubmit={handleSubmit}>
          <textarea
            className="question"
            name="question"
            id="question"
            cols="30"
            rows="10"
            placeholder="Ask a question"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          ></textarea>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default Submit;
