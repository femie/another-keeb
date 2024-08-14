import React, { useState } from 'react';
import quizData from '../qz-components/quizData';
import  '../styles/Quiz.css';

function Quizpage() {

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const currentQuestion = quizData[currentQuestionIndex];
  const [totalScore, setTotalScore]= useState(0);

  const handleAnswerClick = (score) => {
    console.log('Selected score:', score); 
    

    console.log('Total score:', setTotalScore);
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
    
    console.log('score undoed after going back', totalScore);

  };

    return(
    
      <div className= 'current-q'>
        <h2 className='tracking-q'>{currentQuestionIndex} / 10</h2>
        <h2 className='question-header'> {currentQuestion.question}</h2>
        <ul className='answers'>
          {currentQuestion.answers.map((answer, index) =>(
            <li key= {index} onClick={() => handleAnswerClick(answer.score)}> {answer.text}</li>
          ))}
        </ul>

        <button
          onClick= {handlePreviousClick}
          disabled= {currentQuestionIndex===0}>
            Go Back
        </button>

        <button 
        onClick={() => {
          if (currentQuestionIndex < quizData.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
          } else {
            console.log('Quiz completed');
           
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