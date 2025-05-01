import React, { useState } from 'react';
import '../styles/QuizPage.css';

const questions = [
  {
    question: "Quem foi o primeiro jogador a entrar na lineup original da FURIA no CS:GO?",
    options: ["A. arT", "B. KSCERATO", "C. yuurih", "D. VINI"],
    answer: "D"
  },
  {
    question: "Qual foi a melhor colocação da FURIA no ranking da HLTV até hoje?",
    options: ["A. 1º lugar", "B. 2º lugar", "C. 3º lugar", "D. 4º lugar"],
    answer: "C"
  },
  {
    question: "Qual torneio internacional a FURIA venceu em 2023?",
    options: ["A. IEM Cologne", "B. BLAST Premier Spring Showdown", "C. ESL Pro League", "D. Elisa Masters Espoo"],
    answer: "D"
  },
  {
    question: "Qual jogador da FURIA tem um dos melhores ratings médios em 2024?",
    options: ["A. KSCERATO", "B. arT", "C. yuurih", "D. skullz"],
    answer: "A"
  },
  {
    question: "Em que ano a FURIA foi fundada?",
    options: ["A. 2016", "B. 2017", "C. 2018", "D. 2019"],
    answer: "B"
  }
];

const QuizPage = () => {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const handleAnswer = (option) => {
    if (option[0] === questions[current].answer) {
      setScore(score + 1);
    }

    const next = current + 1;
    if (next < questions.length) {
      setCurrent(next);
    } else {
      setFinished(true);
    }
  };

  const handleReturn = () => {
    window.location.href = '/';  // Ou use navigate("/") se estiver usando React Router v6+
  };

  return (
    <div className="quiz-container">
      {!finished ? (
        <>
          <h3>{questions[current].question}</h3>
          <div className="options">
            {questions[current].options.map((opt, index) => (
              <button key={index} onClick={() => handleAnswer(opt)}>
                {opt}
              </button>
            ))}
          </div>
        </>
      ) : (
        <div className="result">
          <h3>Você acertou {score} de {questions.length} perguntas!</h3>
          <button onClick={handleReturn} className="return-button">
            Voltar para a Página Principal
          </button>
        </div>
      )}
    </div>
  );
};

export default QuizPage;
