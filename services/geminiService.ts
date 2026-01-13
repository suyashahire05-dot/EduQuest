
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getTutorResponse = async (question: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: question,
      config: {
        systemInstruction: `You are a world-class educational tutor on the EduQuest platform (an Unacademy clone). 
        Your goal is to explain complex concepts simply and help students with their doubts. 
        Provide structured, clear, and encouraging responses. 
        If a question is about specific exam patterns in India (UPSC, JEE, NEET), provide relevant context.`,
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm sorry, I'm having trouble connecting to my brain right now. Please try again later!";
  }
};
