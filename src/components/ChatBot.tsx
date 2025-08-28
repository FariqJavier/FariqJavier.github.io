import React, { useState, useEffect } from "react";
import { getChatBotResponse } from "../services/getChatBotResponse";
import { MessageCircle } from "lucide-react"; // chatbot icon

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<{ sender: string; text: string, type?: string }[]>([]);
  const [loading, setLoading] = useState(false);

  // Show greeting only on first open
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([{ sender: "bot", text: "Hi there, how can I help you ?" }]);
    }
  }, [isOpen]);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);

    setInput("");
    setLoading(true);
    try {
      const botReply = await getChatBotResponse(userMessage.text);
      setMessages((prev) => [...prev, { sender: "bot", text: botReply }]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Error fetching response.", type: "error" },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-800 transition"
      >
        <MessageCircle size={28} />
      </button>

      {/* Chatbot Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-end justify-end z-50">
          {/* Modal background overlay */}
          <div
            className="absolute inset-0 bg-black bg-opacity-30"
            onClick={() => setIsOpen(false)}
          ></div>

          {/* Chat window */}
          <div className="relative w-full max-w-md h-[500px] m-6 bg-white rounded-2xl shadow-xl flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between bg-blue-600 text-white px-4 py-3 rounded-t-2xl">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-white text-blue-600 flex items-center justify-center rounded-full font-bold">
                  AI
                </div>
                <h2 className="font-extrabold">IBM Granite Assistant</h2>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white font-bold">
                ✕
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`mb-2 ${msg.sender === "user" ? "text-right" : "text-left"}`}
                >
                  <span
                    className={`inline-block px-3 py-2 rounded-2xl ${
                        msg.type === "error"
                        ? "bg-red-100 text-red-700 font-medium border border-red-400"
                        : msg.sender === "user"
                        ? "bg-blue-500 text-white font-medium"
                        : "bg-gray-200 text-gray-600 font-medium"
                    }`}
                  >
                    {msg.text}
                  </span>
                </div>
              ))}
              {loading && <p className="text-gray-500 ml-2 italic">Thinking...</p>}
            </div>

            {/* Input */}
            <div className="flex border-t">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey && !loading) {
                    e.preventDefault();
                    sendMessage();
                  }
                }}
                rows={1}
                className="flex-grow p-2 rounded-bl-2xl ml-2 focus:outline-none resize-none"
                placeholder="Type your message..."
              />
              <button
                onClick={sendMessage}
                className="bg-blue-600 text-white px-4 rounded-br-2xl"
                disabled={loading}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;

