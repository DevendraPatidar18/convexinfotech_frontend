import axios from 'axios';
import dotenv from 'dotenv';
const API_KEY = 'your-groq-api-key'; // Replace with your Groq chatbot endpoint
const API_URL = import.meta.env.REACT_APP_GROQ_API_URL || API_KEY;
export const fetchChatResponse = async (message) => {
  try {
    const response = await axios.post(
      API_URL,
      { prompt: message },
      {
        headers: {
          'Authorization': `Bearer ${import.meta.env.REACT_APP_GROQ_API_KEY  || API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );
    // Adjust based on the structure of the Groq response
    return response.data.text || 'No response';
  } catch (error) {
    console.error('Error fetching AI response:', error);
    return 'Error: Unable to get response';
  }
};
