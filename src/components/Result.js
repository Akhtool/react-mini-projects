import React from "react";
import questions from "../utils/questions";
import hooray from '../images/confetti.png';
import ok from '../images/correct.png';
import wrong from '../images/wrong.png';


function Result({ correct }) {
    return (
      <div className="result">
        <img alt="Ура!" src={(correct === 0) ? wrong : ((correct > 0) && (correct < questions.length)) ? ok : hooray} />
        <h2>Вы отгадали {correct} ответа из {questions.length}</h2>
        <a href='/' >
        <button>Попробовать снова</button>
        </a>
      </div>
    );
  }

  export default Result;