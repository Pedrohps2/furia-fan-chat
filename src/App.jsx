import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ChatBotPage from './components/ChatBotPage';  // Página do ChatBot
import QuizPage from './components/QuizPage';        // Página do Quiz
import MainPage from './components/MainPage';        // Página principal

import './styles/App.css';  // Estilos globais

function App() {
  return (
    <div className="App">
      <h1>FURIA Fan Chat</h1>
      <Router>
        <Routes>
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/chat" element={<ChatBotPage />} />
          <Route path="/" element={<MainPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
