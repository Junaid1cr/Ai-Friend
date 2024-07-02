import { useState } from "react";
import axios from "axios";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };
  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const newMessage = {
      user: "You",
      text: input,
    };

    setMessages([...messages, newMessage]);
    setInput("");

    try {
      const response = await axios({
        url: "https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=AIzaSyAz3zvSLtfLqv-kU1EdjL6xeG_EAEJ2P2o",
        method: "post",
        data: {
          contents: [
            {
              parts: [{ text: input }],
            },
          ],
        },
      });
      console.log(response);

      const botResponseParts = response.data?.candidates?.[0]?.content?.parts;
      const botMessageText =
        botResponseParts?.map((part) => part.text).join(" ") || "No response";

      const botMessage = {
        user: "Bot",
        text: botMessageText,
      };

      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error("Error fetching response from the API:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-full bg-gray-100">
      <div className="w-full max-w-2xl p-8 bg-white rounded-lg shadow-md">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800">Junaid Irshad</h2>
          <p className="text-gray-600">Developer,Coder</p>
        </div>
        <div className="flex flex-col space-y-4 overflow-auto mb-4 h-96">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg ${
                message.user === "You"
                  ? "bg-blue-100 self-end"
                  : "bg-gray-200 self-start"
              }`}
            >
              <p>{message.text}</p>
            </div>
          ))}
        </div>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask me any question"
            className="flex-grow p-2 border rounded-lg"
          />
          <button
            onClick={handleSendMessage}
            className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
