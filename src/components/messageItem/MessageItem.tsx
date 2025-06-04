import './MessageItem.css';

interface Message {
  id_message: number;
  content: string;
  sender: string;
  created_at: string;
}

const MessageItem = ({ message }: { message: Message }) => {
  const isUser = message.sender === 'user';
  return (
    <div className={`message ${isUser ? 'user' : 'bot'}`}>
      {isUser ? (
        <span className="avatar">👤</span>
      ) : (
        <span className="avatar">🤖</span>
      )}
      <div className="content">
        <p>{message.content}</p>
        <span className="timestamp text-primary font-bold">{new Date(message.created_at).toLocaleString()}</span>
      </div>
    </div>
  );
};

export default MessageItem;