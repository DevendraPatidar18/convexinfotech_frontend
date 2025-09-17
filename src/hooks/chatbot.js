import { useState } from 'react';
import { fetchChatResponse } from '../api/chatbotApi';

export const useGroqChat = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async (text) => {
    if (!text.trim()) return;

    // Add user message
    const userMessage = { text, sender: 'user' };
    setMessages((prev) => [...prev, userMessage]);
    setLoading(true);

    // Fetch bot response
    const botText = await fetchChatResponse(text);
    const botMessage = { text: botText, sender: 'bot' };
    setMessages((prev) => [...prev, botMessage]);

    setLoading(false);
  };

  return { messages, sendMessage, loading };
};