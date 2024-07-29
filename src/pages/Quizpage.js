import React, { useState } from 'react';
import quizData from '../qz-components/quizData';

function Quizpage() {

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const currentQuestion = quizData[currentQuestionIndex];

  const handleAnswerClick = (score) => {
    console.log('Selected score:', score); // You can process the score here
    // Move to the next question or handle quiz completion
    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      console.log('Quiz completed');
      // Handle quiz completion logic here
    }
  };

  const handlePreviousClick = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

    return(
      <div>
        <h2> {currentQuestion.question}</h2>
        <ul>
          {currentQuestion.answers.map((answer, index) =>(
            <li key= {index} onClick={() => handleAnswerClick(answer.score)}> {answer.text}</li>
          ))}
        </ul>
        <button
          onClick= {handlePreviousClick}
          disabled= {currentQuestionIndex===0}>
            Previous
        </button>
        <button 
        onClick={() => {
          if (currentQuestionIndex < quizData.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
          } else {
            console.log('Quiz completed');
            // Handle quiz completion logic here
          }
        }}
        disabled={currentQuestionIndex === quizData.length - 1}
      >
        Next
      </button>
        
      </div>
      
  );
}

export default Quizpage;