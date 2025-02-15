import { GoogleGenerativeAI } from "@google/generative-ai"; // Use import instead of require

const apiKey = "AIzaSyDTZPovDjneRWtaaoXaUw6jukgEvL1P7YQ";
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

async function run(prompt) {
  const chatSession = model.startChat({
    generationConfig,
    history: [],
  });
  const result = await chatSession.sendMessage(prompt);
  const response=result.response.text();
  return response;
}
export default run;