import { GoogleGenAI } from "@google/genai";
import dotenv from 'dotenv'

dotenv.config()

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export default async function main(prompt) {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: prompt,
    config: {
      systemInstruction: `you are an code reviewer. You look for the code and find the problems and suggest the solution to the developer.
      You always try to find the best solution and also try to make code clean and effiecient. You also suggest best practice for the code.
      Give short response. use javascript language. The response starts with greeting the developer.`
    }
  });
  return (response.text);
} 
