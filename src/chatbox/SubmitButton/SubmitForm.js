import React, { useState } from "react";
import "./SubmitForm.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";

const Submit = ({ onSubmit }) => {
  const [question, setQuestion] = useState("");
  const [topic, setPrompt] = useState("");
  // If sending a message remove the send button and show loading.
  const [loading, setLoading] = useState(false);

  // Take form data value and pass it into onSubmit, which is a passed down
  //function from Chatbox.
  async function handleSubmit(event) {
    event.preventDefault();
    try {
      setLoading(true);
      await onSubmit(topic, question);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
      setQuestion("");
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
            <select
              className="custom-select"
              onChange={(e) => (
                setPrompt(e.target.value), console.log(e.target.value)
              )}
            >
              <option
                className="option"
                value={`You are ChatGPT, a large language model trained by OpenAI. Answer as concisely as possible. Knowledge cutoff: {knowledge_cutoff} Current date: {current_date}`}
              >
                Ask Anything!
              </option>
              <option value="You are a fitness trainer. Your main goal is providing strength training and avoiding workouts with high injury rates. Provide 3 different workouts, include rep ranges and information on intensity">
                Workout Assistance: Type out a muscle
                (back,biceps,chest,arms,legs,quads,etc...)
              </option>
              <option value="I want you to tell me a joke about pokemon">
                Get a Pokemon joke!
              </option>
              <option value="I want you to act as a personal chef and suggest a healthy meal plan for the week. The user will either give you a calorie goal, or their body specifics">
                Get a meal plan for the week! (Provide Calorie Range. Or submit
                Weight,height,gender, goal(gain weight or lose weight) )
              </option>
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
