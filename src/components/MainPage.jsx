// src/components/MainPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import News from './News';
import Statistics from './Statistics';
import Schedule from './Schedule';
import '../styles/MainPage.css';

function MainPage() {
  const navigate = useNavigate();

  return (
    <div className="main-container">
      <div className="sections">
        <div className="card">
          <h2>Notícias</h2>
          <News />
        </div>
        <div className="card">
          <h2>Calendário</h2>
          <Schedule />
        </div>
        <div className="card">
          <h2>Estatísticas</h2>
          <Statistics />
        </div>
      </div>

      <div className="actions">
        <button onClick={() => navigate('/quiz')}>Jogar Quiz</button>
        <button onClick={() => navigate('/chat')}>Chat Bot</button>
      </div>
    </div>
  );
}

export default MainPage;
