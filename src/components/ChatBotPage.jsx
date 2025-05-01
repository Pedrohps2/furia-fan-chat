import React from 'react';
import { useNavigate } from 'react-router-dom';  // Importando o hook useNavigate
import ChatBot from './ChatBot';  // Importando o ChatBot
import '../styles/ChatBotPage.css';      // Estilos específicos da página do ChatBot

function ChatBotPage() {
  const navigate = useNavigate();  // Iniciando o hook useNavigate

  const handleBackClick = () => {
    navigate(-1);  // Volta para a página anterior
  };

  return (
    <div className="chatbot-page">
      <button onClick={handleBackClick} className="back-button">
        Voltar
      </button>
      <ChatBot />
    </div>
  );
}

export default ChatBotPage;
