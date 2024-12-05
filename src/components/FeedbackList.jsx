import PropTypes from "prop-types";

function FeedbackList({ feedbacks }) {
  return (
    <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-6 mt-6">
      <h2 className="text-2xl font-bold  mb-4 text-gray-800">
        Feedback Received
      </h2>
      {feedbacks.length === 0 ? (
        <p className="text-gray-600 italic">No feedback yet.</p>
      ) : (
        <ul className="space-y-4">
          {feedbacks.map((feedback, index) => (
            <li
              key={index}
              className="p-4 border border-gray-200 rounded-lg shadow-sm"
            >
              <p className="font-bold text-gray-800">
                Rating: {feedback.rating} ⭐
              </p>
              <p className="text-gray-600">
                {feedback.comment || "No comment provided."}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

FeedbackList.propTypes = {
  feedbacks: PropTypes.arrayOf(
    PropTypes.shape({
      rating: PropTypes.number.isRequired, // rating is a required number
      comment: PropTypes.string, // comment is an optional string
    })
  ).isRequired,
};

export default FeedbackList;
