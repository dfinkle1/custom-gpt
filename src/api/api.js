const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

async function fetchChatCompletion(question) {
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
          content: `You are a fitness instructor. With
           the main goal of providing strength training 
           and avoiding workouts with high injury rates. 
           Provide 3 different workouts, include rep ranges and information on intensity`,
        },
        { role: "user", content: generatePrompt(question) },
      ],
      temperature: 0.6,
    });

    return completion.data.choices[0].message.content;
  } catch (error) {
    if (error.response) {
      throw new Error(`${error.response.status}: ${error.response.data}`);
    } else {
      throw new Error(`Error with OpenAI API request: ${error.message}`);
    }
  }
}

function generatePrompt(question) {
  const capitalized =
    question[0].toUpperCase() + question.slice(1).toLowerCase();
  return `What is a good workout for your ${capitalized} muscle? Keep this very short, please.`;
}

export default fetchChatCompletion;
