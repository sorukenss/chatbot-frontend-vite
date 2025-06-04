import  { useEffect, useState } from 'react';
import MessageList from '../messagelist/MessageList.tsx';
import MessageInput from '../messageInput/MessageInput.tsx';
import { fetchMessages, sendMessage } from '../../services/api.tsx';
import './Chat.css';

interface Message {
  id_message: number;
  content: string;
  sender: string;
  created_at: string;
}

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const loadMessages = async () => {
      const data = await fetchMessages();
      setMessages(data);
    };
    loadMessages();
  }, []);

  const handleSendMessage = async (content: string) => {
    try {
      await sendMessage(content);
      const updatedMessages = await fetchMessages(); // vuelve a cargar mensajes
      setMessages(updatedMessages);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div className="chat-container">
      <h1 className='mb-5 text-4xl font-bold text-accent'>Chat With Pocki</h1>
      <hr />
      <div className="chat-body mt-6">
        <MessageList messages={messages} />
      </div>
      <MessageInput onSendMessage={handleSendMessage} />
    </div>
  );
};

export default Chat;
