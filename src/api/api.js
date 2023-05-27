const { Configuration, OpenAIApi } = require("openai");
const apiKey = localStorage.getItem("apiKey");
const configuration = new Configuration({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY || apiKey,
});
const openai = new OpenAIApi(configuration);

async function fetchChatCompletion(topic, question) {
  if (!configuration.apiKey) {
    throw new Error("OpenAI API key not configured.");
  }

  if (question.trim().length === 0) {
    throw new Error("Please enter a valid prompt.");
  }

  try {
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: generateContent(topic),
        },
        { role: "user", content: generatePrompt(question) },
      ],
      temperature: 0.6,
    });
    console.log(completion);
    return completion.data.choices[0].message.content;
  } catch (error) {
    if (error.response) {
      throw new Error(`${error.response.status}: ${error.response.data}`);
    } else {
      throw new Error(`Error with OpenAI API request: ${error.message}`);
    }
  }
}

function generateContent(topic) {
  return `${topic}`;
}

function generatePrompt(question) {
  const capitalized =
    question[0].toUpperCase() + question.slice(1).toLowerCase();
  return `${capitalized}`;
}

export default fetchChatCompletion;
