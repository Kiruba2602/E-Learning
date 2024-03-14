//quizcomponent.js
import React, { useState } from 'react';
import { Container, Form, Button, FormControl, FormLabel } from 'react-bootstrap';

function QuizComponent({ quiz }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  const handleOptionChange = (changeEvent) => {
    setSelectedOption(changeEvent.target.value);
  };

  const handleSubmit = () => {
    if (selectedOption === quiz.questions[currentQuestion].correct) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  const handleResetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedOption(null);
    setShowResults(false);
    setScore(0);
  };

  if (showResults) {
    return (
      <div className="quiz-results">
        <h2>Quiz Results</h2>
        <p>You scored {score} out of {quiz.questions.length}.</p>
        <button onClick={handleResetQuiz}>Restart Quiz</button>
      </div>
    );
  }

  if (currentQuestion === quiz.questions.length) {
    return (
      <div className="quiz-results">
        <h2>Quiz Results</h2>
        <p>You scored {score} out of {quiz.questions.length}.</p>
        <button onClick={handleResetQuiz}>Restart Quiz</button>
      </div>
    );
  }

  return (
    <Container className="mt-5">
      <h3>{quiz.questions[currentQuestion].text}</h3>
      <Form>
      {quiz.questions[currentQuestion].options.map(option => (
        <div key={option}>
          <FormControl
            type="radio"
            value={option}
            checked={selectedOption === option}
            onChange={handleOptionChange}
          />
          <FormLabel>{option}</FormLabel>
        </div>
      ))}
      <Button variant='primary' onClick={handleSubmit}>Submit</Button>
      </Form>
    </Container>
  );
}

export default QuizComponent;