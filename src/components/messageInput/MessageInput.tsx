import React, { useState } from 'react';
import './MessageInput.css';

const MessageInput = ({ onSendMessage }: { onSendMessage: (msg: string) => void }) => {
  const [input, setInput] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim()) return;

    await onSendMessage(input);
    setInput('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-2 bg-white p-4 border-t border-gray-200 shadow-sm"
    >
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Escribe un mensaje..."
        className="flex-grow px-4 py-2 border border-gray-300 rounded-full focus:ring-2 text-gray-900"
      />
      <button
        type="submit"
        className="btn btn-soft btn-accent"
      >
        Enviar
      </button>
    </form>
  );
};

export default MessageInput;
