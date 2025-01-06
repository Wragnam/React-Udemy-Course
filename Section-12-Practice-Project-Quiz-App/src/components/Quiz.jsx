import { useState } from "react";
import QUESTIONS from "../questions";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestion= QUESTIONS[userAnswers.length];

  function handleSelectAnswer(selectedAnswer){
    setUserAnswers(prevAnswers=>[...prevAnswers, selectedAnswer]);
  }

  return (
    <div id="quiz">
    <div id="question">
      <h2>{activeQuestion.text}</h2>
      <ul id="answers">
        {activeQuestion.answers.map(answer => <li key={answer} className="answer">
          <button onClick={() => handleSelectAnswer(answer)}>{answer}</button>
        </li>)}
      </ul>
    </div>
    </div>
  );
}
