import { useEffect, useRef } from 'react';
import MessageItem from '../messageItem/MessageItem.tsx';

interface Message {
  id_message: number;
  content: string;
  sender: string;
  created_at: string;
}

const MessageList = ({ messages }: { messages: Message[] }) => {
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="message-list max-h-[60vh] overflow-y-auto pr-2">
      {messages.map((message) => (
        <MessageItem key={message.id_message} message={message} />
      ))}
      <div ref={bottomRef} /> {}
    </div>
  );
};

export default MessageList;
