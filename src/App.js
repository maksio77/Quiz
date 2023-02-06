import React from 'react';

import './index.css';

const questions = [
  {
    title: 'React - це ... ?',
    variants: ['бібліотека', 'фреймворк', 'додаток'],
    correct: 0,
  },
  {
    title: 'Компонент - це ... ',
    variants: ['додаток', 'частина додатка або сторінки', 'сайт'],
    correct: 1,
  },
  {
    title: 'Що таке JSX?',
    variants: ['Це простий HTML', 'Це функція', 'Це HTML, але з можливістю виконувати JS-код'],
    correct: 2,
  },
];

function Result({correct, restart}) {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>Ви відповіли {correct} з {questions.length}</h2>
      <button onClick={restart}>Спробувати ще раз</button>
    </div>
  );
}

const Game = ({ question, onClickVariant, step }) => {
  const percentage = Math.round(step / questions.length * 100);

  return (
    <>
      <div className="progress">
        <div style={{ width: `${percentage}%` }} className="progress__inner"></div>
      </div>
      <h1>{question.title }</h1>
      <ul>
        {question.variants.map((text, index) => {
          return <li onClick={()=>onClickVariant(index)} key={text}>{text}</li>
        })}
      </ul>
    </>
  );
}

function App() {
  const [step, setStep] = React.useState(0);
  const [correct, setCorrect] = React.useState(0);
  const question = questions[step];

  const onClickVariant = (index) => {
    setStep(step + 1);

    if (index === questions[step].correct) {
      setCorrect(correct + 1);
    }
  }

  const restart = () => {
    setStep(step - questions.length);
    setCorrect(0);
  }

  return (
    <div className="App">
      {
        step !== questions.length ? (<Game step={step} question={question} onClickVariant={onClickVariant} />
        ) : (
            <Result restart={restart} correct={correct} />
        )
      }
    </div>
  );
}

export default App;