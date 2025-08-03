import React, { useState, useEffect } from "react";

function Quiz() {
  const questions = [
    {
      question: "What is JSX?",
      options: ["A CSS tool", "A JavaScript extension", "A database", "A server"],
      correct: 1
    },
    {
      question: "Which hook is used for side effects?",
      options: ["useEffect", "useState", "useRef", "useCallback"],
      correct: 0
    },
    {
      question: "What is React?",
      options: ["A library", "A database", "A server"],
      correct: 0
    },
    {
      question: "What hook is used to manage state?",
      options: ["useFetch", "useState", "useClass"],
      correct: 1
    },
    {
      question: "What does useRef do?",
      options: ["Re-render", "Persist", "Routing", "Redux"],
      correct: 1
    }
  ];

  const [timeleft, setTimer] = useState(40);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(
    localStorage.getItem("quizScore") || null
  );

  useEffect(() => {
    if (submitted || timeleft === 0) {
      if (timeleft === 0 && !submitted) {
        handleSubmit(); // Auto-submit on timeout
      }
      return;
    }

    const timer = setTimeout(() => {
      setTimer(timeleft - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeleft, submitted]);

  const handleChange = (qIndex, optionIndex) => {
    const updatedAnswers = [...answers];
    updatedAnswers[qIndex] = optionIndex;
    setAnswers(updatedAnswers);
  };

  const handleSubmit = (e) => {
    if (e) e.preventDefault();

    let count = 0;
    answers.forEach((answer, index) => {
      if (answer === questions[index].correct) {
        count++;
      }
    });
    setScore(count);
    localStorage.setItem("quizScore", count);
    setSubmitted(true);
  };

  const handleReset = () => {
    setAnswers(Array(questions.length).fill(null));
    setSubmitted(false);
    setScore(null);
    setTimer(40);
    localStorage.removeItem("quizScore");
  };

  return (
    <div style={{ minHeight: '100vh', padding: '10px', textAlign: 'center' }}>
      <h1>Welcome to the toughest part of this program!</h1>
      <h2>It's Quiz Time!!</h2>
      {!submitted ? (
        <>
          <p>Answer the following questions by clicking the correct option.</p>
          <h3>Time Left: {timeleft} seconds</h3>
          <form onSubmit={handleSubmit}>
            {questions.map((q, qIndex) => (
              <div key={qIndex} style={{ marginBottom: '20px', textAlign: 'left', padding: '10px' }}>
                <p><strong>Q{qIndex + 1}: {q.question}</strong></p>
                {q.options.map((option, optionIndex) => (
                  <label key={optionIndex} style={{ display: 'block', marginBottom: '5px' }}>
                    <input
                      type="radio"
                      name={`question-${qIndex}`}
                      value={optionIndex}
                      checked={answers[qIndex] === optionIndex}
                      onChange={() => handleChange(qIndex, optionIndex)}
                      required
                    />
                    {option}
                  </label>
                ))}
              </div>
            ))}
            <button type="submit" style={{ padding: '10px 20px', fontSize: '16px' }}>Submit</button>
          </form>
        </>
      ) : (
        <>
          <h3>You got {score}/{questions.length} correct!</h3>
          <button onClick={handleReset} style={{ padding: '10px 20px', fontSize: '16px' }}>Retake Quiz</button>
        </>
      )}
    </div>
  );
}

export default Quiz;
