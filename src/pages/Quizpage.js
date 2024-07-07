import React from 'react';
import Quiz from '../questionBank';

function displayQuestion() {
  const quizElement = document.getElementById('Quiz');
  const question = question[currentQuestion];
  if(question) {
    let html = '<p>${question.question}</p>';
  }

}
function Quizpage() {
  return(

    <h>This da Quiz</h>



  );
}

export default Quizpage;