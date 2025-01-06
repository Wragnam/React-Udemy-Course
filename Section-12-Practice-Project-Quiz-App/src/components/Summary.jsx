import quizCompleteImage from "../assets/quiz-complete.png";
import QUESTIONS from "../questions";

export default function Summary({ userAnswers }) {
    const skippedAnswers = userAnswers.filter(answer => answer === null);
    const correctAnswers = userAnswers.filter((answer, index)=> answer === QUESTIONS[index].answers[0]);
    const skippedAnswerShare = Math.round((skippedAnswers.length/userAnswers.length)*100);
    const correctAnswerShare = Math.round((correctAnswers.length/userAnswers.length)*100);
    const wrongAnswerShare = 100 - skippedAnswerShare - correctAnswerShare;


  return (
    <div id="summary">
      <div id="summary">
        <img src={quizCompleteImage} alt="Trophy icon" />
        <h2>Quiz Complete!</h2>
        <div id="summary-stats">
          <p>
            <span className="number">{correctAnswerShare}%</span>
            <span className="text">Correct</span>
          </p>
          <p>
            <span className="number">{wrongAnswerShare}%</span>
            <span className="text">wrong</span>
          </p>
          <p>
            <span className="number">{skippedAnswerShare}%</span>
            <span className="text">skipped</span>
          </p>
        </div>
      </div>
      <ol>
        {userAnswers.map((answer, index) => {
            let cssClass = 'user-answer';
            if(answer === null){
                cssClass += ' skipped';
            }
            else if(answer === QUESTIONS[index].answers[0]){
                cssClass += ' correct';
            }
            else{
                cssClass += ' wrong';
            }
          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className="question">{QUESTIONS[index].text}</p>
              <p className={cssClass}>{answer ?? 'Skipped'}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
