import { useState } from 'react';
import '../index.scss';
import questions from '../utils/questions';
import Result from './Result';
import Game from './Game';

function App() {
  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);
  const question = questions[step];

  function onClickVariant(index) {
    console.log(step, index);
    setStep(step + 1);
    if (index === question.correct) {
      setCorrect(correct + 1);
    }
  }
  return (
    <div className="App">
      {
        step !== questions.length 
        ? <Game step={step} question={question} onClickVariant={onClickVariant}/> 
        : <Result correct={correct}/>
      }
    </div>
  );
}

export default App;
