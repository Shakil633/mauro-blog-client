import { useState, useEffect } from "react";

import Swal from "sweetalert2";
import toast from "react-hot-toast";

const WinTicket = () => {
  const questions = [
    {
      id: "q1",
      text: "Question 1: What is the capital of France?",
      options: ["Berlin", "London", "Paris", "Madrid"],
    },
    {
      id: "q2",
      text: "Question 2: How many continents are there?",
      options: ["5", "6", "7", "8"],
    },
    {
      id: "q3",
      text: "Question 3: What is the largest mammal?",
      options: ["Elephant", "Blue Whale", "Giraffe", "Lion"],
    },
    {
      id: "q4",
      text: "Question 4: What is the currency of Japan?",
      options: ["Dollar", "Euro", "Yen", "Pound"],
    },
  ];

  const correctAnswers = {
    q1: "Paris",
    q2: "7",
    q3: "Blue Whale",
    q4: "Yen",
  };

  const [answers, setAnswers] = useState({
    q1: "",
    q2: "",
    q3: "",
    q4: "",
  });

  const [isWinner, setIsWinner] = useState(false);

  // Countdown timer state
  const [countdown, setCountdown] = useState(600); // 10 minutes in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(timer);
  }, []);

  const handleAnswerChange = (question, answer) => {
    setAnswers((prevAnswers) => ({ ...prevAnswers, [question]: answer }));
  };

  const handleSubmit = () => {
    // Check if all questions are answered
    const isAllAnswered = Object.values(answers).every(
      (answer) => answer !== ""
    );

    if (!isAllAnswered) {
      Swal.fire({
        title: "Please answer all questions before submitting.",
        icon: "success",
      });
      return;
    }

    // Check if all questions are answered correctly
    const isAllCorrect = Object.entries(answers).every(
      ([question, answer]) =>
        answer.toLowerCase() === correctAnswers[question].toLowerCase()
    );

    // If all answers are correct, set the user as a winner
    setIsWinner(isAllCorrect);

    // Show an alert based on correctness
    if (isAllCorrect) {
      Swal.fire({
        title: "🎉 Congratulations! You've won a free tour ticket! 🎉",
        icon: "success",
      });
    } else {
      toast.error(
        "Sorry, some of your answers are incorrect. Please try again."
      );
    }
  };

  return (
    <>
  
      <div className="w-[500px] mx-auto win-ticket-container">
        <h2 className="text-2xl font-bold mb-4">
          🌟 Quiz for a Free Tour Ticket 🌟
        </h2>
        <p>This is for testing; we don't provide any ticket</p>
        {questions.map((question) => (
          <div key={question.id} className="mb-4">
            <p className="font-semibold">{question.text}</p>
            {question.options.map((option) => (
              <label key={option} className="block">
                <input
                  type="radio"
                  name={question.id}
                  value={option}
                  checked={answers[question.id] === option}
                  onChange={() => handleAnswerChange(question.id, option)}
                  className="mr-2"
                />
                {option}
              </label>
            ))}
          </div>
        ))}
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleSubmit}
        >
          Submit Answers
        </button>
        {isWinner && (
          <p className="text-green-600 font-bold mt-4">
            🎉 Congratulations! You've won a free tour ticket! 🎉
          </p>
        )}

        <div className="mt-4">
          <p>
            Offer ends in: {Math.floor(countdown / 60)}:{countdown % 60}
          </p>
        </div>
      </div>
    </>
  );
};

export default WinTicket;
