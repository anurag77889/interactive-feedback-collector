import { useState } from "react";
import PropTypes from "prop-types";

function FeedbackForm({ onFeedbackSubmit }) {
  const [rating, setRating] = useState(null);
  const [comment, setComment] = useState("");

  const handleRatingClick = (num) => {
    setRating(num);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!rating) {
      alert("Please select a rating!");
      return;
    }
    // Pass feedback to parent
    onFeedbackSubmit({ rating, comment });
    // Reset Form
    setRating(null);
    setComment("");
  };

  return (
    <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">
        Give Us Your Feedback
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="flex space-x-2 mb-4">
          {/* Rating Buttons */}
          {[1, 2, 3, 4, 5].map((num) => (
            <button
              key={num}
              type="button"
              className={`${
                rating === num
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-800"
              } font-medium py-2 px-4 rounded transition`}
              onClick={() => handleRatingClick(num)}
            >
              {num} ⭐
            </button>
          ))}
        </div>
        <textarea
          placeholder="Leave a comment (optional)"
          onChange={(e) => setComment(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-black"
        ></textarea>
        <button
          type="submit"
          value={comment}
          className="bg-blue-500 text-white font-bold py-2 px-6 rounded-lg w-full hover:bg-blue-600 transition"
        >
          Submit Feedback
        </button>
      </form>
    </div>
  );
}

FeedbackForm.propTypes = {
  onFeedbackSubmit: PropTypes.func.isRequired, // onFeedbackSubmit is a required function
};

export default FeedbackForm;
