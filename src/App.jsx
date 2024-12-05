import { useEffect, useState } from "react";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";

function App() {
  const [feedbacks, setFeedbacks] = useState(() => {
    const savedFeedbacks = localStorage.getItem("feedbacks");
    return savedFeedbacks ? JSON.parse(savedFeedbacks) : [];
  });

  useEffect(() => {
    localStorage.setItem("feedbacks", JSON.stringify(feedbacks));
  }, [feedbacks]);

  const handleFeedbackSubmit = (feedback) => {
    setFeedbacks([...feedbacks, feedback]);
  };
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <FeedbackForm onFeedbackSubmit={handleFeedbackSubmit} />
      <FeedbackList feedbacks={feedbacks} />
    </div>
  );
}

export default App;
