/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import { useState } from "react";

function Profile() {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [showQuestions, setShowQuestions] = useState(false);

  const handleTopicClick = (topic) => {
    setSelectedTopic(topic);
    setShowQuestions(true);
  };

  const questions = [
    {
      topic: "Entrepreneurship",
      questions: ["Ready to become an Entrepreneure"],
    },
    {
      topic: "Finance",
      questions: ["What do you want to learn about Finance"],
    },
    {
      topic: "Economics",
      questions: ["Do you about Economics?"],
    },
  ];

  const getText = () => {
    const topicData = questions.find((topic) => topic.topic === selectedTopic);
    return topicData ? topicData.questions : [];
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-screen-lg bg-white rounded-lg shadow-md p-8">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center flex-col">
            <img
              src="https://via.placeholder.com/150"
              alt="Junaid"
              className="rounded-full w-24 h-24 self-start mb-5"
            />
            <div className="ml-4">
              <h2 className="text-xl font-bold text-gray-800">
                Coder, Developer
              </h2>
              <p className="text-gray-700">Hi, I am Junaid. How can I help?</p>
              <p className="text-gray-500">
                Hi,I am your new AI friend feel free to ask me anything and I'll
                do my best to respond in a way that's helpful, informative, and
                maybe even entertaining! So, to get started, I'll ask: What's
                the most interesting or surprising thing about yourself that
                you'd like to share with me?
              </p>
            </div>
          </div>
        </div>
        <div className="mb-4 text-center">
          <p className="text-gray-600">Hey there! Whats on your mind today?</p>
          <Link to="/chatbot" className="text-blue-500 hover:text-blue-700">
            Ask me any question
          </Link>
        </div>
        <div className="flex justify-center">
          <Link
            to="/chat"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
          >
            Ask Me Something
          </Link>
        </div>
        <div className="mb-4">
          <div className="flex flex-wrap gap-4 mt-4">
            {questions.map((topic) => (
              <button
                key={topic.topic}
                onClick={() => handleTopicClick(topic.topic)}
                className={`  hover:text-gray-800 text-gray-600 font-bold py-2 px-4 rounded-md ${
                  selectedTopic === topic.topic ? "underline" : ""
                }`}
              >
                {topic.topic}
              </button>
            ))}
          </div>
        </div>
        {showQuestions && (
          <div className="mb-4">
            <ul className="list-disc ml-6 mt-4">
              {getText().map((question, index) => (
                <li key={index}>{question}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Profile;
