import axios from 'axios';

const API_URL = 'http://localhost:3000'; // URL del backend
// const API_URL = 'https://chabot-backend-production.up.railway.app/'; // URL del backend

export interface Message {
  id_message: number;
  content: string;
  sender: string;
  created_at: string;
}

export const fetchMessages = async (): Promise<Message[]> => {
  try {
    const response = await axios.get(`${API_URL}/messages`);
    return response.data as Message[];
  } catch (error) {
    console.error('Error fetching messages:', error);
    throw error;
  }
};

export const sendMessage = async (content: string): Promise<Message[]> => {
  try {
    const response = await axios.post(`${API_URL}/messages`, { content });
    return response.data as Message[];
  } catch (error) {
    console.error('Error sending message:', error);
    throw error;
  }
};