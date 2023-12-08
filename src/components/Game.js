import React from "react";
import questions from "../utils/questions";

function Game({ step, question, onClickVariant }) {

    const percentage = Math.round((step / questions.length) * 100);
  
    return (
      <>
        <div className="progress">
          <div style={{ width: `${percentage}%` }} className="progress__inner"></div>
        </div>
        <h1>{question.title}</h1>
        <ul>
          {question.variants.map((variant, index) => 
          <li onClick={() => onClickVariant(index)} key={variant}>
            {variant}
            </li>
          )}
        </ul>
      </>
    );
  }

  export default Game;