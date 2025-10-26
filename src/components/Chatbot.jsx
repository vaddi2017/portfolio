import React, { useState } from "react";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import { createChatBotMessage } from "react-chatbot-kit";
import { MessageCircle, X } from "lucide-react";

const config = {
  botName: "PavanBot",
  initialMessages: [
    createChatBotMessage("Hi there! 👋 I'm PavanBot — your AI assistant."),
    createChatBotMessage("Ask me about my projects, skills, or experience."),
  ],
  customStyles: {
    botMessageBox: { backgroundColor: "#3b82f6" },
    chatButton: { backgroundColor: "#3b82f6" },
  },
};

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    const text = message.toLowerCase();
    if (text.includes("project")) actions.handleProjects();
    else if (text.includes("skills")) actions.handleSkills();
    else actions.handleDefault();
  };
  return React.cloneElement(children, { parse, actions });
};

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handleProjects = () => {
    const msg = createChatBotMessage(
      "Here are some of my featured projects: 🧠 AI Chatbot, 🏥 O2 Healthcare App, 🛒 Walmart Microservices."
    );
    setState((prev) => ({ ...prev, messages: [...prev.messages, msg] }));
  };

  const handleSkills = () => {
    const msg = createChatBotMessage(
      "My top skills: React, Python, AI/ML, Java, Spring Boot, and Cloud Architecture ☁️"
    );
    setState((prev) => ({ ...prev, messages: [...prev.messages, msg] }));
  };

  const handleDefault = () => {
    const msg = createChatBotMessage(
      "Try asking about my 'projects' or 'skills'! 😄"
    );
    setState((prev) => ({ ...prev, messages: [...prev.messages, msg] }));
  };

  return (
    <div>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, {
          actions: { handleProjects, handleSkills, handleDefault },
        })
      )}
    </div>
  );
};

export default function PavanChatbot() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition"
        >
          <MessageCircle size={26} />
        </button>
      )}

      {/* Chatbot popup */}
      {open && (
        <div className="relative bg-gray-900 text-white p-3 rounded-2xl shadow-2xl w-[350px] border border-gray-700">
          {/* Close button */}
          <button
            onClick={() => setOpen(false)}
            className="absolute top-2 right-2 text-gray-400 hover:text-white"
          >
            <X size={18} />
          </button>

          {/* Chatbot box */}
          <Chatbot
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
          />

          {/* Style fixes for visibility */}
          <style>
            {`
              .react-chatbot-kit-chat-container {
                background-color: #111827 !important;
                color: #ffffff !important;
                border-radius: 12px;
              }
              .react-chatbot-kit-chat-input {
                color: #000000 !important;
                background-color: #ffffff !important;
              }
              .react-chatbot-kit-chat-input-form {
                background: #ffffff !important;
                border-radius: 8px;
              }
              .react-chatbot-kit-chat-bot-message {
                background-color: #2563eb !important;
                color: white !important;
              }
            `}
          </style>
        </div>
      )}
    </div>
  );
}
